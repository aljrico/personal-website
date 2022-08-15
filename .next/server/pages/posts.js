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

/***/ "./pages/posts.tsx":
/*!*************************!*\
  !*** ./pages/posts.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _posts_parsePosts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts/parsePosts */ \"./pages/posts/parsePosts.tsx\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/alejandrojimenezrico/Code/personal-website/pages/posts.tsx\";\n\n\n\n\n\n\n\n\nconst Posts = props => {\n  const renderExcerpts = () => {\n    const postTitles = props.postTitles;\n    const postExcerpts = props.postExcerpts;\n    const fileNames = props.fileNames;\n    const post = fileNames.map((fileName, i) => {\n      const title = postTitles[i];\n      const excerpt = postExcerpts[i];\n      const postUrl = '/posts/' + fileName;\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"a\", {\n          href: postUrl,\n          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().excerptCard),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h3\", {\n            children: title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 13\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n            children: excerpt\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 13\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false);\n    });\n    return post;\n  };\n\n  const postCards = renderExcerpts();\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"main\", {\n      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h2\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n        children: \"Posts\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().description),\n        children: \"Read about what I'm working on, my ideas and projects. You may also find some code.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().grid),\n        children: postCards\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, undefined);\n};\n\nasync function getServerSideProps() {\n  const getPostFiles = () => {\n    const fullFileNames = fs__WEBPACK_IMPORTED_MODULE_2___default().readdirSync(path__WEBPACK_IMPORTED_MODULE_3___default().join('content'));\n    const shortFileNames = fullFileNames.map(x => x.replace('.md', ''));\n    return shortFileNames;\n  };\n\n  const importPosts = async postNames => {\n    const postContents = await Promise.all(postNames.map(postName => {\n      const content = __webpack_require__(\"./content lazy recursive ^\\\\.\\\\/.*\\\\.md$\")(\"./\" + postName + \".md\");\n      return content;\n    }));\n    return postContents;\n  };\n\n  const processPosts = postContents => {\n    const data = postContents.map(content => {\n      const data = (0,_posts_parsePosts__WEBPACK_IMPORTED_MODULE_1__.default)(content.default);\n      return data;\n    });\n    return data;\n  };\n\n  const postNames = await getPostFiles();\n  const postContents = await importPosts(postNames);\n  const data = processPosts(postContents);\n  const postTitles = data.map(d => d.data.title);\n  const postExcerpts = data.map(d => d.data.excerpt || null); // Pass data to our component props\n\n  return {\n    props: {\n      postTitles: postTitles,\n      postExcerpts: postExcerpts,\n      fileNames: postNames\n    }\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Posts);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDRCxHQU5EOztBQVFBLFFBQU1QLFNBQVMsR0FBRyxNQUFNUixZQUFZLEVBQXBDO0FBQ0EsUUFBTVMsWUFBWSxHQUFHLE1BQU1GLFdBQVcsQ0FBQ0MsU0FBRCxDQUF0QztBQUNBLFFBQU1PLElBQUksR0FBR0QsWUFBWSxDQUFDTCxZQUFELENBQXpCO0FBQ0EsUUFBTTFCLFVBQVUsR0FBR2dDLElBQUksQ0FBQzVCLEdBQUwsQ0FBVThCLENBQUQsSUFBWUEsQ0FBQyxDQUFDRixJQUFGLENBQU96QixLQUE1QixDQUFuQjtBQUNBLFFBQU1OLFlBQVksR0FBRytCLElBQUksQ0FBQzVCLEdBQUwsQ0FBVThCLENBQUQsSUFBWUEsQ0FBQyxDQUFDRixJQUFGLENBQU94QixPQUFQLElBQWtCLElBQXZDLENBQXJCLENBNUJ5QyxDQThCekM7O0FBQ0EsU0FBTztBQUNMVixJQUFBQSxLQUFLLEVBQUU7QUFDTEUsTUFBQUEsVUFBVSxFQUFFQSxVQURQO0FBRUxDLE1BQUFBLFlBQVksRUFBRUEsWUFGVDtBQUdMQyxNQUFBQSxTQUFTLEVBQUV1QjtBQUhOO0FBREYsR0FBUDtBQU9EO0FBRUQsaUVBQWU1QixLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL3BhZ2VzL3Bvc3RzLnRzeD84NTUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcGFyc2VQb3N0cyBmcm9tICcuL3Bvc3RzL3BhcnNlUG9zdHMnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5jb25zdCBQb3N0czogTmV4dFBhZ2UgPSAocHJvcHM6IGFueSkgPT4ge1xuICBjb25zdCByZW5kZXJFeGNlcnB0cyA9ICgpID0+IHtcbiAgICBjb25zdCBwb3N0VGl0bGVzID0gcHJvcHMucG9zdFRpdGxlcztcbiAgICBjb25zdCBwb3N0RXhjZXJwdHMgPSBwcm9wcy5wb3N0RXhjZXJwdHM7XG4gICAgY29uc3QgZmlsZU5hbWVzID0gcHJvcHMuZmlsZU5hbWVzO1xuICAgIGNvbnN0IHBvc3QgPSBmaWxlTmFtZXMubWFwKChmaWxlTmFtZTogc3RyaW5nLCBpOiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IHRpdGxlID0gcG9zdFRpdGxlc1tpXTtcbiAgICAgIGNvbnN0IGV4Y2VycHQgPSBwb3N0RXhjZXJwdHNbaV07XG4gICAgICBjb25zdCBwb3N0VXJsID0gJy9wb3N0cy8nICsgZmlsZU5hbWU7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxhIGhyZWY9e3Bvc3RVcmx9IGNsYXNzTmFtZT17c3R5bGVzLmV4Y2VycHRDYXJkfT5cbiAgICAgICAgICAgIDxoMz57dGl0bGV9PC9oMz5cbiAgICAgICAgICAgIDxwPntleGNlcnB0fTwvcD5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvPlxuICAgICAgKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcG9zdDtcbiAgfTtcbiAgY29uc3QgcG9zdENhcmRzID0gcmVuZGVyRXhjZXJwdHMoKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5Qb3N0czwvaDI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICBSZWFkIGFib3V0IHdoYXQgSSdtIHdvcmtpbmcgb24sIG15IGlkZWFzIGFuZCBwcm9qZWN0cy4gWW91IG1heSBhbHNvXG4gICAgICAgICAgZmluZCBzb21lIGNvZGUuXG4gICAgICAgIDwvcD5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9Pntwb3N0Q2FyZHN9PC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICBjb25zdCBnZXRQb3N0RmlsZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgZnVsbEZpbGVOYW1lcyA9IGZzLnJlYWRkaXJTeW5jKHBhdGguam9pbignY29udGVudCcpKTtcbiAgICBjb25zdCBzaG9ydEZpbGVOYW1lcyA9IGZ1bGxGaWxlTmFtZXMubWFwKCh4OiBhbnkpID0+IHgucmVwbGFjZSgnLm1kJywgJycpKTtcbiAgICByZXR1cm4gc2hvcnRGaWxlTmFtZXM7XG4gIH07XG4gIGNvbnN0IGltcG9ydFBvc3RzID0gYXN5bmMgKHBvc3ROYW1lczogYW55KSA9PiB7XG4gICAgY29uc3QgcG9zdENvbnRlbnRzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICBwb3N0TmFtZXMubWFwKChwb3N0TmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBpbXBvcnQoJy4uL2NvbnRlbnQvJyArIHBvc3ROYW1lICsgJy5tZCcpO1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH0pXG4gICAgKTtcbiAgICByZXR1cm4gcG9zdENvbnRlbnRzO1xuICB9O1xuXG4gIGNvbnN0IHByb2Nlc3NQb3N0cyA9IChwb3N0Q29udGVudHM6IGFueSkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBwb3N0Q29udGVudHMubWFwKChjb250ZW50OiB7IGRlZmF1bHQ6IGFueSB9KSA9PiB7XG4gICAgICBjb25zdCBkYXRhID0gcGFyc2VQb3N0cyhjb250ZW50LmRlZmF1bHQpO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgY29uc3QgcG9zdE5hbWVzID0gYXdhaXQgZ2V0UG9zdEZpbGVzKCk7XG4gIGNvbnN0IHBvc3RDb250ZW50cyA9IGF3YWl0IGltcG9ydFBvc3RzKHBvc3ROYW1lcyk7XG4gIGNvbnN0IGRhdGEgPSBwcm9jZXNzUG9zdHMocG9zdENvbnRlbnRzKTtcbiAgY29uc3QgcG9zdFRpdGxlcyA9IGRhdGEubWFwKChkOiBhbnkpID0+IGQuZGF0YS50aXRsZSk7XG4gIGNvbnN0IHBvc3RFeGNlcnB0cyA9IGRhdGEubWFwKChkOiBhbnkpID0+IGQuZGF0YS5leGNlcnB0IHx8IG51bGwpO1xuXG4gIC8vIFBhc3MgZGF0YSB0byBvdXIgY29tcG9uZW50IHByb3BzXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RUaXRsZXM6IHBvc3RUaXRsZXMsXG4gICAgICBwb3N0RXhjZXJwdHM6IHBvc3RFeGNlcnB0cyxcbiAgICAgIGZpbGVOYW1lczogcG9zdE5hbWVzXG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0cztcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJSZWFjdCIsInBhcnNlUG9zdHMiLCJmcyIsInBhdGgiLCJQb3N0cyIsInByb3BzIiwicmVuZGVyRXhjZXJwdHMiLCJwb3N0VGl0bGVzIiwicG9zdEV4Y2VycHRzIiwiZmlsZU5hbWVzIiwicG9zdCIsIm1hcCIsImZpbGVOYW1lIiwiaSIsInRpdGxlIiwiZXhjZXJwdCIsInBvc3RVcmwiLCJleGNlcnB0Q2FyZCIsInBvc3RDYXJkcyIsImNvbnRhaW5lciIsIm1haW4iLCJkZXNjcmlwdGlvbiIsImdyaWQiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJnZXRQb3N0RmlsZXMiLCJmdWxsRmlsZU5hbWVzIiwicmVhZGRpclN5bmMiLCJqb2luIiwic2hvcnRGaWxlTmFtZXMiLCJ4IiwicmVwbGFjZSIsImltcG9ydFBvc3RzIiwicG9zdE5hbWVzIiwicG9zdENvbnRlbnRzIiwiUHJvbWlzZSIsImFsbCIsInBvc3ROYW1lIiwiY29udGVudCIsInByb2Nlc3NQb3N0cyIsImRhdGEiLCJkZWZhdWx0IiwiZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts.tsx\n");

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