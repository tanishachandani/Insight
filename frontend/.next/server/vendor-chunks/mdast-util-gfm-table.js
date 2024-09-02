"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mdast-util-gfm-table";
exports.ids = ["vendor-chunks/mdast-util-gfm-table"];
exports.modules = {

/***/ "(ssr)/./node_modules/mdast-util-gfm-table/lib/index.js":
/*!********************************************************!*\
  !*** ./node_modules/mdast-util-gfm-table/lib/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gfmTableFromMarkdown: () => (/* binding */ gfmTableFromMarkdown),\n/* harmony export */   gfmTableToMarkdown: () => (/* binding */ gfmTableToMarkdown)\n/* harmony export */ });\n/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! devlop */ \"(ssr)/./node_modules/devlop/lib/development.js\");\n/* harmony import */ var markdown_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! markdown-table */ \"(ssr)/./node_modules/markdown-table/index.js\");\n/* harmony import */ var mdast_util_to_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mdast-util-to-markdown */ \"(ssr)/./node_modules/mdast-util-to-markdown/lib/handle/index.js\");\n/**\n * @typedef {import('mdast').InlineCode} InlineCode\n * @typedef {import('mdast').Table} Table\n * @typedef {import('mdast').TableCell} TableCell\n * @typedef {import('mdast').TableRow} TableRow\n *\n * @typedef {import('markdown-table').Options} MarkdownTableOptions\n *\n * @typedef {import('mdast-util-from-markdown').CompileContext} CompileContext\n * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension\n * @typedef {import('mdast-util-from-markdown').Handle} FromMarkdownHandle\n *\n * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownExtension\n * @typedef {import('mdast-util-to-markdown').Handle} ToMarkdownHandle\n * @typedef {import('mdast-util-to-markdown').State} State\n * @typedef {import('mdast-util-to-markdown').Info} Info\n */\n\n/**\n * @typedef Options\n *   Configuration.\n * @property {boolean | null | undefined} [tableCellPadding=true]\n *   Whether to add a space of padding between delimiters and cells (default:\n *   `true`).\n * @property {boolean | null | undefined} [tablePipeAlign=true]\n *   Whether to align the delimiters (default: `true`).\n * @property {MarkdownTableOptions['stringLength'] | null | undefined} [stringLength]\n *   Function to detect the length of table cell content, used when aligning\n *   the delimiters between cells (optional).\n */\n\n\n\n\n\n/**\n * Create an extension for `mdast-util-from-markdown` to enable GFM tables in\n * markdown.\n *\n * @returns {FromMarkdownExtension}\n *   Extension for `mdast-util-from-markdown` to enable GFM tables.\n */\nfunction gfmTableFromMarkdown() {\n  return {\n    enter: {\n      table: enterTable,\n      tableData: enterCell,\n      tableHeader: enterCell,\n      tableRow: enterRow\n    },\n    exit: {\n      codeText: exitCodeText,\n      table: exitTable,\n      tableData: exit,\n      tableHeader: exit,\n      tableRow: exit\n    }\n  }\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction enterTable(token) {\n  const align = token._align\n  ;(0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(align, 'expected `_align` on table')\n  this.enter(\n    {\n      type: 'table',\n      align: align.map(function (d) {\n        return d === 'none' ? null : d\n      }),\n      children: []\n    },\n    token\n  )\n  this.data.inTable = true\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction exitTable(token) {\n  this.exit(token)\n  this.data.inTable = undefined\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction enterRow(token) {\n  this.enter({type: 'tableRow', children: []}, token)\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction exit(token) {\n  this.exit(token)\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction enterCell(token) {\n  this.enter({type: 'tableCell', children: []}, token)\n}\n\n// Overwrite the default code text data handler to unescape escaped pipes when\n// they are in tables.\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction exitCodeText(token) {\n  let value = this.resume()\n\n  if (this.data.inTable) {\n    value = value.replace(/\\\\([\\\\|])/g, replace)\n  }\n\n  const node = this.stack[this.stack.length - 1]\n  ;(0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(node.type === 'inlineCode')\n  node.value = value\n  this.exit(token)\n}\n\n/**\n * @param {string} $0\n * @param {string} $1\n * @returns {string}\n */\nfunction replace($0, $1) {\n  // Pipes work, backslashes don’t (but can’t escape pipes).\n  return $1 === '|' ? $1 : $0\n}\n\n/**\n * Create an extension for `mdast-util-to-markdown` to enable GFM tables in\n * markdown.\n *\n * @param {Options | null | undefined} [options]\n *   Configuration.\n * @returns {ToMarkdownExtension}\n *   Extension for `mdast-util-to-markdown` to enable GFM tables.\n */\nfunction gfmTableToMarkdown(options) {\n  const settings = options || {}\n  const padding = settings.tableCellPadding\n  const alignDelimiters = settings.tablePipeAlign\n  const stringLength = settings.stringLength\n  const around = padding ? ' ' : '|'\n\n  return {\n    unsafe: [\n      {character: '\\r', inConstruct: 'tableCell'},\n      {character: '\\n', inConstruct: 'tableCell'},\n      // A pipe, when followed by a tab or space (padding), or a dash or colon\n      // (unpadded delimiter row), could result in a table.\n      {atBreak: true, character: '|', after: '[\\t :-]'},\n      // A pipe in a cell must be encoded.\n      {character: '|', inConstruct: 'tableCell'},\n      // A colon must be followed by a dash, in which case it could start a\n      // delimiter row.\n      {atBreak: true, character: ':', after: '-'},\n      // A delimiter row can also start with a dash, when followed by more\n      // dashes, a colon, or a pipe.\n      // This is a stricter version than the built in check for lists, thematic\n      // breaks, and setex heading underlines though:\n      // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>\n      {atBreak: true, character: '-', after: '[:|-]'}\n    ],\n    handlers: {\n      inlineCode: inlineCodeWithTable,\n      table: handleTable,\n      tableCell: handleTableCell,\n      tableRow: handleTableRow\n    }\n  }\n\n  /**\n   * @type {ToMarkdownHandle}\n   * @param {Table} node\n   */\n  function handleTable(node, _, state, info) {\n    return serializeData(handleTableAsData(node, state, info), node.align)\n  }\n\n  /**\n   * This function isn’t really used normally, because we handle rows at the\n   * table level.\n   * But, if someone passes in a table row, this ensures we make somewhat sense.\n   *\n   * @type {ToMarkdownHandle}\n   * @param {TableRow} node\n   */\n  function handleTableRow(node, _, state, info) {\n    const row = handleTableRowAsData(node, state, info)\n    const value = serializeData([row])\n    // `markdown-table` will always add an align row\n    return value.slice(0, value.indexOf('\\n'))\n  }\n\n  /**\n   * @type {ToMarkdownHandle}\n   * @param {TableCell} node\n   */\n  function handleTableCell(node, _, state, info) {\n    const exit = state.enter('tableCell')\n    const subexit = state.enter('phrasing')\n    const value = state.containerPhrasing(node, {\n      ...info,\n      before: around,\n      after: around\n    })\n    subexit()\n    exit()\n    return value\n  }\n\n  /**\n   * @param {Array<Array<string>>} matrix\n   * @param {Array<string | null | undefined> | null | undefined} [align]\n   */\n  function serializeData(matrix, align) {\n    return (0,markdown_table__WEBPACK_IMPORTED_MODULE_1__.markdownTable)(matrix, {\n      align,\n      // @ts-expect-error: `markdown-table` types should support `null`.\n      alignDelimiters,\n      // @ts-expect-error: `markdown-table` types should support `null`.\n      padding,\n      // @ts-expect-error: `markdown-table` types should support `null`.\n      stringLength\n    })\n  }\n\n  /**\n   * @param {Table} node\n   * @param {State} state\n   * @param {Info} info\n   */\n  function handleTableAsData(node, state, info) {\n    const children = node.children\n    let index = -1\n    /** @type {Array<Array<string>>} */\n    const result = []\n    const subexit = state.enter('table')\n\n    while (++index < children.length) {\n      result[index] = handleTableRowAsData(children[index], state, info)\n    }\n\n    subexit()\n\n    return result\n  }\n\n  /**\n   * @param {TableRow} node\n   * @param {State} state\n   * @param {Info} info\n   */\n  function handleTableRowAsData(node, state, info) {\n    const children = node.children\n    let index = -1\n    /** @type {Array<string>} */\n    const result = []\n    const subexit = state.enter('tableRow')\n\n    while (++index < children.length) {\n      // Note: the positional info as used here is incorrect.\n      // Making it correct would be impossible due to aligning cells?\n      // And it would need copy/pasting `markdown-table` into this project.\n      result[index] = handleTableCell(children[index], node, state, info)\n    }\n\n    subexit()\n\n    return result\n  }\n\n  /**\n   * @type {ToMarkdownHandle}\n   * @param {InlineCode} node\n   */\n  function inlineCodeWithTable(node, parent, state) {\n    let value = mdast_util_to_markdown__WEBPACK_IMPORTED_MODULE_2__.handle.inlineCode(node, parent, state)\n\n    if (state.stack.includes('tableCell')) {\n      value = value.replace(/\\|/g, '\\\\$&')\n    }\n\n    return value\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1nZm0tdGFibGUvbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQSxhQUFhLDRCQUE0QjtBQUN6QyxhQUFhLHVCQUF1QjtBQUNwQyxhQUFhLDJCQUEyQjtBQUN4QyxhQUFhLDBCQUEwQjtBQUN2QztBQUNBLGFBQWEsa0NBQWtDO0FBQy9DO0FBQ0EsYUFBYSxtREFBbUQ7QUFDaEUsYUFBYSw4Q0FBOEM7QUFDM0QsYUFBYSwyQ0FBMkM7QUFDeEQ7QUFDQSxhQUFhLDBDQUEwQztBQUN2RCxhQUFhLHlDQUF5QztBQUN0RCxhQUFhLHdDQUF3QztBQUNyRCxhQUFhLHVDQUF1QztBQUNwRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDRCQUE0QjtBQUMxQztBQUNBO0FBQ0EsY0FBYyw0QkFBNEI7QUFDMUM7QUFDQSxjQUFjLHlEQUF5RDtBQUN2RTtBQUNBO0FBQ0E7O0FBRW1DO0FBQ1M7QUFDVTs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVixVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsRUFBRSwyQ0FBTTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1YsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1YsVUFBVTtBQUNWO0FBQ0E7QUFDQSxjQUFjLCtCQUErQjtBQUM3Qzs7QUFFQTtBQUNBLFVBQVU7QUFDVixVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1YsVUFBVTtBQUNWO0FBQ0E7QUFDQSxjQUFjLGdDQUFnQztBQUM5Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLDJDQUFNO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsNEJBQTRCO0FBQ3ZDO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU8sMENBQTBDO0FBQ2pELE9BQU8sMENBQTBDO0FBQ2pEO0FBQ0E7QUFDQSxPQUFPLGdEQUFnRDtBQUN2RDtBQUNBLE9BQU8seUNBQXlDO0FBQ2hEO0FBQ0E7QUFDQSxPQUFPLDBDQUEwQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1osYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osYUFBYSxVQUFVO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaLGFBQWEsV0FBVztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxzQkFBc0I7QUFDbkMsYUFBYSxxREFBcUQ7QUFDbEU7QUFDQTtBQUNBLFdBQVcsNkRBQWE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsc0JBQXNCO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLFVBQVU7QUFDdkIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZUFBZTtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaLGFBQWEsWUFBWTtBQUN6QjtBQUNBO0FBQ0EsZ0JBQWdCLDBEQUFlOztBQUUvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1nZm0tdGFibGUvbGliL2luZGV4LmpzPzY0NTEiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdCcpLklubGluZUNvZGV9IElubGluZUNvZGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0JykuVGFibGV9IFRhYmxlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdCcpLlRhYmxlQ2VsbH0gVGFibGVDZWxsXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdCcpLlRhYmxlUm93fSBUYWJsZVJvd1xuICpcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21hcmtkb3duLXRhYmxlJykuT3B0aW9uc30gTWFya2Rvd25UYWJsZU9wdGlvbnNcbiAqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLWZyb20tbWFya2Rvd24nKS5Db21waWxlQ29udGV4dH0gQ29tcGlsZUNvbnRleHRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0LXV0aWwtZnJvbS1tYXJrZG93bicpLkV4dGVuc2lvbn0gRnJvbU1hcmtkb3duRXh0ZW5zaW9uXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLWZyb20tbWFya2Rvd24nKS5IYW5kbGV9IEZyb21NYXJrZG93bkhhbmRsZVxuICpcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0LXV0aWwtdG8tbWFya2Rvd24nKS5PcHRpb25zfSBUb01hcmtkb3duRXh0ZW5zaW9uXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLXRvLW1hcmtkb3duJykuSGFuZGxlfSBUb01hcmtkb3duSGFuZGxlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLXRvLW1hcmtkb3duJykuU3RhdGV9IFN0YXRlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLXRvLW1hcmtkb3duJykuSW5mb30gSW5mb1xuICovXG5cbi8qKlxuICogQHR5cGVkZWYgT3B0aW9uc1xuICogICBDb25maWd1cmF0aW9uLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW3RhYmxlQ2VsbFBhZGRpbmc9dHJ1ZV1cbiAqICAgV2hldGhlciB0byBhZGQgYSBzcGFjZSBvZiBwYWRkaW5nIGJldHdlZW4gZGVsaW1pdGVycyBhbmQgY2VsbHMgKGRlZmF1bHQ6XG4gKiAgIGB0cnVlYCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbdGFibGVQaXBlQWxpZ249dHJ1ZV1cbiAqICAgV2hldGhlciB0byBhbGlnbiB0aGUgZGVsaW1pdGVycyAoZGVmYXVsdDogYHRydWVgKS5cbiAqIEBwcm9wZXJ0eSB7TWFya2Rvd25UYWJsZU9wdGlvbnNbJ3N0cmluZ0xlbmd0aCddIHwgbnVsbCB8IHVuZGVmaW5lZH0gW3N0cmluZ0xlbmd0aF1cbiAqICAgRnVuY3Rpb24gdG8gZGV0ZWN0IHRoZSBsZW5ndGggb2YgdGFibGUgY2VsbCBjb250ZW50LCB1c2VkIHdoZW4gYWxpZ25pbmdcbiAqICAgdGhlIGRlbGltaXRlcnMgYmV0d2VlbiBjZWxscyAob3B0aW9uYWwpLlxuICovXG5cbmltcG9ydCB7b2sgYXMgYXNzZXJ0fSBmcm9tICdkZXZsb3AnXG5pbXBvcnQge21hcmtkb3duVGFibGV9IGZyb20gJ21hcmtkb3duLXRhYmxlJ1xuaW1wb3J0IHtkZWZhdWx0SGFuZGxlcnN9IGZyb20gJ21kYXN0LXV0aWwtdG8tbWFya2Rvd24nXG5cbi8qKlxuICogQ3JlYXRlIGFuIGV4dGVuc2lvbiBmb3IgYG1kYXN0LXV0aWwtZnJvbS1tYXJrZG93bmAgdG8gZW5hYmxlIEdGTSB0YWJsZXMgaW5cbiAqIG1hcmtkb3duLlxuICpcbiAqIEByZXR1cm5zIHtGcm9tTWFya2Rvd25FeHRlbnNpb259XG4gKiAgIEV4dGVuc2lvbiBmb3IgYG1kYXN0LXV0aWwtZnJvbS1tYXJrZG93bmAgdG8gZW5hYmxlIEdGTSB0YWJsZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZm1UYWJsZUZyb21NYXJrZG93bigpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnRlcjoge1xuICAgICAgdGFibGU6IGVudGVyVGFibGUsXG4gICAgICB0YWJsZURhdGE6IGVudGVyQ2VsbCxcbiAgICAgIHRhYmxlSGVhZGVyOiBlbnRlckNlbGwsXG4gICAgICB0YWJsZVJvdzogZW50ZXJSb3dcbiAgICB9LFxuICAgIGV4aXQ6IHtcbiAgICAgIGNvZGVUZXh0OiBleGl0Q29kZVRleHQsXG4gICAgICB0YWJsZTogZXhpdFRhYmxlLFxuICAgICAgdGFibGVEYXRhOiBleGl0LFxuICAgICAgdGFibGVIZWFkZXI6IGV4aXQsXG4gICAgICB0YWJsZVJvdzogZXhpdFxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAqIEB0eXBlIHtGcm9tTWFya2Rvd25IYW5kbGV9XG4gKi9cbmZ1bmN0aW9uIGVudGVyVGFibGUodG9rZW4pIHtcbiAgY29uc3QgYWxpZ24gPSB0b2tlbi5fYWxpZ25cbiAgYXNzZXJ0KGFsaWduLCAnZXhwZWN0ZWQgYF9hbGlnbmAgb24gdGFibGUnKVxuICB0aGlzLmVudGVyKFxuICAgIHtcbiAgICAgIHR5cGU6ICd0YWJsZScsXG4gICAgICBhbGlnbjogYWxpZ24ubWFwKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkID09PSAnbm9uZScgPyBudWxsIDogZFxuICAgICAgfSksXG4gICAgICBjaGlsZHJlbjogW11cbiAgICB9LFxuICAgIHRva2VuXG4gIClcbiAgdGhpcy5kYXRhLmluVGFibGUgPSB0cnVlXG59XG5cbi8qKlxuICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICogQHR5cGUge0Zyb21NYXJrZG93bkhhbmRsZX1cbiAqL1xuZnVuY3Rpb24gZXhpdFRhYmxlKHRva2VuKSB7XG4gIHRoaXMuZXhpdCh0b2tlbilcbiAgdGhpcy5kYXRhLmluVGFibGUgPSB1bmRlZmluZWRcbn1cblxuLyoqXG4gKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gKiBAdHlwZSB7RnJvbU1hcmtkb3duSGFuZGxlfVxuICovXG5mdW5jdGlvbiBlbnRlclJvdyh0b2tlbikge1xuICB0aGlzLmVudGVyKHt0eXBlOiAndGFibGVSb3cnLCBjaGlsZHJlbjogW119LCB0b2tlbilcbn1cblxuLyoqXG4gKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gKiBAdHlwZSB7RnJvbU1hcmtkb3duSGFuZGxlfVxuICovXG5mdW5jdGlvbiBleGl0KHRva2VuKSB7XG4gIHRoaXMuZXhpdCh0b2tlbilcbn1cblxuLyoqXG4gKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gKiBAdHlwZSB7RnJvbU1hcmtkb3duSGFuZGxlfVxuICovXG5mdW5jdGlvbiBlbnRlckNlbGwodG9rZW4pIHtcbiAgdGhpcy5lbnRlcih7dHlwZTogJ3RhYmxlQ2VsbCcsIGNoaWxkcmVuOiBbXX0sIHRva2VuKVxufVxuXG4vLyBPdmVyd3JpdGUgdGhlIGRlZmF1bHQgY29kZSB0ZXh0IGRhdGEgaGFuZGxlciB0byB1bmVzY2FwZSBlc2NhcGVkIHBpcGVzIHdoZW5cbi8vIHRoZXkgYXJlIGluIHRhYmxlcy5cbi8qKlxuICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICogQHR5cGUge0Zyb21NYXJrZG93bkhhbmRsZX1cbiAqL1xuZnVuY3Rpb24gZXhpdENvZGVUZXh0KHRva2VuKSB7XG4gIGxldCB2YWx1ZSA9IHRoaXMucmVzdW1lKClcblxuICBpZiAodGhpcy5kYXRhLmluVGFibGUpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xcXFwoW1xcXFx8XSkvZywgcmVwbGFjZSlcbiAgfVxuXG4gIGNvbnN0IG5vZGUgPSB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV1cbiAgYXNzZXJ0KG5vZGUudHlwZSA9PT0gJ2lubGluZUNvZGUnKVxuICBub2RlLnZhbHVlID0gdmFsdWVcbiAgdGhpcy5leGl0KHRva2VuKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSAkMFxuICogQHBhcmFtIHtzdHJpbmd9ICQxXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiByZXBsYWNlKCQwLCAkMSkge1xuICAvLyBQaXBlcyB3b3JrLCBiYWNrc2xhc2hlcyBkb27igJl0IChidXQgY2Fu4oCZdCBlc2NhcGUgcGlwZXMpLlxuICByZXR1cm4gJDEgPT09ICd8JyA/ICQxIDogJDBcbn1cblxuLyoqXG4gKiBDcmVhdGUgYW4gZXh0ZW5zaW9uIGZvciBgbWRhc3QtdXRpbC10by1tYXJrZG93bmAgdG8gZW5hYmxlIEdGTSB0YWJsZXMgaW5cbiAqIG1hcmtkb3duLlxuICpcbiAqIEBwYXJhbSB7T3B0aW9ucyB8IG51bGwgfCB1bmRlZmluZWR9IFtvcHRpb25zXVxuICogICBDb25maWd1cmF0aW9uLlxuICogQHJldHVybnMge1RvTWFya2Rvd25FeHRlbnNpb259XG4gKiAgIEV4dGVuc2lvbiBmb3IgYG1kYXN0LXV0aWwtdG8tbWFya2Rvd25gIHRvIGVuYWJsZSBHRk0gdGFibGVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2ZtVGFibGVUb01hcmtkb3duKG9wdGlvbnMpIHtcbiAgY29uc3Qgc2V0dGluZ3MgPSBvcHRpb25zIHx8IHt9XG4gIGNvbnN0IHBhZGRpbmcgPSBzZXR0aW5ncy50YWJsZUNlbGxQYWRkaW5nXG4gIGNvbnN0IGFsaWduRGVsaW1pdGVycyA9IHNldHRpbmdzLnRhYmxlUGlwZUFsaWduXG4gIGNvbnN0IHN0cmluZ0xlbmd0aCA9IHNldHRpbmdzLnN0cmluZ0xlbmd0aFxuICBjb25zdCBhcm91bmQgPSBwYWRkaW5nID8gJyAnIDogJ3wnXG5cbiAgcmV0dXJuIHtcbiAgICB1bnNhZmU6IFtcbiAgICAgIHtjaGFyYWN0ZXI6ICdcXHInLCBpbkNvbnN0cnVjdDogJ3RhYmxlQ2VsbCd9LFxuICAgICAge2NoYXJhY3RlcjogJ1xcbicsIGluQ29uc3RydWN0OiAndGFibGVDZWxsJ30sXG4gICAgICAvLyBBIHBpcGUsIHdoZW4gZm9sbG93ZWQgYnkgYSB0YWIgb3Igc3BhY2UgKHBhZGRpbmcpLCBvciBhIGRhc2ggb3IgY29sb25cbiAgICAgIC8vICh1bnBhZGRlZCBkZWxpbWl0ZXIgcm93KSwgY291bGQgcmVzdWx0IGluIGEgdGFibGUuXG4gICAgICB7YXRCcmVhazogdHJ1ZSwgY2hhcmFjdGVyOiAnfCcsIGFmdGVyOiAnW1xcdCA6LV0nfSxcbiAgICAgIC8vIEEgcGlwZSBpbiBhIGNlbGwgbXVzdCBiZSBlbmNvZGVkLlxuICAgICAge2NoYXJhY3RlcjogJ3wnLCBpbkNvbnN0cnVjdDogJ3RhYmxlQ2VsbCd9LFxuICAgICAgLy8gQSBjb2xvbiBtdXN0IGJlIGZvbGxvd2VkIGJ5IGEgZGFzaCwgaW4gd2hpY2ggY2FzZSBpdCBjb3VsZCBzdGFydCBhXG4gICAgICAvLyBkZWxpbWl0ZXIgcm93LlxuICAgICAge2F0QnJlYWs6IHRydWUsIGNoYXJhY3RlcjogJzonLCBhZnRlcjogJy0nfSxcbiAgICAgIC8vIEEgZGVsaW1pdGVyIHJvdyBjYW4gYWxzbyBzdGFydCB3aXRoIGEgZGFzaCwgd2hlbiBmb2xsb3dlZCBieSBtb3JlXG4gICAgICAvLyBkYXNoZXMsIGEgY29sb24sIG9yIGEgcGlwZS5cbiAgICAgIC8vIFRoaXMgaXMgYSBzdHJpY3RlciB2ZXJzaW9uIHRoYW4gdGhlIGJ1aWx0IGluIGNoZWNrIGZvciBsaXN0cywgdGhlbWF0aWNcbiAgICAgIC8vIGJyZWFrcywgYW5kIHNldGV4IGhlYWRpbmcgdW5kZXJsaW5lcyB0aG91Z2g6XG4gICAgICAvLyA8aHR0cHM6Ly9naXRodWIuY29tL3N5bnRheC10cmVlL21kYXN0LXV0aWwtdG8tbWFya2Rvd24vYmxvYi81MWEyMDM4L2xpYi91bnNhZmUuanMjTDU3PlxuICAgICAge2F0QnJlYWs6IHRydWUsIGNoYXJhY3RlcjogJy0nLCBhZnRlcjogJ1s6fC1dJ31cbiAgICBdLFxuICAgIGhhbmRsZXJzOiB7XG4gICAgICBpbmxpbmVDb2RlOiBpbmxpbmVDb2RlV2l0aFRhYmxlLFxuICAgICAgdGFibGU6IGhhbmRsZVRhYmxlLFxuICAgICAgdGFibGVDZWxsOiBoYW5kbGVUYWJsZUNlbGwsXG4gICAgICB0YWJsZVJvdzogaGFuZGxlVGFibGVSb3dcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge1RvTWFya2Rvd25IYW5kbGV9XG4gICAqIEBwYXJhbSB7VGFibGV9IG5vZGVcbiAgICovXG4gIGZ1bmN0aW9uIGhhbmRsZVRhYmxlKG5vZGUsIF8sIHN0YXRlLCBpbmZvKSB7XG4gICAgcmV0dXJuIHNlcmlhbGl6ZURhdGEoaGFuZGxlVGFibGVBc0RhdGEobm9kZSwgc3RhdGUsIGluZm8pLCBub2RlLmFsaWduKVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gaXNu4oCZdCByZWFsbHkgdXNlZCBub3JtYWxseSwgYmVjYXVzZSB3ZSBoYW5kbGUgcm93cyBhdCB0aGVcbiAgICogdGFibGUgbGV2ZWwuXG4gICAqIEJ1dCwgaWYgc29tZW9uZSBwYXNzZXMgaW4gYSB0YWJsZSByb3csIHRoaXMgZW5zdXJlcyB3ZSBtYWtlIHNvbWV3aGF0IHNlbnNlLlxuICAgKlxuICAgKiBAdHlwZSB7VG9NYXJrZG93bkhhbmRsZX1cbiAgICogQHBhcmFtIHtUYWJsZVJvd30gbm9kZVxuICAgKi9cbiAgZnVuY3Rpb24gaGFuZGxlVGFibGVSb3cobm9kZSwgXywgc3RhdGUsIGluZm8pIHtcbiAgICBjb25zdCByb3cgPSBoYW5kbGVUYWJsZVJvd0FzRGF0YShub2RlLCBzdGF0ZSwgaW5mbylcbiAgICBjb25zdCB2YWx1ZSA9IHNlcmlhbGl6ZURhdGEoW3Jvd10pXG4gICAgLy8gYG1hcmtkb3duLXRhYmxlYCB3aWxsIGFsd2F5cyBhZGQgYW4gYWxpZ24gcm93XG4gICAgcmV0dXJuIHZhbHVlLnNsaWNlKDAsIHZhbHVlLmluZGV4T2YoJ1xcbicpKVxuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtUb01hcmtkb3duSGFuZGxlfVxuICAgKiBAcGFyYW0ge1RhYmxlQ2VsbH0gbm9kZVxuICAgKi9cbiAgZnVuY3Rpb24gaGFuZGxlVGFibGVDZWxsKG5vZGUsIF8sIHN0YXRlLCBpbmZvKSB7XG4gICAgY29uc3QgZXhpdCA9IHN0YXRlLmVudGVyKCd0YWJsZUNlbGwnKVxuICAgIGNvbnN0IHN1YmV4aXQgPSBzdGF0ZS5lbnRlcigncGhyYXNpbmcnKVxuICAgIGNvbnN0IHZhbHVlID0gc3RhdGUuY29udGFpbmVyUGhyYXNpbmcobm9kZSwge1xuICAgICAgLi4uaW5mbyxcbiAgICAgIGJlZm9yZTogYXJvdW5kLFxuICAgICAgYWZ0ZXI6IGFyb3VuZFxuICAgIH0pXG4gICAgc3ViZXhpdCgpXG4gICAgZXhpdCgpXG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtBcnJheTxBcnJheTxzdHJpbmc+Pn0gbWF0cml4XG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZD4gfCBudWxsIHwgdW5kZWZpbmVkfSBbYWxpZ25dXG4gICAqL1xuICBmdW5jdGlvbiBzZXJpYWxpemVEYXRhKG1hdHJpeCwgYWxpZ24pIHtcbiAgICByZXR1cm4gbWFya2Rvd25UYWJsZShtYXRyaXgsIHtcbiAgICAgIGFsaWduLFxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvcjogYG1hcmtkb3duLXRhYmxlYCB0eXBlcyBzaG91bGQgc3VwcG9ydCBgbnVsbGAuXG4gICAgICBhbGlnbkRlbGltaXRlcnMsXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBgbWFya2Rvd24tdGFibGVgIHR5cGVzIHNob3VsZCBzdXBwb3J0IGBudWxsYC5cbiAgICAgIHBhZGRpbmcsXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBgbWFya2Rvd24tdGFibGVgIHR5cGVzIHNob3VsZCBzdXBwb3J0IGBudWxsYC5cbiAgICAgIHN0cmluZ0xlbmd0aFxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtUYWJsZX0gbm9kZVxuICAgKiBAcGFyYW0ge1N0YXRlfSBzdGF0ZVxuICAgKiBAcGFyYW0ge0luZm99IGluZm9cbiAgICovXG4gIGZ1bmN0aW9uIGhhbmRsZVRhYmxlQXNEYXRhKG5vZGUsIHN0YXRlLCBpbmZvKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuXG4gICAgbGV0IGluZGV4ID0gLTFcbiAgICAvKiogQHR5cGUge0FycmF5PEFycmF5PHN0cmluZz4+fSAqL1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdXG4gICAgY29uc3Qgc3ViZXhpdCA9IHN0YXRlLmVudGVyKCd0YWJsZScpXG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgcmVzdWx0W2luZGV4XSA9IGhhbmRsZVRhYmxlUm93QXNEYXRhKGNoaWxkcmVuW2luZGV4XSwgc3RhdGUsIGluZm8pXG4gICAgfVxuXG4gICAgc3ViZXhpdCgpXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtUYWJsZVJvd30gbm9kZVxuICAgKiBAcGFyYW0ge1N0YXRlfSBzdGF0ZVxuICAgKiBAcGFyYW0ge0luZm99IGluZm9cbiAgICovXG4gIGZ1bmN0aW9uIGhhbmRsZVRhYmxlUm93QXNEYXRhKG5vZGUsIHN0YXRlLCBpbmZvKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuXG4gICAgbGV0IGluZGV4ID0gLTFcbiAgICAvKiogQHR5cGUge0FycmF5PHN0cmluZz59ICovXG4gICAgY29uc3QgcmVzdWx0ID0gW11cbiAgICBjb25zdCBzdWJleGl0ID0gc3RhdGUuZW50ZXIoJ3RhYmxlUm93JylcblxuICAgIHdoaWxlICgrK2luZGV4IDwgY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAvLyBOb3RlOiB0aGUgcG9zaXRpb25hbCBpbmZvIGFzIHVzZWQgaGVyZSBpcyBpbmNvcnJlY3QuXG4gICAgICAvLyBNYWtpbmcgaXQgY29ycmVjdCB3b3VsZCBiZSBpbXBvc3NpYmxlIGR1ZSB0byBhbGlnbmluZyBjZWxscz9cbiAgICAgIC8vIEFuZCBpdCB3b3VsZCBuZWVkIGNvcHkvcGFzdGluZyBgbWFya2Rvd24tdGFibGVgIGludG8gdGhpcyBwcm9qZWN0LlxuICAgICAgcmVzdWx0W2luZGV4XSA9IGhhbmRsZVRhYmxlQ2VsbChjaGlsZHJlbltpbmRleF0sIG5vZGUsIHN0YXRlLCBpbmZvKVxuICAgIH1cblxuICAgIHN1YmV4aXQoKVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtUb01hcmtkb3duSGFuZGxlfVxuICAgKiBAcGFyYW0ge0lubGluZUNvZGV9IG5vZGVcbiAgICovXG4gIGZ1bmN0aW9uIGlubGluZUNvZGVXaXRoVGFibGUobm9kZSwgcGFyZW50LCBzdGF0ZSkge1xuICAgIGxldCB2YWx1ZSA9IGRlZmF1bHRIYW5kbGVycy5pbmxpbmVDb2RlKG5vZGUsIHBhcmVudCwgc3RhdGUpXG5cbiAgICBpZiAoc3RhdGUuc3RhY2suaW5jbHVkZXMoJ3RhYmxlQ2VsbCcpKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xcfC9nLCAnXFxcXCQmJylcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mdast-util-gfm-table/lib/index.js\n");

/***/ })

};
;