"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[8863],{

/***/ 1357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_tutorial_basics_deploy_your_site_md_f55_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-tutorial-basics-deploy-your-site-md-f55.json
const site_docs_tutorial_basics_deploy_your_site_md_f55_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"tutorial-basics/deploy-your-site","title":"Deploy your site","description":"Docusaurus is a static-site-generator (also called Jamstack).","source":"@site/docs/tutorial-basics/deploy-your-site.md","sourceDirName":"tutorial-basics","slug":"/tutorial-basics/deploy-your-site","permalink":"/docs/tutorial-basics/deploy-your-site","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Markdown Features","permalink":"/docs/tutorial-basics/markdown-features"},"next":{"title":"Congratulations!","permalink":"/docs/tutorial-basics/congratulations"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/tutorial-basics/deploy-your-site.md


const frontMatter = {
	sidebar_position: 5
};
const contentTitle = 'Deploy your site';

const assets = {

};



const toc = [{
  "value": "Build your site",
  "id": "build-your-site",
  "level": 2
}, {
  "value": "Deploy your site",
  "id": "deploy-your-site-1",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "deploy-your-site",
        children: "Deploy your site"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Docusaurus is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "static-site-generator"
      }), " (also called ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://jamstack.org/",
          children: "Jamstack"
        })
      }), ")."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["It builds your site as simple ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "static HTML, JavaScript and CSS files"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "build-your-site",
      children: "Build your site"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Build your site ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "for production"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npm run build\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The static files are generated in the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "build"
      }), " folder."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deploy-your-site-1",
      children: "Deploy your site"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Test your production build locally:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npm run serve\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "build"
      }), " folder is now served at ", (0,jsx_runtime.jsx)(_components.a, {
        href: "http://localhost:3000/",
        children: "http://localhost:3000/"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can now deploy the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "build"
      }), " folder ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "almost anywhere"
      }), " easily, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "for free"
      }), " or very small cost (read the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docusaurus.io/docs/deployment",
          children: "Deployment Guide"
        })
      }), ")."]
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