"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[4157],{

/***/ 2923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_commands_delete_files_fast_md_dc6_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-commands-delete-files-fast-md-dc6.json
const site_docs_commands_delete_files_fast_md_dc6_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"commands/delete files","title":"Deleting Files","description":"Delete huge number of files in minutes/hours","source":"@site/docs/commands/Delete_Files_Fast.md","sourceDirName":"commands","slug":"/commands/delete files","permalink":"/docs/commands/delete files","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"delete files","title":"Deleting Files","sidebar_label":"Deleting Files"},"sidebar":"tutorialSidebar","previous":{"title":"Anaconda","permalink":"/docs/commands/anaconda"},"next":{"title":"Directory Ownership","permalink":"/docs/commands/Directory Ownership"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/commands/Delete_Files_Fast.md


const frontMatter = {
	id: 'delete files',
	title: 'Deleting Files',
	sidebar_label: 'Deleting Files'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Delete huge number of files in minutes/hours",
  "id": "delete-huge-number-of-files-in-minuteshours",
  "level": 2
}, {
  "value": "Even More Speed",
  "id": "even-more-speed",
  "level": 3
}, {
  "value": "Make parallel to utilize all the available cores/thread for max speed",
  "id": "make-parallel-to-utilize-all-the-available-coresthread-for-max-speed",
  "level": 4
}, {
  "value": "Squeeze every ounce of Speed",
  "id": "squeeze-every-ounce-of-speed",
  "level": 3
}, {
  "value": "Or hardcode after executing <code>nproc</code> in terminal:",
  "id": "or-hardcode-after-executing-nproc-in-terminal",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "delete-huge-number-of-files-in-minuteshours",
      children: "Delete huge number of files in minutes/hours"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "find /path/to/folder/having/all/files -mindepth 1 -maxdepth 1 -print0 | parallel -0 rm -rvf\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Example: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "find ./seq/ -mindepth 1 -maxdepth 1 -print0 | parallel -0 rm -rvf"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Command Explanation:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "find ./seq/"
          }), " => combining the find command with GNU Parallel to run rm (remove) in parallel on each immediate subfolder or file inside ", (0,jsx_runtime.jsx)(_components.code, {
            children: "./seq"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "-mindepth 1"
          }), " => skip the top-level directory (here, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "./seq/"
          }), "), and only return things inside it. So, if ", (0,jsx_runtime.jsx)(_components.code, {
            children: "./seq/"
          }), " contains folder1, folder2, etc., those are the targets."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "-maxdepth 1"
          }), " => only look at immediate children (1 level deep), not recursively. So you get only (", (0,jsx_runtime.jsx)(_components.code, {
            children: "./seq/folder1"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "./seq/folder2"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "./seq/file1.txt"
          }), ")… not files inside those folders."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "-print0"
          }), " => outputs each result terminated with a null character (", (0,jsx_runtime.jsx)(_components.code, {
            children: "\\0"
          }), ") instead of a newline. Because filenames can contain spaces, newlines, or other weird characters. Using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "-print0"
          }), " makes sure they're passed safely to the next command."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "| parallel -0"
          }), " => puts the null-separated results to GNU parallel (which uses multiple CPU cores). The ", (0,jsx_runtime.jsx)(_components.code, {
            children: "-0"
          }), " tells parallel to expect input to be null-separated (to match ", (0,jsx_runtime.jsx)(_components.code, {
            children: "-print0"
          }), "). This avoids filename issues, same as above."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "rm -rvf"
          }), " => this is the command parallel runs on each item it receives."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "rm"
              }), ": remove files/directories."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "-r"
              }), ": recursive – delete folders and everything inside."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "-v"
              }), ": verbose – print what’s being deleted (this slows down the command a little bit)."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "-f"
              }), ": force – ignore errors, don't prompt for confirmation."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "So for each item, parallel runs something like:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "rm -rvf ./seq/folder1\nrm -rvf ./seq/file2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "…simultaneously across multiple CPU cores."
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "even-more-speed",
      children: "Even More Speed"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Drop the -v flag:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "find ./seq/ -mindepth 1 -maxdepth 1 -print0 | parallel -0 rm -rf\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--jobs N"
        }), " to control how many processes run at once (Example, use 8 cores):"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "... | parallel -0 -j 8 rm -rf\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "make-parallel-to-utilize-all-the-available-coresthread-for-max-speed",
      children: "Make parallel to utilize all the available cores/thread for max speed"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GNU parallel is smart enough to auto-detect the number of CPU cores"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "find ./seq/ -mindepth 1 -maxdepth 1 -print0 | parallel -0 rm -rf\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Use as many jobs as your system can handle (nproc cores, by default)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Avoid output clutter (no -v)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Delete in blazing-fast parallel, safely."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Use total number of CPU in your system directly"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "nproc"
        }), " command to find total number of CPU in your system"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "squeeze-every-ounce-of-speed",
      children: "Squeeze every ounce of Speed"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "find ./seq/ -mindepth 1 -maxdepth 1 -print0 | parallel -0 -j \"$(nproc)\" rm -rf\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "or-hardcode-after-executing-nproc-in-terminal",
      children: ["Or hardcode after executing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "nproc"
      }), " in terminal:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\t... | parallel -0 -j 96 rm -rf\n"
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