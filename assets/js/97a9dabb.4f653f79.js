"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[1512],{

/***/ 8453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }),

/***/ 9024:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/blog/statement-to-insights-part2","source":"@site/blog/2024-11-13-Part_2_Converting_Bank_Statements_to_Insights_Automating_Future_Data_Collection_using_Gmail_Zapier_and_Google_Sheets/story.md","title":"Converting Bank Statements to Insights: Automating Future Data Collection using Gmail Zapier and Google Sheets Part 2","description":"Read on Medium","date":"2024-11-13T00:00:00.000Z","tags":[{"inline":false,"label":"Python","permalink":"/blog/tags/python","description":"Python tag description"},{"inline":false,"label":"Automation","permalink":"/blog/tags/automation","description":"Automation tag description"}],"readingTime":12.99,"hasTruncateMarker":true,"authors":[{"name":"Ajay T Shaju","title":"AI & DS Engineer","url":"https://004ajay.github.io/","page":{"permalink":"/blog/authors/ajay"},"socials":{"linkedin":"https://www.linkedin.com/in/ajay-t-shaju/","github":"https://github.com/004ajay","medium":"https://medium.com/@ajaytshaju","x":"https://x.com/004ajayt"},"imageURL":"https://github.com/004ajay.png","key":"ajay"}],"frontMatter":{"slug":"statement-to-insights-part2","title":"Converting Bank Statements to Insights: Automating Future Data Collection using Gmail Zapier and Google Sheets Part 2","authors":["ajay"],"tags":["python","automation"]},"unlisted":false,"prevItem":{"title":"Must Know Windows Key Shortcuts for Your Daily Tasks: A Story like Guide","permalink":"/blog/windows-key-shortcuts"},"nextItem":{"title":"Converting Bank Statements to Insights: Automating Future Data Collection using Gmail Zapier and Google Sheets Part 1","permalink":"/blog/statement-to-insights-part1"}}');

/***/ }),

/***/ 9162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2024_11_13_part_2_converting_bank_statements_to_insights_automating_future_data_collection_using_gmail_zapier_and_google_sheets_story_md_559_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2024_11_13_part_2_converting_bank_statements_to_insights_automating_future_data_collection_using_gmail_zapier_and_google_sheets_story_md_559_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9024);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8453);


const frontMatter = {
	slug: 'statement-to-insights-part2',
	title: 'Converting Bank Statements to Insights: Automating Future Data Collection using Gmail Zapier and Google Sheets Part 2',
	authors: [
		'ajay'
	],
	tags: [
		'python',
		'automation'
	]
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Read on ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://medium.com/@ajaytshaju/converting-bank-statements-to-insights-automating-continuous-data-collection-and-building-a-c7e474f329b1",
        children: "Medium"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Before starting Part 2, make sure you catch up on Part 1, where I share the groundwork for transforming raw bank statements — the data collection, Google Sheets and Llama LLM for data cleanup, failed attempts, and learning many valuable techniques — click to read Part 1!"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ })

}]);