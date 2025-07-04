"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[6833],{

/***/ 2981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_maths_geometric_distances_md_495_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-maths-geometric-distances-md-495.json
const site_docs_maths_geometric_distances_md_495_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"maths/geometric-distances","title":"Geometric Distances","description":"Geometric Distance Metrics","source":"@site/docs/maths/Geometric Distances.md","sourceDirName":"maths","slug":"/maths/geometric-distances","permalink":"/docs/maths/geometric-distances","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"geometric-distances","title":"Geometric Distances","sidebar_label":"Geometric Distances"},"sidebar":"tutorialSidebar","previous":{"title":"Activation Functions","permalink":"/docs/maths/activation-functions"},"next":{"title":"Min-Max Normalization","permalink":"/docs/maths/Min-Max-Normalization"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/maths/Geometric Distances.md


const frontMatter = {
	id: 'geometric-distances',
	title: 'Geometric Distances',
	sidebar_label: 'Geometric Distances'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Euclidean Distance",
  "id": "euclidean-distance",
  "level": 2
}, {
  "value": "Manhattan Distance",
  "id": "manhattan-distance",
  "level": 2
}, {
  "value": "Minkowski Distance",
  "id": "minkowski-distance",
  "level": 2
}, {
  "value": "Cosine Distance",
  "id": "cosine-distance",
  "level": 2
}, {
  "value": "Hamming Distance",
  "id": "hamming-distance",
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
    msqrt: "msqrt",
    msub: "msub",
    msup: "msup",
    mtext: "mtext",
    munderover: "munderover",
    p: "p",
    path: "path",
    semantics: "semantics",
    span: "span",
    svg: "svg",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Geometric Distance Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "euclidean-distance",
      children: "Euclidean Distance"
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
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "p"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  separator: "true",
                  children: ","
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "q"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsx)(_components.msqrt, {
                  children: (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsxs)(_components.munderover, {
                      children: [(0,jsx_runtime.jsx)(_components.mo, {
                        children: "∑"
                      }), (0,jsx_runtime.jsxs)(_components.mrow, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "i"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "="
                        }), (0,jsx_runtime.jsx)(_components.mn, {
                          children: "1"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: "("
                    }), (0,jsx_runtime.jsxs)(_components.msub, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "p"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "−"
                    }), (0,jsx_runtime.jsxs)(_components.msub, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "q"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.msup, {
                      children: [(0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "2"
                      })]
                    })]
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "d(p, q) = \\sqrt{ \\sum_{i=1}^{n} (p_i - q_i)^2 }"
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
              children: "d"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "p"
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
              style: {
                marginRight: "0.03588em"
              },
              children: "q"
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
                height: "3.1568em",
                verticalAlign: "-1.2777em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord sqrt",
              children: (0,jsx_runtime.jsxs)(_components.span, {
                className: "vlist-t vlist-t2",
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-r",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist",
                    style: {
                      height: "1.8791em"
                    },
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "svg-align",
                      style: {
                        top: "-5.1168em"
                      },
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "pstrut",
                        style: {
                          height: "5.1168em"
                        }
                      }), (0,jsx_runtime.jsxs)(_components.span, {
                        className: "mord",
                        style: {
                          paddingLeft: "1.056em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "mop op-limits",
                          children: (0,jsx_runtime.jsxs)(_components.span, {
                            className: "vlist-t vlist-t2",
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              className: "vlist-r",
                              children: [(0,jsx_runtime.jsxs)(_components.span, {
                                className: "vlist",
                                style: {
                                  height: "1.6514em"
                                },
                                children: [(0,jsx_runtime.jsxs)(_components.span, {
                                  style: {
                                    top: "-1.8723em",
                                    marginLeft: "0em"
                                  },
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "pstrut",
                                    style: {
                                      height: "3.05em"
                                    }
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "sizing reset-size6 size3 mtight",
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      className: "mord mtight",
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "mord mathnormal mtight",
                                        children: "i"
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
                                    top: "-3.05em"
                                  },
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "pstrut",
                                    style: {
                                      height: "3.05em"
                                    }
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    children: (0,jsx_runtime.jsx)(_components.span, {
                                      className: "mop op-symbol large-op",
                                      children: "∑"
                                    })
                                  })]
                                }), (0,jsx_runtime.jsxs)(_components.span, {
                                  style: {
                                    top: "-4.3em",
                                    marginLeft: "0em"
                                  },
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "pstrut",
                                    style: {
                                      height: "3.05em"
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
                                  height: "1.2777em"
                                },
                                children: (0,jsx_runtime.jsx)(_components.span, {})
                              })
                            })]
                          })
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "mopen",
                          children: "("
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          className: "mord",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal",
                            children: "p"
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
                            style: {
                              marginRight: "0.03588em"
                            },
                            children: "q"
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
                                      marginLeft: "-0.0359em",
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
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          className: "mclose",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "mclose",
                            children: ")"
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "msupsub",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "vlist-t",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "vlist-r",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist",
                                  style: {
                                    height: "0.7401em"
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
                                        className: "mord mtight",
                                        children: "2"
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
                        top: "-3.8391em"
                      },
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "pstrut",
                        style: {
                          height: "5.1168em"
                        }
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "hide-tail",
                        style: {
                          minWidth: "0.742em",
                          height: "3.1968em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.svg, {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "400em",
                          height: "3.1968em",
                          viewBox: "0 0 400000 3196",
                          preserveAspectRatio: "xMinYMin slice",
                          children: (0,jsx_runtime.jsx)(_components.path, {
                            d: "M702 80H40000040\nH742v3062l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1\nh-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170\nc-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667\n219 661 l218 661zM702 80H400000v40H742z"
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
                      height: "1.2777em"
                    },
                    children: (0,jsx_runtime.jsx)(_components.span, {})
                  })
                })]
              })
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Explanation: Measures the straight-line (as-the-crow-flies) distance between two points in Euclidean space. Common in geometry, physics, and machine learning."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "manhattan-distance",
      children: "Manhattan Distance"
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
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "p"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  separator: "true",
                  children: ","
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "q"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsxs)(_components.munderover, {
                  children: [(0,jsx_runtime.jsx)(_components.mo, {
                    children: "∑"
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "="
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "1"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "n"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  mathvariant: "normal",
                  children: "∣"
                }), (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "p"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "i"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "−"
                }), (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "q"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "i"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  mathvariant: "normal",
                  children: "∣"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "d(p, q) = \\sum_{i=1}^{n} |p_i - q_i|"
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
              children: "d"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "p"
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
              style: {
                marginRight: "0.03588em"
              },
              children: "q"
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
                height: "2.9291em",
                verticalAlign: "-1.2777em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mop op-limits",
              children: (0,jsx_runtime.jsxs)(_components.span, {
                className: "vlist-t vlist-t2",
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-r",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist",
                    style: {
                      height: "1.6514em"
                    },
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      style: {
                        top: "-1.8723em",
                        marginLeft: "0em"
                      },
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "pstrut",
                        style: {
                          height: "3.05em"
                        }
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "sizing reset-size6 size3 mtight",
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          className: "mord mtight",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            children: "i"
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
                        top: "-3.05em"
                      },
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "pstrut",
                        style: {
                          height: "3.05em"
                        }
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "mop op-symbol large-op",
                          children: "∑"
                        })
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.span, {
                      style: {
                        top: "-4.3em",
                        marginLeft: "0em"
                      },
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "pstrut",
                        style: {
                          height: "3.05em"
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
                      height: "1.2777em"
                    },
                    children: (0,jsx_runtime.jsx)(_components.span, {})
                  })
                })]
              })
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "∣"
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "p"
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
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.03588em"
                },
                children: "q"
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
                          marginLeft: "-0.0359em",
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
              className: "mord",
              children: "∣"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Explanation: Also called “city block” distance. Measures total absolute differences; better for grid-based layouts."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "minkowski-distance",
      children: "Minkowski Distance"
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
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "p"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  separator: "true",
                  children: ","
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "q"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsxs)(_components.msup, {
                  children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mo, {
                      fence: "true",
                      children: "("
                    }), (0,jsx_runtime.jsxs)(_components.munderover, {
                      children: [(0,jsx_runtime.jsx)(_components.mo, {
                        children: "∑"
                      }), (0,jsx_runtime.jsxs)(_components.mrow, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "i"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "="
                        }), (0,jsx_runtime.jsx)(_components.mn, {
                          children: "1"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      mathvariant: "normal",
                      children: "∣"
                    }), (0,jsx_runtime.jsxs)(_components.msub, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "p"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "−"
                    }), (0,jsx_runtime.jsxs)(_components.msub, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "q"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.msup, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "normal",
                        children: "∣"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "r"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      fence: "true",
                      children: ")"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mn, {
                      children: "1"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      mathvariant: "normal",
                      children: "/"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "r"
                    })]
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "d(p, q) = \\left( \\sum_{i=1}^{n} |p_i - q_i|^r \\right)^{1/r}"
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
              children: "d"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "p"
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
              style: {
                marginRight: "0.03588em"
              },
              children: "q"
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
                height: "3.3056em",
                verticalAlign: "-1.2777em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "minner",
              children: [(0,jsx_runtime.jsxs)(_components.span, {
                className: "minner",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mopen delimcenter",
                  style: {
                    top: "0em"
                  },
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "delimsizing size4",
                    children: "("
                  })
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mop op-limits",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "1.6514em"
                        },
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-1.8723em",
                            marginLeft: "0em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3.05em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord mtight",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "i"
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
                            top: "-3.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3.05em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mop op-symbol large-op",
                              children: "∑"
                            })
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-4.3em",
                            marginLeft: "0em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3.05em"
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
                          height: "1.2777em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace",
                  style: {
                    marginRight: "0.1667em"
                  }
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord",
                  children: "∣"
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "mord",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "p"
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
                    style: {
                      marginRight: "0.03588em"
                    },
                    children: "q"
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
                              marginLeft: "-0.0359em",
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
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "mord",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "∣"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "msupsub",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-t",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-r",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.7144em"
                          },
                          children: (0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-3.113em",
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
                                style: {
                                  marginRight: "0.02778em"
                                },
                                children: "r"
                              })
                            })]
                          })
                        })
                      })
                    })
                  })]
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mclose delimcenter",
                  style: {
                    top: "0em"
                  },
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "delimsizing size4",
                    children: ")"
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-t",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "2.0279em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-4.2029em",
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
                              children: "1/"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.02778em"
                              },
                              children: "r"
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
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Explanation: A generalized distance metric. When r=1r=1 → Manhattan, r=2r=2 → Euclidean."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cosine-distance",
      children: "Cosine Distance"
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
                  children: "cos_dist"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "p"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  separator: "true",
                  children: ","
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "q"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsx)(_components.mn, {
                  children: "1"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "−"
                }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                  children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "p"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "⋅"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "q"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      mathvariant: "normal",
                      children: "∥"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "p"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      mathvariant: "normal",
                      children: "∥"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      mathvariant: "normal",
                      children: "∥"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "q"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      mathvariant: "normal",
                      children: "∥"
                    })]
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\text{cos\\_dist}(p, q) = 1 - \\frac{p \\cdot q}{\\|p\\| \\|q\\|}"
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
                height: "1.06em",
                verticalAlign: "-0.31em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord text",
              children: (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "cos_dist"
              })
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "p"
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
              style: {
                marginRight: "0.03588em"
              },
              children: "q"
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
                height: "0.7278em",
                verticalAlign: "-0.0833em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "1"
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
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "2.0574em",
                verticalAlign: "-0.936em"
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
                        height: "1.1214em"
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
                            children: "∥"
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal",
                            children: "p"
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord",
                            children: "∥∥"
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal",
                            style: {
                              marginRight: "0.03588em"
                            },
                            children: "q"
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord",
                            children: "∥"
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
                            className: "mord mathnormal",
                            children: "p"
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mspace",
                            style: {
                              marginRight: "0.2222em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mbin",
                            children: "⋅"
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mspace",
                            style: {
                              marginRight: "0.2222em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal",
                            style: {
                              marginRight: "0.03588em"
                            },
                            children: "q"
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
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Explanation: Measures the angle between two vectors. Commonly used in NLP, recommendation systems, and text similarity."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hamming-distance",
      children: "Hamming Distance"
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
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "p"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  separator: "true",
                  children: ","
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "q"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsxs)(_components.munderover, {
                  children: [(0,jsx_runtime.jsx)(_components.mo, {
                    children: "∑"
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "="
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "1"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "n"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mn, {
                    mathvariant: "double-struck",
                    children: "1"
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsxs)(_components.msub, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "p"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      mathvariant: "normal",
                      children: "≠"
                    }), (0,jsx_runtime.jsxs)(_components.msub, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "q"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      })]
                    })]
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "d(p, q) = \\sum_{i=1}^{n} \\mathbb{1}_{p_i \\neq q_i}"
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
              children: "d"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "p"
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
              style: {
                marginRight: "0.03588em"
              },
              children: "q"
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
                height: "2.9291em",
                verticalAlign: "-1.2777em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mop op-limits",
              children: (0,jsx_runtime.jsxs)(_components.span, {
                className: "vlist-t vlist-t2",
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-r",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist",
                    style: {
                      height: "1.6514em"
                    },
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      style: {
                        top: "-1.8723em",
                        marginLeft: "0em"
                      },
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "pstrut",
                        style: {
                          height: "3.05em"
                        }
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "sizing reset-size6 size3 mtight",
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          className: "mord mtight",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal mtight",
                            children: "i"
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
                        top: "-3.05em"
                      },
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "pstrut",
                        style: {
                          height: "3.05em"
                        }
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "mop op-symbol large-op",
                          children: "∑"
                        })
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.span, {
                      style: {
                        top: "-4.3em",
                        marginLeft: "0em"
                      },
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "pstrut",
                        style: {
                          height: "3.05em"
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
                      height: "1.2777em"
                    },
                    children: (0,jsx_runtime.jsx)(_components.span, {})
                  })
                })]
              })
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "1"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.3361em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.55em",
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
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord mtight",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "p"
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
                                          marginLeft: "0em",
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
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mrel mtight",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mrel mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord vbox mtight",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "thinbox mtight",
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      className: "rlap mtight",
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "strut",
                                        style: {
                                          height: "0.8889em",
                                          verticalAlign: "-0.1944em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "inner",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "mord mtight",
                                          children: (0,jsx_runtime.jsx)(_components.span, {
                                            className: "mrel mtight",
                                            children: ""
                                          })
                                        })
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "fix"
                                      })]
                                    })
                                  })
                                })
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mrel mtight",
                                children: "="
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord mtight",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                style: {
                                  marginRight: "0.03588em"
                                },
                                children: "q"
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
                                          marginLeft: "-0.0359em",
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
                            })]
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
                        height: "0.2861em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Explanation: Counts how many positions two strings differ in. Used for binary strings, error detection/correction."
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