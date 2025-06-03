"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[1974],{

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

/***/ 9516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_tutorial_basics_create_a_page_md_5c8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-tutorial-basics-create-a-page-md-5c8.json
const site_docs_tutorial_basics_create_a_page_md_5c8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"tutorial-basics/create-a-page","title":"Create a Page","description":"Add Markdown or React files to src/pages to create a standalone page:","source":"@site/docs/tutorial-basics/create-a-page.md","sourceDirName":"tutorial-basics","slug":"/tutorial-basics/create-a-page","permalink":"/docs/tutorial-basics/create-a-page","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Tutorial - Basics","permalink":"/docs/category/tutorial---basics"},"next":{"title":"Create a Document","permalink":"/docs/tutorial-basics/create-a-document"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/tutorial-basics/create-a-page.md


const frontMatter = {
	sidebar_position: 1
};
const contentTitle = 'Create a Page';

const assets = {

};



const toc = [{
  "value": "Create your first React Page",
  "id": "create-your-first-react-page",
  "level": 2
}, {
  "value": "Create your first Markdown Page",
  "id": "create-your-first-markdown-page",
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
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "create-a-page",
        children: "Create a Page"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Add ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Markdown or React"
      }), " files to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "src/pages"
      }), " to create a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "standalone page"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "src/pages/index.js"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "localhost:3000/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "src/pages/foo.md"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "localhost:3000/foo"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "src/pages/foo/bar.js"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "localhost:3000/foo/bar"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "create-your-first-react-page",
      children: "Create your first React Page"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a file at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "src/pages/my-react-page.js"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        metastring: "title=\"src/pages/my-react-page.js\"",
        children: "import React from 'react';\nimport Layout from '@theme/Layout';\n\nexport default function MyReactPage() {\n  return (\n    <Layout>\n      <h1>My React page</h1>\n      <p>This is a React page</p>\n    </Layout>\n  );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A new page is now available at ", (0,jsx_runtime.jsx)(_components.a, {
        href: "http://localhost:3000/my-react-page",
        children: "http://localhost:3000/my-react-page"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "create-your-first-markdown-page",
      children: "Create your first Markdown Page"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a file at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "src/pages/my-markdown-page.md"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mdx",
        metastring: "title=\"src/pages/my-markdown-page.md\"",
        children: "# My Markdown page\n\nThis is a Markdown page\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A new page is now available at ", (0,jsx_runtime.jsx)(_components.a, {
        href: "http://localhost:3000/my-markdown-page",
        children: "http://localhost:3000/my-markdown-page"
      }), "."]
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



/***/ })

}]);