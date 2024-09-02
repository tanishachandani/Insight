"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mdast-util-phrasing";
exports.ids = ["vendor-chunks/mdast-util-phrasing"];
exports.modules = {

/***/ "(ssr)/./node_modules/mdast-util-phrasing/lib/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/mdast-util-phrasing/lib/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   phrasing: () => (/* binding */ phrasing)\n/* harmony export */ });\n/* harmony import */ var unist_util_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unist-util-is */ \"(ssr)/./node_modules/unist-util-is/lib/index.js\");\n/**\n * @typedef {import('mdast').Html} Html\n * @typedef {import('mdast').PhrasingContent} PhrasingContent\n */\n\n\n\n/**\n * Check if the given value is *phrasing content*.\n *\n * > 👉 **Note**: Excludes `html`, which can be both phrasing or flow.\n *\n * @param node\n *   Thing to check, typically `Node`.\n * @returns\n *   Whether `value` is phrasing content.\n */\n\nconst phrasing =\n  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */\n  (\n    (0,unist_util_is__WEBPACK_IMPORTED_MODULE_0__.convert)([\n      'break',\n      'delete',\n      'emphasis',\n      // To do: next major: removed since footnotes were added to GFM.\n      'footnote',\n      'footnoteReference',\n      'image',\n      'imageReference',\n      'inlineCode',\n      // Enabled by `mdast-util-math`:\n      'inlineMath',\n      'link',\n      'linkReference',\n      // Enabled by `mdast-util-mdx`:\n      'mdxJsxTextElement',\n      // Enabled by `mdast-util-mdx`:\n      'mdxTextExpression',\n      'strong',\n      'text',\n      // Enabled by `mdast-util-directive`:\n      'textDirective'\n    ])\n  )\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1waHJhc2luZy9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBLGFBQWEsc0JBQXNCO0FBQ25DLGFBQWEsaUNBQWlDO0FBQzlDOztBQUVxQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCxhQUFhLDREQUE0RDtBQUN6RTtBQUNBLElBQUksc0RBQU87QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1waHJhc2luZy9saWIvaW5kZXguanM/ZWRhYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0JykuSHRtbH0gSHRtbFxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QnKS5QaHJhc2luZ0NvbnRlbnR9IFBocmFzaW5nQ29udGVudFxuICovXG5cbmltcG9ydCB7Y29udmVydH0gZnJvbSAndW5pc3QtdXRpbC1pcydcblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgKnBocmFzaW5nIGNvbnRlbnQqLlxuICpcbiAqID4g8J+RiSAqKk5vdGUqKjogRXhjbHVkZXMgYGh0bWxgLCB3aGljaCBjYW4gYmUgYm90aCBwaHJhc2luZyBvciBmbG93LlxuICpcbiAqIEBwYXJhbSBub2RlXG4gKiAgIFRoaW5nIHRvIGNoZWNrLCB0eXBpY2FsbHkgYE5vZGVgLlxuICogQHJldHVybnNcbiAqICAgV2hldGhlciBgdmFsdWVgIGlzIHBocmFzaW5nIGNvbnRlbnQuXG4gKi9cblxuZXhwb3J0IGNvbnN0IHBocmFzaW5nID1cbiAgLyoqIEB0eXBlIHsobm9kZT86IHVua25vd24pID0+IG5vZGUgaXMgRXhjbHVkZTxQaHJhc2luZ0NvbnRlbnQsIEh0bWw+fSAqL1xuICAoXG4gICAgY29udmVydChbXG4gICAgICAnYnJlYWsnLFxuICAgICAgJ2RlbGV0ZScsXG4gICAgICAnZW1waGFzaXMnLFxuICAgICAgLy8gVG8gZG86IG5leHQgbWFqb3I6IHJlbW92ZWQgc2luY2UgZm9vdG5vdGVzIHdlcmUgYWRkZWQgdG8gR0ZNLlxuICAgICAgJ2Zvb3Rub3RlJyxcbiAgICAgICdmb290bm90ZVJlZmVyZW5jZScsXG4gICAgICAnaW1hZ2UnLFxuICAgICAgJ2ltYWdlUmVmZXJlbmNlJyxcbiAgICAgICdpbmxpbmVDb2RlJyxcbiAgICAgIC8vIEVuYWJsZWQgYnkgYG1kYXN0LXV0aWwtbWF0aGA6XG4gICAgICAnaW5saW5lTWF0aCcsXG4gICAgICAnbGluaycsXG4gICAgICAnbGlua1JlZmVyZW5jZScsXG4gICAgICAvLyBFbmFibGVkIGJ5IGBtZGFzdC11dGlsLW1keGA6XG4gICAgICAnbWR4SnN4VGV4dEVsZW1lbnQnLFxuICAgICAgLy8gRW5hYmxlZCBieSBgbWRhc3QtdXRpbC1tZHhgOlxuICAgICAgJ21keFRleHRFeHByZXNzaW9uJyxcbiAgICAgICdzdHJvbmcnLFxuICAgICAgJ3RleHQnLFxuICAgICAgLy8gRW5hYmxlZCBieSBgbWRhc3QtdXRpbC1kaXJlY3RpdmVgOlxuICAgICAgJ3RleHREaXJlY3RpdmUnXG4gICAgXSlcbiAgKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mdast-util-phrasing/lib/index.js\n");

/***/ })

};
;