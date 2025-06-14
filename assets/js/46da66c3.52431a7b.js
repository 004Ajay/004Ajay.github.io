"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[9166],{

/***/ 7820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_commands_problem_fixing_md_46d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-commands-problem-fixing-md-46d.json
const site_docs_commands_problem_fixing_md_46d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"commands/Problem Fixing","title":"Problem Fixing","description":"1. Unknown Jupyter Running - How I stopped it.","source":"@site/docs/commands/Problem_Fixing.md","sourceDirName":"commands","slug":"/commands/Problem Fixing","permalink":"/docs/commands/Problem Fixing","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"Problem Fixing","title":"Problem Fixing","sidebar_label":"Problem Fixing"},"sidebar":"tutorialSidebar","previous":{"title":"Playwright","permalink":"/docs/commands/Playwright"},"next":{"title":"PyTorch","permalink":"/docs/commands/PyTorch"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/commands/Problem_Fixing.md


const frontMatter = {
	id: 'Problem Fixing',
	title: 'Problem Fixing',
	sidebar_label: 'Problem Fixing'
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Unknown Jupyter Running - How I stopped it."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OS: Linux"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "jupyter notebook --ip 192.168.1.xxx --port 888y --no-browser\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Basically I use the above command to put jupyter notebook to local network from a system."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "A Jupyter client was turning on in other systems in the network even though it is not invoked in the mother system."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scenario:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"http://192.168.1.xxx:888y/\""
        }), " this was used to connect to jupyter of system '192.168.1.xxx' to other systems connected in the network. But to my surprise, no terminal in the mother system invoked/started jupyter by specifiying the IP and Port Number."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "I checked all the terminals of mother system, no jupyter was invoked, but still Jupyter was working, giving connection, loading notebook etc..but how? is it running as a background process, cron, system services, or even a malicious code running in the system?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Debugging -> open terminal and type ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sudo ss -tulpn | grep 888y"
        }), " checking for network connection thru port 888y"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "tcp LISTEN 0 128 0.0.0.0:8889 0.0.0.0:* users:((\"jupyter-noteboo\",pid=69xyz,fd=6))"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Next straight forward step is to kill the process ", (0,jsx_runtime.jsx)(_components.code, {
        children: "69xyz"
      }), " using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sudo kill 69xyz"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "But we need to check something else using commands"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo lsof -i :888y\r\n\r\nps aux | grep jupyter\r\n\r\nsudo systemctl | grep jupyter\r\n\r\nsudo crontab -l\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "if you see something fishy, go on and disable, comment, or delete it."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["I just went on to do ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sudo kill 69xyz"
      }), " and it solved my problem, reload the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "http://192.168.1.xxx:888y/"
      }), ", it shouldn't connect. In my case it didn't connected."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["In my case may be my friends or someone might have started the jupytet using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "nohup"
        }), ", which send the running of that process to background. So even if we close the terminal or logout it will be still running."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Desktop was not seen in the File Explorer"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OS: Linux"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["After a Linux update or something, my Desktop folder gone missing. I have my ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Gnome Desktop"
        }), " running smoothly, but the folder dedicated and used by system named ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Desktop"
        }), " was not in the system. Now path to my ", (0,jsx_runtime.jsx)(_components.code, {
          children: "home"
        }), " folder has been taken as desktop folder."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When I open a terminal and type"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "cd"
          }), " - it goes to home location"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["On typing ", (0,jsx_runtime.jsx)(_components.code, {
                children: "pwd"
              }), " we will get that home location, in my case it was ", (0,jsx_runtime.jsx)(_components.code, {
                children: "/home/appuser"
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["And this ", (0,jsx_runtime.jsx)(_components.code, {
                children: "/home/appuser"
              }), " was acting as my desktop (problem 1) and all the folders and files in that location is in the Gnome Desktop."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Opened a Terminal and went to home location (/home/appuser)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Made a folder named ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Desktop"
          }), " using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "mkdir -p Desktop"
          }), " (-p creates folder only if that folder doesn't exist in the given location)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Then Opened ", (0,jsx_runtime.jsx)(_components.code, {
            children: ".config/user-dirs.dirs"
          }), " file using nano in sudo mode (", (0,jsx_runtime.jsx)(_components.code, {
            children: "sudo nano .config/user-dirs.dirs"
          }), ")"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "That file has some contents like"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XDG_DESKTOP_DIR=\"$HOME\"\r\nXDG_DOWNLOAD_DIR=\"$HOME/Downloads\"\r\nXDG_TEMPLATES_DIR=\"$HOME/\"\r\nXDG_PUBLICSHARE_DIR=\"$HOME/\"\r\nXDG_DOCUMENTS_DIR=\"$HOME/Documents\"\r\nXDG_MUSIC_DIR=\"$HOME/\"\r\nXDG_PICTURES_DIR=\"$HOME/\"\r\nXDG_VIDEOS_DIR=\"$HOME/\""
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["See ", (0,jsx_runtime.jsx)(_components.code, {
                children: "XDG_DESKTOP_DIR=\"$HOME\""
              }), " pointing to ", (0,jsx_runtime.jsx)(_components.code, {
                children: "$HOME"
              }), " not ", (0,jsx_runtime.jsx)(_components.code, {
                children: "$HOME/Desktop"
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Changed path ", (0,jsx_runtime.jsx)(_components.code, {
                children: "$HOME"
              }), " to ", (0,jsx_runtime.jsx)(_components.code, {
                children: "$HOME/Desktop"
              }), " of ", (0,jsx_runtime.jsx)(_components.code, {
                children: "XDG_DESKTOP_DIR"
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Saved and Exited nano"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Restarted Gnome Shell"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Press ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Alt+F2"
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Type ", (0,jsx_runtime.jsx)(_components.code, {
                children: "r"
              }), " in the dialog box"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Enter"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Now going to Gnome Desktop, no folders will be visible there, we changed the path of Desktop."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Even though I got the Desktop Folder back, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "I am still searching for a way to get Desktop listed on quick access list"
          }), " (a list in the left side of screen when you open a folder)."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Ollama was not using GPU after server restart"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OS: Linux"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "I just wanted to refresh my computer with a restart, so I did a restart."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "But after the restart, ollama was not using the gpu when invoked in another computer in the network using Open WebUI. It was not the problem with Open WebUI as it is just an interface to use these AI models hosted with Ollama."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "So my mind-map for troubleshooting is"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Check if ", (0,jsx_runtime.jsx)(_components.code, {
            children: "torch"
          }), " in any conda environment can access GPU"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "1.1. If False, then move to step 2"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "1.2. If True, then move to step 3"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Check ", (0,jsx_runtime.jsx)(_components.code, {
            children: "nvcc -V"
          }), " to check CUDA compilers installation and version. Check ", (0,jsx_runtime.jsx)(_components.code, {
            children: "nvidia-smi"
          }), " to verify visibility of GPU to the device. If there is any problem in the installation or anything, just re-build everything from scratch (or follow the nvidia doc to patch the issue)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Run a model with ollama (eg: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ollama run llama3.2:"
          }), ") and check if it is generating text slowly using CPU (make sure using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "htop"
          }), ")"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["3.1. If so, then update/reinstall ollama using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "curl -fsSL https://ollama.com/install.sh | sh"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Starting troubleshooting:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["I activated a conda env (named 'llm') using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "conda activate llm"
      }), " and opened Python3 IDLE using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "python3"
      }), " command on the same terminal and used the code given ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/commands/PyTorch",
        children: "here"
      }), ". And it was working, given True, which means torch can access gpu."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Next I moved to run a model with ollama and it was generating text very slowly, like 1 word per second and in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "htop"
      }), " ollama was using all 32 cores of the system as well."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "So I updated ollama, waited for 10 minutes for it to get finished. Checked again and ollama was using GPU this time, verified it in Open WebUI also. So problem is solved."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.em, {
        children: ["I run the Ollama and Open WebUI in another computer (as it has more GPU VRAM). ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "And I done all the above troubleshooting steps without leaving my primary computer, through Secure Socket Shell(SSH)"
        })]
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