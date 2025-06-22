"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[1348],{

/***/ 8409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_commands_open_web_ui_md_9c3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-commands-open-web-ui-md-9c3.json
const site_docs_commands_open_web_ui_md_9c3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"commands/Open WebUI","title":"Open WebUI","description":"Making Open-WebUI accessible across the network","source":"@site/docs/commands/Open_WebUI.md","sourceDirName":"commands","slug":"/commands/Open WebUI","permalink":"/docs/commands/Open WebUI","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"Open WebUI","title":"Open WebUI","sidebar_label":"Open WebUI"},"sidebar":"tutorialSidebar","previous":{"title":"Ollama","permalink":"/docs/commands/Ollama"},"next":{"title":"Playwright","permalink":"/docs/commands/Playwright"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/commands/Open_WebUI.md


const frontMatter = {
	id: 'Open WebUI',
	title: 'Open WebUI',
	sidebar_label: 'Open WebUI'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Making Open-WebUI accessible across the network",
  "id": "making-open-webui-accessible-across-the-network",
  "level": 2
}, {
  "value": "1. Download Docker",
  "id": "1-download-docker",
  "level": 3
}, {
  "value": "2. Run Open-WebUI using docker to make it accessible across the network",
  "id": "2-run-open-webui-using-docker-to-make-it-accessible-across-the-network",
  "level": 3
}, {
  "value": "Update Open-WebUI",
  "id": "update-open-webui",
  "level": 2
}, {
  "value": "1. List all running Docker Containers",
  "id": "1-list-all-running-docker-containers",
  "level": 3
}, {
  "value": "2. Stop running Open-WebUI Docker Container",
  "id": "2-stop-running-open-webui-docker-container",
  "level": 3
}, {
  "value": "3. Remove that container (don&#39;t worry it won&#39;t remove the data/volume of Open-WebUI)",
  "id": "3-remove-that-container-dont-worry-it-wont-remove-the-datavolume-of-open-webui",
  "level": 3
}, {
  "value": "4. Pull the latest image from Open-WebUI GitHub/Website",
  "id": "4-pull-the-latest-image-from-open-webui-githubwebsite",
  "level": 3
}, {
  "value": "5. Start the docker container of Open-WebUI again",
  "id": "5-start-the-docker-container-of-open-webui-again",
  "level": 3
}, {
  "value": "6. Check whether Open-WebUI is accessible in the browser",
  "id": "6-check-whether-open-webui-is-accessible-in-the-browser",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
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
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "making-open-webui-accessible-across-the-network",
      children: "Making Open-WebUI accessible across the network"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-download-docker",
      children: "1. Download Docker"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Download and Install docker for your OS from ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.docker.com/get-started/",
        children: "Get Started | Docker"
      }), " or ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://docs.docker.com/engine/install/",
        children: "Install | Docker Docs"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you want help with docker commands, see ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://004ajay.github.io/docs/commands/Docker",
        children: "this"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-run-open-webui-using-docker-to-make-it-accessible-across-the-network",
      children: "2. Run Open-WebUI using docker to make it accessible across the network"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.em, {
        children: ["This uses ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "CUDA"
        }), " for GPU Accelerated performance for LLMs"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo docker run -d --network=host -v open-webui:/app/backend/data -e OLLAMA_BASE_URL=http://127.0.0.1:11434 --name open-webui-main --restart always ghcr.io/open-webui/open-webui:cuda\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "update-open-webui",
      children: "Update Open-WebUI"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-list-all-running-docker-containers",
      children: "1. List all running Docker Containers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo docker ps -a\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-stop-running-open-webui-docker-container",
      children: "2. Stop running Open-WebUI Docker Container"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo docker stop <container_id/name>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Example: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sudo docker stop 13800bf6b9a1"
      })]
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-remove-that-container-dont-worry-it-wont-remove-the-datavolume-of-open-webui",
      children: "3. Remove that container (don't worry it won't remove the data/volume of Open-WebUI)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo docker rm -f <container_id/name_with_tag>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Example: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sudo docker rm -f open-webui:cuda"
      })]
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-pull-the-latest-image-from-open-webui-githubwebsite",
      children: "4. Pull the latest image from Open-WebUI GitHub/Website"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.em, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "Note"
        }), ": This will take some time"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo docker pull ghcr.io/open-webui/open-webui:cuda\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-start-the-docker-container-of-open-webui-again",
      children: "5. Start the docker container of Open-WebUI again"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo docker run -d --network=host -v open-webui:/app/backend/data -e OLLAMA_BASE_URL=http://127.0.0.1:11434 --name open-webui --restart always ghcr.io/open-webui/open-webui:cuda\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "If it is causing some errors like"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "docker: Error response from daemon: Conflict. The container name \"/open-webui\" is already in use by container \"6a5b7aaf852410d4c6eccb27bf91c32ec25252e84eb81cab1c2d5cb89cc49bb0\". You have to remove (or rename) that container to be able to reuse that name.\nSee 'docker run --help'.\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["List the running docker containers using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "sudo docker ps -a"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Then remove the container with name conflict, example ", (0,jsx_runtime.jsx)(_components.code, {
            children: "sudo docker rm -f open-webui"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Rerun the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "sudo docker run ... open-webui:cuda"
          }), " again"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-check-whether-open-webui-is-accessible-in-the-browser",
      children: "6. Check whether Open-WebUI is accessible in the browser"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "http://<mother_computer_ip>:<port_number>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Example: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "http://192.168.1.230:8080"
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