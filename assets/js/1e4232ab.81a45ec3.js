"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[1953],{

/***/ 6546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_tutorial_basics_create_a_document_md_1e4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-tutorial-basics-create-a-document-md-1e4.json
const site_docs_tutorial_basics_create_a_document_md_1e4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"tutorial-basics/create-a-document","title":"Create a Document","description":"Documents are groups of pages connected through:","source":"@site/docs/tutorial-basics/create-a-document.md","sourceDirName":"tutorial-basics","slug":"/tutorial-basics/create-a-document","permalink":"/docs/tutorial-basics/create-a-document","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Create a Page","permalink":"/docs/tutorial-basics/create-a-page"},"next":{"title":"Create a Blog Post","permalink":"/docs/tutorial-basics/create-a-blog-post"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/tutorial-basics/create-a-document.md


const frontMatter = {
	sidebar_position: 2
};
const contentTitle = 'Create a Document';

const assets = {

};



const toc = [{
  "value": "Create your first Doc",
  "id": "create-your-first-doc",
  "level": 2
}, {
  "value": "Configure the Sidebar",
  "id": "configure-the-sidebar",
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
        id: "create-a-document",
        children: "Create a Document"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Documents are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "groups of pages"
      }), " connected through:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "sidebar"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "previous/next navigation"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "versioning"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "create-your-first-doc",
      children: "Create your first Doc"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a Markdown file at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/hello.md"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-md",
        metastring: "title=\"docs/hello.md\"",
        children: "# Hello\n\nThis is my **first Docusaurus document**!\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A new document is now available at ", (0,jsx_runtime.jsx)(_components.a, {
        href: "http://localhost:3000/docs/hello",
        children: "http://localhost:3000/docs/hello"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configure-the-sidebar",
      children: "Configure the Sidebar"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Docusaurus automatically ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "creates a sidebar"
      }), " from the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs"
      }), " folder."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Add metadata to customize the sidebar label and position:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-md",
        metastring: "title=\"docs/hello.md\" {1-4}",
        children: "---\nsidebar_label: 'Hi!'\nsidebar_position: 3\n---\n\n# Hello\n\nThis is my **first Docusaurus document**!\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["It is also possible to create your sidebar explicitly in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sidebars.js"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        metastring: "title=\"sidebars.js\"",
        children: "export default {\n  tutorialSidebar: [\n    'intro',\n    // highlight-next-line\n    'hello',\n    {\n      type: 'category',\n      label: 'Tutorial',\n      items: ['tutorial-basics/create-a-document'],\n    },\n  ],\n};\n"
      })
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