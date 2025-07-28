"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[9866],{

/***/ 3081:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_gists_linux_context_menu_edit_md_dfa_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-gists-linux-context-menu-edit-md-dfa.json
const site_docs_gists_linux_context_menu_edit_md_dfa_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"gists/Linux_Context_Menu_Edit","title":"Linux Context Menu Editing","description":"New addition in linux context menu (options that comes on right-click)","source":"@site/docs/gists/Linux_Context_Menu_Edit.md","sourceDirName":"gists","slug":"/gists/Linux_Context_Menu_Edit","permalink":"/docs/gists/Linux_Context_Menu_Edit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"Linux_Context_Menu_Edit","title":"Linux Context Menu Editing","sidebar_label":"Linux Context Menu Editing"},"sidebar":"tutorialSidebar","previous":{"title":"Deep Learning Frameworks","permalink":"/docs/gists/Deep_Learning_Frameworks"},"next":{"title":"TF Neural Net","permalink":"/docs/gists/NeuralNet"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/gists/Linux_Context_Menu_Edit.md


const frontMatter = {
	id: 'Linux_Context_Menu_Edit',
	title: 'Linux Context Menu Editing',
	sidebar_label: 'Linux Context Menu Editing'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "New addition in linux context menu (options that comes on right-click)",
  "id": "new-addition-in-linux-context-menu-options-that-comes-on-right-click",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h3: "h3",
    hr: "hr",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h3, {
      id: "new-addition-in-linux-context-menu-options-that-comes-on-right-click",
      children: "New addition in linux context menu (options that comes on right-click)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Story:"
      }), " I do 'Open with VS Code' everytime to edit, view, or inspect code. But unlike Windows, in linux, when we install VS Code this option doesn't come automatically. So we need to add it manually by editing some files. Let's go and understand which all files and what edits need to be done."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.em, {
        children: ["Here I am going to add two options ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Open in VS Code"
        }), " (for opening a single file in VS Code) & ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Open Folder in VS Code"
        }), " (to open the complete parent folder of a file) --> all these are done for the current user only."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Open in VS Code"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.1. Open a terminal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["1.2. Go to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "~/.local/share/nautilus/scripts"
      }), " and create a file named ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Open in VS Code"
      }), ", the name of the file will be displayed as the name of option later in the context menu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "nano ~/.local/share/nautilus/scripts/\"Open in VS Code\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Inside the file paste:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\r\ncode \"$@\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Save the code using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Ctrl+X"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Y"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Enter"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["1.3. Now change the file to an executable using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "chmod"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "chmod +x ~/.local/share/nautilus/scripts/\"Open in VS Code\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["1.4. Restart the GNOME desktop environment file manager ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Nautilus"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "nautilus -q\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["1.5. Now go to any folder, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "right-click any file"
      }), " to see the option ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Scripts"
      }), " and inside it ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Open in VS Code"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Open Folder in VS Code"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "I don't think you need a detailed instruction for this step, as there is a small change in the shell script only"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "nano ~/.local/share/nautilus/scripts/\"Open in VS Code\"\r\n\r\n#!/bin/bash\r\n\r\nfor path in \"$@\"; do\r\n    if [ -d \"$path\" ]; then\r\n        code \"$path\"\r\n    else\r\n        # If it's a file, open its parent directory\r\n        code \"$(dirname \"$path\")\"\r\n    fi\r\ndone\r\n\r\nchmod +x ~/.local/share/nautilus/scripts/\"Open in VS Code\"\r\n\r\nnautilus -q\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "That's all!!!"
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