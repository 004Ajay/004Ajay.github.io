"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[7590],{

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

/***/ 9743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_maths_activation_functions_md_f67_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-maths-activation-functions-md-f67.json
const site_docs_maths_activation_functions_md_f67_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"maths/activation-functions","title":"Activation Functions","description":"Activation Functions","source":"@site/docs/maths/Activation Functions.md","sourceDirName":"maths","slug":"/maths/activation-functions","permalink":"/docs/maths/activation-functions","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"activation-functions","title":"Activation Functions","sidebar_label":"Activation Functions"},"sidebar":"tutorialSidebar","previous":{"title":"Maths","permalink":"/docs/category/maths"},"next":{"title":"Geometric Distances","permalink":"/docs/maths/geometric-distances"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/maths/Activation Functions.md


const frontMatter = {
	id: 'activation-functions',
	title: 'Activation Functions',
	sidebar_label: 'Activation Functions'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Sigmoid",
  "id": "sigmoid",
  "level": 2
}, {
  "value": "Tanh",
  "id": "tanh",
  "level": 2
}, {
  "value": "ReLU",
  "id": "relu",
  "level": 2
}, {
  "value": "Leaky ReLU",
  "id": "leaky-relu",
  "level": 2
}, {
  "value": "Softmax",
  "id": "softmax",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    annotation: "annotation",
    h2: "h2",
    math: "math",
    mfrac: "mfrac",
    mi: "mi",
    mn: "mn",
    mo: "mo",
    mrow: "mrow",
    mstyle: "mstyle",
    msub: "msub",
    msup: "msup",
    mtable: "mtable",
    mtd: "mtd",
    mtext: "mtext",
    mtr: "mtr",
    munderover: "munderover",
    p: "p",
    semantics: "semantics",
    span: "span",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Activation Functions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sigmoid",
      children: "Sigmoid"
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
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "σ"
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
                }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                  children: [(0,jsx_runtime.jsx)(_components.mn, {
                    children: "1"
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mn, {
                      children: "1"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "+"
                    }), (0,jsx_runtime.jsxs)(_components.msup, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "e"
                      }), (0,jsx_runtime.jsxs)(_components.mrow, {
                        children: [(0,jsx_runtime.jsx)(_components.mo, {
                          children: "−"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "x"
                        })]
                      })]
                    })]
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\sigma(x) = \\frac{1}{1 + e^{-x}}"
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
              style: {
                marginRight: "0.03588em"
              },
              children: "σ"
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
                height: "2.0908em",
                verticalAlign: "-0.7693em"
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
                        height: "1.3214em"
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
                            className: "mord",
                            children: "1"
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
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mord",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "e"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "msupsub",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "vlist-t",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-r",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.6973em"
                                    },
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-2.989em",
                                        marginRight: "0.05em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "2.7em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "sizing reset-size6 size3 mtight",
                                        children: (0,jsx_runtime.jsxs)(_components.span, {
                                          className: "mord mtight",
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "mord mtight",
                                            children: "−"
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "mord mathnormal mtight",
                                            children: "x"
                                          })]
                                        })
                                      })]
                                    })
                                  })
                                })
                              })
                            })]
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
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "mord",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord",
                            children: "1"
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
                        height: "0.7693em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose nulldelimiter"
              })]
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Explanation: Squashes input into (0, 1). Useful in binary classification or probabilistic interpretation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tanh",
      children: "Tanh"
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
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "tanh"
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
                  children: "="
                }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                  children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsxs)(_components.msup, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "e"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "x"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "−"
                    }), (0,jsx_runtime.jsxs)(_components.msup, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "e"
                      }), (0,jsx_runtime.jsxs)(_components.mrow, {
                        children: [(0,jsx_runtime.jsx)(_components.mo, {
                          children: "−"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "x"
                        })]
                      })]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsxs)(_components.msup, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "e"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "x"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "+"
                    }), (0,jsx_runtime.jsxs)(_components.msup, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "e"
                      }), (0,jsx_runtime.jsxs)(_components.mrow, {
                        children: [(0,jsx_runtime.jsx)(_components.mo, {
                          children: "−"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "x"
                        })]
                      })]
                    })]
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\tanh(x) = \\frac{e^x - e^{-x}}{e^x + e^{-x}}"
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
              className: "mop",
              children: "tanh"
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
                height: "2.2177em",
                verticalAlign: "-0.7693em"
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
                        height: "1.4483em"
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
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            className: "mord",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "e"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "msupsub",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "vlist-t",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-r",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.5904em"
                                    },
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-2.989em",
                                        marginRight: "0.05em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "2.7em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "sizing reset-size6 size3 mtight",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "mord mathnormal mtight",
                                          children: "x"
                                        })
                                      })]
                                    })
                                  })
                                })
                              })
                            })]
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
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mord",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "e"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "msupsub",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "vlist-t",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-r",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.6973em"
                                    },
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-2.989em",
                                        marginRight: "0.05em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "2.7em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "sizing reset-size6 size3 mtight",
                                        children: (0,jsx_runtime.jsxs)(_components.span, {
                                          className: "mord mtight",
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "mord mtight",
                                            children: "−"
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "mord mathnormal mtight",
                                            children: "x"
                                          })]
                                        })
                                      })]
                                    })
                                  })
                                })
                              })
                            })]
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
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            className: "mord",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "e"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "msupsub",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "vlist-t",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-r",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.6644em"
                                    },
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-3.063em",
                                        marginRight: "0.05em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "2.7em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "sizing reset-size6 size3 mtight",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "mord mathnormal mtight",
                                          children: "x"
                                        })
                                      })]
                                    })
                                  })
                                })
                              })
                            })]
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
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mord",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "e"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "msupsub",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "vlist-t",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-r",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.7713em"
                                    },
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-3.063em",
                                        marginRight: "0.05em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "2.7em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "sizing reset-size6 size3 mtight",
                                        children: (0,jsx_runtime.jsxs)(_components.span, {
                                          className: "mord mtight",
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "mord mtight",
                                            children: "−"
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "mord mathnormal mtight",
                                            children: "x"
                                          })]
                                        })
                                      })]
                                    })
                                  })
                                })
                              })
                            })]
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
                        height: "0.7693em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose nulldelimiter"
              })]
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Explanation: Like sigmoid, but squashes into (-1, 1). Zero-centered."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "relu",
      children: "ReLU"
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
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mtext, {
                  children: "ReLU"
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
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "max"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "⁡"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mn, {
                  children: "0"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  separator: "true",
                  children: ","
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "x"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\text{ReLU}(x) = \\max(0, x)"
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
              className: "mord text",
              children: (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "ReLU"
              })
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
              className: "mop",
              children: "max"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "0"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mpunct",
              children: ","
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "x"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: ")"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Explanation: Fast, simple, widely used in deep learning. Outputs 0 for negative input."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "leaky-relu",
      children: "Leaky ReLU"
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
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mtext, {
                  children: "LeakyReLU"
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
                }), (0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mo, {
                    fence: "true",
                    children: "{"
                  }), (0,jsx_runtime.jsxs)(_components.mtable, {
                    rowspacing: "0.36em",
                    columnalign: "left left",
                    columnspacing: "1em",
                    children: [(0,jsx_runtime.jsxs)(_components.mtr, {
                      children: [(0,jsx_runtime.jsx)(_components.mtd, {
                        children: (0,jsx_runtime.jsx)(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: (0,jsx_runtime.jsx)(_components.mi, {
                            children: "x"
                          })
                        })
                      }), (0,jsx_runtime.jsx)(_components.mtd, {
                        children: (0,jsx_runtime.jsx)(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: (0,jsx_runtime.jsxs)(_components.mrow, {
                            children: [(0,jsx_runtime.jsx)(_components.mtext, {
                              children: "if "
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "x"
                            }), (0,jsx_runtime.jsx)(_components.mo, {
                              children: "≥"
                            }), (0,jsx_runtime.jsx)(_components.mn, {
                              children: "0"
                            })]
                          })
                        })
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.mtr, {
                      children: [(0,jsx_runtime.jsx)(_components.mtd, {
                        children: (0,jsx_runtime.jsx)(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: (0,jsx_runtime.jsxs)(_components.mrow, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "α"
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "x"
                            })]
                          })
                        })
                      }), (0,jsx_runtime.jsx)(_components.mtd, {
                        children: (0,jsx_runtime.jsx)(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: (0,jsx_runtime.jsxs)(_components.mrow, {
                            children: [(0,jsx_runtime.jsx)(_components.mtext, {
                              children: "if "
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "x"
                            }), (0,jsx_runtime.jsx)(_components.mo, {
                              children: "<"
                            }), (0,jsx_runtime.jsx)(_components.mn, {
                              children: "0"
                            })]
                          })
                        })
                      })]
                    })]
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\text{LeakyReLU}(x) =\n\\begin{cases}\nx & \\text{if } x \\geq 0 \\\\\n\\alpha x & \\text{if } x < 0\n\\end{cases}"
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
              className: "mord text",
              children: (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "LeakyReLU"
              })
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
                height: "3em",
                verticalAlign: "-1.25em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "minner",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mopen delimcenter",
                style: {
                  top: "0em"
                },
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "delimsizing size4",
                  children: "{"
                })
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "mtable",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "col-align-l",
                    children: (0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-t vlist-t2",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-r",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "1.69em"
                          },
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-3.69em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "3.008em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal",
                                children: "x"
                              })
                            })]
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-2.25em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "3.008em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal",
                                children: "αx"
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
                            height: "1.19em"
                          },
                          children: (0,jsx_runtime.jsx)(_components.span, {})
                        })
                      })]
                    })
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "arraycolsep",
                    style: {
                      width: "1em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "col-align-l",
                    children: (0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-t vlist-t2",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-r",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "1.69em"
                          },
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-3.69em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "3.008em"
                              }
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mord text",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord",
                                  children: "if "
                                })
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
                                children: "≥"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mspace",
                                style: {
                                  marginRight: "0.2778em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord",
                                children: "0"
                              })]
                            })]
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-2.25em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "3.008em"
                              }
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mord text",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord",
                                  children: "if "
                                })
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
                                children: "<"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mspace",
                                style: {
                                  marginRight: "0.2778em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord",
                                children: "0"
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
                            height: "1.19em"
                          },
                          children: (0,jsx_runtime.jsx)(_components.span, {})
                        })
                      })]
                    })
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose nulldelimiter"
              })]
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Explanation: A small slope (α) for negative values avoids “dead neurons” in ReLU."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "softmax",
      children: "Softmax"
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
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mtext, {
                  children: "Softmax"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "z"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "i"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                  children: [(0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "e"
                    }), (0,jsx_runtime.jsxs)(_components.msub, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "z"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      })]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsxs)(_components.munderover, {
                      children: [(0,jsx_runtime.jsx)(_components.mo, {
                        children: "∑"
                      }), (0,jsx_runtime.jsxs)(_components.mrow, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "j"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "="
                        }), (0,jsx_runtime.jsx)(_components.mn, {
                          children: "1"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.msup, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "e"
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "z"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "j"
                        })]
                      })]
                    })]
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\text{Softmax}(z_i) = \\frac{e^{z_i}}{\\sum_{j=1}^{n} e^{z_j}}"
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
              className: "mord text",
              children: (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "Softmax"
              })
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.04398em"
                },
                children: "z"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3117em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "-0.044em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            children: "i"
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.15em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
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
                height: "2.4715em",
                verticalAlign: "-1.1301em"
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
                        height: "1.3414em"
                      },
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.3057em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          className: "mord",
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            className: "mop",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mop op-symbol small-op",
                              style: {
                                position: "relative",
                                top: "0em"
                              },
                              children: "∑"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "msupsub",
                              children: (0,jsx_runtime.jsxs)(_components.span, {
                                className: "vlist-t vlist-t2",
                                children: [(0,jsx_runtime.jsxs)(_components.span, {
                                  className: "vlist-r",
                                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.8043em"
                                    },
                                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-2.4003em",
                                        marginLeft: "0em",
                                        marginRight: "0.05em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "2.7em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "sizing reset-size6 size3 mtight",
                                        children: (0,jsx_runtime.jsxs)(_components.span, {
                                          className: "mord mtight",
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "mord mathnormal mtight",
                                            style: {
                                              marginRight: "0.05724em"
                                            },
                                            children: "j"
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "mrel mtight",
                                            children: "="
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "mord mtight",
                                            children: "1"
                                          })]
                                        })
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-3.2029em",
                                        marginRight: "0.05em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "2.7em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "sizing reset-size6 size3 mtight",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "mord mtight",
                                          children: (0,jsx_runtime.jsx)(_components.span, {
                                            className: "mord mathnormal mtight",
                                            children: "n"
                                          })
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
                                      height: "0.4358em"
                                    },
                                    children: (0,jsx_runtime.jsx)(_components.span, {})
                                  })
                                })]
                              })
                            })]
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mspace",
                            style: {
                              marginRight: "0.1667em"
                            }
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mord",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "e"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "msupsub",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "vlist-t",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-r",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.6065em"
                                    },
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-3.0051em",
                                        marginRight: "0.05em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "2.7em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "sizing reset-size6 size3 mtight",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "mord mtight",
                                          children: (0,jsx_runtime.jsxs)(_components.span, {
                                            className: "mord mtight",
                                            children: [(0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord mathnormal mtight",
                                              style: {
                                                marginRight: "0.04398em"
                                              },
                                              children: "z"
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "msupsub",
                                              children: (0,jsx_runtime.jsxs)(_components.span, {
                                                className: "vlist-t vlist-t2",
                                                children: [(0,jsx_runtime.jsxs)(_components.span, {
                                                  className: "vlist-r",
                                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                                    className: "vlist",
                                                    style: {
                                                      height: "0.3281em"
                                                    },
                                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                                      style: {
                                                        top: "-2.357em",
                                                        marginLeft: "-0.044em",
                                                        marginRight: "0.0714em"
                                                      },
                                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                                        className: "pstrut",
                                                        style: {
                                                          height: "2.5em"
                                                        }
                                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                                        className: "sizing reset-size3 size1 mtight",
                                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                                          className: "mord mathnormal mtight",
                                                          style: {
                                                            marginRight: "0.05724em"
                                                          },
                                                          children: "j"
                                                        })
                                                      })]
                                                    })
                                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                                    className: "vlist-s",
                                                    children: "​"
                                                  })]
                                                }), (0,jsx_runtime.jsx)(_components.span, {
                                                  className: "vlist-r",
                                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                                    className: "vlist",
                                                    style: {
                                                      height: "0.2819em"
                                                    },
                                                    children: (0,jsx_runtime.jsx)(_components.span, {})
                                                  })
                                                })]
                                              })
                                            })]
                                          })
                                        })
                                      })]
                                    })
                                  })
                                })
                              })
                            })]
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
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "mord",
                          children: (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mord",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "e"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "msupsub",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "vlist-t",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-r",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.6644em"
                                    },
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-3.063em",
                                        marginRight: "0.05em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "2.7em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "sizing reset-size6 size3 mtight",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "mord mtight",
                                          children: (0,jsx_runtime.jsxs)(_components.span, {
                                            className: "mord mtight",
                                            children: [(0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord mathnormal mtight",
                                              style: {
                                                marginRight: "0.04398em"
                                              },
                                              children: "z"
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "msupsub",
                                              children: (0,jsx_runtime.jsxs)(_components.span, {
                                                className: "vlist-t vlist-t2",
                                                children: [(0,jsx_runtime.jsxs)(_components.span, {
                                                  className: "vlist-r",
                                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                                    className: "vlist",
                                                    style: {
                                                      height: "0.3281em"
                                                    },
                                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                                      style: {
                                                        top: "-2.357em",
                                                        marginLeft: "-0.044em",
                                                        marginRight: "0.0714em"
                                                      },
                                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                                        className: "pstrut",
                                                        style: {
                                                          height: "2.5em"
                                                        }
                                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                                        className: "sizing reset-size3 size1 mtight",
                                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                                          className: "mord mathnormal mtight",
                                                          children: "i"
                                                        })
                                                      })]
                                                    })
                                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                                    className: "vlist-s",
                                                    children: "​"
                                                  })]
                                                }), (0,jsx_runtime.jsx)(_components.span, {
                                                  className: "vlist-r",
                                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                                    className: "vlist",
                                                    style: {
                                                      height: "0.143em"
                                                    },
                                                    children: (0,jsx_runtime.jsx)(_components.span, {})
                                                  })
                                                })]
                                              })
                                            })]
                                          })
                                        })
                                      })]
                                    })
                                  })
                                })
                              })
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
                        height: "1.1301em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose nulldelimiter"
              })]
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Explanation: Converts a vector into a probability distribution. Used in multi-class classification."
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