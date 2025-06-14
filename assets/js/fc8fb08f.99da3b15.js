"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[2916],{

/***/ 6324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_commands_anaconda_md_fc8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-commands-anaconda-md-fc8.json
const site_docs_commands_anaconda_md_fc8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"commands/anaconda","title":"Anaconda / Conda","description":"1. Create a new conda environment","source":"@site/docs/commands/Anaconda.md","sourceDirName":"commands","slug":"/commands/anaconda","permalink":"/docs/commands/anaconda","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"anaconda","title":"Anaconda / Conda","sidebar_label":"Anaconda"},"sidebar":"tutorialSidebar","previous":{"title":"Commands","permalink":"/docs/category/commands"},"next":{"title":"Deleting Files","permalink":"/docs/commands/delete files"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/commands/Anaconda.md


const frontMatter = {
	id: 'anaconda',
	title: 'Anaconda / Conda',
	sidebar_label: 'Anaconda'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "1. Create a new conda environment",
  "id": "1-create-a-new-conda-environment",
  "level": 3
}, {
  "value": "2. Conda environment with specific version of Python and some libraries",
  "id": "2-conda-environment-with-specific-version-of-python-and-some-libraries",
  "level": 3
}, {
  "value": "3. Deactivate a conda environment",
  "id": "3-deactivate-a-conda-environment",
  "level": 3
}, {
  "value": "4. Remove a conda environment",
  "id": "4-remove-a-conda-environment",
  "level": 3
}, {
  "value": "5. Export conda environment to a YAML File",
  "id": "5-export-conda-environment-to-a-yaml-file",
  "level": 3
}, {
  "value": "6. Skip prompts",
  "id": "6-skip-prompts",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h3, {
      id: "1-create-a-new-conda-environment",
      children: "1. Create a new conda environment"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "conda create -n env_name \n"
      })
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-conda-environment-with-specific-version-of-python-and-some-libraries",
      children: "2. Conda environment with specific version of Python and some libraries"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "conda create -n env_name python=3.11 pandas matplotlib\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-deactivate-a-conda-environment",
      children: "3. Deactivate a conda environment"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "conda deactivate\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-remove-a-conda-environment",
      children: "4. Remove a conda environment"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "conda remove -n env_name --all\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-export-conda-environment-to-a-yaml-file",
      children: "5. Export conda environment to a YAML File"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "conda env export --name <env_name> > <filename>.yml\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Example: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "conda env export --name llm > llm.yml"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-skip-prompts",
      children: "6. Skip prompts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Commands such as conda create may ask for permission, which can be accepted by typing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "y / yes"
      }), " in terminal, this can be bypassed by passing the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-y"
      }), " flag"]
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