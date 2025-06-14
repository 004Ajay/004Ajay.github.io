"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[8792],{

/***/ 297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Changing SATA Configuration in ROG Laptop-73aa5127b805ecacd3bb018c5deb0db2.webp");

/***/ }),

/***/ 860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2023_08_29_windows_and_ubuntu_side_by_side_easy_solutions_for_common_dual_boot_issues_in_high_end_laptops_story_md_c24_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2023_08_29_windows_and_ubuntu_side_by_side_easy_solutions_for_common_dual_boot_issues_in_high_end_laptops_story_md_c24_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4672);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8453);


const frontMatter = {
	slug: 'dual-booting-windows-ubuntu',
	title: 'Windows and Ubuntu Side by Side: Easy Solutions for Common Dual Boot Issues in High-End Laptops',
	authors: [
		'ajay'
	],
	tags: [
		'windows',
		'ubuntu',
		'linux'
	]
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "Note: Prioritize Data Safety",
  "id": "note-prioritize-data-safety",
  "level": 3
}, {
  "value": "Challenges",
  "id": "challenges",
  "level": 2
}, {
  "value": "Challenge 1: Bridging the Storage Configuration Gap",
  "id": "challenge-1-bridging-the-storage-configuration-gap",
  "level": 3
}, {
  "value": "Challenge 2: No Sound in Ubuntu",
  "id": "challenge-2-no-sound-in-ubuntu",
  "level": 3
}, {
  "value": "Conclusion",
  "id": "conclusion",
  "level": 2
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
    li: "li",
    ol: "ol",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Read on ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://medium.com/@ajaytshaju/windows-and-ubuntu-side-by-side-easy-solutions-for-common-dual-boot-issues-in-high-end-laptops-bc933da65160",
        children: "Medium"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The journey of dual-booting Windows and Ubuntu (or any other OS) on a high-end laptop can be a bit tricky. But still, it can be an exciting endeavor — challenges and problem-solving. This article presents a comprehensive guide for addressing two common issues users face while dual-booting high-end laptops: setting the storage configuration and resolving sound output problems."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Windows and Ubuntu (Image by author)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
        children: "Multi-booting is the act of installing multiple operating systems on a single computer and being able to choose which one to boot. The term dual-booting refers to the common configuration of specifically two operating systems. — Wikipedia"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "note-prioritize-data-safety",
      children: "Note: Prioritize Data Safety"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
        children: "Dual-booting your system may lead to permanent data loss, so take strict steps to ensure the safety of your valuable data, like backing up your important files and documents. Consider using external storage devices, cloud platforms, or any other reliable backup method to safeguard your data. I backed up all my data to an external hard disk before dual-booting the system."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Technical specifications of my system:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Laptop: ASUS ROG Strix G15"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Processor: Intel Core i7 10750H"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Graphics Card: Nvidia GTX 1660Ti"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "RAM: 16GB (8GB SO-DIMM * 2) DDR4"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Storage: 1TB M.2 NVMe PCIe 3.0 SSD"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "I have freed up 100GB of space for the new operating system: UBUNTU 22.04.3 LTS. And installed the new OS. After installing the new OS two problems have arisen, the storage configuration problem and the sound issue with the Ubuntu OS."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "challenges",
      children: "Challenges"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "challenge-1-bridging-the-storage-configuration-gap",
      children: "Challenge 1: Bridging the Storage Configuration Gap"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Windows supports Intel Rapid Storage Technology (RST) and Advanced Host Controller Interface (AHCI) storage configuration but my laptop was pre-configured Windows with Intel RST storage configuration. But Ubuntu works only on AHCI storage configuration, got this information from ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://www.python.org/downloads/release/python-31011/",
        children: "here"
      }), ". This mismatch posed a major obstacle to successful dual booting. Attempting to boot Windows on AHCI configuration led to boot failures and automatic system repairs."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "To solve this issue, I have gone through many solutions on the internet like changing the registry key in Windows (it worked for one of my friends but not for me). But at last, I got a solution from Stack Overflow (I did the dual booting weeks ago the link to that stack overflow answer is missing, may add it in the future)."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "First, Windows was set to boot in Safe Mode, allowing the necessary configuration changes without interference. Then in the BIOS, the SATA configuration was changed from Intel RST to AHCI mode. This step was crucial for Windows and Ubuntu to operate smoothly. Then I booted back to Windows to remove the safe boot configuration and then restarted Windows and it worked normally. This sequence of steps proved to be the key to resolving the storage configuration dilemma for me. Now Windows and Ubuntu could now be booted without any technical glitches."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Changing SATA Configuration in ROG Laptop",
        src: (__webpack_require__(297)/* ["default"] */ .A) + "",
        width: "1400",
        height: "739"
      }), "\nChanging SATA Configuration in ROG Laptop (Image by author)"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The commands I used for safe booting and setting SATA Configuration to AHCI:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
          children: "Open the Windows command prompt with admin privileges."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
          children: ["Type ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            children: "bcdedit /set {current} safeboot minimal"
          }), " , if this didn’t work try, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            children: "bcdedit /set safeboot minimal"
          })]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
          children: "Restart the computer and enter BIOS Setup (the key to BIOS in my system was ESC but it varies between systems, find yours by searching it on the internet)."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
          children: "Change the SATA Configuration mode from Intel RST to AHCI."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
          children: "Save changes and exit BIOS. Then, boot back to Windows (it automatically boots in Safe Mode)."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
          children: "Windows desktop may appear to be zoomed or have any other problems in safe mode, but don’t worry, open the command prompt once again with admin privileges."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
          children: ["Type ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            children: "bcdedit /deletevalue {current} safeboot"
          }), " , if this didn’t work try, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            children: "bcdedit /deletevalue safeboot"
          })]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
          children: "Reboot once more and Windows will automatically start with AHCI drivers enabled."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "challenge-2-no-sound-in-ubuntu",
      children: "Challenge 2: No Sound in Ubuntu"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Ubuntu had another problem while dual booting — no sound output. After extensive searches and other attempts like updating and reinstalling Pipewire, Alsamixer, and Pulseaudio to fix the issue, I became doubtful that Windows was somehow influencing the situation."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Computer Speaker",
        src: (__webpack_require__(9284)/* ["default"] */ .A) + "",
        width: "1260",
        height: "709"
      }), "\nComputer Speaker (Image from pexels)"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Straightaway, I went to the BIOS once more. This time, it was to test disabling the Fast Boot option. This choice aimed to eliminate potential conflicts between the two operating systems, especially since Windows tends to optimize booting speed at the expense of compatibility. Following this, I booted into Windows and did some file cut and paste (to know if any issues persisted) then I shut the Windows and booted into Ubuntu, With a surprise the attempt worked, and the sound came to life. To enjoy this moment, I played the RRR song ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://www.youtube.com/watch?v=aYMrjEChVxs",
        children: "Naatu-Naatu"
      }), " on YouTube on Ubuntu."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The journey of dual booting the ASUS ROG Strix G15 with Windows and Ubuntu was one of the technical challenges and a deeper understanding of how these operating systems interact with the hardware. Some strategic approaches, involving BIOS configurations, Safe Mode maneuvers, and Fast Boot adjustments, have worked for me. To simplify, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
        children: "a minor change would reflect a big change"
      }), ", so I hope it may work for you too, If not don't be down, try exploring other ways — ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
        children: "even if all attempts fail you will learn something new"
      }), ", which will help you to solve future problems."]
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

/***/ 4672:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/blog/dual-booting-windows-ubuntu","source":"@site/blog/2023-08-29-Windows_and_Ubuntu_Side_by_Side_Easy_Solutions_for_Common_Dual_Boot_Issues_in_High_End_Laptops/story.md","title":"Windows and Ubuntu Side by Side: Easy Solutions for Common Dual Boot Issues in High-End Laptops","description":"Read on Medium","date":"2023-08-29T00:00:00.000Z","tags":[{"inline":false,"label":"Windows","permalink":"/blog/tags/windows","description":"Windows tag description"},{"inline":false,"label":"Ubuntu","permalink":"/blog/tags/ubuntu","description":"Ubuntu tag description"},{"inline":false,"label":"Linux","permalink":"/blog/tags/linux","description":"Linux tag description"}],"readingTime":4.67,"hasTruncateMarker":true,"authors":[{"name":"Ajay T Shaju","title":"AI & DS Engineer","url":"https://004ajay.github.io/","page":{"permalink":"/blog/authors/ajay"},"socials":{"linkedin":"https://www.linkedin.com/in/ajaytshaju/","github":"https://github.com/004ajay","medium":"https://medium.com/@ajaytshaju","x":"https://x.com/004ajayt"},"imageURL":"https://github.com/004ajay.png","key":"ajay"}],"frontMatter":{"slug":"dual-booting-windows-ubuntu","title":"Windows and Ubuntu Side by Side: Easy Solutions for Common Dual Boot Issues in High-End Laptops","authors":["ajay"],"tags":["windows","ubuntu","linux"]},"unlisted":false,"prevItem":{"title":"Building my Deep Learning project, Emotion2Emoji: Challenges and Chuckles","permalink":"/blog/emotion2emoji"},"nextItem":{"title":"Useful Keyboard shortcuts in Jupyter Notebook","permalink":"/blog/jupyter-notebook-keyboard-shortcuts"}}');

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

/***/ 9284:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Computer Speaker-28a71c6aace9aeb5231f33299cd2f2ca.webp");

/***/ })

}]);