"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mdast-util-gfm-task-list-item";
exports.ids = ["vendor-chunks/mdast-util-gfm-task-list-item"];
exports.modules = {

/***/ "(ssr)/./node_modules/mdast-util-gfm-task-list-item/lib/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/mdast-util-gfm-task-list-item/lib/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gfmTaskListItemFromMarkdown: () => (/* binding */ gfmTaskListItemFromMarkdown),\n/* harmony export */   gfmTaskListItemToMarkdown: () => (/* binding */ gfmTaskListItemToMarkdown)\n/* harmony export */ });\n/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! devlop */ \"(ssr)/./node_modules/devlop/lib/development.js\");\n/* harmony import */ var mdast_util_to_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mdast-util-to-markdown */ \"(ssr)/./node_modules/mdast-util-to-markdown/lib/handle/index.js\");\n/**\n * @typedef {import('mdast').ListItem} ListItem\n * @typedef {import('mdast').Paragraph} Paragraph\n * @typedef {import('mdast-util-from-markdown').CompileContext} CompileContext\n * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension\n * @typedef {import('mdast-util-from-markdown').Handle} FromMarkdownHandle\n * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownExtension\n * @typedef {import('mdast-util-to-markdown').Handle} ToMarkdownHandle\n */\n\n\n\n\n/**\n * Create an extension for `mdast-util-from-markdown` to enable GFM task\n * list items in markdown.\n *\n * @returns {FromMarkdownExtension}\n *   Extension for `mdast-util-from-markdown` to enable GFM task list items.\n */\nfunction gfmTaskListItemFromMarkdown() {\n  return {\n    exit: {\n      taskListCheckValueChecked: exitCheck,\n      taskListCheckValueUnchecked: exitCheck,\n      paragraph: exitParagraphWithTaskListItem\n    }\n  }\n}\n\n/**\n * Create an extension for `mdast-util-to-markdown` to enable GFM task list\n * items in markdown.\n *\n * @returns {ToMarkdownExtension}\n *   Extension for `mdast-util-to-markdown` to enable GFM task list items.\n */\nfunction gfmTaskListItemToMarkdown() {\n  return {\n    unsafe: [{atBreak: true, character: '-', after: '[:|-]'}],\n    handlers: {listItem: listItemWithTaskListItem}\n  }\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction exitCheck(token) {\n  // We’re always in a paragraph, in a list item.\n  const node = this.stack[this.stack.length - 2]\n  ;(0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(node.type === 'listItem')\n  node.checked = token.type === 'taskListCheckValueChecked'\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction exitParagraphWithTaskListItem(token) {\n  const parent = this.stack[this.stack.length - 2]\n\n  if (\n    parent &&\n    parent.type === 'listItem' &&\n    typeof parent.checked === 'boolean'\n  ) {\n    const node = this.stack[this.stack.length - 1]\n    ;(0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(node.type === 'paragraph')\n    const head = node.children[0]\n\n    if (head && head.type === 'text') {\n      const siblings = parent.children\n      let index = -1\n      /** @type {Paragraph | undefined} */\n      let firstParaghraph\n\n      while (++index < siblings.length) {\n        const sibling = siblings[index]\n        if (sibling.type === 'paragraph') {\n          firstParaghraph = sibling\n          break\n        }\n      }\n\n      if (firstParaghraph === node) {\n        // Must start with a space or a tab.\n        head.value = head.value.slice(1)\n\n        if (head.value.length === 0) {\n          node.children.shift()\n        } else if (\n          node.position &&\n          head.position &&\n          typeof head.position.start.offset === 'number'\n        ) {\n          head.position.start.column++\n          head.position.start.offset++\n          node.position.start = Object.assign({}, head.position.start)\n        }\n      }\n    }\n  }\n\n  this.exit(token)\n}\n\n/**\n * @type {ToMarkdownHandle}\n * @param {ListItem} node\n */\nfunction listItemWithTaskListItem(node, parent, state, info) {\n  const head = node.children[0]\n  const checkable =\n    typeof node.checked === 'boolean' && head && head.type === 'paragraph'\n  const checkbox = '[' + (node.checked ? 'x' : ' ') + '] '\n  const tracker = state.createTracker(info)\n\n  if (checkable) {\n    tracker.move(checkbox)\n  }\n\n  let value = mdast_util_to_markdown__WEBPACK_IMPORTED_MODULE_1__.handle.listItem(node, parent, state, {\n    ...info,\n    ...tracker.current()\n  })\n\n  if (checkable) {\n    value = value.replace(/^(?:[*+-]|\\d+\\.)([\\r\\n]| {1,3})/, check)\n  }\n\n  return value\n\n  /**\n   * @param {string} $0\n   * @returns {string}\n   */\n  function check($0) {\n    return $0 + checkbox\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1nZm0tdGFzay1saXN0LWl0ZW0vbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBLGFBQWEsMEJBQTBCO0FBQ3ZDLGFBQWEsMkJBQTJCO0FBQ3hDLGFBQWEsbURBQW1EO0FBQ2hFLGFBQWEsOENBQThDO0FBQzNELGFBQWEsMkNBQTJDO0FBQ3hELGFBQWEsMENBQTBDO0FBQ3ZELGFBQWEseUNBQXlDO0FBQ3REOztBQUVtQztBQUNtQjs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUDtBQUNBLGNBQWMsOENBQThDO0FBQzVELGVBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkNBQU07QUFDUjtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwyQ0FBTTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix1QkFBdUI7QUFDeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1YsV0FBVyxVQUFVO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLDBEQUFlO0FBQzdCO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EscURBQXFELElBQUk7QUFDekQ7O0FBRUE7O0FBRUE7QUFDQSxhQUFhLFFBQVE7QUFDckIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLWdmbS10YXNrLWxpc3QtaXRlbS9saWIvaW5kZXguanM/MWUxMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0JykuTGlzdEl0ZW19IExpc3RJdGVtXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdCcpLlBhcmFncmFwaH0gUGFyYWdyYXBoXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLWZyb20tbWFya2Rvd24nKS5Db21waWxlQ29udGV4dH0gQ29tcGlsZUNvbnRleHRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0LXV0aWwtZnJvbS1tYXJrZG93bicpLkV4dGVuc2lvbn0gRnJvbU1hcmtkb3duRXh0ZW5zaW9uXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLWZyb20tbWFya2Rvd24nKS5IYW5kbGV9IEZyb21NYXJrZG93bkhhbmRsZVxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QtdXRpbC10by1tYXJrZG93bicpLk9wdGlvbnN9IFRvTWFya2Rvd25FeHRlbnNpb25cbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0LXV0aWwtdG8tbWFya2Rvd24nKS5IYW5kbGV9IFRvTWFya2Rvd25IYW5kbGVcbiAqL1xuXG5pbXBvcnQge29rIGFzIGFzc2VydH0gZnJvbSAnZGV2bG9wJ1xuaW1wb3J0IHtkZWZhdWx0SGFuZGxlcnN9IGZyb20gJ21kYXN0LXV0aWwtdG8tbWFya2Rvd24nXG5cbi8qKlxuICogQ3JlYXRlIGFuIGV4dGVuc2lvbiBmb3IgYG1kYXN0LXV0aWwtZnJvbS1tYXJrZG93bmAgdG8gZW5hYmxlIEdGTSB0YXNrXG4gKiBsaXN0IGl0ZW1zIGluIG1hcmtkb3duLlxuICpcbiAqIEByZXR1cm5zIHtGcm9tTWFya2Rvd25FeHRlbnNpb259XG4gKiAgIEV4dGVuc2lvbiBmb3IgYG1kYXN0LXV0aWwtZnJvbS1tYXJrZG93bmAgdG8gZW5hYmxlIEdGTSB0YXNrIGxpc3QgaXRlbXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZm1UYXNrTGlzdEl0ZW1Gcm9tTWFya2Rvd24oKSB7XG4gIHJldHVybiB7XG4gICAgZXhpdDoge1xuICAgICAgdGFza0xpc3RDaGVja1ZhbHVlQ2hlY2tlZDogZXhpdENoZWNrLFxuICAgICAgdGFza0xpc3RDaGVja1ZhbHVlVW5jaGVja2VkOiBleGl0Q2hlY2ssXG4gICAgICBwYXJhZ3JhcGg6IGV4aXRQYXJhZ3JhcGhXaXRoVGFza0xpc3RJdGVtXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlIGFuIGV4dGVuc2lvbiBmb3IgYG1kYXN0LXV0aWwtdG8tbWFya2Rvd25gIHRvIGVuYWJsZSBHRk0gdGFzayBsaXN0XG4gKiBpdGVtcyBpbiBtYXJrZG93bi5cbiAqXG4gKiBAcmV0dXJucyB7VG9NYXJrZG93bkV4dGVuc2lvbn1cbiAqICAgRXh0ZW5zaW9uIGZvciBgbWRhc3QtdXRpbC10by1tYXJrZG93bmAgdG8gZW5hYmxlIEdGTSB0YXNrIGxpc3QgaXRlbXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZm1UYXNrTGlzdEl0ZW1Ub01hcmtkb3duKCkge1xuICByZXR1cm4ge1xuICAgIHVuc2FmZTogW3thdEJyZWFrOiB0cnVlLCBjaGFyYWN0ZXI6ICctJywgYWZ0ZXI6ICdbOnwtXSd9XSxcbiAgICBoYW5kbGVyczoge2xpc3RJdGVtOiBsaXN0SXRlbVdpdGhUYXNrTGlzdEl0ZW19XG4gIH1cbn1cblxuLyoqXG4gKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gKiBAdHlwZSB7RnJvbU1hcmtkb3duSGFuZGxlfVxuICovXG5mdW5jdGlvbiBleGl0Q2hlY2sodG9rZW4pIHtcbiAgLy8gV2XigJlyZSBhbHdheXMgaW4gYSBwYXJhZ3JhcGgsIGluIGEgbGlzdCBpdGVtLlxuICBjb25zdCBub2RlID0gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDJdXG4gIGFzc2VydChub2RlLnR5cGUgPT09ICdsaXN0SXRlbScpXG4gIG5vZGUuY2hlY2tlZCA9IHRva2VuLnR5cGUgPT09ICd0YXNrTGlzdENoZWNrVmFsdWVDaGVja2VkJ1xufVxuXG4vKipcbiAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAqIEB0eXBlIHtGcm9tTWFya2Rvd25IYW5kbGV9XG4gKi9cbmZ1bmN0aW9uIGV4aXRQYXJhZ3JhcGhXaXRoVGFza0xpc3RJdGVtKHRva2VuKSB7XG4gIGNvbnN0IHBhcmVudCA9IHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAyXVxuXG4gIGlmIChcbiAgICBwYXJlbnQgJiZcbiAgICBwYXJlbnQudHlwZSA9PT0gJ2xpc3RJdGVtJyAmJlxuICAgIHR5cGVvZiBwYXJlbnQuY2hlY2tlZCA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV1cbiAgICBhc3NlcnQobm9kZS50eXBlID09PSAncGFyYWdyYXBoJylcbiAgICBjb25zdCBoZWFkID0gbm9kZS5jaGlsZHJlblswXVxuXG4gICAgaWYgKGhlYWQgJiYgaGVhZC50eXBlID09PSAndGV4dCcpIHtcbiAgICAgIGNvbnN0IHNpYmxpbmdzID0gcGFyZW50LmNoaWxkcmVuXG4gICAgICBsZXQgaW5kZXggPSAtMVxuICAgICAgLyoqIEB0eXBlIHtQYXJhZ3JhcGggfCB1bmRlZmluZWR9ICovXG4gICAgICBsZXQgZmlyc3RQYXJhZ2hyYXBoXG5cbiAgICAgIHdoaWxlICgrK2luZGV4IDwgc2libGluZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHNpYmxpbmcgPSBzaWJsaW5nc1tpbmRleF1cbiAgICAgICAgaWYgKHNpYmxpbmcudHlwZSA9PT0gJ3BhcmFncmFwaCcpIHtcbiAgICAgICAgICBmaXJzdFBhcmFnaHJhcGggPSBzaWJsaW5nXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmlyc3RQYXJhZ2hyYXBoID09PSBub2RlKSB7XG4gICAgICAgIC8vIE11c3Qgc3RhcnQgd2l0aCBhIHNwYWNlIG9yIGEgdGFiLlxuICAgICAgICBoZWFkLnZhbHVlID0gaGVhZC52YWx1ZS5zbGljZSgxKVxuXG4gICAgICAgIGlmIChoZWFkLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIG5vZGUuY2hpbGRyZW4uc2hpZnQoKVxuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIG5vZGUucG9zaXRpb24gJiZcbiAgICAgICAgICBoZWFkLnBvc2l0aW9uICYmXG4gICAgICAgICAgdHlwZW9mIGhlYWQucG9zaXRpb24uc3RhcnQub2Zmc2V0ID09PSAnbnVtYmVyJ1xuICAgICAgICApIHtcbiAgICAgICAgICBoZWFkLnBvc2l0aW9uLnN0YXJ0LmNvbHVtbisrXG4gICAgICAgICAgaGVhZC5wb3NpdGlvbi5zdGFydC5vZmZzZXQrK1xuICAgICAgICAgIG5vZGUucG9zaXRpb24uc3RhcnQgPSBPYmplY3QuYXNzaWduKHt9LCBoZWFkLnBvc2l0aW9uLnN0YXJ0KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdGhpcy5leGl0KHRva2VuKVxufVxuXG4vKipcbiAqIEB0eXBlIHtUb01hcmtkb3duSGFuZGxlfVxuICogQHBhcmFtIHtMaXN0SXRlbX0gbm9kZVxuICovXG5mdW5jdGlvbiBsaXN0SXRlbVdpdGhUYXNrTGlzdEl0ZW0obm9kZSwgcGFyZW50LCBzdGF0ZSwgaW5mbykge1xuICBjb25zdCBoZWFkID0gbm9kZS5jaGlsZHJlblswXVxuICBjb25zdCBjaGVja2FibGUgPVxuICAgIHR5cGVvZiBub2RlLmNoZWNrZWQgPT09ICdib29sZWFuJyAmJiBoZWFkICYmIGhlYWQudHlwZSA9PT0gJ3BhcmFncmFwaCdcbiAgY29uc3QgY2hlY2tib3ggPSAnWycgKyAobm9kZS5jaGVja2VkID8gJ3gnIDogJyAnKSArICddICdcbiAgY29uc3QgdHJhY2tlciA9IHN0YXRlLmNyZWF0ZVRyYWNrZXIoaW5mbylcblxuICBpZiAoY2hlY2thYmxlKSB7XG4gICAgdHJhY2tlci5tb3ZlKGNoZWNrYm94KVxuICB9XG5cbiAgbGV0IHZhbHVlID0gZGVmYXVsdEhhbmRsZXJzLmxpc3RJdGVtKG5vZGUsIHBhcmVudCwgc3RhdGUsIHtcbiAgICAuLi5pbmZvLFxuICAgIC4uLnRyYWNrZXIuY3VycmVudCgpXG4gIH0pXG5cbiAgaWYgKGNoZWNrYWJsZSkge1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXig/OlsqKy1dfFxcZCtcXC4pKFtcXHJcXG5dfCB7MSwzfSkvLCBjaGVjaylcbiAgfVxuXG4gIHJldHVybiB2YWx1ZVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gJDBcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGNoZWNrKCQwKSB7XG4gICAgcmV0dXJuICQwICsgY2hlY2tib3hcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mdast-util-gfm-task-list-item/lib/index.js\n");

/***/ })

};
;