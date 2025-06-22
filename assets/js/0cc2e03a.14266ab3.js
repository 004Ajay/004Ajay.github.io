"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[4696],{

/***/ 1732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/nvidia-smi and nvcc-v no output-dad7723cb8fbc928b49ae41b18fb0ffb.png");

/***/ }),

/***/ 2940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Python IDLE for torch-8e3bd28bf5c9334d82b4ae5ddfe1250c.png");

/***/ }),

/***/ 3412:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/blog/nvidia-drivers","source":"@site/blog/2025-06-22-Installing_Nvidia_Drivers/story.md","title":"Setting up Nvidia Drivers for GPU access on Ubuntu","description":"Read on Medium","date":"2025-06-22T00:00:00.000Z","tags":[{"inline":false,"label":"NVIDIA","permalink":"/blog/tags/nvidia","description":"NVIDIA tag description"},{"inline":false,"label":"Drivers","permalink":"/blog/tags/drivers","description":"Drivers tag description"},{"inline":false,"label":"CUDA","permalink":"/blog/tags/cuda","description":"CUDA tag description"},{"inline":false,"label":"Ubuntu","permalink":"/blog/tags/ubuntu","description":"Ubuntu tag description"},{"inline":false,"label":"Ollama","permalink":"/blog/tags/ollama","description":"Ollama tag description"},{"inline":false,"label":"GPU","permalink":"/blog/tags/gpu","description":"GPU tag description"}],"readingTime":5.01,"hasTruncateMarker":true,"authors":[{"name":"Ajay T Shaju","title":"AI & DS Engineer","url":"https://004ajay.github.io/","page":{"permalink":"/blog/authors/ajay"},"socials":{"linkedin":"https://www.linkedin.com/in/ajaytshaju/","github":"https://github.com/004ajay","medium":"https://medium.com/@ajaytshaju","x":"https://x.com/004ajayt"},"imageURL":"https://github.com/004ajay.png","key":"ajay"}],"frontMatter":{"slug":"nvidia-drivers","title":"Setting up Nvidia Drivers for GPU access on Ubuntu","authors":["ajay"],"tags":["nvidia","drivers","cuda","ubuntu","ollama","gpu"]},"unlisted":false,"nextItem":{"title":"Bash to Fish: A Terminal Change","permalink":"/blog/bash-to-fish"}}');

/***/ }),

/***/ 7777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2025_06_22_installing_nvidia_drivers_story_md_0cc_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2025_06_22_installing_nvidia_drivers_story_md_0cc_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3412);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8453);


const frontMatter = {
	slug: 'nvidia-drivers',
	title: 'Setting up Nvidia Drivers for GPU access on Ubuntu',
	authors: [
		'ajay'
	],
	tags: [
		'nvidia',
		'drivers',
		'cuda',
		'ubuntu',
		'ollama',
		'gpu'
	]
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "The real processes",
  "id": "the-real-processes",
  "level": 2
}, {
  "value": "Check if your system detects the GPU",
  "id": "check-if-your-system-detects-the-gpu",
  "level": 3
}, {
  "value": "Install Drivers",
  "id": "install-drivers",
  "level": 3
}, {
  "value": "Checking nvidia-smi; Install nvidia-cuda-toolkit",
  "id": "checking-nvidia-smi-install-nvidia-cuda-toolkit",
  "level": 3
}, {
  "value": "PyTorch Installation (Optional)",
  "id": "pytorch-installation-optional",
  "level": 2
}, {
  "value": "Start Loacally with Pytorch",
  "id": "start-loacally-with-pytorch",
  "level": 3
}, {
  "value": "Checking if torch can access our GPU",
  "id": "checking-if-torch-can-access-our-gpu",
  "level": 3
}, {
  "value": "Test your installation",
  "id": "test-your-installation",
  "level": 2
}, {
  "value": "Setting up a local LLM",
  "id": "setting-up-a-local-llm",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    img: "img",
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Read on ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://medium.com/@ajaytshaju",
        children: "Medium"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["After upgrading my Ubuntu from 18 to 22, I left with no nvidia drivers on my computer. When I type ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "nvidia-smi"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "nvcc -v"
      }), " there was no good output (see the image below). So I planned to show my way of setting up GPU drivers on my computer to the world. If your situation is the same, then follow along."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "No good output for nvidia-smi and nvcc -v",
        src: (__webpack_require__(1732)/* ["default"] */ .A) + "",
        width: "1816",
        height: "839"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "No good output for nvidia-smi and nvcc -v"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Before starting, I will give a short lesson on drivers"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
        children: "Drivers allow OS ↔ hardware communication. NVIDIA drivers are essential to communicate with your GPU, for graphics and compute functionality."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Drivers are softwares which act as translators between your OS and the hardware (like GPU, printer, or keyboard). NVIDIA drivers are crucial to communicate correctly with NVIDIA GPUs. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Nvidia Graphics Drivers"
      }), " for rendering visuals in games and videos, and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Compute Unified Device Architecture (CUDA) Drivers"
      }), " for GPU-accelerated computations like deep learning and scientific computing."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Now lets start with"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "the-real-processes",
      children: "The real processes"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "check-if-your-system-detects-the-gpu",
      children: "Check if your system detects the GPU"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "lspci | grep -i nvidia"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This will check for the presence of nvidia gpu in your system. If this command doesn't give a good output like in the image below, then you can stop here, because your system doesn't have a nvidia gpu or it is not detected the gpu."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "My system is detecting the Nvidia GPU",
        src: (__webpack_require__(8787)/* ["default"] */ .A) + "",
        width: "2139",
        height: "225"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "My system is detecting the Nvidia GPU"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "install-drivers",
      children: "Install Drivers"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["If the above commands work, then try ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "nvidia-smi"
      }), ", you might get a list of drivers as the output of nvidia-smi (see the image above). Normally we need to select the best driver, but sometimes we may not be up to date with the new driver details, so we can offload the driver version decision to our system by giving the command ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "ubuntu-drivers devices"
      }), " this will show a list of available and compatible drivers for our GPU, then we will auto install the best driver using ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "sudo ubuntu-drivers autoinstall"
      }), " this will show long commands running and installing, don't worry it is installing the best driver. On finishing, just give a good ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "sudo reboot"
      }), " (restart) to your system, so the system can understand the new changes."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
        children: ["In between let me explain what is happening - When you install drivers using ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "sudo ubuntu-drivers autoinstall"
        }), ", you're installing some files that allows Linux to detect and communicate with your GPU, this will enable ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "nvidia-smi"
        }), " to show a box output. If you want to use GPU-accelerated apps like Blender, video editors, or run ML/DL programs (eg, inference using PyTorch or TensorFlow), then installing the driver is enough. But if you want to go further into ML/DL development and LLM finetuning which uses libraries like xFormers, bitsandbytes, and triton then you need to do some more steps, i.e installing ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "nvidia-cuda-toolkit"
        }), "."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "checking-nvidia-smi-install-nvidia-cuda-toolkit",
      children: "Checking nvidia-smi; Install nvidia-cuda-toolkit"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.em, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Note"
        }), ": Read this section fully before running any commands"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["After reboot get into the terminal and quickly type ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "nvidia-smi"
      }), " and you will get a box like output with information such as your GPU name, power usage, memory usage, CUDA version, processes utilizing gpu currently etc...but when typing ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "nvcc -v"
      }), " there won't be any output and it will ask you to install nvidia-cuda-toolkit, and we need to do ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "sudo apt install nvidia-cuda-toolkit"
      }), " which may take some time. This is linked with the ubuntu version you have, for Ubuntu 22.04, CUDA 11.7 or later may be installed, this is easy when you need to install cuda-toolkit for a usecase which requires any version above 11.7 (here). But If you want a specific version, like CUDA Toolkit 12.8, you need to install it manually from ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://developer.nvidia.com/cuda-toolkit-archive",
        children: "this"
      }), " website by selecting the version you need, giving info such as OS, Architecture, Distribution, Version, Installer Type and finally following the commands displayed."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["On finishing, check the output of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "nvcc -v"
      }), " to confirm it has installed the toolkit."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "pytorch-installation-optional",
      children: "PyTorch Installation (Optional)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "start-loacally-with-pytorch",
      children: "Start Loacally with Pytorch"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["I need to install Pytorch for some coding purposes. I will be doing it in a conda environment (if you're not familiar with conda, you can use python virtual environments, or you can follow this ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://docs.conda.io/projects/conda/en/latest/user-guide/install/linux.html",
        children: "conda website"
      }), " to install conda, create and activate a new environment and install latest Pytorch that is compatible with your CUDA version - see their ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://pytorch.org/get-started/locally/",
        children: "Start Locally Website"
      }), ", give details like your OS, package, language, compute platform and copy the final command and run on your virtual environment to install Pytorch, this will take some time based on your internet speed."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "checking-if-torch-can-access-our-gpu",
      children: "Checking if torch can access our GPU"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Now you can enter into Python IDLE on terminal and run ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "import torch; torch.cuda.is_available()"
      }), " - if it returns ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "True"
      }), ", then your installation is successful. Otherwise there is some problem in between some commands or installations. If you have noticed any warning, red command etc..then debug on that."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Checking if torch can access our GPU, on Python IDLE",
        src: (__webpack_require__(2940)/* ["default"] */ .A) + "",
        width: "916",
        height: "128"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Checking if torch can access our GPU, on Python IDLE"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "test-your-installation",
      children: "Test your installation"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "setting-up-a-local-llm",
      children: "Setting up a local LLM"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["If everything is fine, we can try setting up Ollama (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://ollama.com/",
        children: "Website"
      }), " | ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "http://github.com/ollama/ollama",
        children: "GitHub"
      }), ") and test whether an LLM is able to use our consumer gpu to predict tokens."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Install ollama using ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "curl -fsSL https://ollama.com/install.sh | sh"
      }), " wait for it to finish and finally you can see a message from ollama ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "NVIDIA GPU installed"
      }), " and you can run a small LLM like llama or mistral (ollama run mistral) and test whether they're utilising our GPU by checking ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "nvtop"
      }), " or see if the LLM is generating the text fast."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Ollama detects our GPU",
        src: (__webpack_require__(9302)/* ["default"] */ .A) + "",
        width: "1431",
        height: "338"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Ollama detects our GPU"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "So that's it, now you will have GPU acceleration for your tasks. Good Luck!"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, {
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


/***/ }),

/***/ 8787:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/lspci output-8a2690ce44ec75f19215eec6e5673963.png");

/***/ }),

/***/ 9302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Ollama Installation-e3b82df32d1483d59ac74c9320c52eed.png");

/***/ })

}]);