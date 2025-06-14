"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[7738],{

/***/ 7380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_commands_fish_abbreviations_md_2dd_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-commands-fish-abbreviations-md-2dd.json
const site_docs_commands_fish_abbreviations_md_2dd_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"commands/Fish Shell","title":"Fish Shell","description":"Commands","source":"@site/docs/commands/Fish_Abbreviations.md","sourceDirName":"commands","slug":"/commands/Fish Shell","permalink":"/docs/commands/Fish Shell","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"Fish Shell","title":"Fish Shell","sidebar_label":"Fish Shell"},"sidebar":"tutorialSidebar","previous":{"title":"Docker","permalink":"/docs/commands/Docker"},"next":{"title":"JSONL","permalink":"/docs/commands/JSONL"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/commands/Fish_Abbreviations.md


const frontMatter = {
	id: 'Fish Shell',
	title: 'Fish Shell',
	sidebar_label: 'Fish Shell'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Commands",
  "id": "commands",
  "level": 2
}, {
  "value": "General Commands",
  "id": "general-commands",
  "level": 3
}, {
  "value": "Conda Commands",
  "id": "conda-commands",
  "level": 3
}, {
  "value": "SSH Commands",
  "id": "ssh-commands",
  "level": 3
}, {
  "value": "Docker Commands",
  "id": "docker-commands",
  "level": 3
}, {
  "value": "Python Commands",
  "id": "python-commands",
  "level": 3
}, {
  "value": "NVIDIA Commands",
  "id": "nvidia-commands",
  "level": 3
}, {
  "value": "Jupyter Commands",
  "id": "jupyter-commands",
  "level": 3
}, {
  "value": "Ollama Commands",
  "id": "ollama-commands",
  "level": 3
}, {
  "value": "Other Commands",
  "id": "other-commands",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "commands",
      children: "Commands"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "general-commands",
      children: "General Commands"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["s - ", (0,jsx_runtime.jsx)(_components.code, {
            children: "sudo"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["upd - ", (0,jsx_runtime.jsx)(_components.code, {
            children: "sudo apt-get update"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["upg - ", (0,jsx_runtime.jsx)(_components.code, {
            children: "sudo apt-get upgrade"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "conda-commands",
      children: "Conda Commands"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ca - ", (0,jsx_runtime.jsx)(_components.code, {
            children: "conda activate"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["cde - ", (0,jsx_runtime.jsx)(_components.code, {
            children: "conda deactivate"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["cenv - ", (0,jsx_runtime.jsx)(_components.code, {
            children: "conda env list"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ccr - ", (0,jsx_runtime.jsx)(_components.code, {
            children: "conda create -n <env_name> python=3.11 -y"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["cexp - ", (0,jsx_runtime.jsx)(_components.code, {
            children: "conda env export --name <env_name> > <filename>.yml"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["crm - ", (0,jsx_runtime.jsx)(_components.code, {
            children: "conda remove -n <env_name> --all -y"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ssh-commands",
      children: "SSH Commands"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["sr - ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ssh appuser@192.168.1.230"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["sl - ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ssh appuser@192.168.1.228"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "docker-commands",
      children: "Docker Commands"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["dps - ", (0,jsx_runtime.jsx)(_components.code, {
            children: "sudo docker ps"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["di - ", (0,jsx_runtime.jsx)(_components.code, {
            children: "sudo docker images"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["dex - ", (0,jsx_runtime.jsx)(_components.code, {
            children: "sudo docker exec -it"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ds - ", (0,jsx_runtime.jsx)(_components.code, {
            children: "sudo docker stop"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["dr - ", (0,jsx_runtime.jsx)(_components.code, {
            children: "sudo docker rm"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["dri - ", (0,jsx_runtime.jsx)(_components.code, {
            children: "sudo docker rmi"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-commands",
      children: "Python Commands"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["pyt - ", (0,jsx_runtime.jsx)(_components.code, {
            children: "python"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["p3 - ", (0,jsx_runtime.jsx)(_components.code, {
            children: "python3"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["pi - ", (0,jsx_runtime.jsx)(_components.code, {
            children: "pip install"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["pu - ", (0,jsx_runtime.jsx)(_components.code, {
            children: "pip uninstall"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nvidia-commands",
      children: "NVIDIA Commands"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ns - ", (0,jsx_runtime.jsx)(_components.code, {
            children: "nvidia-smi"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["wns - ", (0,jsx_runtime.jsx)(_components.code, {
            children: "watch nvidia-smi"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["nvc - ", (0,jsx_runtime.jsx)(_components.code, {
            children: "nvcc --version"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jupyter-commands",
      children: "Jupyter Commands"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["jn - ", (0,jsx_runtime.jsx)(_components.code, {
            children: "jupyter notebook"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["jns - ", (0,jsx_runtime.jsx)(_components.code, {
            children: "jupyter notebook --ip 192.168.1.229 --port 8887 --no-browser"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ollama-commands",
      children: "Ollama Commands"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["os - ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ollama show"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["orun - ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ollama run"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ol - ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ollama list"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ops - ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ollama ps"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["orm - ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ollama rm (remove)"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "other-commands",
      children: "Other Commands"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["c. - ", (0,jsx_runtime.jsx)(_components.code, {
            children: "code ."
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["fi - ", (0,jsx_runtime.jsx)(_components.code, {
            children: "find ./<filename> -type f > <filename>.txt"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["pcopy - ", (0,jsx_runtime.jsx)(_components.code, {
            children: "time cat <filename>.txt | parallel -j 10 -X -n 1 rsync -av --inplace {} ./<dest_dir_name>"
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