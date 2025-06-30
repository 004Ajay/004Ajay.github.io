"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[4276],{

/***/ 7349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_commands_nginx_reverse_proxy_md_d19_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-commands-nginx-reverse-proxy-md-d19.json
const site_docs_commands_nginx_reverse_proxy_md_d19_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"commands/Nginx Reverse Proxy","title":"Nginx Reverse Proxy","description":"NGINX Reverse Proxy on Port 80 with llm.com","source":"@site/docs/commands/Nginx_Reverse_Proxy.md","sourceDirName":"commands","slug":"/commands/Nginx Reverse Proxy","permalink":"/docs/commands/Nginx Reverse Proxy","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"Nginx Reverse Proxy","title":"Nginx Reverse Proxy","sidebar_label":"Nginx Reverse Proxy"},"sidebar":"tutorialSidebar","previous":{"title":"Miscellaneous","permalink":"/docs/commands/Miscellaneous"},"next":{"title":"Ollama","permalink":"/docs/commands/Ollama"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/commands/Nginx_Reverse_Proxy.md


const frontMatter = {
	id: 'Nginx Reverse Proxy',
	title: 'Nginx Reverse Proxy',
	sidebar_label: 'Nginx Reverse Proxy'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "NGINX Reverse Proxy on Port 80 with llm.com",
  "id": "nginx-reverse-proxy-on-port-80-with-llmcom",
  "level": 2
}, {
  "value": "1. Stop and Disable any apps working on Port 80 (this port is normally used for web communication)",
  "id": "1-stop-and-disable-any-apps-working-on-port-80-this-port-is-normally-used-for-web-communication",
  "level": 3
}, {
  "value": "2. Install Nginx (if not already installed)",
  "id": "2-install-nginx-if-not-already-installed",
  "level": 3
}, {
  "value": "3. Configure <code>/etc/hosts</code> for Local Domain Resolution",
  "id": "3-configure-etchosts-for-local-domain-resolution",
  "level": 3
}, {
  "value": "4. Create a Reverse Proxy Config for <code>llm.com</code>",
  "id": "4-create-a-reverse-proxy-config-for-llmcom",
  "level": 3
}, {
  "value": "5. Enable the Config",
  "id": "5-enable-the-config",
  "level": 3
}, {
  "value": "6. Test Nginx Config and Restart",
  "id": "6-test-nginx-config-and-restart",
  "level": 3
}, {
  "value": "7. Visit Your App",
  "id": "7-visit-your-app",
  "level": 3
}, {
  "value": "8. Add More Apps",
  "id": "8-add-more-apps",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "nginx-reverse-proxy-on-port-80-with-llmcom",
      children: "NGINX Reverse Proxy on Port 80 with llm.com"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.em, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " This will work only on your current system under your network, but this can save you from typing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "192....230:8080"
        }), " for accessing your locally hosted app."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-stop-and-disable-any-apps-working-on-port-80-this-port-is-normally-used-for-web-communication",
      children: "1. Stop and Disable any apps working on Port 80 (this port is normally used for web communication)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For my case, Apache2 was running on Port 80"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo systemctl stop apache2\r\nsudo systemctl disable apache2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-install-nginx-if-not-already-installed",
      children: "2. Install Nginx (if not already installed)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo apt update\r\nsudo apt install nginx -y\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "3-configure-etchosts-for-local-domain-resolution",
      children: ["3. Configure ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/etc/hosts"
      }), " for Local Domain Resolution"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This tells your system to resolve ", (0,jsx_runtime.jsx)(_components.code, {
        children: "llm.com"
      }), " locally."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo nano /etc/hosts\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Add the line ", (0,jsx_runtime.jsx)(_components.code, {
        children: "127.0.0.1 llm.com"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you're on a different machine than the one running Nginx, use the Nginx server's IP instead."
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "4-create-a-reverse-proxy-config-for-llmcom",
      children: ["4. Create a Reverse Proxy Config for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "llm.com"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create a new config file:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo nano /etc/nginx/sites-available/llm.com\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Paste this config:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "server {\r\n    listen 80;\r\n    server_name llm.com;\r\n\r\n    location / {\r\n        proxy_pass http://192.168.1.230:8080;  # replace with your app's actual IP and port\r\n        proxy_set_header Host $host;\r\n        proxy_set_header X-Real-IP $remote_addr;\r\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\r\n        proxy_set_header X-Forwarded-Proto $scheme;\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-enable-the-config",
      children: "5. Enable the Config"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Link it into ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sites-enabled"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo ln -s /etc/nginx/sites-available/llm.com /etc/nginx/sites-enabled/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Optional:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Remove the default site to avoid conflicts:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo rm /etc/nginx/sites-enabled/default\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-test-nginx-config-and-restart",
      children: "6. Test Nginx Config and Restart"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check for syntax errors:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo nginx -t\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If it says syntax is ok and test is successful, then restart Nginx:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo systemctl restart nginx\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "7-visit-your-app",
      children: "7. Visit Your App"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Open your browser and go to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "http://llm.com"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["It should show the app running on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "192.168.1.230:8080"
      }), ", now proxied cleanly by Nginx!"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8-add-more-apps",
      children: "8. Add More Apps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Add More Domains Easily by repeating steps 4–7 with new configs, example:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "dbui.com → 192.168.1.231:3000\r\n\r\nadminportal.com → 192.168.1.232:5000\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each with their own file in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/etc/nginx/sites-available/"
      }), " and an entry in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/etc/hosts"
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