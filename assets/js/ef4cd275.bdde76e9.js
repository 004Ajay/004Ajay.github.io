"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[7627],{

/***/ 8429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_commands_lightning_fast_md_ef4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-commands-lightning-fast-md-ef4.json
const site_docs_commands_lightning_fast_md_ef4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"commands/Lightning Fast","title":"Lightning Fast","description":"Zipping Files","source":"@site/docs/commands/Lightning_Fast.md","sourceDirName":"commands","slug":"/commands/Lightning Fast","permalink":"/docs/commands/Lightning Fast","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"Lightning Fast","title":"Lightning Fast","sidebar_label":"Lightning Fast"},"sidebar":"tutorialSidebar","previous":{"title":"Jupyter Notebook","permalink":"/docs/commands/Jupyter_Notebook"},"next":{"title":"Miscellaneous","permalink":"/docs/commands/Miscellaneous"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/commands/Lightning_Fast.md


const frontMatter = {
	id: 'Lightning Fast',
	title: 'Lightning Fast',
	sidebar_label: 'Lightning Fast'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Zipping Files",
  "id": "zipping-files",
  "level": 3
}, {
  "value": "Make Archive File (Zipping) in a lightning fast way",
  "id": "make-archive-file-zipping-in-a-lightning-fast-way",
  "level": 4
}, {
  "value": "dd command to copy files",
  "id": "dd-command-to-copy-files",
  "level": 3
}, {
  "value": "Copy Files Faster using <code>dd</code> command in a lightning fast way",
  "id": "copy-files-faster-using-dd-command-in-a-lightning-fast-way",
  "level": 4
}, {
  "value": "Move anything in the current directory",
  "id": "move-anything-in-the-current-directory",
  "level": 3
}, {
  "value": "Move anything in the current directory in a lightning fast way",
  "id": "move-anything-in-the-current-directory-in-a-lightning-fast-way",
  "level": 4
}, {
  "value": "Total number of items in a directory",
  "id": "total-number-of-items-in-a-directory",
  "level": 3
}, {
  "value": "Get total number of items in a lightning fast way",
  "id": "get-total-number-of-items-in-a-lightning-fast-way",
  "level": 4
}, {
  "value": "Moving random files",
  "id": "moving-random-files",
  "level": 3
}, {
  "value": "Move random files from one folder to another in a lightning fast way",
  "id": "move-random-files-from-one-folder-to-another-in-a-lightning-fast-way",
  "level": 4
}, {
  "value": "Cut and paste n number of lines from a file",
  "id": "cut-and-paste-n-number-of-lines-from-a-file",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h3: "h3",
    h4: "h4",
    hr: "hr",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h3, {
      id: "zipping-files",
      children: "Zipping Files"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "make-archive-file-zipping-in-a-lightning-fast-way",
      children: "Make Archive File (Zipping) in a lightning fast way"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "tar -I pigz -cvf archive_name.tar.gz ./folder/or/file/to/be/archived\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Example command: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tar -I pigz -cvf V_archive.tar.gz ./Our_Backup"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "tar"
          }), " => standard archiving utility that bundles files into one file (usually with a .tar extension)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "-I pigz"
          }), " => tells tar to use pigz as the compression program instead of gzip."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "pigz"
            }), " stands for \"parallel implementation of gzip\" — it's much faster because it uses multiple CPU cores."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "-c"
          }), " => create a new archive."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "-v"
          }), " => verbose — show the progress (list the files as they are archived)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "-f"
          }), " => specifies the output filename of the archive you're creating, here it is ", (0,jsx_runtime.jsx)(_components.code, {
            children: "V_archive.tar.gz"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dd-command-to-copy-files",
      children: "dd command to copy files"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "copy-files-faster-using-dd-command-in-a-lightning-fast-way",
      children: ["Copy Files Faster using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dd"
      }), " command in a lightning fast way"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "This command is risky, use when you need to move big files"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "dd if=<path_of_current_file_to_be_copied> of=<path_of_destination> bs=64M iflag=direct oflag=direct status=progress\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Example: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dd if=./archive.tar.gz of=/user/Ajay/Backups bs=64M iflag=direct oflag=direct status=progress"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "369574572157 bytes (370 GB, 344 GiB) copied, 28118 s, 13.1 MB/s\n5507+1 records in\n5507+1 records out\n369574572157 bytes (370 GB, 344 GiB) copied, 28118.3 s, 13.1 MB/s"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "move-anything-in-the-current-directory",
      children: "Move anything in the current directory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "move-anything-in-the-current-directory-in-a-lightning-fast-way",
      children: "Move anything in the current directory in a lightning fast way"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "find . -maxdepth 1 -mindepth 1 -name <filename_of_file_to_be_moved> -print0 | parallel -0 mv -v {} <destination_to_move_the_file>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Example: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "find . -maxdepth 1 -mindepth 1 -name new_BkUp.tar.gz -print0 | parallel -0 mv -v {} ./Backups/"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "renamed './new_BkUp.tar.gz' -> './Backups/new_BkUp.tar.gz'"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Basically it searches the current directory for the file ", (0,jsx_runtime.jsx)(_components.code, {
          children: "new_BkUp.tar.gz"
        }), " and then uses Parallel utility to move files using multiple cores to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Backups"
        }), " folder"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "total-number-of-items-in-a-directory",
      children: "Total number of items in a directory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "get-total-number-of-items-in-a-lightning-fast-way",
      children: "Get total number of items in a lightning fast way"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In a directory"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "ls | wc -l\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In a file"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "ls | wc <filename>.<file extension> -l\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Example command: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ls | wc all_id_paths.txt -l"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3876693 all_id_paths.txt"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "moving-random-files",
      children: "Moving random files"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "move-random-files-from-one-folder-to-another-in-a-lightning-fast-way",
      children: "Move random files from one folder to another in a lightning fast way"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "find sup_all_csv_copy/ -type f -print0 | shuf -zn 100 | parallel -0 -j 80 cp \"{}\" new\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cut-and-paste-n-number-of-lines-from-a-file",
      children: "Cut and paste n number of lines from a file"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "head -n num_of_files input.txt > output.txt\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Example: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "head -n 200 prop.txt > prop_copy.txt"
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