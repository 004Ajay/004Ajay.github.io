"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[2138],{

/***/ 2000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ theme_SearchPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(4586);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useGlobalData.js
var useGlobalData = __webpack_require__(6588);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 83 modules
var Layout = __webpack_require__(9246);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(5260);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(8774);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(6347);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/ExecutionEnvironment.js
var ExecutionEnvironment = __webpack_require__(8193);
;// ./node_modules/docusaurus-plugin-search-local/lib/client/theme/hooks/useSearchQuery.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const SEARCH_PARAM_QUERY="q";function useSearchQuery(){const history=(0,react_router/* useHistory */.W6)();const location=(0,react_router/* useLocation */.zy)();const{siteConfig:{baseUrl}}=(0,useDocusaurusContext/* default */.A)();return{searchValue:ExecutionEnvironment/* default */.A.canUseDOM&&new URLSearchParams(location.search).get(SEARCH_PARAM_QUERY)||"",updateSearchPath:searchValue=>{const searchParams=new URLSearchParams(location.search);if(searchValue){searchParams.set(SEARCH_PARAM_QUERY,searchValue);}else{searchParams.delete(SEARCH_PARAM_QUERY);}history.replace({search:searchParams.toString()});},generateSearchPageLink:searchValue=>{// Refer to https://github.com/facebook/docusaurus/pull/2838
return`${baseUrl}search?q=${encodeURIComponent(searchValue)}`;}};}/* harmony default export */ const hooks_useSearchQuery = (useSearchQuery);
// EXTERNAL MODULE: ./node_modules/docusaurus-plugin-search-local/lib/client/utils/fetchIndexes.js
var fetchIndexes = __webpack_require__(6487);
// EXTERNAL MODULE: ./node_modules/docusaurus-plugin-search-local/lib/client/utils/SearchSourceFactory.js + 5 modules
var SearchSourceFactory = __webpack_require__(7429);
;// ./node_modules/docusaurus-plugin-search-local/lib/client/utils/SearchAnalyticsFactory.js
function NoSearchAnalytics(){// No search analytics implemnetation found.
}let cached;function _resetCache(){cached=undefined;}function SearchAnalyticsFactory(){if(!cached){if(typeof _paq!=='undefined'&&_paq&&_paq?.push){cached=function searchAnalytics(query,results){_paq.push(['trackSiteSearch',query,// Search keyword searched for
false,// Search category selected in your search engine. If you do not need this, set to false
(results||[]).length// Number of results on the Search results page. Zero indicates a 'No Result Search Keyword'. Set to false if you don't know
]);};}if(typeof gtag!=='undefined'&&typeof gtag==='function'){cached=function searchAnalytics(query){gtag('event','search',{search_term:query});};}if(typeof appInsights!=='undefined'){cached=function searchAnalytics(query){appInsights.trackEvent({name:'search',properties:{search_term:query}});};}}return cached||NoSearchAnalytics;}
// EXTERNAL MODULE: ./node_modules/docusaurus-plugin-search-local/lib/client/utils/highlight.js
var highlight = __webpack_require__(4343);
// EXTERNAL MODULE: ./node_modules/docusaurus-plugin-search-local/lib/client/utils/highlightStemmed.js + 1 modules
var highlightStemmed = __webpack_require__(8391);
// EXTERNAL MODULE: ./node_modules/docusaurus-plugin-search-local/lib/client/utils/getStemmedPositions.js
var getStemmedPositions = __webpack_require__(4532);
// EXTERNAL MODULE: ./node_modules/docusaurus-plugin-search-local/lib/client/theme/LoadingRing/LoadingRing.jsx + 1 modules
var LoadingRing = __webpack_require__(4030);
;// ./node_modules/docusaurus-plugin-search-local/lib/client/utils/simpleTemplate.js
function simpleTemplate(template,params){return template.replace(/\{\{\s*(\w+)\s*\}\}/g,(raw,keyword)=>{if(Object.prototype.hasOwnProperty.call(params,keyword)){return String(params[keyword]);}return raw;});}
// EXTERNAL MODULE: ./node_modules/docusaurus-plugin-search-local/lib/client/theme/ErrorBoundary.jsx
var ErrorBoundary = __webpack_require__(4029);
;// ./node_modules/docusaurus-plugin-search-local/lib/client/theme/SearchPage/SearchPage.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const SearchPage_module = ({"searchQueryInput":"searchQueryInput_ETig","searchResultItem":"searchResultItem_LrwU","searchResultItemPath":"searchResultItemPath_JnDE","searchResultItemSummary":"searchResultItemSummary_z8ao"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./node_modules/docusaurus-plugin-search-local/lib/client/theme/SearchPage/SearchPage.jsx
function SearchPage(){const{siteConfig:{baseUrl}}=(0,useDocusaurusContext/* default */.A)();const{indexHash,removeDefaultStopWordFilter,translations}=(0,useGlobalData/* usePluginData */.P_)("docusaurus-plugin-search-local");const{searchValue,updateSearchPath}=hooks_useSearchQuery();const[searchQuery,setSearchQuery]=(0,react.useState)(searchValue);const[searchSource,setSearchSource]=(0,react.useState)();const[searchResults,setSearchResults]=(0,react.useState)();const pageTitle=(0,react.useMemo)(()=>searchQuery?simpleTemplate(translations.search_results_for,{keyword:searchQuery}):translations.search_the_documentation,[searchQuery,translations.search_results_for,translations.search_the_documentation]);(0,react.useEffect)(()=>{updateSearchPath(searchQuery);if(searchSource){if(searchQuery){searchSource(searchQuery,results=>{setSearchResults(results);});}else{setSearchResults(undefined);}}// `updateSearchPath` should not be in the deps,
// otherwise will cause call stack overflow.
// eslint-disable-next-line react-hooks/exhaustive-deps
},[searchQuery,searchSource]);const handleSearchInputChange=(0,react.useCallback)(e=>{setSearchQuery(e.target.value);},[]);(0,react.useEffect)(()=>{async function doFetchIndexes(){const{wrappedIndexes}=await (0,fetchIndexes/* fetchIndexes */.Z)(baseUrl,indexHash);setSearchSource(()=>(0,SearchSourceFactory/* SearchSourceFactory */.m)({wrappedIndexes,removeDefaultStopWordFilter,resultsLimit:100,onResults:SearchAnalyticsFactory()}));}doFetchIndexes();},[baseUrl,indexHash,removeDefaultStopWordFilter]);return/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Head/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{property:"robots",content:"noindex, follow"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(ErrorBoundary/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"container margin-vert--lg",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h1",{children:pageTitle}),/*#__PURE__*/(0,jsx_runtime.jsx)("input",{type:"search",name:"q",className:SearchPage_module.searchQueryInput,"aria-label":"Search",onChange:handleSearchInputChange,value:searchQuery,autoComplete:"off",autoFocus:true}),!searchSource&&searchQuery&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(LoadingRing/* default */.A,{})}),searchResults&&(searchResults.length>0?/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:simpleTemplate(searchResults.length===1?translations.count_documents_found:translations.count_documents_found_plural,{count:searchResults.length})}): true?/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:translations.no_documents_were_found}):/*#__PURE__*/0),/*#__PURE__*/(0,jsx_runtime.jsx)("section",{children:searchResults&&searchResults.map(item=>/*#__PURE__*/(0,jsx_runtime.jsx)(SearchResultItem,{searchResult:item},item.document.i))})]})})]});}function SearchResultItem({searchResult:{document,type,page,tokens,metadata}}){const isTitle=type===0;const isContent=type===2;const pathItems=(isTitle?document.b:page.b).slice();const articleTitle=isContent?document.s:document.t;if(!isTitle){pathItems.push(page.t);}return/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:SearchPage_module.searchResultItem,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{to:document.h?document.h:document.u,dangerouslySetInnerHTML:{__html:isContent?(0,highlight/* highlight */.Z)(articleTitle,tokens):(0,highlightStemmed/* highlightStemmed */.C)(articleTitle,(0,getStemmedPositions/* getStemmedPositions */.g)(metadata,"t"),tokens,100)}})}),pathItems.length>0&&/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:SearchPage_module.searchResultItemPath,children:pathItems.join(" › ")}),isContent&&/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:SearchPage_module.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,highlightStemmed/* highlightStemmed */.C)(document.t,(0,getStemmedPositions/* getStemmedPositions */.g)(metadata,"t"),tokens,100)}})]});}
;// ./node_modules/docusaurus-plugin-search-local/lib/client/theme/SearchPage/index.js
/* harmony default export */ const theme_SearchPage = (SearchPage);

/***/ })

}]);