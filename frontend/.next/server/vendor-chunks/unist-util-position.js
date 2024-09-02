"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unist-util-position";
exports.ids = ["vendor-chunks/unist-util-position"];
exports.modules = {

/***/ "(ssr)/./node_modules/unist-util-position/lib/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/unist-util-position/lib/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pointEnd: () => (/* binding */ pointEnd),\n/* harmony export */   pointStart: () => (/* binding */ pointStart),\n/* harmony export */   position: () => (/* binding */ position)\n/* harmony export */ });\n/**\n * @typedef {import('unist').Node} Node\n * @typedef {import('unist').Point} Point\n * @typedef {import('unist').Position} Position\n */\n\n/**\n * @typedef NodeLike\n * @property {string} type\n * @property {PositionLike | null | undefined} [position]\n *\n * @typedef PositionLike\n * @property {PointLike | null | undefined} [start]\n * @property {PointLike | null | undefined} [end]\n *\n * @typedef PointLike\n * @property {number | null | undefined} [line]\n * @property {number | null | undefined} [column]\n * @property {number | null | undefined} [offset]\n */\n\n/**\n * Get the ending point of `node`.\n *\n * @param node\n *   Node.\n * @returns\n *   Point.\n */\nconst pointEnd = point('end')\n\n/**\n * Get the starting point of `node`.\n *\n * @param node\n *   Node.\n * @returns\n *   Point.\n */\nconst pointStart = point('start')\n\n/**\n * Get the positional info of `node`.\n *\n * @param {'end' | 'start'} type\n *   Side.\n * @returns\n *   Getter.\n */\nfunction point(type) {\n  return point\n\n  /**\n   * Get the point info of `node` at a bound side.\n   *\n   * @param {Node | NodeLike | null | undefined} [node]\n   * @returns {Point | undefined}\n   */\n  function point(node) {\n    const point = (node && node.position && node.position[type]) || {}\n\n    if (\n      typeof point.line === 'number' &&\n      point.line > 0 &&\n      typeof point.column === 'number' &&\n      point.column > 0\n    ) {\n      return {\n        line: point.line,\n        column: point.column,\n        offset:\n          typeof point.offset === 'number' && point.offset > -1\n            ? point.offset\n            : undefined\n      }\n    }\n  }\n}\n\n/**\n * Get the positional info of `node`.\n *\n * @param {Node | NodeLike | null | undefined} [node]\n *   Node.\n * @returns {Position | undefined}\n *   Position.\n */\nfunction position(node) {\n  const start = pointStart(node)\n  const end = pointEnd(node)\n\n  if (start && end) {\n    return {start, end}\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1wb3NpdGlvbi9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQSxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLHVCQUF1QjtBQUNwQyxhQUFhLDBCQUEwQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsaUNBQWlDO0FBQy9DO0FBQ0E7QUFDQSxjQUFjLDhCQUE4QjtBQUM1QyxjQUFjLDhCQUE4QjtBQUM1QztBQUNBO0FBQ0EsY0FBYywyQkFBMkI7QUFDekMsY0FBYywyQkFBMkI7QUFDekMsY0FBYywyQkFBMkI7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxvQ0FBb0M7QUFDakQsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsb0NBQW9DO0FBQy9DO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtcG9zaXRpb24vbGliL2luZGV4LmpzPzI4NTYiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLk5vZGV9IE5vZGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0JykuUG9pbnR9IFBvaW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLlBvc2l0aW9ufSBQb3NpdGlvblxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgTm9kZUxpa2VcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0eXBlXG4gKiBAcHJvcGVydHkge1Bvc2l0aW9uTGlrZSB8IG51bGwgfCB1bmRlZmluZWR9IFtwb3NpdGlvbl1cbiAqXG4gKiBAdHlwZWRlZiBQb3NpdGlvbkxpa2VcbiAqIEBwcm9wZXJ0eSB7UG9pbnRMaWtlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW3N0YXJ0XVxuICogQHByb3BlcnR5IHtQb2ludExpa2UgfCBudWxsIHwgdW5kZWZpbmVkfSBbZW5kXVxuICpcbiAqIEB0eXBlZGVmIFBvaW50TGlrZVxuICogQHByb3BlcnR5IHtudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkfSBbbGluZV1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbHVtbl1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZH0gW29mZnNldF1cbiAqL1xuXG4vKipcbiAqIEdldCB0aGUgZW5kaW5nIHBvaW50IG9mIGBub2RlYC5cbiAqXG4gKiBAcGFyYW0gbm9kZVxuICogICBOb2RlLlxuICogQHJldHVybnNcbiAqICAgUG9pbnQuXG4gKi9cbmV4cG9ydCBjb25zdCBwb2ludEVuZCA9IHBvaW50KCdlbmQnKVxuXG4vKipcbiAqIEdldCB0aGUgc3RhcnRpbmcgcG9pbnQgb2YgYG5vZGVgLlxuICpcbiAqIEBwYXJhbSBub2RlXG4gKiAgIE5vZGUuXG4gKiBAcmV0dXJuc1xuICogICBQb2ludC5cbiAqL1xuZXhwb3J0IGNvbnN0IHBvaW50U3RhcnQgPSBwb2ludCgnc3RhcnQnKVxuXG4vKipcbiAqIEdldCB0aGUgcG9zaXRpb25hbCBpbmZvIG9mIGBub2RlYC5cbiAqXG4gKiBAcGFyYW0geydlbmQnIHwgJ3N0YXJ0J30gdHlwZVxuICogICBTaWRlLlxuICogQHJldHVybnNcbiAqICAgR2V0dGVyLlxuICovXG5mdW5jdGlvbiBwb2ludCh0eXBlKSB7XG4gIHJldHVybiBwb2ludFxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHBvaW50IGluZm8gb2YgYG5vZGVgIGF0IGEgYm91bmQgc2lkZS5cbiAgICpcbiAgICogQHBhcmFtIHtOb2RlIHwgTm9kZUxpa2UgfCBudWxsIHwgdW5kZWZpbmVkfSBbbm9kZV1cbiAgICogQHJldHVybnMge1BvaW50IHwgdW5kZWZpbmVkfVxuICAgKi9cbiAgZnVuY3Rpb24gcG9pbnQobm9kZSkge1xuICAgIGNvbnN0IHBvaW50ID0gKG5vZGUgJiYgbm9kZS5wb3NpdGlvbiAmJiBub2RlLnBvc2l0aW9uW3R5cGVdKSB8fCB7fVxuXG4gICAgaWYgKFxuICAgICAgdHlwZW9mIHBvaW50LmxpbmUgPT09ICdudW1iZXInICYmXG4gICAgICBwb2ludC5saW5lID4gMCAmJlxuICAgICAgdHlwZW9mIHBvaW50LmNvbHVtbiA9PT0gJ251bWJlcicgJiZcbiAgICAgIHBvaW50LmNvbHVtbiA+IDBcbiAgICApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxpbmU6IHBvaW50LmxpbmUsXG4gICAgICAgIGNvbHVtbjogcG9pbnQuY29sdW1uLFxuICAgICAgICBvZmZzZXQ6XG4gICAgICAgICAgdHlwZW9mIHBvaW50Lm9mZnNldCA9PT0gJ251bWJlcicgJiYgcG9pbnQub2Zmc2V0ID4gLTFcbiAgICAgICAgICAgID8gcG9pbnQub2Zmc2V0XG4gICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEdldCB0aGUgcG9zaXRpb25hbCBpbmZvIG9mIGBub2RlYC5cbiAqXG4gKiBAcGFyYW0ge05vZGUgfCBOb2RlTGlrZSB8IG51bGwgfCB1bmRlZmluZWR9IFtub2RlXVxuICogICBOb2RlLlxuICogQHJldHVybnMge1Bvc2l0aW9uIHwgdW5kZWZpbmVkfVxuICogICBQb3NpdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBvc2l0aW9uKG5vZGUpIHtcbiAgY29uc3Qgc3RhcnQgPSBwb2ludFN0YXJ0KG5vZGUpXG4gIGNvbnN0IGVuZCA9IHBvaW50RW5kKG5vZGUpXG5cbiAgaWYgKHN0YXJ0ICYmIGVuZCkge1xuICAgIHJldHVybiB7c3RhcnQsIGVuZH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/unist-util-position/lib/index.js\n");

/***/ })

};
;