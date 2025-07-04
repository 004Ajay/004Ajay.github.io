"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[4583],{

/***/ 5579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(4164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(4586);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 83 modules
var Layout = __webpack_require__(9246);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(1107);
;// ./src/components/HomepageFeatures/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"features":"features_t9lD","featureSvg":"featureSvg_GfXr"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./src/components/HomepageFeatures/index.tsx
const FeatureList=[// {
//   title: 'Easy to Use',
//   Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
//   description: (
//     <>
//       Docusaurus was designed from the ground up to be easily installed and
//       used to get your website up and running quickly.
//     </>
//   ),
// },
// {
//   title: 'Focus on What Matters',
//   Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
//   description: (
//     <>
//       Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
//       ahead and move your docs into the <code>docs</code> directory.
//     </>
//   ),
// },
// {
//   title: 'Powered by React',
//   Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
//   description: (
//     <>
//       Extend or customize your website layout by reusing React. Docusaurus can
//       be extended while reusing the same header and footer.
//     </>
//   ),
// },
];function Feature({title,Svg,description}){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)('col col--4'),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"text--center",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Svg,{className:styles_module.featureSvg,role:"img"})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"text--center padding-horiz--md",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* default */.A,{as:"h3",children:title}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:description})]})]});}function HomepageFeatures(){return/*#__PURE__*/(0,jsx_runtime.jsx)("section",{className:styles_module.features,children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"container",children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"row",children:FeatureList.map((props,idx)=>/*#__PURE__*/(0,jsx_runtime.jsx)(Feature,{...props},idx))})})});}
;// ./src/pages/index.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const index_module = ({"heroBanner":"heroBanner_qdFl","buttons":"buttons_AeoN"});
;// ./src/pages/index.tsx
function HomepageHeader(){const{siteConfig}=(0,useDocusaurusContext/* default */.A)();return/*#__PURE__*/(0,jsx_runtime.jsx)("header",{className:(0,clsx/* default */.A)('hero hero--primary',index_module.heroBanner),children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"container",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* default */.A,{as:"h1",className:"hero__title",children:siteConfig.title}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"hero__subtitle",children:siteConfig.tagline})]})});}function Home(){const{siteConfig}=(0,useDocusaurusContext/* default */.A)();return/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.A,{title:`${siteConfig.title}`,description:"Description will go into a meta tag in <head />",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(HomepageHeader,{}),/*#__PURE__*/(0,jsx_runtime.jsx)("main",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(HomepageFeatures,{})})]});}

/***/ })

}]);