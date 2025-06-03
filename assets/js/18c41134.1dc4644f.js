"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[9262],{

/***/ 2157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Ajay-4bfabd1532091bb2ba65acdc547c1cb6.png");

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

/***/ 8877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Highlight: () => (/* binding */ Highlight),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_tutorial_basics_markdown_features_mdx_18c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-tutorial-basics-markdown-features-mdx-18c.json
const site_docs_tutorial_basics_markdown_features_mdx_18c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"tutorial-basics/markdown-features","title":"Markdown Features","description":"Docusaurus supports Markdown and a few additional features.","source":"@site/docs/tutorial-basics/markdown-features.mdx","sourceDirName":"tutorial-basics","slug":"/tutorial-basics/markdown-features","permalink":"/docs/tutorial-basics/markdown-features","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Create a Blog Post","permalink":"/docs/tutorial-basics/create-a-blog-post"},"next":{"title":"Deploy your site","permalink":"/docs/tutorial-basics/deploy-your-site"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/tutorial-basics/markdown-features.mdx


const frontMatter = {
	sidebar_position: 4
};
const contentTitle = 'Markdown Features';

const assets = {

};



const Highlight = ({children, color}) => (0,jsx_runtime.jsx)("span", {
  style: {
    backgroundColor: color,
    borderRadius: '20px',
    color: '#fff',
    padding: '10px',
    cursor: 'pointer'
  },
  onClick: () => {
    alert(`You clicked the color ${color} with label ${children}`);
  },
  children: children
});
const toc = [{
  "value": "Front Matter",
  "id": "front-matter",
  "level": 2
}, {
  "value": "Links",
  "id": "links",
  "level": 2
}, {
  "value": "Images",
  "id": "images",
  "level": 2
}, {
  "value": "Code Blocks",
  "id": "code-blocks",
  "level": 2
}, {
  "value": "Admonitions",
  "id": "admonitions",
  "level": 2
}, {
  "value": "MDX and React Components",
  "id": "mdx-and-react-components",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "markdown-features",
        children: "Markdown Features"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Docusaurus supports ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://daringfireball.net/projects/markdown/syntax",
          children: "Markdown"
        })
      }), " and a few ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "additional features"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "front-matter",
      children: "Front Matter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Markdown documents have metadata at the top called ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://jekyllrb.com/docs/front-matter/",
        children: "Front Matter"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        metastring: "title=\"my-doc.md\"",
        children: "// highlight-start\n---\nid: my-doc-id\ntitle: My document title\ndescription: My document description\nslug: /my-custom-url\n---\n// highlight-end\n\n## Markdown heading\n\nMarkdown text with [links](./hello.md)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "links",
      children: "Links"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Regular Markdown links are supported, using url paths or relative file paths."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-md",
        children: "Let's see how to [Create a page](/create-a-page).\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-md",
        children: "Let's see how to [Create a page](./create-a-page.md).\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " Let's see how to ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/tutorial-basics/create-a-page",
        children: "Create a page"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "images",
      children: "Images"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Regular Markdown images are supported."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can use absolute paths to reference images in the static directory (", (0,jsx_runtime.jsx)(_components.code, {
        children: "static/img/Ajay.png"
      }), "):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-md",
        children: "![Docusaurus logo](/img/Ajay.png)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "How's img?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Docusaurus logo",
        src: (__webpack_require__(2157)/* ["default"] */ .A) + "",
        width: "2160",
        height: "1857"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can reference images relative to the current file as well. This is particularly useful to colocate images close to the Markdown files using them:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-md",
        children: "![Docusaurus logo](./img/Ajay.png)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "code-blocks",
      children: "Code Blocks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Markdown code blocks are supported with Syntax highlighting."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-md",
        children: "```jsx title=\"src/components/HelloDocusaurus.js\"\nfunction HelloDocusaurus() {\n  return <h1>Hello, Docusaurus!</h1>;\n}\n```\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        metastring: "title=\"src/components/HelloDocusaurus.js\"",
        children: "function HelloDocusaurus() {\n  return <h1>Hello, Docusaurus!</h1>;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "admonitions",
      children: "Admonitions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Docusaurus has a special syntax to create admonitions and callouts:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-md",
        children: ":::tip[My tip]\n\nUse this awesome feature option\n\n:::\n\n:::danger[Take care]\n\nThis action is dangerous\n\n:::\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "My tip",
      type: "tip",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Use this awesome feature option"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Take care",
      type: "danger",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "This action is dangerous"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mdx-and-react-components",
      children: "MDX and React Components"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://mdxjs.com/",
        children: "MDX"
      }), " can make your documentation more ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "interactive"
      }), " and allows using any ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "React components inside Markdown"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "export const Highlight = ({children, color}) => (\n  <span\n    style={{\n      backgroundColor: color,\n      borderRadius: '20px',\n      color: '#fff',\n      padding: '10px',\n      cursor: 'pointer',\n    }}\n    onClick={() => {\n      alert(`You clicked the color ${color} with label ${children}`)\n    }}>\n    {children}\n  </span>\n);\n\nThis is <Highlight color=\"#25c2a0\">Docusaurus green</Highlight> !\n\nThis is <Highlight color=\"#1877F2\">Facebook blue</Highlight> !\n"
      })
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is ", (0,jsx_runtime.jsx)(Highlight, {
        color: "#25c2a0",
        children: "Docusaurus green"
      }), " !"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is ", (0,jsx_runtime.jsx)(Highlight, {
        color: "#1877F2",
        children: "Facebook blue"
      }), " !"]
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