"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[858],{

/***/ 1665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_resume_experience_md_553_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-resume-experience-md-553.json
const site_docs_resume_experience_md_553_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"resume/Experience","title":"Experience","description":"ITC LSTC | Data Science Trainee*","source":"@site/docs/resume/Experience.md","sourceDirName":"resume","slug":"/resume/Experience","permalink":"/docs/resume/Experience","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"Experience","title":"Experience","sidebar_label":"Experience"},"sidebar":"tutorialSidebar","previous":{"title":"Education","permalink":"/docs/resume/Education"},"next":{"title":"Languages","permalink":"/docs/resume/Languages"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/resume/Experience.md


const frontMatter = {
	id: 'Experience',
	title: 'Experience',
	sidebar_label: 'Experience'
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "ITC LSTC | Data Science Trainee"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Peenya, Bengaluru, India | 2nd Dec 2024 ‑ Present"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Work Done"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["• ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deployed Large Language Model Locally"
      }), " in the internal network using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Ollama and Open WebUI"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["• ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Automated IT security checks"
      }), " across work computers using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Python, Batch (Windows), and Bash (Linux)"
      }), ", implementing a ", (0,jsx_runtime.jsx)(_components.em, {
        children: "master‑client system with scheduled execution via cron jobs, reducing redundant IT security tasks by 4‑5 hours per week."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["• Developed a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "web scraping pipeline"
      }), " that extracted structured data from three large medicine information websites, ", (0,jsx_runtime.jsx)(_components.em, {
        children: "improving\nworkflow efficiency by 50% through parallel processing and optimized requests."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["• ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Engineered a high‑speed PDF extraction system"
      }), " that structured complex data with a ", (0,jsx_runtime.jsx)(_components.em, {
        children: "7‑second processing time for a 40‑page document, ensuring high accuracy and efficiency."
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
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


/***/ })

}]);