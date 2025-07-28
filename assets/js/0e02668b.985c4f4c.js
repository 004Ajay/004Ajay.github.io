"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[5590],{

/***/ 4660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_gists_update_grub_linux_md_0e0_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-gists-update-grub-linux-md-0e0.json
const site_docs_gists_update_grub_linux_md_0e0_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"gists/update_grub_linux","title":"Update Grub (Linux)","description":"Change GRUB default selection and pause time to select preferred OS","source":"@site/docs/gists/update_grub_linux.md","sourceDirName":"gists","slug":"/gists/update_grub_linux","permalink":"/docs/gists/update_grub_linux","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"update_grub_linux","title":"Update Grub (Linux)","sidebar_label":"Update Grub (Linux)"},"sidebar":"tutorialSidebar","previous":{"title":"Python pip Commands","permalink":"/docs/gists/python_pip_cmds"},"next":{"title":"Zip Extractor Windows","permalink":"/docs/gists/zip_extractor_windows"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/gists/update_grub_linux.md


const frontMatter = {
	id: 'update_grub_linux',
	title: 'Update Grub (Linux)',
	sidebar_label: 'Update Grub (Linux)'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Change GRUB <code>default selection</code> and <code>pause time</code> to select preferred OS",
  "id": "change-grub-default-selection-and-pause-time-to-select-preferred-os",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.h3, {
      id: "change-grub-default-selection-and-pause-time-to-select-preferred-os",
      children: ["Change GRUB ", (0,jsx_runtime.jsx)(_components.code, {
        children: "default selection"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pause time"
      }), " to select preferred OS"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Most of the time Ubuntu will be the first option in the grub on booting, below this, most probably in the 3rd or 4th position there will be Windows."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Go to Linux OS (mine, Ubuntu)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Open Terminal (", (0,jsx_runtime.jsx)(_components.code, {
            children: "ctrl+Alt+T"
          }), ")"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Type ", (0,jsx_runtime.jsx)(_components.code, {
            children: "sudo nano /etc/default/grub"
          }), " and enter"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Now type in your password"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Change the line ", (0,jsx_runtime.jsx)(_components.code, {
              children: "GRUB_DEFAULT=0"
            }), " to the line number which your required OS is lying (count from 0)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Exit nano using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Ctrl+X"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Y"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Enter"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Finally, update grub using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "sudo update-grub"
          })]
        }), "\n"]
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