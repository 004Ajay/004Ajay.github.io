"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[2660],{

/***/ 1241:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Car Data Analysis to find best car for my needs, (Image by Author, Python Logo from Wikipedia)-e5fb56e7d2a75e06683053608675619a.webp");

/***/ }),

/***/ 2180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2024_10_21_data_driven_car_buying_how_i_analyzed_the_best_options_using_python_story_md_94f_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2024_10_21_data_driven_car_buying_how_i_analyzed_the_best_options_using_python_story_md_94f_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9854);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8453);


const frontMatter = {
	slug: 'data-driven-car-buying',
	title: 'Data-Driven Car Buying: How I Analyzed the Best Options Using Python',
	authors: [
		'ajay'
	],
	tags: [
		'data',
		'python'
	]
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "The backstory",
  "id": "the-backstory",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    img: "img",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Read on ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://medium.com/@ajaytshaju/data-driven-car-buying-how-i-analyzed-the-best-options-using-python-3e3a15c5f8eb",
        children: "Medium"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Car Data Analysis to find best car for my needs",
        src: (__webpack_require__(1241)/* ["default"] */ .A) + "",
        width: "1898",
        height: "726"
      }), "\nCar Data Analysis to find best car for my needs, (Image by Author, Python Logo from Wikipedia)"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "the-backstory",
      children: "The backstory"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Since the start of 2024, there has been a discussion in my home regarding purchasing a new car, but the talks and planning have gone on without a final decision. But when my current car started costing a good amount just from routine checkups and other services, the talk rose again to full power. Just like every time, it was my responsibility to find the latest and best car based on some constraints, but this time I thought of analyzing an Indian Cars dataset (get the data ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://www.kaggle.com/datasets/atharvataras/indian-car-market-2024?select=india_cars_2024.csv",
        children: "here"
      }), ") using Python rather than searching on Google and filtering through websites."]
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

/***/ 9854:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/blog/data-driven-car-buying","source":"@site/blog/2024-10-21-Data_Driven_Car_Buying_How_I_Analyzed_the_Best_Options_Using_Python/story.md","title":"Data-Driven Car Buying: How I Analyzed the Best Options Using Python","description":"Read on Medium","date":"2024-10-21T00:00:00.000Z","tags":[{"inline":false,"label":"Data","permalink":"/blog/tags/data","description":"Data tag description"},{"inline":false,"label":"Python","permalink":"/blog/tags/python","description":"Python tag description"}],"readingTime":9.7,"hasTruncateMarker":true,"authors":[{"name":"Ajay T Shaju","title":"AI & DS Engineer","url":"https://004ajay.github.io/","page":{"permalink":"/blog/authors/ajay"},"socials":{"linkedin":"https://www.linkedin.com/in/ajay-t-shaju/","github":"https://github.com/004ajay","medium":"https://medium.com/@ajaytshaju","x":"https://x.com/004ajayt"},"imageURL":"https://github.com/004ajay.png","key":"ajay"}],"frontMatter":{"slug":"data-driven-car-buying","title":"Data-Driven Car Buying: How I Analyzed the Best Options Using Python","authors":["ajay"],"tags":["data","python"]},"unlisted":false,"prevItem":{"title":"Step by Step Guide for Creating a Reading Habit Tracker in Google Sheets","permalink":"/blog/reading-habit-tracker-google-sheets"},"nextItem":{"title":"How to use TensorFlow with GPU on Windows for Heavy Tasks (2024)","permalink":"/blog/tf-heavy"}}');

/***/ })

}]);