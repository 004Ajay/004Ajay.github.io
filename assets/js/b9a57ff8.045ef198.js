"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[6899],{

/***/ 4310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_commands_ollama_md_b9a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-commands-ollama-md-b9a.json
const site_docs_commands_ollama_md_b9a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"commands/Ollama","title":"Ollama","description":"Change Ollama Models Directory in Ubuntu Linux","source":"@site/docs/commands/Ollama.md","sourceDirName":"commands","slug":"/commands/Ollama","permalink":"/docs/commands/Ollama","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"Ollama","title":"Ollama","sidebar_label":"Ollama"},"sidebar":"tutorialSidebar","previous":{"title":"Miscellaneous","permalink":"/docs/commands/Miscellaneous"},"next":{"title":"Open WebUI","permalink":"/docs/commands/Open WebUI"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/commands/Ollama.md


const frontMatter = {
	id: 'Ollama',
	title: 'Ollama',
	sidebar_label: 'Ollama'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Change Ollama Models Directory in Ubuntu Linux",
  "id": "change-ollama-models-directory-in-ubuntu-linux",
  "level": 2
}, {
  "value": "1.1. Copy installed ollama models from one disk to another",
  "id": "11-copy-installed-ollama-models-from-one-disk-to-another",
  "level": 3
}, {
  "value": "1.2. Get it from any other system (Linux) in your network",
  "id": "12-get-it-from-any-other-system-linux-in-your-network",
  "level": 3
}, {
  "value": "2. Stop Ollama Service (optional but recommended)",
  "id": "2-stop-ollama-service-optional-but-recommended",
  "level": 3
}, {
  "value": "3. Get user and group owner names of your destination folder",
  "id": "3-get-user-and-group-owner-names-of-your-destination-folder",
  "level": 3
}, {
  "value": "4. Create and Override Ollama service using config file",
  "id": "4-create-and-override-ollama-service-using-config-file",
  "level": 3
}, {
  "value": "5. Restart System Daemon (this is not a system reboot) and Ollama",
  "id": "5-restart-system-daemon-this-is-not-a-system-reboot-and-ollama",
  "level": 3
}, {
  "value": "6. Check the working",
  "id": "6-check-the-working",
  "level": 3
}, {
  "value": "7. Try downloading a model and check if it is saving to the new location",
  "id": "7-try-downloading-a-model-and-check-if-it-is-saving-to-the-new-location",
  "level": 3
}, {
  "value": "Optionals",
  "id": "optionals",
  "level": 2
}, {
  "value": "Check details of all directories",
  "id": "check-details-of-all-directories",
  "level": 3
}, {
  "value": "Status of Ollama",
  "id": "status-of-ollama",
  "level": 3
}, {
  "value": "Error logs of Ollama",
  "id": "error-logs-of-ollama",
  "level": 3
}, {
  "value": "Ollama and Open WebUI from separate computers",
  "id": "ollama-and-open-webui-from-separate-computers",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
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
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "change-ollama-models-directory-in-ubuntu-linux",
      children: "Change Ollama Models Directory in Ubuntu Linux"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-copy-installed-ollama-models-from-one-disk-to-another",
      children: "1.1. Copy installed ollama models from one disk to another"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cp -r <curret/path/to/models> <destination/to/store/model/files>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Example command: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cp -r /mnt/INTERNAL/Ollama/.ollama /home/appuser/Ollama/.ollama"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-get-it-from-any-other-system-linux-in-your-network",
      children: "1.2. Get it from any other system (Linux) in your network"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/commands/Secure%20Copy",
        children: "See Secure Copy (SCP)"
      })
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-stop-ollama-service-optional-but-recommended",
      children: "2. Stop Ollama Service (optional but recommended)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo systemctl stop ollama\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-get-user-and-group-owner-names-of-your-destination-folder",
      children: "3. Get user and group owner names of your destination folder"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Go to the folder where you're going to keep ollama files"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cd /home/appuser/Ollama/.ollama (Example)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check details of all files"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "ls -lk -a\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-create-and-override-ollama-service-using-config-file",
      children: "4. Create and Override Ollama service using config file"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo mkdir -p /etc/systemd/system/ollama.service.d; sudo nano /etc/systemd/system/ollama.service.d/override.conf\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Add the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "path"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "user"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "group"
      }), " of new location in the file"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "[Service]\nEnvironment=\"OLLAMA_MODELS=/home/appuser/ollama/.ollama/models\" # change this path to your path\nUser=appuser # change this path to your User\nGroup=appuser # change this path to your Group\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-restart-system-daemon-this-is-not-a-system-reboot-and-ollama",
      children: "5. Restart System Daemon (this is not a system reboot) and Ollama"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo systemctl daemon-reload\n\nsudo systemctl restart ollama\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-check-the-working",
      children: "6. Check the working"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "ollama list\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "7-try-downloading-a-model-and-check-if-it-is-saving-to-the-new-location",
      children: "7. Try downloading a model and check if it is saving to the new location"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "ollama run <model_name>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Get new model name from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ollama.com/models"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "optionals",
      children: "Optionals"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "check-details-of-all-directories",
      children: "Check details of all directories"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "ls -ld -a\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "status-of-ollama",
      children: "Status of Ollama"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To see status of ollama (whether it is running, stopped, exited, error)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo systemctl status ollama\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "error-logs-of-ollama",
      children: "Error logs of Ollama"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To see the error logs of ollama (limiting to the latest 50 lines)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "journalctl -u ollama -n 50\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ollama-and-open-webui-from-separate-computers",
      children: "Ollama and Open WebUI from separate computers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hidden"
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