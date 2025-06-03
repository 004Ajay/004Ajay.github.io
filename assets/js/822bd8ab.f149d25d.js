"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[2748],{

/***/ 3184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_tutorial_basics_congratulations_md_822_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-tutorial-basics-congratulations-md-822.json
const site_docs_tutorial_basics_congratulations_md_822_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"tutorial-basics/congratulations","title":"Congratulations!","description":"You have just learned the basics of Docusaurus and made some changes to the initial template.","source":"@site/docs/tutorial-basics/congratulations.md","sourceDirName":"tutorial-basics","slug":"/tutorial-basics/congratulations","permalink":"/docs/tutorial-basics/congratulations","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"Deploy your site","permalink":"/docs/tutorial-basics/deploy-your-site"},"next":{"title":"Blogs-Public","permalink":"/docs/category/blogs-public"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/tutorial-basics/congratulations.md


const frontMatter = {
	sidebar_position: 6
};
const contentTitle = 'Congratulations!';

const assets = {

};



const toc = [{
  "value": "What&#39;s next?",
  "id": "whats-next",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "congratulations",
        children: "Congratulations!"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You have just learned the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "basics of Docusaurus"
      }), " and made some changes to the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "initial template"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Docusaurus has ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "much more to offer"
      }), "!"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Have ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "5 more minutes"
      }), "? Take a look at ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/tutorial-extras/manage-docs-versions",
          children: "versioning"
        })
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/tutorial-extras/translate-your-site",
          children: "i18n"
        })
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Anything ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "unclear"
      }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "buggy"
      }), " in this tutorial? ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/facebook/docusaurus/discussions/4610",
        children: "Please report it!"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "whats-next",
      children: "What's next?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Read the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docusaurus.io/",
          children: "official documentation"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Modify your site configuration with ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docusaurus.io/docs/api/docusaurus-config",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "docusaurus.config.js"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add navbar and footer items with ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docusaurus.io/docs/api/themes/configuration",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "themeConfig"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add a custom ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docusaurus.io/docs/styling-layout",
          children: "Design and Layout"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add a ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docusaurus.io/docs/search",
          children: "search bar"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Find inspirations in the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docusaurus.io/showcase",
          children: "Docusaurus showcase"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Get involved in the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docusaurus.io/community/support",
          children: "Docusaurus Community"
        })]
      }), "\n"]
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