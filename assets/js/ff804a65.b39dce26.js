"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[8373],{

/***/ 1275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Before_Normalizing-ce09005e38b0486c52a3b62e5b7a369d.png");

/***/ }),

/***/ 5836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_maths_min_max_normalization_md_ff8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-maths-min-max-normalization-md-ff8.json
const site_docs_maths_min_max_normalization_md_ff8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"maths/Min-Max-Normalization","title":"Min-Max Normalization","description":"I was working with some LLMs, and I need to compare a set of LLMs based on metrics like Latency, GPU Power Usage, Alignment, Similarity, Clarity, and Conciseness for 9 Open Source LLMs. So I thought Spider/Radar Chart would be the best to show the comparison in a single graph. On plotting my data directly I got","source":"@site/docs/maths/Min-Max Normalization.md","sourceDirName":"maths","slug":"/maths/Min-Max-Normalization","permalink":"/docs/maths/Min-Max-Normalization","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"Min-Max-Normalization","title":"Min-Max Normalization","sidebar_label":"Min-Max Normalization"},"sidebar":"tutorialSidebar","previous":{"title":"Geometric Distances","permalink":"/docs/maths/geometric-distances"},"next":{"title":"Blogs-Private","permalink":"/docs/category/blogs-private"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/maths/Min-Max Normalization.md


const frontMatter = {
	id: 'Min-Max-Normalization',
	title: 'Min-Max Normalization',
	sidebar_label: 'Min-Max Normalization'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Normalization vs Standardization vs Scaling",
  "id": "normalization-vs-standardization-vs-scaling",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    annotation: "annotation",
    code: "code",
    h2: "h2",
    hr: "hr",
    img: "img",
    math: "math",
    mfrac: "mfrac",
    mi: "mi",
    mn: "mn",
    mo: "mo",
    mrow: "mrow",
    mspace: "mspace",
    mstyle: "mstyle",
    mtable: "mtable",
    mtd: "mtd",
    mtext: "mtext",
    mtr: "mtr",
    p: "p",
    pre: "pre",
    semantics: "semantics",
    span: "span",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["I was working with some LLMs, and I need to compare a set of LLMs based on metrics like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Latency, GPU Power Usage, Alignment, Similarity, Clarity, and Conciseness"
      }), " for 9 Open Source LLMs. So I thought ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Spider/Radar Chart"
      }), " would be the best to show the comparison in a single graph. On plotting my data directly I got"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "Before Normalizing",
        src: (__webpack_require__(1275)/* ["default"] */ .A) + "",
        width: "1217",
        height: "1014"
      }), "\nBefore Normalizing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["See, the scaling of my data was wrong, as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Alignment to Conciseness"
      }), " was scaled between 0-10 and the other two has no standard scaling. So I need to bring the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Latency and GPU Power Usage"
      }), " values between 0 to 10. So the solution was ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Min-Max Normalization"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.span, {
      className: "katex-display",
      children: (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            display: "block",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mtable, {
                rowspacing: "0.25em",
                columnalign: "center",
                columnspacing: "0em",
                children: [(0,jsx_runtime.jsx)(_components.mtr, {
                  children: (0,jsx_runtime.jsx)(_components.mtd, {
                    children: (0,jsx_runtime.jsx)(_components.mstyle, {
                      scriptlevel: "0",
                      displaystyle: "true",
                      children: (0,jsx_runtime.jsxs)(_components.mrow, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "M"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "i"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "n"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "−"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "M"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "a"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "x"
                        }), (0,jsx_runtime.jsx)(_components.mtext, {
                          children: "  "
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "N"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "o"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "r"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "m"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "a"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "l"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "i"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "z"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "a"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "t"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "i"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "o"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "n"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "="
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mo, {
                            fence: "true",
                            children: "["
                          }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                            children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                              children: [(0,jsx_runtime.jsx)(_components.mo, {
                                stretchy: "false",
                                children: "("
                              }), (0,jsx_runtime.jsx)(_components.mi, {
                                children: "x"
                              }), (0,jsx_runtime.jsx)(_components.mo, {
                                children: "−"
                              }), (0,jsx_runtime.jsx)(_components.mi, {
                                children: "m"
                              }), (0,jsx_runtime.jsx)(_components.mi, {
                                children: "i"
                              }), (0,jsx_runtime.jsx)(_components.mi, {
                                children: "n"
                              }), (0,jsx_runtime.jsx)(_components.mo, {
                                stretchy: "false",
                                children: "("
                              }), (0,jsx_runtime.jsx)(_components.mi, {
                                children: "x"
                              }), (0,jsx_runtime.jsx)(_components.mo, {
                                stretchy: "false",
                                children: ")"
                              }), (0,jsx_runtime.jsx)(_components.mo, {
                                stretchy: "false",
                                children: ")"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.mrow, {
                              children: [(0,jsx_runtime.jsx)(_components.mo, {
                                stretchy: "false",
                                children: "("
                              }), (0,jsx_runtime.jsx)(_components.mi, {
                                children: "m"
                              }), (0,jsx_runtime.jsx)(_components.mi, {
                                children: "a"
                              }), (0,jsx_runtime.jsx)(_components.mi, {
                                children: "x"
                              }), (0,jsx_runtime.jsx)(_components.mo, {
                                stretchy: "false",
                                children: "("
                              }), (0,jsx_runtime.jsx)(_components.mi, {
                                children: "x"
                              }), (0,jsx_runtime.jsx)(_components.mo, {
                                stretchy: "false",
                                children: ")"
                              }), (0,jsx_runtime.jsx)(_components.mo, {
                                children: "−"
                              }), (0,jsx_runtime.jsx)(_components.mi, {
                                children: "m"
                              }), (0,jsx_runtime.jsx)(_components.mi, {
                                children: "i"
                              }), (0,jsx_runtime.jsx)(_components.mi, {
                                children: "n"
                              }), (0,jsx_runtime.jsx)(_components.mo, {
                                stretchy: "false",
                                children: "("
                              }), (0,jsx_runtime.jsx)(_components.mi, {
                                children: "x"
                              }), (0,jsx_runtime.jsx)(_components.mo, {
                                stretchy: "false",
                                children: ")"
                              }), (0,jsx_runtime.jsx)(_components.mo, {
                                stretchy: "false",
                                children: ")"
                              })]
                            })]
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            fence: "true",
                            children: "]"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "×"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          stretchy: "false",
                          children: "("
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "n"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "e"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "w"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          mathvariant: "normal",
                          children: "_"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "m"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "a"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "x"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "−"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "n"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "e"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "w"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          mathvariant: "normal",
                          children: "_"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "m"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "i"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "n"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          stretchy: "false",
                          children: ")"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "+"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "n"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "e"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "w"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          mathvariant: "normal",
                          children: "_"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "m"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "i"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "n"
                        })]
                      })
                    })
                  })
                }), (0,jsx_runtime.jsx)(_components.mtr, {
                  children: (0,jsx_runtime.jsx)(_components.mtd, {
                    children: (0,jsx_runtime.jsx)(_components.mstyle, {
                      scriptlevel: "0",
                      displaystyle: "true",
                      children: (0,jsx_runtime.jsxs)(_components.mrow, {
                        children: [(0,jsx_runtime.jsx)(_components.mspace, {
                          width: "-15.08em"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "m"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "i"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "n"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          stretchy: "false",
                          children: "("
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "x"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          stretchy: "false",
                          children: ")"
                        }), (0,jsx_runtime.jsx)(_components.mtext, {
                          children: "  "
                        }), (0,jsx_runtime.jsx)(_components.mtext, {
                          children: "is the minimum value in the data range to be scaled"
                        })]
                      })
                    })
                  })
                }), (0,jsx_runtime.jsx)(_components.mtr, {
                  children: (0,jsx_runtime.jsx)(_components.mtd, {
                    children: (0,jsx_runtime.jsx)(_components.mstyle, {
                      scriptlevel: "0",
                      displaystyle: "true",
                      children: (0,jsx_runtime.jsxs)(_components.mrow, {
                        children: [(0,jsx_runtime.jsx)(_components.mspace, {
                          width: "-14.7954em"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "m"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "a"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "x"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          stretchy: "false",
                          children: "("
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "x"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          stretchy: "false",
                          children: ")"
                        }), (0,jsx_runtime.jsx)(_components.mtext, {
                          children: "  "
                        }), (0,jsx_runtime.jsx)(_components.mtext, {
                          children: "is the maximum value in the data range to be scaled"
                        })]
                      })
                    })
                  })
                }), (0,jsx_runtime.jsx)(_components.mtr, {
                  children: (0,jsx_runtime.jsx)(_components.mtd, {
                    children: (0,jsx_runtime.jsx)(_components.mstyle, {
                      scriptlevel: "0",
                      displaystyle: "true",
                      children: (0,jsx_runtime.jsxs)(_components.mrow, {
                        children: [(0,jsx_runtime.jsx)(_components.mspace, {
                          width: "-17.0717em"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "n"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "e"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "w"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          mathvariant: "normal",
                          children: "_"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "m"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "i"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "n"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          stretchy: "false",
                          children: "("
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "x"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          stretchy: "false",
                          children: ")"
                        }), (0,jsx_runtime.jsx)(_components.mtext, {
                          children: "  "
                        }), (0,jsx_runtime.jsx)(_components.mtext, {
                          children: "is the min value of new scale (0 in [0, 10])"
                        })]
                      })
                    })
                  })
                }), (0,jsx_runtime.jsx)(_components.mtr, {
                  children: (0,jsx_runtime.jsx)(_components.mtd, {
                    children: (0,jsx_runtime.jsx)(_components.mstyle, {
                      scriptlevel: "0",
                      displaystyle: "true",
                      children: (0,jsx_runtime.jsxs)(_components.mrow, {
                        children: [(0,jsx_runtime.jsx)(_components.mspace, {
                          width: "-16.2181em"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "n"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "e"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "w"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          mathvariant: "normal",
                          children: "_"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "m"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "a"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "x"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          stretchy: "false",
                          children: "("
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "x"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          stretchy: "false",
                          children: ")"
                        }), (0,jsx_runtime.jsx)(_components.mtext, {
                          children: "  "
                        }), (0,jsx_runtime.jsx)(_components.mtext, {
                          children: "is the max value of new scale (10 in [0, 10])"
                        })]
                      })
                    })
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\begin{gather*}\nMin-Max\\;Normalization=\\left[\\frac{(x−min(x))}{(max(x)−min(x))}\\right] \\times (new\\_max - new\\_min) + new\\_min\\\\\n\n\\hspace{-5.3cm} min(x) \\; \\text{is the minimum value in the data range to be scaled} \\\\\n\\hspace{-5.2cm} max(x) \\; \\text{is the maximum value in the data range to be scaled} \\\\\n\\hspace{-6cm} new\\_min(x) \\; \\text{is the min value of new scale (0 in [0, 10])} \\\\\n\\hspace{-5.7cm} new\\_max(x) \\; \\text{is the max value of new scale (10 in [0, 10])} \\\\\n\\end{gather*}"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "8.7em",
                verticalAlign: "-4.1em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: (0,jsx_runtime.jsx)(_components.span, {
                className: "mtable",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "col-align-c",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "4.6em"
                        },
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-6.6em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3.45em"
                            }
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mord",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              style: {
                                marginRight: "0.10903em"
                              },
                              children: "M"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "in"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mbin",
                              children: "−"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              style: {
                                marginRight: "0.10903em"
                              },
                              children: "M"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "a"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "x"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2778em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              style: {
                                marginRight: "0.10903em"
                              },
                              children: "N"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              style: {
                                marginRight: "0.02778em"
                              },
                              children: "or"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "ma"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              style: {
                                marginRight: "0.01968em"
                              },
                              children: "l"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "i"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              style: {
                                marginRight: "0.04398em"
                              },
                              children: "z"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "a"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "t"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "i"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "o"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "n"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2778em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mrel",
                              children: "="
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2778em"
                              }
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              className: "minner",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mopen delimcenter",
                                style: {
                                  top: "0em"
                                },
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "delimsizing size3",
                                  children: "["
                                })
                              }), (0,jsx_runtime.jsxs)(_components.span, {
                                className: "mord",
                                children: [(0,jsx_runtime.jsx)(_components.span, {
                                  className: "mopen nulldelimiter"
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mfrac",
                                  children: (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "vlist-t vlist-t2",
                                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                                      className: "vlist-r",
                                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                                        className: "vlist",
                                        style: {
                                          height: "1.427em"
                                        },
                                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                                          style: {
                                            top: "-2.314em"
                                          },
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "pstrut",
                                            style: {
                                              height: "3em"
                                            }
                                          }), (0,jsx_runtime.jsxs)(_components.span, {
                                            className: "mord",
                                            children: [(0,jsx_runtime.jsx)(_components.span, {
                                              className: "mopen",
                                              children: "("
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord mathnormal",
                                              children: "ma"
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord mathnormal",
                                              children: "x"
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mopen",
                                              children: "("
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord mathnormal",
                                              children: "x"
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mclose",
                                              children: ")"
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mspace",
                                              style: {
                                                marginRight: "0.2222em"
                                              }
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mbin",
                                              children: "−"
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mspace",
                                              style: {
                                                marginRight: "0.2222em"
                                              }
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord mathnormal",
                                              children: "min"
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mopen",
                                              children: "("
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord mathnormal",
                                              children: "x"
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mclose",
                                              children: "))"
                                            })]
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.span, {
                                          style: {
                                            top: "-3.23em"
                                          },
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "pstrut",
                                            style: {
                                              height: "3em"
                                            }
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "frac-line",
                                            style: {
                                              borderBottomWidth: "0.04em"
                                            }
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.span, {
                                          style: {
                                            top: "-3.677em"
                                          },
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "pstrut",
                                            style: {
                                              height: "3em"
                                            }
                                          }), (0,jsx_runtime.jsxs)(_components.span, {
                                            className: "mord",
                                            children: [(0,jsx_runtime.jsx)(_components.span, {
                                              className: "mopen",
                                              children: "("
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord mathnormal",
                                              children: "x"
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mspace",
                                              style: {
                                                marginRight: "0.2222em"
                                              }
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mbin",
                                              children: "−"
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mspace",
                                              style: {
                                                marginRight: "0.2222em"
                                              }
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord mathnormal",
                                              children: "min"
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mopen",
                                              children: "("
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord mathnormal",
                                              children: "x"
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mclose",
                                              children: "))"
                                            })]
                                          })]
                                        })]
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist-s",
                                        children: "​"
                                      })]
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist-r",
                                      children: (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist",
                                        style: {
                                          height: "0.936em"
                                        },
                                        children: (0,jsx_runtime.jsx)(_components.span, {})
                                      })
                                    })]
                                  })
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mclose nulldelimiter"
                                })]
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mclose delimcenter",
                                style: {
                                  top: "0em"
                                },
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "delimsizing size3",
                                  children: "]"
                                })
                              })]
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mbin",
                              children: "×"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mopen",
                              children: "("
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "n"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "e"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              style: {
                                marginRight: "0.02691em"
                              },
                              children: "w"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord",
                              style: {
                                marginRight: "0.02778em"
                              },
                              children: "_"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "ma"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "x"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mbin",
                              children: "−"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "n"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "e"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              style: {
                                marginRight: "0.02691em"
                              },
                              children: "w"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord",
                              style: {
                                marginRight: "0.02778em"
                              },
                              children: "_"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "min"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mclose",
                              children: ")"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mbin",
                              children: "+"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "n"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "e"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              style: {
                                marginRight: "0.02691em"
                              },
                              children: "w"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord",
                              style: {
                                marginRight: "0.02778em"
                              },
                              children: "_"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "min"
                            })]
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-4.51em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3.45em"
                            }
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mord",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "-15.08em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "min"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mopen",
                              children: "("
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "x"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mclose",
                              children: ")"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2778em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord text",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord",
                                children: "is the minimum value in the data range to be scaled"
                              })
                            })]
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.01em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3.45em"
                            }
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mord",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "-14.7954em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "ma"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "x"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mopen",
                              children: "("
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "x"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mclose",
                              children: ")"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2778em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord text",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord",
                                children: "is the maximum value in the data range to be scaled"
                              })
                            })]
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-1.51em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3.45em"
                            }
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mord",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "-17.0717em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "n"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "e"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              style: {
                                marginRight: "0.02691em"
                              },
                              children: "w"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord",
                              style: {
                                marginRight: "0.02778em"
                              },
                              children: "_"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "min"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mopen",
                              children: "("
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "x"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mclose",
                              children: ")"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2778em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord text",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord",
                                children: "is the min value of new scale (0 in [0, 10])"
                              })
                            })]
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-0.01em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3.45em"
                            }
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mord",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "-16.2181em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "n"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "e"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              style: {
                                marginRight: "0.02691em"
                              },
                              children: "w"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord",
                              style: {
                                marginRight: "0.02778em"
                              },
                              children: "_"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "ma"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "x"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mopen",
                              children: "("
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "x"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mclose",
                              children: ")"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2778em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord text",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord",
                                children: "is the max value of new scale (10 in [0, 10])"
                              })
                            })]
                          })]
                        })]
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "4.1em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })
              })
            })]
          })
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "After Normalizing",
        src: (__webpack_require__(7348)/* ["default"] */ .A) + "",
        width: "1218",
        height: "929"
      }), "\nAfter Normalizing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Note"
      }), ": Though it seems to be working(clearly plotting all values), just take a look at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "gemma3:27b's gpu_power_usage_watts and qwen2.5:3b's latency_sec - they're 0"
      }), ". This doesn't mean they didn't used gpu or fast answering, but a common error in min-max normalization. There are many solutions - Add a small constant (Additive  to Smoothing) denominator and numerator, Log-Scale Transformation [", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "X"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  mathvariant: "normal",
                  children: "_"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "l"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "o"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "g"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "l"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "o"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "g"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "X"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "+"
                }), (0,jsx_runtime.jsx)(_components.mn, {
                  children: "1"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "X\\_log=log(X+1)"
              })]
            })
          })
        }), (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: [(0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1.0044em",
                verticalAlign: "-0.31em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.07847em"
              },
              children: "X"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              style: {
                marginRight: "0.02778em"
              },
              children: "_"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.01968em"
              },
              children: "l"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "o"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.03588em"
              },
              children: "g"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: "="
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.01968em"
              },
              children: "l"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "o"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.03588em"
              },
              children: "g"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.07847em"
              },
              children: "X"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mbin",
              children: "+"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "1"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: ")"
            })]
          })]
        })]
      }), ", the apply min-max norm to ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "X"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  mathvariant: "normal",
                  children: "_"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "l"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "o"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "g"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "X\\_log"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1.0044em",
                verticalAlign: "-0.31em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.07847em"
              },
              children: "X"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              style: {
                marginRight: "0.02778em"
              },
              children: "_"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.01968em"
              },
              children: "l"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "o"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.03588em"
              },
              children: "g"
            })]
          })
        })]
      }), "]"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Now an Example:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["We have values ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[23, 37, 11, 76]"
      }), " and the requirement is to scale it between 0-10, i.e, ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "m"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "x"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsx)(_components.mn, {
                  children: "11"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  separator: "true",
                  children: ","
                }), (0,jsx_runtime.jsx)(_components.mtext, {
                  children: "  "
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "m"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "a"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "x"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "x"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsx)(_components.mn, {
                  children: "76"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  separator: "true",
                  children: ","
                }), (0,jsx_runtime.jsx)(_components.mtext, {
                  children: "  "
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "w"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  mathvariant: "normal",
                  children: "_"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "m"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "a"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "x"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsx)(_components.mn, {
                  children: "10"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  separator: "true",
                  children: ","
                }), (0,jsx_runtime.jsx)(_components.mtext, {
                  children: "  "
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "e"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "w"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  mathvariant: "normal",
                  children: "_"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "m"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "i"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsx)(_components.mn, {
                  children: "0"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "min(x) = 11,\\; max(x) = 76,\\; new\\_max = 10,\\; new\\_min = 0"
              })]
            })
          })
        }), (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: [(0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "min"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "x"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: ")"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: "="
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "11"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mpunct",
              children: ","
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "ma"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "x"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "x"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: ")"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: "="
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.9544em",
                verticalAlign: "-0.31em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "76"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mpunct",
              children: ","
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "n"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "e"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.02691em"
              },
              children: "w"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              style: {
                marginRight: "0.02778em"
              },
              children: "_"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "ma"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "x"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: "="
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.9695em",
                verticalAlign: "-0.31em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "10"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mpunct",
              children: ","
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "n"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "e"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.02691em"
              },
              children: "w"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              style: {
                marginRight: "0.02778em"
              },
              children: "_"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "min"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: "="
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.6444em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "0"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.span, {
      className: "katex-display",
      children: (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            display: "block",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mtable, {
                rowspacing: "0.25em",
                columnalign: "center",
                columnspacing: "0em",
                children: [(0,jsx_runtime.jsx)(_components.mtr, {
                  children: (0,jsx_runtime.jsx)(_components.mtd, {
                    children: (0,jsx_runtime.jsx)(_components.mstyle, {
                      scriptlevel: "0",
                      displaystyle: "true",
                      children: (0,jsx_runtime.jsx)(_components.mtext, {
                        children: "Equation becomes:"
                      })
                    })
                  })
                }), (0,jsx_runtime.jsx)(_components.mtr, {
                  children: (0,jsx_runtime.jsx)(_components.mtd, {
                    children: (0,jsx_runtime.jsx)(_components.mstyle, {
                      scriptlevel: "0",
                      displaystyle: "true",
                      children: (0,jsx_runtime.jsx)(_components.mrow, {})
                    })
                  })
                }), (0,jsx_runtime.jsx)(_components.mtr, {
                  children: (0,jsx_runtime.jsx)(_components.mtd, {
                    children: (0,jsx_runtime.jsx)(_components.mstyle, {
                      scriptlevel: "0",
                      displaystyle: "true",
                      children: (0,jsx_runtime.jsxs)(_components.mrow, {
                        children: [(0,jsx_runtime.jsx)(_components.mo, {
                          children: "⟹"
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mo, {
                            fence: "true",
                            children: "["
                          }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                            children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                              children: [(0,jsx_runtime.jsx)(_components.mo, {
                                stretchy: "false",
                                children: "("
                              }), (0,jsx_runtime.jsx)(_components.mi, {
                                children: "x"
                              }), (0,jsx_runtime.jsx)(_components.mo, {
                                children: "−"
                              }), (0,jsx_runtime.jsx)(_components.mn, {
                                children: "11"
                              }), (0,jsx_runtime.jsx)(_components.mo, {
                                stretchy: "false",
                                children: ")"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.mrow, {
                              children: [(0,jsx_runtime.jsx)(_components.mo, {
                                stretchy: "false",
                                children: "("
                              }), (0,jsx_runtime.jsx)(_components.mn, {
                                children: "76"
                              }), (0,jsx_runtime.jsx)(_components.mo, {
                                children: "−"
                              }), (0,jsx_runtime.jsx)(_components.mn, {
                                children: "11"
                              }), (0,jsx_runtime.jsx)(_components.mo, {
                                stretchy: "false",
                                children: ")"
                              })]
                            })]
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            fence: "true",
                            children: "]"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "×"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          stretchy: "false",
                          children: "("
                        }), (0,jsx_runtime.jsx)(_components.mn, {
                          children: "10"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "−"
                        }), (0,jsx_runtime.jsx)(_components.mn, {
                          children: "0"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          stretchy: "false",
                          children: ")"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "+"
                        }), (0,jsx_runtime.jsx)(_components.mn, {
                          children: "0"
                        })]
                      })
                    })
                  })
                }), (0,jsx_runtime.jsx)(_components.mtr, {
                  children: (0,jsx_runtime.jsx)(_components.mtd, {
                    children: (0,jsx_runtime.jsx)(_components.mstyle, {
                      scriptlevel: "0",
                      displaystyle: "true",
                      children: (0,jsx_runtime.jsx)(_components.mrow, {})
                    })
                  })
                }), (0,jsx_runtime.jsx)(_components.mtr, {
                  children: (0,jsx_runtime.jsx)(_components.mtd, {
                    children: (0,jsx_runtime.jsx)(_components.mstyle, {
                      scriptlevel: "0",
                      displaystyle: "true",
                      children: (0,jsx_runtime.jsxs)(_components.mrow, {
                        children: [(0,jsx_runtime.jsx)(_components.mo, {
                          children: "⟹"
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mo, {
                            fence: "true",
                            children: "["
                          }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                            children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                              children: [(0,jsx_runtime.jsx)(_components.mo, {
                                stretchy: "false",
                                children: "("
                              }), (0,jsx_runtime.jsx)(_components.mi, {
                                children: "x"
                              }), (0,jsx_runtime.jsx)(_components.mo, {
                                children: "−"
                              }), (0,jsx_runtime.jsx)(_components.mn, {
                                children: "11"
                              }), (0,jsx_runtime.jsx)(_components.mo, {
                                stretchy: "false",
                                children: ")"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.mrow, {
                              children: [(0,jsx_runtime.jsx)(_components.mo, {
                                stretchy: "false",
                                children: "("
                              }), (0,jsx_runtime.jsx)(_components.mn, {
                                children: "65"
                              }), (0,jsx_runtime.jsx)(_components.mo, {
                                stretchy: "false",
                                children: ")"
                              })]
                            })]
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            fence: "true",
                            children: "]"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "×"
                        }), (0,jsx_runtime.jsx)(_components.mn, {
                          children: "10"
                        })]
                      })
                    })
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\begin{gather*}\n\\text{Equation becomes:} \\\\\n\\\\\n\\Longrightarrow \\left[\\frac{(x−11)}{(76−11)}\\right] \\times (10 - 0) + 0 \\\\\n\\\\\n\\Longrightarrow \\left[\\frac{(x−11)}{(65)}\\right] \\times 10\n\\end{gather*}"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "9.9001em",
                verticalAlign: "-4.7em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: (0,jsx_runtime.jsx)(_components.span, {
                className: "mtable",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "col-align-c",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "5.2em"
                        },
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-7.81em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3.45em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord text",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord",
                                children: "Equation becomes:"
                              })
                            })
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-6.31em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3.45em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-4.2em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3.45em"
                            }
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mord",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mrel",
                              children: "⟹"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2778em"
                              }
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              className: "minner",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mopen delimcenter",
                                style: {
                                  top: "0em"
                                },
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "delimsizing size3",
                                  children: "["
                                })
                              }), (0,jsx_runtime.jsxs)(_components.span, {
                                className: "mord",
                                children: [(0,jsx_runtime.jsx)(_components.span, {
                                  className: "mopen nulldelimiter"
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mfrac",
                                  children: (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "vlist-t vlist-t2",
                                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                                      className: "vlist-r",
                                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                                        className: "vlist",
                                        style: {
                                          height: "1.427em"
                                        },
                                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                                          style: {
                                            top: "-2.314em"
                                          },
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "pstrut",
                                            style: {
                                              height: "3em"
                                            }
                                          }), (0,jsx_runtime.jsxs)(_components.span, {
                                            className: "mord",
                                            children: [(0,jsx_runtime.jsx)(_components.span, {
                                              className: "mopen",
                                              children: "("
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord",
                                              children: "76"
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mspace",
                                              style: {
                                                marginRight: "0.2222em"
                                              }
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mbin",
                                              children: "−"
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mspace",
                                              style: {
                                                marginRight: "0.2222em"
                                              }
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord",
                                              children: "11"
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mclose",
                                              children: ")"
                                            })]
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.span, {
                                          style: {
                                            top: "-3.23em"
                                          },
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "pstrut",
                                            style: {
                                              height: "3em"
                                            }
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "frac-line",
                                            style: {
                                              borderBottomWidth: "0.04em"
                                            }
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.span, {
                                          style: {
                                            top: "-3.677em"
                                          },
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "pstrut",
                                            style: {
                                              height: "3em"
                                            }
                                          }), (0,jsx_runtime.jsxs)(_components.span, {
                                            className: "mord",
                                            children: [(0,jsx_runtime.jsx)(_components.span, {
                                              className: "mopen",
                                              children: "("
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord mathnormal",
                                              children: "x"
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mspace",
                                              style: {
                                                marginRight: "0.2222em"
                                              }
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mbin",
                                              children: "−"
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mspace",
                                              style: {
                                                marginRight: "0.2222em"
                                              }
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord",
                                              children: "11"
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mclose",
                                              children: ")"
                                            })]
                                          })]
                                        })]
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist-s",
                                        children: "​"
                                      })]
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist-r",
                                      children: (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist",
                                        style: {
                                          height: "0.936em"
                                        },
                                        children: (0,jsx_runtime.jsx)(_components.span, {})
                                      })
                                    })]
                                  })
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mclose nulldelimiter"
                                })]
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mclose delimcenter",
                                style: {
                                  top: "0em"
                                },
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "delimsizing size3",
                                  children: "]"
                                })
                              })]
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mbin",
                              children: "×"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mopen",
                              children: "("
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord",
                              children: "10"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mbin",
                              children: "−"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord",
                              children: "0"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mclose",
                              children: ")"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mbin",
                              children: "+"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord",
                              children: "0"
                            })]
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.11em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3.45em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "0em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3.45em"
                            }
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mord",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mrel",
                              children: "⟹"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2778em"
                              }
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              className: "minner",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mopen delimcenter",
                                style: {
                                  top: "0em"
                                },
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "delimsizing size3",
                                  children: "["
                                })
                              }), (0,jsx_runtime.jsxs)(_components.span, {
                                className: "mord",
                                children: [(0,jsx_runtime.jsx)(_components.span, {
                                  className: "mopen nulldelimiter"
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mfrac",
                                  children: (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "vlist-t vlist-t2",
                                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                                      className: "vlist-r",
                                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                                        className: "vlist",
                                        style: {
                                          height: "1.427em"
                                        },
                                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                                          style: {
                                            top: "-2.314em"
                                          },
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "pstrut",
                                            style: {
                                              height: "3em"
                                            }
                                          }), (0,jsx_runtime.jsxs)(_components.span, {
                                            className: "mord",
                                            children: [(0,jsx_runtime.jsx)(_components.span, {
                                              className: "mopen",
                                              children: "("
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord",
                                              children: "65"
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mclose",
                                              children: ")"
                                            })]
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.span, {
                                          style: {
                                            top: "-3.23em"
                                          },
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "pstrut",
                                            style: {
                                              height: "3em"
                                            }
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "frac-line",
                                            style: {
                                              borderBottomWidth: "0.04em"
                                            }
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.span, {
                                          style: {
                                            top: "-3.677em"
                                          },
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "pstrut",
                                            style: {
                                              height: "3em"
                                            }
                                          }), (0,jsx_runtime.jsxs)(_components.span, {
                                            className: "mord",
                                            children: [(0,jsx_runtime.jsx)(_components.span, {
                                              className: "mopen",
                                              children: "("
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord mathnormal",
                                              children: "x"
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mspace",
                                              style: {
                                                marginRight: "0.2222em"
                                              }
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mbin",
                                              children: "−"
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mspace",
                                              style: {
                                                marginRight: "0.2222em"
                                              }
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord",
                                              children: "11"
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mclose",
                                              children: ")"
                                            })]
                                          })]
                                        })]
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist-s",
                                        children: "​"
                                      })]
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist-r",
                                      children: (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist",
                                        style: {
                                          height: "0.936em"
                                        },
                                        children: (0,jsx_runtime.jsx)(_components.span, {})
                                      })
                                    })]
                                  })
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mclose nulldelimiter"
                                })]
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mclose delimcenter",
                                style: {
                                  top: "0em"
                                },
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "delimsizing size3",
                                  children: "]"
                                })
                              })]
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mbin",
                              children: "×"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord",
                              children: "10"
                            })]
                          })]
                        })]
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "4.7em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })
              })
            })]
          })
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Now we can put all the x(s) and get the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "min-max normalized"
      }), " values"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Real Values"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "New Values"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1.8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "37"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "76"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "10"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Python Code Snippet for Min-Max Normalization:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "normalized = ((values - old_min) / (old_max - old_min)) * (new_max - new_min) + new_min\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "normalization-vs-standardization-vs-scaling",
      children: "Normalization vs Standardization vs Scaling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Formula"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Range"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Normalization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Rescales values to a fixed range (usually [0, 1] or [0, 10])"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsx)(_components.mrow, {
                      children: (0,jsx_runtime.jsxs)(_components.mfrac, {
                        children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "x"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "−"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "min"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "⁡"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: "("
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "x"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: ")"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "max"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "⁡"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: "("
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "x"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: ")"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "−"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "min"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "⁡"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: "("
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "x"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: ")"
                          })]
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\frac{x - \\min(x)}{\\max(x) - \\min(x)}"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1.53em",
                      verticalAlign: "-0.52em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mopen nulldelimiter"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mfrac",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "1.01em"
                            },
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.655em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mop mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mtight",
                                      children: "m"
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "mtight",
                                      children: "a"
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "mtight",
                                      children: "x"
                                    })]
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mopen mtight",
                                    children: "("
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "x"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mclose mtight",
                                    children: ")"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mbin mtight",
                                    children: "−"
                                  }), (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mop mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mtight",
                                      children: "m"
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "mtight",
                                      children: "i"
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "mtight",
                                      children: "n"
                                    })]
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mopen mtight",
                                    children: "("
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "x"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mclose mtight",
                                    children: ")"
                                  })]
                                })
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.23em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "frac-line",
                                style: {
                                  borderBottomWidth: "0.04em"
                                }
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.485em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "x"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mbin mtight",
                                    children: "−"
                                  }), (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mop mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mtight",
                                      children: "m"
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "mtight",
                                      children: "i"
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "mtight",
                                      children: "n"
                                    })]
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mopen mtight",
                                    children: "("
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "x"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mclose mtight",
                                    children: ")"
                                  })]
                                })
                              })]
                            })]
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.52em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mclose nulldelimiter"
                    })]
                  })]
                })
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Any range"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Visualizations, ML when scale matters (e.g., KNN)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Standardization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Centers data around mean 0 and standard deviation 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsx)(_components.mrow, {
                      children: (0,jsx_runtime.jsxs)(_components.mfrac, {
                        children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "x"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "−"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "μ"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "σ"
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\frac{x - \\mu}{\\sigma}"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1.1994em",
                      verticalAlign: "-0.345em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mopen nulldelimiter"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mfrac",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.8544em"
                            },
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.655em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.03588em"
                                    },
                                    children: "σ"
                                  })
                                })
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.23em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "frac-line",
                                style: {
                                  borderBottomWidth: "0.04em"
                                }
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.4461em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "x"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mbin mtight",
                                    children: "−"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "μ"
                                  })]
                                })
                              })]
                            })]
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.345em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mclose nulldelimiter"
                    })]
                  })]
                })
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Mean = 0, SD = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "When data is Gaussian, or algorithms assume zero-centered data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scaling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Generic term – includes both normalization and standardization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Any transformation to bring values into a defined scale"
          })]
        })]
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

/***/ 7348:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/After_Normalizing-1609c385608e90f41a2d866a7dccb57a.png");

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