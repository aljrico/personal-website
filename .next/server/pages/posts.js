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
exports.id = "pages/posts";
exports.ids = ["pages/posts"];
exports.modules = {

/***/ "./content lazy recursive ^\\.\\/.*$":
/*!*************************************************!*\
  !*** ./content/ lazy ^\.\/.*$ namespace object ***!
  \*************************************************/
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
webpackAsyncContext.id = "./content lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./pages/posts.tsx":
/*!*************************!*\
  !*** ./pages/posts.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _posts_parsePosts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts/parsePosts */ \"./pages/posts/parsePosts.tsx\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/alejandrojimenezrico/Code/personal-website/pages/posts.tsx\";\n\n\n\n\n\n\n\nconst Posts = props => {\n  const renderExcerpts = () => {\n    const content = props.data;\n    const fileNames = props.fileNames;\n    const post = content.map((c, i) => {\n      const postPath = fileNames[i];\n      const postUrl = '/posts/' + postPath;\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"a\", {\n        href: postUrl,\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().excerptCard),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h3\", {\n          children: c.data.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n          children: c.data.excerpt\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, undefined);\n    });\n    return post;\n  };\n\n  const postCards = renderExcerpts();\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"main\", {\n      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h2\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n        children: \"Posts\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().description),\n        children: \"Read about what I'm working on, my ideas and projects. You may also find some code.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().grid),\n        children: postCards\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, undefined);\n};\n\nPosts.getInitialProps = async () => {\n  const getPostFiles = () => {\n    const files = fs__WEBPACK_IMPORTED_MODULE_2___default().readdirSync(path__WEBPACK_IMPORTED_MODULE_3___default().join('content'));\n    return files;\n  };\n\n  const importPosts = async postNames => {\n    const postContents = await Promise.all(postNames.map(postName => {\n      const content = __webpack_require__(\"./content lazy recursive ^\\\\.\\\\/.*$\")(\"./\" + postName);\n      return content;\n    }));\n    return postContents;\n  };\n\n  const processPosts = postContents => {\n    const data = postContents.map(content => {\n      const data = (0,_posts_parsePosts__WEBPACK_IMPORTED_MODULE_1__.default)(content.default);\n      return data;\n    });\n    return data;\n  };\n\n  const postNames = getPostFiles();\n  const postContents = await importPosts(postNames);\n  const data = processPosts(postContents); // Pass data to our component props\n\n  return {\n    data: data,\n    fileNames: postNames\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Posts);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBRXZCLElBQUFBLElBQUksRUFBRUEsSUFBUjtBQUFjQyxJQUFBQSxTQUFTLEVBQUVxQjtBQUF6QixHQUFQO0FBQ0QsQ0E3QkQ7O0FBK0JBLGlFQUFlMUIsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9wYWdlcy9wb3N0cy50c3g/ODU1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHBhcnNlUG9zdHMgZnJvbSAnLi9wb3N0cy9wYXJzZVBvc3RzJztcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuY29uc3QgUG9zdHM6IE5leHRQYWdlID0gKHByb3BzOiBhbnkpID0+IHtcbiAgY29uc3QgcmVuZGVyRXhjZXJwdHMgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IHByb3BzLmRhdGE7XG4gICAgY29uc3QgZmlsZU5hbWVzID0gcHJvcHMuZmlsZU5hbWVzO1xuICAgIGNvbnN0IHBvc3QgPSBjb250ZW50Lm1hcCgoYzogYW55LCBpOiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IHBvc3RQYXRoID0gZmlsZU5hbWVzW2ldO1xuICAgICAgY29uc3QgcG9zdFVybCA9ICcvcG9zdHMvJyArIHBvc3RQYXRoO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGEgaHJlZj17cG9zdFVybH0gY2xhc3NOYW1lPXtzdHlsZXMuZXhjZXJwdENhcmR9PlxuICAgICAgICAgIDxoMz57Yy5kYXRhLnRpdGxlfTwvaDM+XG4gICAgICAgICAgPHA+e2MuZGF0YS5leGNlcnB0fTwvcD5cbiAgICAgICAgPC9hPlxuICAgICAgKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcG9zdDtcbiAgfTtcbiAgY29uc3QgcG9zdENhcmRzID0gcmVuZGVyRXhjZXJwdHMoKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5Qb3N0czwvaDI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICBSZWFkIGFib3V0IHdoYXQgSSdtIHdvcmtpbmcgb24sIG15IGlkZWFzIGFuZCBwcm9qZWN0cy4gWW91IG1heSBhbHNvXG4gICAgICAgICAgZmluZCBzb21lIGNvZGUuXG4gICAgICAgIDwvcD5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9Pntwb3N0Q2FyZHN9PC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Qb3N0cy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGdldFBvc3RGaWxlcyA9ICgpID0+IHtcbiAgICBjb25zdCBmaWxlcyA9IGZzLnJlYWRkaXJTeW5jKHBhdGguam9pbignY29udGVudCcpKTtcbiAgICByZXR1cm4gZmlsZXM7XG4gIH07XG4gIGNvbnN0IGltcG9ydFBvc3RzID0gYXN5bmMgKHBvc3ROYW1lczogYW55KSA9PiB7XG4gICAgY29uc3QgcG9zdENvbnRlbnRzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICBwb3N0TmFtZXMubWFwKChwb3N0TmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBpbXBvcnQoJy4uL2NvbnRlbnQvJyArIHBvc3ROYW1lKTtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9KVxuICAgICk7XG4gICAgcmV0dXJuIHBvc3RDb250ZW50cztcbiAgfTtcblxuICBjb25zdCBwcm9jZXNzUG9zdHMgPSAocG9zdENvbnRlbnRzOiBhbnkpID0+IHtcbiAgICBjb25zdCBkYXRhID0gcG9zdENvbnRlbnRzLm1hcCgoY29udGVudDogeyBkZWZhdWx0OiBhbnkgfSkgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IHBhcnNlUG9zdHMoY29udGVudC5kZWZhdWx0KTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0pO1xuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIGNvbnN0IHBvc3ROYW1lcyA9IGdldFBvc3RGaWxlcygpO1xuICBjb25zdCBwb3N0Q29udGVudHMgPSBhd2FpdCBpbXBvcnRQb3N0cyhwb3N0TmFtZXMpO1xuICBjb25zdCBkYXRhID0gcHJvY2Vzc1Bvc3RzKHBvc3RDb250ZW50cyk7XG5cbiAgLy8gUGFzcyBkYXRhIHRvIG91ciBjb21wb25lbnQgcHJvcHNcbiAgcmV0dXJuIHsgZGF0YTogZGF0YSwgZmlsZU5hbWVzOiBwb3N0TmFtZXMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RzO1xuIl0sIm5hbWVzIjpbInN0eWxlcyIsIlJlYWN0IiwicGFyc2VQb3N0cyIsImZzIiwicGF0aCIsIlBvc3RzIiwicHJvcHMiLCJyZW5kZXJFeGNlcnB0cyIsImNvbnRlbnQiLCJkYXRhIiwiZmlsZU5hbWVzIiwicG9zdCIsIm1hcCIsImMiLCJpIiwicG9zdFBhdGgiLCJwb3N0VXJsIiwiZXhjZXJwdENhcmQiLCJ0aXRsZSIsImV4Y2VycHQiLCJwb3N0Q2FyZHMiLCJjb250YWluZXIiLCJtYWluIiwiZGVzY3JpcHRpb24iLCJncmlkIiwiZ2V0SW5pdGlhbFByb3BzIiwiZ2V0UG9zdEZpbGVzIiwiZmlsZXMiLCJyZWFkZGlyU3luYyIsImpvaW4iLCJpbXBvcnRQb3N0cyIsInBvc3ROYW1lcyIsInBvc3RDb250ZW50cyIsIlByb21pc2UiLCJhbGwiLCJwb3N0TmFtZSIsInByb2Nlc3NQb3N0cyIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts.tsx\n");

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

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/posts.tsx"));
module.exports = __webpack_exports__;

})();