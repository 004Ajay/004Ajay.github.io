"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[3440],{

/***/ 4523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_gists_commit_from_cmd_md_fea_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-gists-commit-from-cmd-md-fea.json
const site_docs_gists_commit_from_cmd_md_fea_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"gists/commit_from_cmd","title":"Commit from Command Prompt (cmd)","description":"--> Adds new files to git staging area: git add .","source":"@site/docs/gists/commit_from_cmd.md","sourceDirName":"gists","slug":"/gists/commit_from_cmd","permalink":"/docs/gists/commit_from_cmd","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"commit_from_cmd","title":"Commit from Command Prompt (cmd)","sidebar_label":"Commit from Command Prompt"},"sidebar":"tutorialSidebar","previous":{"title":"Clear Git Commit History","permalink":"/docs/gists/clear_git_commit_history"},"next":{"title":"Commit Single File to GitHub","permalink":"/docs/gists/commit_single_file_to_github"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/gists/commit_from_cmd.md


const frontMatter = {
	id: 'commit_from_cmd',
	title: 'Commit from Command Prompt (cmd)',
	sidebar_label: 'Commit from Command Prompt'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Sample Commands",
  "id": "sample-commands",
  "level": 3
}, {
  "value": "Fetch and download content from Remote Repository (GitHub) to your Local System (git pull)",
  "id": "fetch-and-download-content-from-remote-repository-github-to-your-local-system-git-pull",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h3: "h3",
    hr: "hr",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["--> Adds new files to git staging area: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git add ."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["--> Commit the changes with new commit message: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git commit -m \"[commit message]\""
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["--> Confirm the commit, aka PUSH to GitHub: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git push origin [banch name]"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sample-commands",
      children: "Sample Commands"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "D: ASUS> git add ."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "D: ASUS> git commit -m \"Initial Commit\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "D: ASUS> git push origin main"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fetch-and-download-content-from-remote-repository-github-to-your-local-system-git-pull",
      children: "Fetch and download content from Remote Repository (GitHub) to your Local System (git pull)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["--> Pulls updated files to local system: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git pull"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sample Command"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "D: ASUS> git pull"
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