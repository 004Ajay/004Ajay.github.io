"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[7098],{

/***/ 2693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2024_05_07_how_to_use_tensor_flow_with_gpu_on_windows_for_heavy_tasks_2024_story_md_cc3_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2024_05_07_how_to_use_tensor_flow_with_gpu_on_windows_for_heavy_tasks_2024_story_md_cc3_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3154);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8453);


const frontMatter = {
	slug: 'tf-heavy',
	title: 'How to use TensorFlow with GPU on Windows for Heavy Tasks (2024)',
	authors: [
		'ajay'
	],
	tags: [
		'tensorflow',
		'gpu'
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
        href: "https://medium.com/@ajaytshaju/how-to-use-tensorflow-with-gpu-on-windows-for-heavy-tasks-2024-a1536448b0fe",
        children: "Medium"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["In the last blog ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://medium.com/@ajaytshaju/how-to-use-gpu-with-tensorflow-on-windows-b1726a28ab3d",
        children: "“How to use TensorFlow with GPU on Windows for minimal tasks — in the most simple way(2024)”"
      }), " I discussed how to use Microsoft TensorFlow-DirectML Plugin to make GPU available to TensorFlow(TF) in Windows, it is good for lightweight programming tasks that requiring GPU, but not good for programs that take too much graphics memory and requires heavy loading(as these frameworks need drivers and applications like CUDA and cuDNN to allocate memory for processing the data and task). So in this blog, we are going to deal with downloading and installing the correct versions of TensorFlow, CUDA, cuDNN, Visual Studio Integration, and other driver files to make GPU accessible to TensorFlow, for doing heavy tasks like Video Processing, High-Resolution Image Processing, and Deep Learning*."]
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

/***/ 3154:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/blog/tf-heavy","source":"@site/blog/2024-05-07-How_to_use_TensorFlow_with_GPU_on_Windows_for_Heavy_Tasks_2024/story.md","title":"How to use TensorFlow with GPU on Windows for Heavy Tasks (2024)","description":"Read on Medium","date":"2024-05-07T00:00:00.000Z","tags":[{"inline":false,"label":"TensorFlow","permalink":"/blog/tags/tensorflow","description":"TensorFlow tag description"},{"inline":false,"label":"GPU","permalink":"/blog/tags/gpu","description":"GPU tag description"}],"readingTime":12.66,"hasTruncateMarker":true,"authors":[{"name":"Ajay T Shaju","title":"AI & DS Engineer","url":"https://004ajay.github.io/","page":{"permalink":"/blog/authors/ajay"},"socials":{"linkedin":"https://www.linkedin.com/in/ajay-t-shaju/","github":"https://github.com/004ajay","medium":"https://medium.com/@ajaytshaju","x":"https://x.com/004ajayt"},"imageURL":"https://github.com/004ajay.png","key":"ajay"}],"frontMatter":{"slug":"tf-heavy","title":"How to use TensorFlow with GPU on Windows for Heavy Tasks (2024)","authors":["ajay"],"tags":["tensorflow","gpu"]},"unlisted":false,"prevItem":{"title":"Data-Driven Car Buying: How I Analyzed the Best Options Using Python","permalink":"/blog/data-driven-car-buying"},"nextItem":{"title":"How to use TensorFlow with GPU on Windows for minimal tasks— in the most simple way(2024)","permalink":"/blog/tf-minimal"}}');

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


/***/ })

}]);