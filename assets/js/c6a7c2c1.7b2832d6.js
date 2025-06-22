"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[8415],{

/***/ 603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2024_11_25_must_know_windows_key_shortcuts_for_your_daily_tasks_a_story_like_guide_story_md_a12_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2024_11_25_must_know_windows_key_shortcuts_for_your_daily_tasks_a_story_like_guide_story_md_a12_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8682);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8453);


const frontMatter = {
	slug: 'windows-key-shortcuts',
	title: 'Must Know Windows Key Shortcuts for Your Daily Tasks: A Story like Guide',
	authors: [
		'ajay'
	],
	tags: [
		'windows',
		'shortcuts'
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
        href: "https://medium.com/@ajaytshaju/must-know-windows-key-shortcuts-for-your-daily-tasks-a-story-like-guide-97153461faed",
        children: "Medium"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["About 73% of world computer users use Windows as their computer’s operating system(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://gs.statcounter.com/os-market-share/desktop/worldwide/#daily-20240921-20241020",
        children: "see source"
      }), "). In this group, 35% of users use Windows 11 (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://gs.statcounter.com/windows-version-market-share/desktop/worldwide/#monthly-202106-202410",
        children: "see source"
      }), "). In this story-like guide, I will explain some useful Windows key shortcuts we can use daily!"]
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



/***/ }),

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

/***/ 8682:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/blog/windows-key-shortcuts","source":"@site/blog/2024-11-25-Must_Know_Windows_Key_Shortcuts_for_Your_Daily_Tasks_A_Story_like_Guide/story.md","title":"Must Know Windows Key Shortcuts for Your Daily Tasks: A Story like Guide","description":"Read on Medium","date":"2024-11-25T00:00:00.000Z","tags":[{"inline":false,"label":"Windows","permalink":"/blog/tags/windows","description":"Windows tag description"},{"inline":false,"label":"Shortcuts","permalink":"/blog/tags/shortcuts","description":"Shortcuts tag description"}],"readingTime":6.67,"hasTruncateMarker":true,"authors":[{"name":"Ajay T Shaju","title":"AI & DS Engineer","url":"https://004ajay.github.io/","page":{"permalink":"/blog/authors/ajay"},"socials":{"linkedin":"https://www.linkedin.com/in/ajay-t-shaju/","github":"https://github.com/004ajay","medium":"https://medium.com/@ajaytshaju","x":"https://x.com/004ajayt"},"imageURL":"https://github.com/004ajay.png","key":"ajay"}],"frontMatter":{"slug":"windows-key-shortcuts","title":"Must Know Windows Key Shortcuts for Your Daily Tasks: A Story like Guide","authors":["ajay"],"tags":["windows","shortcuts"]},"unlisted":false,"prevItem":{"title":"How AI can be Dangerous to YouTubers but Helpful to Viewers","permalink":"/blog/ai-dangerous-to-youtubers"},"nextItem":{"title":"Converting Bank Statements to Insights: Automating Future Data Collection using Gmail Zapier and Google Sheets Part 2","permalink":"/blog/statement-to-insights-part2"}}');

/***/ })

}]);