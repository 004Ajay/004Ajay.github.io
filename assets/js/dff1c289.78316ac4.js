"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[1724],{

/***/ 4126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_tutorial_extras_manage_docs_versions_md_dff_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-tutorial-extras-manage-docs-versions-md-dff.json
const site_docs_tutorial_extras_manage_docs_versions_md_dff_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"tutorial-extras/manage-docs-versions","title":"Manage Docs Versions","description":"Docusaurus can manage multiple versions of your docs.","source":"@site/docs/tutorial-extras/manage-docs-versions.md","sourceDirName":"tutorial-extras","slug":"/tutorial-extras/manage-docs-versions","permalink":"/docs/tutorial-extras/manage-docs-versions","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Tutorial - Extras","permalink":"/docs/category/tutorial---extras"},"next":{"title":"Translate your site","permalink":"/docs/tutorial-extras/translate-your-site"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/tutorial-extras/manage-docs-versions.md


const frontMatter = {
	sidebar_position: 1
};
const contentTitle = 'Manage Docs Versions';

const assets = {

};



const toc = [{
  "value": "Create a docs version",
  "id": "create-a-docs-version",
  "level": 2
}, {
  "value": "Add a Version Dropdown",
  "id": "add-a-version-dropdown",
  "level": 2
}, {
  "value": "Update an existing version",
  "id": "update-an-existing-version",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
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
        id: "manage-docs-versions",
        children: "Manage Docs Versions"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Docusaurus can manage multiple versions of your docs."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "create-a-docs-version",
      children: "Create a docs version"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Release a version 1.0 of your project:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npm run docusaurus docs:version 1.0\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs"
      }), " folder is copied into ", (0,jsx_runtime.jsx)(_components.code, {
        children: "versioned_docs/version-1.0"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "versions.json"
      }), " is created."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Your docs now have 2 versions:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "1.0"
        }), " at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "http://localhost:3000/docs/"
        }), " for the version 1.0 docs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "current"
        }), " at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "http://localhost:3000/docs/next/"
        }), " for the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "upcoming, unreleased docs"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "add-a-version-dropdown",
      children: "Add a Version Dropdown"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To navigate seamlessly across versions, add a version dropdown."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Modify the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docusaurus.config.js"
      }), " file:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        metastring: "title=\"docusaurus.config.js\"",
        children: "export default {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'docsVersionDropdown',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The docs version dropdown appears in your navbar:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Docs Version Dropdown",
        src: (__webpack_require__(9052)/* ["default"] */ .A) + "",
        width: "370",
        height: "302"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "update-an-existing-version",
      children: "Update an existing version"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "It is possible to edit versioned docs in their respective folder:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "versioned_docs/version-1.0/hello.md"
        }), " updates ", (0,jsx_runtime.jsx)(_components.code, {
          children: "http://localhost:3000/docs/hello"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/hello.md"
        }), " updates ", (0,jsx_runtime.jsx)(_components.code, {
          children: "http://localhost:3000/docs/next/hello"
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


/***/ }),

/***/ 9052:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/docsVersionDropdown-35e13cbe46c9923327f30a76a90bff3b.png");

/***/ })

}]);