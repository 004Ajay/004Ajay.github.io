"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[2558],{

/***/ 4509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_commands_rsync_md_fce_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-commands-rsync-md-fce.json
const site_docs_commands_rsync_md_fce_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"commands/Rsync","title":"Rsync","description":"Rsync and Parallel to copy files","source":"@site/docs/commands/Rsync.md","sourceDirName":"commands","slug":"/commands/Rsync","permalink":"/docs/commands/Rsync","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"Rsync","title":"Rsync","sidebar_label":"Rsync"},"sidebar":"tutorialSidebar","previous":{"title":"PyTorch","permalink":"/docs/commands/PyTorch"},"next":{"title":"SSH","permalink":"/docs/commands/SSH"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/commands/Rsync.md


const frontMatter = {
	id: 'Rsync',
	title: 'Rsync',
	sidebar_label: 'Rsync'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Rsync and Parallel to copy files",
  "id": "rsync-and-parallel-to-copy-files",
  "level": 2
}, {
  "value": "Lightning fast (two steps/commands)",
  "id": "lightning-fast-two-stepscommands",
  "level": 4
}, {
  "value": "1. Make a text file having path of files to be copied",
  "id": "1-make-a-text-file-having-path-of-files-to-be-copied",
  "level": 3
}, {
  "value": "2. Rsync with parallel processing to copy",
  "id": "2-rsync-with-parallel-processing-to-copy",
  "level": 3
}, {
  "value": "3. To keep the folder structure while copying (files inside different folders)",
  "id": "3-to-keep-the-folder-structure-while-copying-files-inside-different-folders",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
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
      id: "rsync-and-parallel-to-copy-files",
      children: "Rsync and Parallel to copy files"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "lightning-fast-two-stepscommands",
      children: "Lightning fast (two steps/commands)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-make-a-text-file-having-path-of-files-to-be-copied",
      children: "1. Make a text file having path of files to be copied"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "find ./<folder_having_all_the_files_to_be_copied> -type f > <location_with_name_of_text_file>.txt \n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Example command: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "find ./downloaded_files/items_to_move -type f > to_copy.txt"
      })]
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-rsync-with-parallel-processing-to-copy",
      children: "2. Rsync with parallel processing to copy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "time cat <previously_made_text_file>.txt | parallel -j <num_of_cores_to_use> -X -n 1 rsync -av --inplace {} ./<destination_folder_to_copy_the_files>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Example command: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "time cat to_copy.txt | parallel -j 10 -X -n 1 rsync -av --inplace {} ./Receiver/"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "So you will be doing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "find ./downloaded_files/items_to_move -type f > to_copy.txt \n\ntime cat to_copy.txt | parallel -j 90 -X -n 1 rsync -av --inplace {} ./Receiver/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "to copy a small/huge number of files (from 1 to more than 1 Million files)"
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-to-keep-the-folder-structure-while-copying-files-inside-different-folders",
      children: "3. To keep the folder structure while copying (files inside different folders)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--relative"
        }), " flag with the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cat"
        }), " command"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["** ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--relative"
      }), " tells rsync to recreate the directory structure based on the file path"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "time cat to_copy.txt | parallel -j 10 -X -n 1 rsync -av --inplace --relative {} ./Receiver/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Command breakdown:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "time"
          }), " is used to record wall clock time, system time etc..."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "cat"
          }), " reads the contents of the text file and prints it to the terminal"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "|"
          }), " (Pipe symbol) takes the output of the command on the left (", (0,jsx_runtime.jsx)(_components.code, {
            children: "cat to_copy.txt"
          }), ") and feeds it as the input to the command on the right. Essentially, it’s creating a chain of commands where the output of one becomes the input of the next."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "rsync"
          }), " is the utility for synchronizing files and directories."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "-av"
          }), " is the \"archive\" and \"verbose\" option."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Archive maintain integrity like permissions, timestamps, and other attributes."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Verbose shows progress, which files are being transferred and any changes that are being made."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "--inplace"
          }), " tells ", (0,jsx_runtime.jsx)(_components.code, {
            children: "rsync"
          }), " to modify the original file directly, rather than creating a new copy."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "--relative"
          }), " tells ", (0,jsx_runtime.jsx)(_components.code, {
            children: "rsync"
          }), " to keep the directory structure as such."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "{}"
          }), " is a placeholder to substitute the name of the file being processed by ", (0,jsx_runtime.jsx)(_components.code, {
            children: "rsync"
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