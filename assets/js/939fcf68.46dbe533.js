"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[5991],{

/***/ 561:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2024_02_21_building_my_deep_learning_project_emotion_2_emoji_challenges_and_chuckles_story_md_939_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2024_02_21_building_my_deep_learning_project_emotion_2_emoji_challenges_and_chuckles_story_md_939_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9350);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8453);


const frontMatter = {
	slug: 'emotion2emoji',
	title: 'Building my Deep Learning project, Emotion2Emoji: Challenges and Chuckles',
	authors: [
		'ajay'
	],
	tags: [
		'python',
		'deep-learning'
	]
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "Why Emotion2Emoji",
  "id": "why-emotion2emoji",
  "level": 2
}, {
  "value": "Overcoming Challenges",
  "id": "overcoming-challenges",
  "level": 2
}, {
  "value": "The Significance of DeepFace",
  "id": "the-significance-of-deepface",
  "level": 2
}, {
  "value": "The Emotional Connect",
  "id": "the-emotional-connect",
  "level": 2
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
    h2: "h2",
    img: "img",
    p: "p",
    pre: "pre",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Read on ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://medium.com/@ajaytshaju/building-my-deep-learning-project-emotion2emoji-challenges-and-chuckles-dd2abb18e173",
        children: "Medium"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "In the dynamic landscape of technology, innovation becomes a beacon that guides creators to captivate audiences with unique and engaging projects. For me, this journey began with a challenge from my college’s technical fest, Asthra 8.0. The head of the department tasked me with crafting something special, something that would not only capture attention but also evoke joy. Thus, the inception of Emotion2Emoji — a lightweight system that predicts and displays emojis from facial emotions in a live webcam feed."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Emotion2Emoji",
        src: (__webpack_require__(4512)/* ["default"] */ .A) + "",
        width: "1400",
        height: "556"
      }), "\nSnapshot of the creator doing the demonstration of Emotion2Emoji (image by author)"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "why-emotion2emoji",
      children: "Why Emotion2Emoji"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The core inspiration behind Emotion2Emoji stemmed from the desire to create an interactive and entertaining experience. As a technology enthusiast, I often find myself delving into complex projects, but this time, the aim was to bring a smile to every face that encountered this innovation. The idea evolved from mere facial expression(emotion) recognition to dynamically predicting and displaying emojis in real-time, adding an element of fun to the user experience."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "overcoming-challenges",
      children: "Overcoming Challenges"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Embarking on this project, I faced several challenges that tested my skills and perseverance. One significant hurdle was my limited experience with computer vision projects involving live webcam feeds. Unlike previous projects, Emotion2Emoji required real-time processing of facial expressions, emotion prediction, and emoji display — all seamlessly integrated into a single OpenCV window."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-python",
        children: "# Previously I tried OpenCV for this\n# type of simple task, a CV-Camera\n\nimport cv2\n\ncap = cv2.VideoCapture(0)\nimage_count = 1\n\nwhile True:\n    ret, frame = cap.read()\n    cv2.imshow(\"Webcam Feed\", frame)\n    key = cv2.waitKey(1)\n    \n    if key == ord('s'):\n        cv2.imwrite(f\"{image_count}.jpg\", frame)\n        print(\"Image captured\")\n        image_count += 1\n\n    elif key == 27:\n        break\n\ncap.release()\ncv2.destroyAllWindows()\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The quest for a reliable deep learning library capable of accurate facial emotion detection was another challenge. After experimenting with various open-source projects, I discovered the gem — DeepFace. This library not only provided stable emotion predictions but also became the backbone of Emotion2Emoji, ensuring the system’s success."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The final obstacle lay in the presentation — displaying emojis as it is, without a background. Internet searches yielded no straightforward solution. Blending alpha channels became a daunting task, and there came the helpers: ChatGPT and Google Gemini they suggested some ways to solve the problem and it worked. However, overcoming these challenges not only enhanced the project’s functionality but also enriched my skill set."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Using artificial intelligence in our projects is important because it’s like the next big thing after regular internet searches. But, we shouldn’t totally depend on it. It’s more about finding the right balance. We can make our ideas better by using these AI tools, but we also need to ask the right questions to get the best results. So, it’s about using AI to help us, not taking over our creativity."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
        children: ["Checkout my project’s GitHub page ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/004Ajay/Emotion2Emoji",
          children: "here"
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "the-significance-of-deepface",
      children: "The Significance of DeepFace"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "DeepFace emerged as a game-changer, seamlessly integrating into the Emotion2Emoji system. Its accuracy and stability added a layer of reliability that was crucial for the success of the project, making it an invaluable component. DeepFace has many utilities lying inside it like Age, Gender, Race detection, etc… I have used only emotion detection from DeepFace."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "the-emotional-connect",
      children: "The Emotional Connect"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Why does Emotion2Emoji hold emotional significance for me? The answer lies in the joy and amusement it brings. Crafting a system that not only works seamlessly but also elicits smiles from users is a rewarding experience. The laughter and delight that Emotion2Emoji can bring make every challenge, every late-night coding session, and every problem overcome worth it. The emotional connection lies in the shared enjoyment — both in creating and experiencing the project."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Emotion2Emoji stands as proof of the power of innovation and perseverance. From a college fest challenge to a fully functional, entertaining system, this project represents the fusion of technology and fun. The journey from conceptualization to implementation was marked by challenges, triumphs, and a deep emotional connection to the joy it brings. As we continue to explore the vast possibilities of technology, projects like Emotion2Emoji remind us that sometimes, the most powerful innovations are the ones that make people smile."
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

/***/ 4512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Snapshot of the creator doing the demonstration of Emotion2Emoji-153921189a912fe3b7a51904123d7746.webp");

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

/***/ 9350:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/blog/emotion2emoji","source":"@site/blog/2024-02-21-Building_my_Deep_Learning_project_Emotion2Emoji_Challenges_and_Chuckles/story.md","title":"Building my Deep Learning project, Emotion2Emoji: Challenges and Chuckles","description":"Read on Medium","date":"2024-02-21T00:00:00.000Z","tags":[{"inline":false,"label":"Python","permalink":"/blog/tags/python","description":"Python tag description"},{"inline":false,"label":"Deep Learning","permalink":"/blog/tags/deep-learning","description":"Deep Learning tag description"}],"readingTime":3.58,"hasTruncateMarker":true,"authors":[{"name":"Ajay T Shaju","title":"AI & DS Engineer","url":"https://004ajay.github.io/","page":{"permalink":"/blog/authors/ajay"},"socials":{"linkedin":"https://www.linkedin.com/in/ajay-t-shaju/","github":"https://github.com/004ajay","medium":"https://medium.com/@ajaytshaju","x":"https://x.com/004ajayt"},"imageURL":"https://github.com/004ajay.png","key":"ajay"}],"frontMatter":{"slug":"emotion2emoji","title":"Building my Deep Learning project, Emotion2Emoji: Challenges and Chuckles","authors":["ajay"],"tags":["python","deep-learning"]},"unlisted":false,"prevItem":{"title":"How to make a Virtual Environment in Python (Windows)","permalink":"/blog/venv-python"},"nextItem":{"title":"Windows and Ubuntu Side by Side: Easy Solutions for Common Dual Boot Issues in High-End Laptops","permalink":"/blog/dual-booting-windows-ubuntu"}}');

/***/ })

}]);