"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[4736],{

/***/ 3274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_tutorial_extras_translate_your_site_md_e44_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-tutorial-extras-translate-your-site-md-e44.json
const site_docs_tutorial_extras_translate_your_site_md_e44_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"tutorial-extras/translate-your-site","title":"Translate your site","description":"Let\'s translate docs/intro.md to French.","source":"@site/docs/tutorial-extras/translate-your-site.md","sourceDirName":"tutorial-extras","slug":"/tutorial-extras/translate-your-site","permalink":"/docs/tutorial-extras/translate-your-site","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Manage Docs Versions","permalink":"/docs/tutorial-extras/manage-docs-versions"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/tutorial-extras/translate-your-site.md


const frontMatter = {
	sidebar_position: 2
};
const contentTitle = 'Translate your site';

const assets = {

};



const toc = [{
  "value": "Configure i18n",
  "id": "configure-i18n",
  "level": 2
}, {
  "value": "Translate a doc",
  "id": "translate-a-doc",
  "level": 2
}, {
  "value": "Start your localized site",
  "id": "start-your-localized-site",
  "level": 2
}, {
  "value": "Add a Locale Dropdown",
  "id": "add-a-locale-dropdown",
  "level": 2
}, {
  "value": "Build your localized site",
  "id": "build-your-localized-site",
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
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "translate-your-site",
        children: "Translate your site"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Let's translate ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/intro.md"
      }), " to French."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configure-i18n",
      children: "Configure i18n"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Modify ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docusaurus.config.js"
      }), " to add support for the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fr"
      }), " locale:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        metastring: "title=\"docusaurus.config.js\"",
        children: "export default {\n  i18n: {\n    defaultLocale: 'en',\n    locales: ['en', 'fr'],\n  },\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "translate-a-doc",
      children: "Translate a doc"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Copy the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/intro.md"
      }), " file to the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "i18n/fr"
      }), " folder:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/\n\ncp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Translate ", (0,jsx_runtime.jsx)(_components.code, {
        children: "i18n/fr/docusaurus-plugin-content-docs/current/intro.md"
      }), " in French."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "start-your-localized-site",
      children: "Start your localized site"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Start your site on the French locale:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npm run start -- --locale fr\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Your localized site is accessible at ", (0,jsx_runtime.jsx)(_components.a, {
        href: "http://localhost:3000/fr/",
        children: "http://localhost:3000/fr/"
      }), " and the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Getting Started"
      }), " page is translated."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "In development, you can only use one locale at a time."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "add-a-locale-dropdown",
      children: "Add a Locale Dropdown"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To navigate seamlessly across languages, add a locale dropdown."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Modify the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docusaurus.config.js"
      }), " file:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        metastring: "title=\"docusaurus.config.js\"",
        children: "export default {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'localeDropdown',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The locale dropdown now appears in your navbar:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Locale Dropdown",
        src: (__webpack_require__(9699)/* ["default"] */ .A) + "",
        width: "370",
        height: "302"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "build-your-localized-site",
      children: "Build your localized site"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build your site for a specific locale:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npm run build -- --locale fr\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Or build your site to include all the locales at once:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npm run build\n"
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


/***/ }),

/***/ 9699:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/localeDropdown-f0d995e751e7656a1b0dbbc1134e49c2.png");

/***/ })

}]);