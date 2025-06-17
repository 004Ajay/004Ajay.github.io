"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[7001],{

/***/ 1201:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Some of My Book Collections-3c4a7b84e5427b227cb1c21d87bd3c52.webp");

/***/ }),

/***/ 5685:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/blog/books-blog","source":"@site/blog/2024-11-06-My_Journey_with_Books_From_Curiosity_to_Lifelong_Learning/story.md","title":"My Journey with Books: From Curiosity to Lifelong Learning","description":"Read on Medium","date":"2024-11-06T00:00:00.000Z","tags":[{"inline":false,"label":"Books","permalink":"/blog/tags/books","description":"Books tag description"}],"readingTime":7.22,"hasTruncateMarker":true,"authors":[{"name":"Ajay T Shaju","title":"AI & DS Engineer","url":"https://004ajay.github.io/","page":{"permalink":"/blog/authors/ajay"},"socials":{"linkedin":"https://www.linkedin.com/in/ajaytshaju/","github":"https://github.com/004ajay","medium":"https://medium.com/@ajaytshaju","x":"https://x.com/004ajayt"},"imageURL":"https://github.com/004ajay.png","key":"ajay"}],"frontMatter":{"slug":"books-blog","title":"My Journey with Books: From Curiosity to Lifelong Learning","authors":["ajay"],"tags":["books"]},"unlisted":false,"prevItem":{"title":"Converting Bank Statements to Insights: Automating Future Data Collection using Gmail Zapier and Google Sheets Part 1","permalink":"/blog/statement-to-insights-part1"},"nextItem":{"title":"Step by Step Guide for Creating a Reading Habit Tracker in Google Sheets","permalink":"/blog/reading-habit-tracker-google-sheets"}}');

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

/***/ 9415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2024_11_06_my_journey_with_books_from_curiosity_to_lifelong_learning_story_md_61f_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2024_11_06_my_journey_with_books_from_curiosity_to_lifelong_learning_story_md_61f_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5685);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8453);


const frontMatter = {
	slug: 'books-blog',
	title: 'My Journey with Books: From Curiosity to Lifelong Learning',
	authors: [
		'ajay'
	],
	tags: [
		'books'
	]
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "Childhood Curiosity and the Spark of Knowledge",
  "id": "childhood-curiosity-and-the-spark-of-knowledge",
  "level": 2
}, {
  "value": "The Turning Point: Self-Help and Setting a Reading Structure",
  "id": "the-turning-point-self-help-and-setting-a-reading-structure",
  "level": 2
}, {
  "value": "Discovering the Impact of Books on My Life and Thinking",
  "id": "discovering-the-impact-of-books-on-my-life-and-thinking",
  "level": 2
}, {
  "value": "Expanding My Reading Horizons",
  "id": "expanding-my-reading-horizons",
  "level": 2
}, {
  "value": "Reading Habit Tracker: A Work in Progress",
  "id": "reading-habit-tracker-a-work-in-progress",
  "level": 2
}, {
  "value": "How Reading Has Transformed My Perspective",
  "id": "how-reading-has-transformed-my-perspective",
  "level": 2
}, {
  "value": "My Lifelong Reading Goal",
  "id": "my-lifelong-reading-goal",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h2: "h2",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Read on ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://medium.com/@ajaytshaju/my-journey-with-books-from-curiosity-to-lifelong-learning-e3388b1d10da",
        children: "Medium"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Growing up, books weren’t just items on my shelf; they were the torches I used to explore worlds, ideas I hadn’t imagined, and skills I didn’t even know existed. Each book brought something unique to my life, from childhood curiosity to shaping my career in Artificial Intelligence. Through books, I not only gained knowledge but also learned more about myself and the world around me. Here’s my journey with reading and the impact it has had on my life, thoughts, and ambitions."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Some of My Book Collections",
        src: (__webpack_require__(1201)/* ["default"] */ .A) + "",
        width: "1400",
        height: "1867"
      }), "\nSome of My Book Collections"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "childhood-curiosity-and-the-spark-of-knowledge",
      children: "Childhood Curiosity and the Spark of Knowledge"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "According to my mother, my reading journey started at the age of 4 with some children-level Malayalam books. From there onwards, I used to see images and try to understand things by reading less, which helps me now watch foreign movies without English subtitles. By this time most children will be drawn to reading newspapers but I haven’t, till now. It is because of the negativity spread by the local publications in their first 2–3 pages, if they can switch it with achievements, information, or even advertisements, then most youngsters like me would have read it. but it’s business and they have to sell more, the current situation as explained above may be their selling strategy."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Then came a time when I started searching for facts to feed my curiosity. There I was introduced to many books like Important Days, How to Read and Speak English, World Leaders, The Children’s Encyclopedia, The Atlas, World Leaders, and Illustrated Oxford Dictionary(which I recommend you to buy for your children or nephews) this may weigh 2kg(4.5lbs) and may cost around Rs.2000 (24 USD) but it can give a lifetime knowledge in 1000 big pages."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["When I was in the 7th grade, our school introduced the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Tell Me Why"
      }), " series as an option for students, most of my friends thought it was a waste of money, but this series of books by Manorama Publications played an important role in my life. Despite the skepticism around me, I asked my mother if I could buy them, and she supported my interest. I collected over 15 books from the series, though I still have only 12 with me today. These weren’t just books to me — they were my private knowledge hub(first little library). I quickly read each publication, re-reading them while eagerly waiting for the next. These books introduced me to new topics, including a term that would later become my passion: Artificial Intelligence. When I read about the potential of computers and mobile devices to think like humans, it was revolutionary. Keep in mind, at that time my parents had mobile phones — without touchscreens, so the idea of machines with human-like intelligence was a thrilling mystery to me. At that time, I didn’t realize this curiosity would later lead me to pursue a BTech degree in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Artificial Intelligence and Data Science"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "the-turning-point-self-help-and-setting-a-reading-structure",
      children: "The Turning Point: Self-Help and Setting a Reading Structure"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["In 12th grade, I faced a reading milestone that completely changed how I approached books. A close friend lent me a copy of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "You Can Win by Shiv Khera"
      }), ". I wasn’t keen on self-help books at the time — I just tried ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
        children: "The Power of Your Subconscious Mind"
      }), ". So, I initially refused to read this book. However, my friend asked me to try the first chapter, Importance of Attitude: Building a Positive Attitude — and to my surprise, I was hooked and finished the whole book within a week."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["To return the favor, I lent her ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "A Brief History of Time by Stephen Hawking"
      }), ". She had been hoping to find this book at the school library, but it was unavailable. This exchange sparked something in me, marking the beginning of a structured approach to my reading. I started noting down the books I read and the total number of pages, a habit I’ve maintained since."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "discovering-the-impact-of-books-on-my-life-and-thinking",
      children: "Discovering the Impact of Books on My Life and Thinking"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "From that point on, my reading became a journey of self-discovery and learning. I’ve read over 50 books to date, which might not seem like a large number, but each book has left a lasting impact on me."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["For example, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Rich Dad Poor Dad by Robert Kiyosaki"
      }), " entirely shifted my perspective on money, savings, and investments. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Start With Why by Simon Sinek"
      }), " taught me the importance of finding a purpose in everything I do. Before reading it, I often focused on “what” and “how” first. But Sinek’s idea of starting with “why” influenced the way I structured whatever I do from then on. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Hooked by Nir Eyal"
      }), ", expanded my understanding of marketing and creating impactful products that connect deeply with users. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Atomic Habits by James Clear"
      }), " taught me the power of small steps. It emphasized that big achievements come from the accumulation of consistent tiny actions. For instance, just as small amounts of water gradually form an ocean, little habits build significant change over time."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "expanding-my-reading-horizons",
      children: "Expanding My Reading Horizons"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "I don’t limit myself to specific genres. Everything from Science to business, and even Malayalam literature — each genre has something unique to offer. Malayalam books, particularly short stories by Joseph Annamkutty Jose, inspire me by bringing out beauty in life’s smallest details."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["I also explore science-psychology books like ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "The Brain by David Eagleman"
      }), ", which offers insights into the most complex and powerful organ that ever existed, the Brain. Self-help classics such as ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "How to Win Friends and Influence People and How to Stop Worrying and Start Living by Dale Carnegie"
      }), " have taught me the value of networking, public speaking, and maintaining healthy relationships for personal and professional growth."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["To complement my studies, I’ve also been reading books on Artificial Intelligence. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Life 3.0"
      }), " by Max Tegmark, which I’m currently reading, has been enlightening on AI’s impact on humanity and offers a broad perspective on what it means to be human in an AI-driven world."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "reading-habit-tracker-a-work-in-progress",
      children: "Reading Habit Tracker: A Work in Progress"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["To further enrich my reading journey, I’m currently working on building a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Reading Habit Tracker using Google Sheets"
      }), ". Once completed, this tracker will help me record and provide insights about the books I have read. In addition, I am planning to share a detailed technical look at this setup in a future blog post. So stay tuned for the update."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "how-reading-has-transformed-my-perspective",
      children: "How Reading Has Transformed My Perspective"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Reading has profoundly impacted my way of thinking and personal growth. Here are a few valuable lessons I’ve learned that might resonate with other readers:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
            children: "Understanding at Your Own Pace"
          }), ": When you read regularly and grasp what you’re reading, it fine-tunes your ability to understand things at your own pace. This “speed of understanding” helps me recognize whether I’m gaining value from content or simply consuming it mindlessly — whether it’s a social media post or an informative video."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
            children: "Recognizing Supporting Ideas"
          }), ": Often, when I read, I find myself connecting the material with personal experiences or similar situations. This helps to reinforce the memory and meaning behind what I’m reading. For instance, while reading about the concept of “variable rewards” in Hooked, I instantly thought of how YouTube Shorts and Instagram Reels use this technique to keep users engaged."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
            children: "Analyzing Perspectives and Biases"
          }), ": Books have also taught me to recognize other people’s perspectives and biases. This skill helps me better understand others in conversations and interactions, whether in real life or online. Distinguishing between my own biases and others’ viewpoints has made me more adaptable and open-minded."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
            children: "Asking Questions"
          }), ": One of the most valuable habits I’ve developed from reading is the ability to ask insightful questions. Reading ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
            children: "Rich Dad Poor Dad"
          }), " made me curious about Ray Kroc and his impact on McDonald’s. What if he hadn’t seized the opportunity to standardize the brand? What if he’d remained a paper cup salesman? Such questions deepen my understanding and strengthen my critical thinking."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "my-lifelong-reading-goal",
      children: "My Lifelong Reading Goal"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["I don’t see books as just collections of pages; ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
        children: "they are like lifetimes of experience compressed into a few hundred pages"
      }), ". My goal is to read widely and learn from diverse topics, never confining myself to a set of genres. Books are a way for me to expand my knowledge, broaden my perspective, and continue growing as a person. Who knows where the next book will lead me? But one thing is certain: the habit of reading has shaped who I am, and it will continue to guide me toward the person I aspire to become."]
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



/***/ })

}]);