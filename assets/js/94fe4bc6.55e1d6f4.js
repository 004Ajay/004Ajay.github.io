"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[8502],{

/***/ 222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/The first error in Pandas (Image by Author)-4c997bdb0cbcaac1edd1240bca2b198b.webp");

/***/ }),

/***/ 1241:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Car Data Analysis to find best car for my needs, (Image by Author, Python Logo from Wikipedia)-e5fb56e7d2a75e06683053608675619a.webp");

/***/ }),

/***/ 1445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/View of Data in Pandas (Image by Author)-5dce235c66139bbbd53be136e328585e.webp");

/***/ }),

/***/ 2568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2024_10_21_data_driven_car_buying_how_i_analyzed_the_best_options_using_python_story_md_94f_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2024_10_21_data_driven_car_buying_how_i_analyzed_the_best_options_using_python_story_md_94f_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9854);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8453);


const frontMatter = {
	slug: 'data-driven-car-buying',
	title: 'Data-Driven Car Buying: How I Analyzed the Best Options Using Python',
	authors: [
		'ajay'
	],
	tags: [
		'data',
		'python'
	]
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "The backstory",
  "id": "the-backstory",
  "level": 2
}, {
  "value": "Let’s Jump onto the work",
  "id": "lets-jump-onto-the-work",
  "level": 2
}, {
  "value": "Removing Unwanted Columns",
  "id": "removing-unwanted-columns",
  "level": 2
}, {
  "value": "Removing Unwanted Rows",
  "id": "removing-unwanted-rows",
  "level": 2
}, {
  "value": "Comparison with Current Car",
  "id": "comparison-with-current-car",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Read on ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://medium.com/@ajaytshaju/data-driven-car-buying-how-i-analyzed-the-best-options-using-python-3e3a15c5f8eb",
        children: "Medium"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Car Data Analysis to find best car for my needs",
        src: (__webpack_require__(1241)/* ["default"] */ .A) + "",
        width: "1898",
        height: "726"
      }), "\nCar Data Analysis to find best car for my needs, (Image by Author, Python Logo from Wikipedia)"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "the-backstory",
      children: "The backstory"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Since the start of 2024, there has been a discussion in my home regarding purchasing a new car, but the talks and planning have gone on without a final decision. But when my current car started costing a good amount just from routine checkups and other services, the talk rose again to full power. Just like every time, it was my responsibility to find the latest and best car based on some constraints, but this time I thought of analyzing an Indian Cars dataset (get the data ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://www.kaggle.com/datasets/atharvataras/indian-car-market-2024?select=india_cars_2024.csv",
        children: "here"
      }), ") using Python rather than searching on Google and filtering through websites."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "The first question in your mind: Why did he choose Python Analysis over applying some Filters on Car Websites?"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The Google search and filtering functions on car websites like CarDekho or CarWale are much easier but I choose Python:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
          children: "Most importantly, by engaging with the dataset directly, I was able to customize my search parameters in a way that web filters might not allow. I could explore a wider range of variables, perform complex comparisons, and apply unique criteria to my specific needs."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
          children: "I aimed for a more hands-on, analytical approach to enhance my understanding of data analysis with Python and Excel. As well as finding something extra(maybe a new car that I didn’t find initially) through this analysis, where the probability is slim in the usual web searches."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
          children: ["And, if the decision is not finalized, when more data arrives I can use the updated data and run through this notebook again to find the next best car for my needs. Sometimes a reader like you can make use of my ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
            href: "https://github.com/004Ajay/Data-Analysis/blob/main/Car%20EDA%20Python/car_selection.ipynb",
            children: "Python Notebook"
          }), " for your specific car-searching needs as well."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "lets-jump-onto-the-work",
      children: "Let’s Jump onto the work"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "See a snapshot of the data in MS Excel 2019:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "A bird-eye view of the data",
        src: (__webpack_require__(8300)/* ["default"] */ .A) + "",
        width: "1899",
        height: "726"
      }), "\nA bird-eye view of the data (Image by Author)"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Some information"
        })
      }), ": The coding and structure of the blog remain consistent throughout. I used the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://pandas.pydata.org/docs/index.html",
        children: "Pandas"
      }), " library in IPython in VS Code to perform this Exploratory Data Analysis(EDA). I followed four steps for this analysis, they are Loading and Viewing the data; Removing unnecessary columns and rows; Comparison with my current car, Honda Amaze 2015."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["First of all, we need to bring the data to IPython VS Code, for that use the pandas function ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "read_csv()"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-python",
        children: "import pandas as pd\ncars = pd.read_csv('india_cars_2024.csv', encoding='utf-8')\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "But here comes the first problem"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "The first error in Pandas",
        src: (__webpack_require__(222)/* ["default"] */ .A) + "",
        width: "1132",
        height: "737"
      }), "\nThe first error in Pandas (Image by Author)"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Just change the encoding to unicode_escape, found from here"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-python",
        children: "import pandas as pd\ncars = pd.read_csv('india_cars_2024.csv', encoding='unicode_escape')\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Output:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "View of Data in Pandas",
        src: (__webpack_require__(1445)/* ["default"] */ .A) + "",
        width: "1553",
        height: "815"
      }), "\nView of Data in Pandas (Image by Author)"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "While viewing the data, I peeked at the dimensionality, which includes 1,663 rows and 57 columns. Many of these columns and rows were not relevant to my analysis, so I decided to make the dataset lean for faster processing and better absorption of info."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["I then viewed the dataset's columns using the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "dataset.columns"
      }), " attribute."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Then to check for null values in each column, I used ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "dataset.isnull().sum().sort_values(ascending=False)"
      }), ", which gave me an idea about null values in the DataFrame. Sorted it in descending order, allowing me to identify columns with no entries(if any)."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-python",
        children: "print(cars.columns)\n\ncars.isnull().sum().sort_values(ascending=False).head()\n\n# Index(['brand_parent', 'model_parent', 'variant_parent', 'variant_name',\n#       'price', 'displacement', 'power', 'transmission', 'mileage', 'fuel',\n#       'engine_typr', 'cylinders', 'valves_per_cyl', 'gearbox', 'drive',\n#       'fuel_cap', 'emission_norm', 'suspension_front', 'suspension_rear',\n#       'steer_type', 'steer_col', 'turn_radius', 'brake_front', 'breake_rear',\n#       'length', 'width', 'height', 'boot_cap', 'seat_cap', 'ground_cl',\n#       'wheelbase', 'kerb_weight', 'gross_weight', 'doors', 'park_sensors',\n#       'upholstery', 'radio_antenna', 'tyre_size', 'tyre_type', 'wheel_size',\n#       'airbags', 'screen_size', 'connectivity', 'image-src', 'ncap_rating',\n#       'ev_range', 'ev_battery_cap', 'ev_motor', 'ev_charge', 'ev_drag_coeff',\n#       'zero_to_hundred', 'speakers', 'auto_park', 'ev_charge_time_dc',\n#       'ev_charge_time_ac', 'ev_brake_regen_levels', 'ev_norm'],\n#       dtype='object')\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "removing-unwanted-columns",
      children: "Removing Unwanted Columns"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Next, I removed unwanted columns to slim down the dataset. This is important because removing columns reduces the dataset’s dimensions, thus enabling faster data processing. Before removing these columns, I explored all 57 columns using specific functions (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "<column>.unique()"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "<column>.isnull()"
      }), ") to check their contents, identify missing values, and find unique values. Some constraints I had were that I do not prefer Electric or CNG vehicles, as electric vehicles could increase electricity charges(homes without Solar Panels) and CNG vehicles typically have lower boot space, acceleration performance, horsepower, resale value, and high maintenance costs. In order to remove the ‘Electric’ columns I wrote code to find columns starting with ‘ev’ (which stands for Electric Vehicle) and identified about nine such columns and dropped them."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-python",
        children: "ev_cols = [column for column in cars if column.startswith('ev')]\n\nprint(ev_cols)\n\n# Output: ['ev_range',\n# 'ev_battery_cap',\n# 'ev_motor',\n# 'ev_charge',\n# 'ev_drag_coeff',\n# 'ev_charge_time_dc',\n# 'ev_charge_time_ac',\n# 'ev_brake_regen_levels',\n# 'ev_norm']\n\ncars.drop(ev_cols, axis=1, inplace=True) # axis=1 means columns\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "While exploring the dataset, I noticed some columns contained irrelevant information, such as “radio antenna,” also identified other columns having redundant info, like “brand_parent,” “model_parent,” “variant_parent,” and “variant_name.” The “variant_name” contained information from the other three columns, so I removed them. Similar to this, there exist many other columns that provide useful information, but I removed them as I would later look for relevant details when analyzing the final car list."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["When I reviewed the dataset, I encountered a significant issue with the dataset: the presence of SI units alongside the values(row entries). For example, in the mileage column, a car might have a mileage of “19 km per liter,” which is not suitable for integer-level comparisons. Thus, I needed to change the entries from  ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "<value><SI unit>"
      }), " to just ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "value"
      }), " and convert it to an integer, and rename the column as ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "<column name>_<SI unit>"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["I updated several such columns, including mileage, gross weight, displacement, fuel capacity, boot capacity, length, width, height, and ground clearance, filled empty or NA values with 0, and changed the data type to integer. To extract the numbers, I used a regular expression ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "r'\\d+'"
      }), ", to find integers within the strings. And dropped the original columns to avoid redundancy. Codes:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-python",
        children: "cars['gross_weight_kg'] = cars['gross_weight'] \\\n                                      .str.extract(r'(\\d+)') \\\n                                      .fillna(0) \\\n                                      .astype(int) \n\ncars['mileage_kmpl'] = cars['mileage'] \\\n                                      .str.extract(r'(\\d+)') \\\n                                      .fillna(0) \\\n                                      .astype(int)\n# Output:\n#        mileage_kmpl\n#          12\n#          17\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-python",
        children: "to_drop_cols = ['mileage', 'gross_weight', 'displacement',\n                'fuel_cap', 'boot_cap', 'length', 'width',\n                'height', 'ground_cl']\n\ncars.drop(to_drop_cols, axis=1, inplace=True)\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "removing-unwanted-rows",
      children: "Removing Unwanted Rows"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "In the next step, I removed unwanted rows from the dataset. I began by removing cars with fuel types “Electric” and “CNG” using a filtering function."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-python",
        children: "cars = cars[~cars['fuel'].isin(['Electric', 'CNG'])]\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Next, I needed to address the price column, which presented another challenge. The prices were listed in crores or lakhs, multiplied by “on-road price” and “ex-showroom price,” with the only delimiter being an asterisk (*). To resolve this, I used the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "split('*')"
      }), " function to separate these values with an asterisk as a delimiter and extracted the first entry, representing the price value."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-python",
        children: "# Before: 'Rs.8.07 Lakh*Get On-Road Price*Ex-showroom Price'\n# After: 'Rs.8.07 Lakh' \n\ncars['price'] = cars['price'].apply(lambda x: str(x).split('*')[0])\n\ncars['price'].head()\n\n# Output\n#    Rs.68.90 Lakh\n#    Rs.68.25 Lakh\n#       Rs.1.01 Cr\n#       Rs.6.95 Cr\n#      Rs.10.48 Cr\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["After cleaning the price data, I found that the price column entries included the string “Cr” (for crores) in various cases. To filter out these entries, I used the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "str.contains()"
      }), " method with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "case=False"
      }), ", which allowed me to remove approximately 211 rows containing crore-priced cars."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-python",
        children: "crore_priced_cars = cars['price'].str.contains('cr', case=False, na=False)\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Next, I need to identify two keywords, \"Rs.\" and \"Lakh,\" in the price column, these followed a pattern (Rs.9.9 Lakh). So I removed those words, converted the remaining values to a float, renamed the new column as ‘price_lakhs’, and finally dropped the original price column using a series of steps."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-python",
        children: "pattern = r\"rs.|(\\s\\w+)\" # using regex pattern to find multiple strings,\n                         # 'rs.' is a word with fullstop,\n                         # '\\s' finds any whitespace character\n                         # '\\w+' a complete word that follows\n\n# Changing 'Rs.62.95 Lakh' like values to 62.95 (float) \nlakh_priced_cars = cars['price'].str \\\n                               .lower() \\\n                               .replace(pattern, \"\", regex=True) \\\n                               .astype(float) \n\ncars['price_lakhs'] = lakh_priced_cars # Adding new column 'price_lakhs'\n\ncars.drop('price', axis=1, inplace=True) # Dropping the 'price' column\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "comparison-with-current-car",
      children: "Comparison with Current Car"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This is the most important part of my car-finding process. When planning to buy a new vehicle, we all hope to upgrade from our existing one. This is the same in my case too, find a better car than my 2015 Honda Amaze."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "One significant consideration is the narrow path to my home, which limits the size of vehicles that can be accommodated. The largest car that can fit is the 2024 Maruti Suzuki Brezza, with dimensions of 3,995 mm in length, 1,790 mm in width, and 1,685 mm in height. Considering these dimensions, I set a criterion that any car less than or equal to these measurements would be acceptable."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Additionally, the Amaze has an engine displacement of 1.2 liters, so any car with an engine displacement greater than or equal to this is acceptable. The price range I set was between 8 to 10 lakhs. Furthermore, I required the mileage to be greater than 12 kmpl. I also added the boot capacity requirement; although the Amaze has a boot capacity of 400 liters, I decided to accept cars with a minimum boot capacity of 300 liters. Finally, I combined these criteria and filtered the dataset accordingly."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-python",
        children: "# Conditions combined to filter out rows\n\ncars = cars[\n    (cars['price_lakhs'] >= 8.00)     &\n\n    (cars['price_lakhs'] <= 10.00)    & \n\n    (cars['mileage_kmpl'] >= 12)      &\n    \n    (cars['length_mm'] <= 3995)       &\n    \n    (cars['width_mm'] <= 1790)        &\n    \n    (cars['height_mm'] <= 1685)       &\n\n    (cars['boot_cap_liters'] >= 308)\n]\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "After applying these combined conditions, the DataFrame has a dimension of 112 rows and 24 columns. Then to see the shortlisted cars, one of the columns titled ‘variant_name’ has been extracted, but in that column, I found multiple entries for a car like ‘Citroen C3 Shine Dual Tone Turbo’, ‘Citroen C3 Feel Dual Tone Turbo’, ‘Nissan Magnite Turbo XV Premium Opt’, ‘Nissan Magnite Turbo XV Premium DT’. So I did a set of operations to find the unique ones."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-python",
        children: "print(\"Final Cars: \", cars['variant_name'] \\\n                             .apply(lambda x: ' '.join(x.split()[:2])) \\\n                             .unique()\n)\n\n# Output:\n# Final Cars: ['Citroen C3' 'Nissan Magnite' 'Renault Kiger' 'Honda Amaze'\n#           'Hyundai i20' 'Hyundai Aura' 'Hyundai Exter' 'Hyundai Venue'\n#           'Toyota Taisor' 'Tata Tigor' 'Tata Altroz' 'Tata Punch'\n#           'Maruti Dzire' 'Maruti Baleno' 'Maruti FRONX' 'Maruti Brezza']\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This resulted in a total of 16 distinct cars. Now I can show this car list to my stakeholders, and they as well as I can proceed to the examination of each of these cars, looking into service charges, aftermarket costs, modifications, and other criteria."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Finally, I exported the required data as a CSV file for later use."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["See the complete Notebook and other materials ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/004Ajay/Data-Analysis/tree/main/Car%20EDA%20Python",
        children: "here on my GitHub"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "That’s all about 'Data-Driven Car Buying Using Python', if you liked the post please clap and share to support my work. Thanks 😃"
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

/***/ 8300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/A bird-eye view of the data (Image by Author)-c105628d64e118c87df4c44b83ca23e5.webp");

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

/***/ 9854:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/blog/data-driven-car-buying","source":"@site/blog/2024-10-21-Data_Driven_Car_Buying_How_I_Analyzed_the_Best_Options_Using_Python/story.md","title":"Data-Driven Car Buying: How I Analyzed the Best Options Using Python","description":"Read on Medium","date":"2024-10-21T00:00:00.000Z","tags":[{"inline":false,"label":"Data","permalink":"/blog/tags/data","description":"Data tag description"},{"inline":false,"label":"Python","permalink":"/blog/tags/python","description":"Python tag description"}],"readingTime":9.7,"hasTruncateMarker":true,"authors":[{"name":"Ajay T Shaju","title":"AI & DS Engineer","url":"https://004ajay.github.io/","page":{"permalink":"/blog/authors/ajay"},"socials":{"linkedin":"https://www.linkedin.com/in/ajay-t-shaju/","github":"https://github.com/004ajay","medium":"https://medium.com/@ajaytshaju","x":"https://x.com/004ajayt"},"imageURL":"https://github.com/004ajay.png","key":"ajay"}],"frontMatter":{"slug":"data-driven-car-buying","title":"Data-Driven Car Buying: How I Analyzed the Best Options Using Python","authors":["ajay"],"tags":["data","python"]},"unlisted":false,"prevItem":{"title":"Step by Step Guide for Creating a Reading Habit Tracker in Google Sheets","permalink":"/blog/reading-habit-tracker-google-sheets"},"nextItem":{"title":"How to use TensorFlow with GPU on Windows for Heavy Tasks (2024)","permalink":"/blog/tf-heavy"}}');

/***/ })

}]);