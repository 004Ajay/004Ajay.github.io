"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[7360],{

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

/***/ 9135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_resume_projects_md_121_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-resume-projects-md-121.json
const site_docs_resume_projects_md_121_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"resume/Projects","title":"Projects","description":"Violence Detection from Videos (using Attention Mechanism)","source":"@site/docs/resume/Projects.md","sourceDirName":"resume","slug":"/resume/Projects","permalink":"/docs/resume/Projects","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"Projects","title":"Projects","sidebar_label":"Projects"},"sidebar":"tutorialSidebar","previous":{"title":"Languages","permalink":"/docs/resume/Languages"},"next":{"title":"Skills","permalink":"/docs/resume/Skills"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/resume/Projects.md


const frontMatter = {
	id: 'Projects',
	title: 'Projects',
	sidebar_label: 'Projects'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "<strong>Violence Detection from Videos (using Attention Mechanism)</strong>",
  "id": "violence-detection-from-videos-using-attention-mechanism",
  "level": 3
}, {
  "value": "<strong>Marks2CSV: A tool to convert marks in answer sheets to CSV format using OCR</strong>",
  "id": "marks2csv-a-tool-to-convert-marks-in-answer-sheets-to-csv-format-using-ocr",
  "level": 3
}, {
  "value": "<strong>Automated Financial Tracker using Gmail, Zapier, and Google Sheets</strong>",
  "id": "automated-financial-tracker-using-gmail-zapier-and-google-sheets",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h3: "h3",
    hr: "hr",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h3, {
      id: "violence-detection-from-videos-using-attention-mechanism",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Violence Detection from Videos (using Attention Mechanism)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["B.Tech Main Project | Source Code ‑ ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/004Ajay/Main-Project",
        children: "GitHub"
      }), " | August 2023 ‑ May 2024"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["• Developed a custom neural network to detect violence in videos using ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "TensorFlow"
      }), " Deep Learning framework."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["• Used a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "functional approach for building the neural network"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "combined LSTM with CNN (with attention mechanism)"
      }), " for efficiency."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "marks2csv-a-tool-to-convert-marks-in-answer-sheets-to-csv-format-using-ocr",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Marks2CSV: A tool to convert marks in answer sheets to CSV format using OCR"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Mark Entry Automation | Source Code ‑ ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/004Ajay/Marks2CSV_S6_Mini_Project",
        children: "GitHub"
      }), " | January 2023 ‑ June 2023"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["• ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Addresses the time‑consuming task of mark data entry of our teachers in the college"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["• Developed a customized software, resulting in time savings of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "5+ hours per week with accuracy by 98%"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["• Accepted and Presented at ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ICTEST-24 Conference"
      }), " organized by GMEC, Thrikkakara, Ernakulam. Kerala, India. | ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://ieeexplore.ieee.org/document/10576116",
        children: "Paper Link"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "automated-financial-tracker-using-gmail-zapier-and-google-sheets",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Automated Financial Tracker using Gmail, Zapier, and Google Sheets"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Personal Finance | Medium Blog - ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://medium.com/@ajaytshaju/converting-bank-statements-to-insights-using-google-sheets-for-data-transformation-and-cleanup-58259d102108",
        children: "Part 1"
      }), " , ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://medium.com/@ajaytshaju/converting-bank-statements-to-insights-automating-continuous-data-collection-and-building-a-c7e474f329b1",
        children: "Part 2"
      }), " | October 2024"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["• Collected, cleaned, and organized 950+ financial transaction data using specific steps in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MS Excel and Python"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["• Automated personal finance tracking by ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "integrating Gmail and Google Sheets via Zapier to streamline financial data logging"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["• Designed a Google Sheets dashboard with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Donut and Bar Charts"
      }), ", enabling real‑time insights across categories."]
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



/***/ })

}]);