"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[4108],{

/***/ 1010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_gists_deep_learning_frameworks_md_e61_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-gists-deep-learning-frameworks-md-e61.json
const site_docs_gists_deep_learning_frameworks_md_e61_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"gists/Deep_Learning_Frameworks","title":"Deep Learning Frameworks","description":"All commands in Windows Command Prompt, and this will work for manual Python installation only.","source":"@site/docs/gists/Deep_Learning_Frameworks.md","sourceDirName":"gists","slug":"/gists/Deep_Learning_Frameworks","permalink":"/docs/gists/Deep_Learning_Frameworks","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"Deep_Learning_Frameworks","title":"Deep Learning Frameworks","sidebar_label":"Deep Learning Frameworks"},"sidebar":"tutorialSidebar","previous":{"title":"Gists","permalink":"/docs/category/gists"},"next":{"title":"Linux Context Menu Editing","permalink":"/docs/gists/Linux_Context_Menu_Edit"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/gists/Deep_Learning_Frameworks.md


const frontMatter = {
	id: 'Deep_Learning_Frameworks',
	title: 'Deep Learning Frameworks',
	sidebar_label: 'Deep Learning Frameworks'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "<code>All commands in Windows Command Prompt, and this will work for manual Python installation only.</code>",
  "id": "all-commands-in-windows-command-prompt-and-this-will-work-for-manual-python-installation-only",
  "level": 4
}, {
  "value": "Check for GPU Physical presence:",
  "id": "check-for-gpu-physical-presence",
  "level": 2
}, {
  "value": "TensorFlow",
  "id": "tensorflow",
  "level": 2
}, {
  "value": "PyTorch",
  "id": "pytorch",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h4: "h4",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h4, {
      id: "all-commands-in-windows-command-prompt-and-this-will-work-for-manual-python-installation-only",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "All commands in Windows Command Prompt, and this will work for manual Python installation only."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "check-for-gpu-physical-presence",
      children: "Check for GPU Physical presence:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "nvidia-smi\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tensorflow",
      children: "TensorFlow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import tensorflow as tf; print(tf.config.list_physical_devices())\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This will return a list like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[PhysicalDevice(name='/physical_device:CPU:0', device_type='CPU')]"
      }), ", check if GPU device is found, if yes then use the device number (ex: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CPU:0"
      }), ") in code."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import tensorflow as tf\ntf.config.list_physical_devices('GPU')\n\n# sample output -- [PhysicalDevice(name='/physical_device:GPU:0', device_type='GPU'),\n# PhysicalDevice(name='/physical_device:GPU:1', device_type='GPU')]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pytorch",
      children: "PyTorch"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import torch; print(torch.cuda.is_available())\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This will return ", (0,jsx_runtime.jsx)(_components.code, {
        children: "True"
      }), " if GPU is available, else ", (0,jsx_runtime.jsx)(_components.code, {
        children: "False"
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