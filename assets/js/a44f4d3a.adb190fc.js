"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[1998],{

/***/ 8030:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_gists_gpu_testing_code_tf_md_a44_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-gists-gpu-testing-code-tf-md-a44.json
const site_docs_gists_gpu_testing_code_tf_md_a44_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"gists/gpu_testing_code_tf","title":"GPU Testing Code TF","description":"","source":"@site/docs/gists/gpu_testing_code_tf.md","sourceDirName":"gists","slug":"/gists/gpu_testing_code_tf","permalink":"/docs/gists/gpu_testing_code_tf","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"gpu_testing_code_tf","title":"GPU Testing Code TF","sidebar_label":"GPU Testing Code TF"},"sidebar":"tutorialSidebar","previous":{"title":"Git Commit Message","permalink":"/docs/gists/git_commit_msg"},"next":{"title":"Jupyter Cell inside py file","permalink":"/docs/gists/jupyter_cell_inside_py_file"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/gists/gpu_testing_code_tf.md


const frontMatter = {
	id: 'gpu_testing_code_tf',
	title: 'GPU Testing Code TF',
	sidebar_label: 'GPU Testing Code TF'
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsx)(_components.pre, {
    children: (0,jsx_runtime.jsx)(_components.code, {
      className: "language-python",
      children: "import tensorflow as tf\r\nfrom tensorflow.keras.layers import Dense\r\nfrom tensorflow.keras.models import Sequential\r\nimport numpy as np\r\nimport time\r\n\r\nstart_time = time.time()\r\n\r\n# Check if TensorFlow can access the GPU\r\nprint(\"Is there a GPU available: \"),\r\nprint(tf.test.is_gpu_available())\r\n\r\nprint(\"GPU(s) available: \"),\r\nprint(tf.config.list_physical_devices('GPU'))\r\n\r\nnp.random.seed(0)\r\nX_train = np.random.rand(100, 10)\r\ny_train = np.random.randint(0, 2, (100, 1))\r\n\r\nwith tf.device('/GPU:0'): # Change this num to switch GPU\r\n    model = Sequential([\r\n        Dense(64, activation='relu', input_shape=(10,)),\r\n        Dense(64, activation='relu'),\r\n        Dense(1, activation='sigmoid')\r\n    ])\r\n\r\n    model.compile(optimizer='adam',\r\n                  loss='binary_crossentropy',\r\n                  metrics=['accuracy'])\r\n\r\n    model.fit(X_train, y_train, epochs=100)\r\n\r\nend_time = time.time()\r\ntotal_time = end_time - start_time\r\nprint(f\"Total time taken: {total_time} seconds\")\n"
    })
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