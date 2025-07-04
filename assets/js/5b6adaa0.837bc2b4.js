"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[3919],{

/***/ 2170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_commands_miscellaneous_md_5b6_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-commands-miscellaneous-md-5b6.json
const site_docs_commands_miscellaneous_md_5b6_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"commands/Miscellaneous","title":"Miscellaneous","description":"Move multiple files using mv command","source":"@site/docs/commands/Miscellaneous.md","sourceDirName":"commands","slug":"/commands/Miscellaneous","permalink":"/docs/commands/Miscellaneous","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"Miscellaneous","title":"Miscellaneous","sidebar_label":"Miscellaneous"},"sidebar":"tutorialSidebar","previous":{"title":"Lightning Fast","permalink":"/docs/commands/Lightning Fast"},"next":{"title":"Nginx Reverse Proxy","permalink":"/docs/commands/Nginx Reverse Proxy"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/commands/Miscellaneous.md


const frontMatter = {
	id: 'Miscellaneous',
	title: 'Miscellaneous',
	sidebar_label: 'Miscellaneous'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Move multiple files using <code>mv</code> command",
  "id": "move-multiple-files-using-mv-command",
  "level": 3
}, {
  "value": "Get full path of a file in terminal",
  "id": "get-full-path-of-a-file-in-terminal",
  "level": 3
}, {
  "value": "Search a term in any files on a folder",
  "id": "search-a-term-in-any-files-on-a-folder",
  "level": 3
}, {
  "value": "Check size of files in a directory",
  "id": "check-size-of-files-in-a-directory",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h3: "h3",
    hr: "hr",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.h3, {
      id: "move-multiple-files-using-mv-command",
      children: ["Move multiple files using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mv"
      }), " command"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Move multiple files from a folder to another folder in Linux using 'mv' command"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "mv -t DESTINATION file1 file2 file3\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Example: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mv -t ./Other final_doc1.odt filenames.txt new_wall.jpg"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "get-full-path-of-a-file-in-terminal",
      children: "Get full path of a file in terminal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "realpath"
      }), " command"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Example: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "realpath auto.sh"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["output: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/home/appuser/Desktop/scripts/auto.sh"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "search-a-term-in-any-files-on-a-folder",
      children: "Search a term in any files on a folder"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "grep -Ri \"search_term\""
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "R"
        }), " - recursive"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "i"
        }), " - ignore case"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Example: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "grep -Ri \"ssh\""
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Miscellaneous.md:Example: `grep -R \"ssh\"`\n\nProblem_Fixing.md:_through Secure Socket Shell(SSH)**_\n\nFish_Abbreviations.md:### SSH Commands\n\nFish_Abbreviations.md:* sr - `ssh appuser@192.168.1.230`\n\nFish_Abbreviations.md:* sl - `ssh appuser@192.168.1.228`\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "check-size-of-files-in-a-directory",
      children: "Check size of files in a directory"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "ls -lh\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sample Output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "total 3.2G\n-rw-rw-r-- 1 appuser appuser 125K Feb  6 11:27 biology.jpeg\ndrwxrwxr-x 6 appuser appuser 4.0K Jun 20 10:10 ImageResize\n-rw-rw-r-- 1 appuser appuser   58 May 21 10:55 path.txt\n-rw-r--r-- 1 appuser appuser 3.2G Jun 25 09:52 data.zip\n-rw-rw-r-- 1 appuser appuser 145K Jun  2 14:54 screenshot.png\n"
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