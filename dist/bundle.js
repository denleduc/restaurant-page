/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./background.jpg */ \"./src/background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Cantarell:ital,wght@0,400;0,700;1,400;1,700&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n    font-family: 'Cantarell';\\r\\n}\\r\\n\\r\\nheader,\\r\\nfooter,\\r\\n.presDiv,\\r\\n.txtContainer,\\r\\n.dishText,\\r\\n.mainDishes,\\r\\n.dessertsDishes,\\r\\n.otherDishes,\\r\\n.about {\\r\\n    background: rgba(255, 255, 255, 0.85);\\r\\n    border-radius: 20px;\\r\\n}\\r\\n\\r\\nhtml {\\r\\n    scroll-behavior: smooth;\\r\\n}\\r\\n\\r\\nbody {\\r\\n    min-height: 100vh;\\r\\n    margin: 0;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: space-between;\\r\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n    background-size: cover;\\r\\n    background-attachment: fixed;\\r\\n}\\r\\n\\r\\n#pageContainer {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    background: none;\\r\\n}\\r\\n\\r\\nheader {\\r\\n    display: flex;\\r\\n    justify-content: space-evenly;\\r\\n}\\r\\n\\r\\n.nav {\\r\\n    display: flex;\\r\\n    gap: 2vw;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.btn {\\r\\n    border: none;\\r\\n    padding: .3vw .5vw .3vw .5vw;\\r\\n    font-size: 1.2em;\\r\\n    background-color: rgba(0,0,0, 0.3);\\r\\n    border-radius: 10px;\\r\\n}\\r\\n\\r\\n.btn:hover {\\r\\n    background-color:whitesmoke;\\r\\n}\\r\\n\\r\\n.siteName {\\r\\n    color: blue;\\r\\n    font-size: 1.4em;\\r\\n    font-style: italic;\\r\\n}\\r\\n\\r\\n.main {\\r\\n    align-self: center;\\r\\n    justify-content: center;\\r\\n    margin: 5vh 0 5vh 0;\\r\\n}\\r\\n\\r\\n.presDiv {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    width: 60vw;\\r\\n}\\r\\n\\r\\n.restaurantDesc {\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.menu {\\r\\n    flex-direction: column;\\r\\n    justify-content: space-around;\\r\\n    align-items: center;\\r\\n    gap: 5vh;\\r\\n    padding: 1vw;\\r\\n}\\r\\n\\r\\n.txtContainer {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    width: 60vw;\\r\\n}\\r\\n\\r\\n.dish {\\r\\n    width: 250px;\\r\\n    height: 300px;\\r\\n    padding: 15px;\\r\\n    border-radius: 15px;\\r\\n    background-color: rgba(255, 255, 255, 0.85);\\r\\n    box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.4);\\r\\n    transition: all ease .05s;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: space-evenly;\\r\\n    align-items: center;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.dish:hover {\\r\\n    background-color: rgba(255, 255, 255, 1);\\r\\n    transform: scale(1.01);\\r\\n}\\r\\n\\r\\n.menuContainer {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    gap: 5vh;\\r\\n}\\r\\n.mainDishes,\\r\\n.dessertsDishes,\\r\\n.otherDishes {\\r\\n    display: flex;\\r\\n    flex-wrap: wrap;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    gap: 5vw;\\r\\n    width: 60vw;\\r\\n    padding: 1vw;\\r\\n    border-radius: 20px;\\r\\n}\\r\\n\\r\\n.about {\\r\\n    align-self: center;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    width: 60vw;\\r\\n}\\r\\n\\r\\n\\r\\n.creditsContainer {\\r\\n    padding: 2vw;\\r\\n    border-radius: 10px;\\r\\n}\\r\\nfooter {\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.visible {\\r\\n    display: flex;\\r\\n}\\r\\n\\r\\n.invisible {\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n.small {\\r\\n    font-size: 0.8em;\\r\\n}\\r\\n\\r\\n.em {\\r\\n    font-size: 1.1em;\\r\\n    font-weight: 500;\\r\\n}\\r\\n\\r\\n.topText {\\r\\n    font-size: 1.6em;\\r\\n    font-weight: 600;\\r\\n}\\r\\n\\r\\n.dishName {\\r\\n    font-size: 1.3em;\\r\\n    font-style: italic;\\r\\n    font-weight: 500;\\r\\n}\\r\\n\\r\\n.dishDesc {\\r\\n    font-style: italic;\\r\\n    color:silver;\\r\\n}\\r\\n\\r\\n.dishIngredients {\\r\\n    font-size: 0.9em;\\r\\n}\\r\\n\\r\\n.dishText {\\r\\n    padding: 2vw;\\r\\n    font-size: 1.2em;\\r\\n    font-weight: 400;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/OFL.txt":
/*!*********************!*\
  !*** ./src/OFL.txt ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"Copyright (c) 2009-2010, Understanding Limited (dave@understandinglimited.com)\\r\\n\\r\\nThis Font Software is licensed under the SIL Open Font License, Version 1.1.\\r\\nThis license is copied below, and is also available with a FAQ at:\\r\\nhttp://scripts.sil.org/OFL\\r\\n\\r\\n\\r\\n-----------------------------------------------------------\\r\\nSIL OPEN FONT LICENSE Version 1.1 - 26 February 2007\\r\\n-----------------------------------------------------------\\r\\n\\r\\nPREAMBLE\\r\\nThe goals of the Open Font License (OFL) are to stimulate worldwide\\r\\ndevelopment of collaborative font projects, to support the font creation\\r\\nefforts of academic and linguistic communities, and to provide a free and\\r\\nopen framework in which fonts may be shared and improved in partnership\\r\\nwith others.\\r\\n\\r\\nThe OFL allows the licensed fonts to be used, studied, modified and\\r\\nredistributed freely as long as they are not sold by themselves. The\\r\\nfonts, including any derivative works, can be bundled, embedded, \\r\\nredistributed and/or sold with any software provided that any reserved\\r\\nnames are not used by derivative works. The fonts and derivatives,\\r\\nhowever, cannot be released under any other type of license. The\\r\\nrequirement for fonts to remain under this license does not apply\\r\\nto any document created using the fonts or their derivatives.\\r\\n\\r\\nDEFINITIONS\\r\\n\\\"Font Software\\\" refers to the set of files released by the Copyright\\r\\nHolder(s) under this license and clearly marked as such. This may\\r\\ninclude source files, build scripts and documentation.\\r\\n\\r\\n\\\"Reserved Font Name\\\" refers to any names specified as such after the\\r\\ncopyright statement(s).\\r\\n\\r\\n\\\"Original Version\\\" refers to the collection of Font Software components as\\r\\ndistributed by the Copyright Holder(s).\\r\\n\\r\\n\\\"Modified Version\\\" refers to any derivative made by adding to, deleting,\\r\\nor substituting -- in part or in whole -- any of the components of the\\r\\nOriginal Version, by changing formats or by porting the Font Software to a\\r\\nnew environment.\\r\\n\\r\\n\\\"Author\\\" refers to any designer, engineer, programmer, technical\\r\\nwriter or other person who contributed to the Font Software.\\r\\n\\r\\nPERMISSION & CONDITIONS\\r\\nPermission is hereby granted, free of charge, to any person obtaining\\r\\na copy of the Font Software, to use, study, copy, merge, embed, modify,\\r\\nredistribute, and sell modified and unmodified copies of the Font\\r\\nSoftware, subject to the following conditions:\\r\\n\\r\\n1) Neither the Font Software nor any of its individual components,\\r\\nin Original or Modified Versions, may be sold by itself.\\r\\n\\r\\n2) Original or Modified Versions of the Font Software may be bundled,\\r\\nredistributed and/or sold with any software, provided that each copy\\r\\ncontains the above copyright notice and this license. These can be\\r\\nincluded either as stand-alone text files, human-readable headers or\\r\\nin the appropriate machine-readable metadata fields within text or\\r\\nbinary files as long as those fields can be easily viewed by the user.\\r\\n\\r\\n3) No Modified Version of the Font Software may use the Reserved Font\\r\\nName(s) unless explicit written permission is granted by the corresponding\\r\\nCopyright Holder. This restriction only applies to the primary font name as\\r\\npresented to the users.\\r\\n\\r\\n4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font\\r\\nSoftware shall not be used to promote, endorse or advertise any\\r\\nModified Version, except to acknowledge the contribution(s) of the\\r\\nCopyright Holder(s) and the Author(s) or with their explicit written\\r\\npermission.\\r\\n\\r\\n5) The Font Software, modified or unmodified, in part or in whole,\\r\\nmust be distributed entirely under this license, and must not be\\r\\ndistributed under any other license. The requirement for fonts to\\r\\nremain under this license does not apply to any document created\\r\\nusing the Font Software.\\r\\n\\r\\nTERMINATION\\r\\nThis license becomes null and void if any of the above conditions are\\r\\nnot met.\\r\\n\\r\\nDISCLAIMER\\r\\nTHE FONT SOFTWARE IS PROVIDED \\\"AS IS\\\", WITHOUT WARRANTY OF ANY KIND,\\r\\nEXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF\\r\\nMERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT\\r\\nOF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE\\r\\nCOPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,\\r\\nINCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL\\r\\nDAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\\r\\nFROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM\\r\\nOTHER DEALINGS IN THE FONT SOFTWARE.\\r\\n\");\n\n//# sourceURL=webpack://restaurant-page/./src/OFL.txt?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderAbout)\n/* harmony export */ });\n/* harmony import */ var _OFL_txt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OFL.txt */ \"./src/OFL.txt\");\n\r\n\r\nfunction renderAbout() {\r\n    const container = document.createElement('div');\r\n    container.classList.add('about', 'invisible');\r\n\r\n    //Real about section\r\n\r\n\r\n    //Credits\r\n    const creditsContainer = document.createElement('div');\r\n    creditsContainer.classList.add('creditsContainer');\r\n    const credit1 = document.createElement('p');\r\n    const credit2 = document.createElement('p');\r\n    const credit3 = document.createElement('p');\r\n    credit1.innerHTML = 'Restaurant photo by <a href=\"https://unsplash.com/@ninjason?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Jason Leung</a> on <a href=\"https://unsplash.com/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>';\r\n    credit2.innerHTML = 'background photo by <a href=\"https://unsplash.com/@zachephoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Zachary Edmundson</a> on <a href=\"https://unsplash.com/s/photos/city?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>';\r\n    credit3.innerHTML = 'Cantarell font from Google Fonts. Licensed under the SIL Open Font License, Version 1.1';\r\n    creditsContainer.appendChild(credit1);\r\n    creditsContainer.appendChild(credit2);\r\n    creditsContainer.appendChild(credit3);\r\n    const licenseText = document.createElement('p');\r\n    licenseText.innerText = _OFL_txt__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n    creditsContainer.appendChild(licenseText);\r\n\r\n    container.appendChild(creditsContainer);\r\n    return container;\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderFooter)\n/* harmony export */ });\nfunction renderFooter() {\r\n    const container = document.createElement('footer');\r\n    \r\n    //Well it's simply the copyright thing\r\n    const copyrightText = document.createElement('p');\r\n    copyrightText.classList.add('small');\r\n    copyrightText.innerText = 'Copyright © Denis L. 2021 - Credits in the about tab';\r\n    container.appendChild(copyrightText);\r\n    \r\n    return container;\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderHeader)\n/* harmony export */ });\nfunction renderHeader() {\r\n    const container = document.createElement('header');\r\n\r\n    //Site name / logo\r\n    const siteName = document.createElement('p');\r\n    siteName.innerText = 'SloooowFooood';\r\n    siteName.classList.add('siteName');\r\n    container.appendChild(siteName);\r\n\r\n\r\n    //Menu\r\n    const navMenu = document.createElement('div');\r\n    navMenu.classList.add('nav')\r\n\r\n    const item1 = document.createElement('button');\r\n    item1.classList.add('presBtn', 'btn');\r\n    item1.innerText = 'Presentation';\r\n\r\n    const item2 = document.createElement('button');\r\n    item2.classList.add('menuBtn', 'btn');\r\n    item2.innerText = 'Menu';\r\n\r\n    const item3 = document.createElement('button');\r\n    item3.classList.add('aboutBtn', 'btn');\r\n    item3.innerText = 'About us';\r\n    \r\n    navMenu.appendChild(item1);\r\n    navMenu.appendChild(item2);\r\n    navMenu.appendChild(item3);\r\n    container.appendChild(navMenu);\r\n\r\n    return container;\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _presentation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./presentation */ \"./src/presentation.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\nconst page = document.querySelector('#pageContainer');\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\npage.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\npage.appendChild((0,_presentation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\npage.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\r\npage.appendChild((0,_about__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\r\ndocument.body.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\r\n\r\n//Getting elements after they have been created\r\nconst menuBtn = document.querySelector('.menuBtn');\r\nconst aboutBtn = document.querySelector('.aboutBtn');\r\nconst presBtn = document.querySelector('.presBtn');\r\nconst presTab = document.querySelector('.main');\r\nconst aboutTab = document.querySelector('.about');\r\nconst menuTab = document.querySelector('.menu');\r\n\r\n//Tab switching code\r\n\r\n/* \r\nTODO: (I read it after having finished my tab logic)\r\nWrite the tab-switching logic inside of index.js. You should have event listeners\r\nfor each tab that wipes out the current contents and then runs the correct ‘tab module’\r\nto populate it again.\r\n*/\r\n\r\npresBtn.addEventListener('click', () => {\r\n    menuTab.classList.remove('visible');\r\n    menuTab.classList.add('invisible');\r\n\r\n    aboutTab.classList.remove('visible');\r\n    aboutTab.classList.add('invisible');\r\n\r\n    presTab.classList.remove('invisible');\r\n    presTab.classList.add('visible');\r\n});\r\n\r\nmenuBtn.addEventListener('click', () => {\r\n    menuTab.classList.remove('invisible');\r\n    menuTab.classList.add('visible');\r\n\r\n    aboutTab.classList.remove('visible');\r\n    aboutTab.classList.add('invisible');\r\n\r\n    presTab.classList.remove('visible');\r\n    presTab.classList.add('invisible');\r\n});\r\n\r\naboutBtn.addEventListener('click', () => {\r\n    menuTab.classList.remove('visible');\r\n    menuTab.classList.add('invisible');\r\n\r\n    aboutTab.classList.remove('invisible');\r\n    aboutTab.classList.add('visible');\r\n\r\n    presTab.classList.remove('visible');\r\n    presTab.classList.add('invisible');\r\n});\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderMenu)\n/* harmony export */ });\n/* harmony import */ var _dishes_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dishes.json */ \"./src/dishes.json\");\n\r\n\r\nfunction renderMenu() {\r\n    const container = document.createElement('div');\r\n    container.classList.add('menu', 'invisible');\r\n    \r\n    //Top text\r\n    const textContainer = document.createElement('div');\r\n    textContainer.classList.add('txtContainer');\r\n\r\n    const topText = document.createElement('p');\r\n    topText.classList.add('topText');\r\n    topText.innerText = 'Menu';\r\n    textContainer.appendChild(topText);\r\n\r\n    const subtitle = document.createElement('p');\r\n    subtitle.classList.add('subtText');\r\n    subtitle.innerText = 'Take a look at the dishes you can order in our restaurant!';\r\n    textContainer.appendChild(subtitle);\r\n\r\n    container.appendChild(textContainer);\r\n\r\n    //Actual menu\r\n    const menuContainer = document.createElement('div');\r\n    menuContainer.classList.add('menuContainer');\r\n\r\n    const mainDishesText = document.createElement('div');\r\n    mainDishesText.innerText = \"Main dishes\";\r\n    const dessertsText = document.createElement('div');\r\n    dessertsText.innerText = \"Desserts\";\r\n    const otherText = document.createElement('div');\r\n    otherText.innerText = \"Others\";\r\n    mainDishesText.classList.add('dishText');\r\n    dessertsText.classList.add('dishText');\r\n    otherText.classList.add('dishText');\r\n\r\n    //Adding dishes from JSON to container\r\n    const mainDishesContainer = document.createElement('div');\r\n    mainDishesContainer.classList.add('mainDishes');\r\n    const dessertsContainer = document.createElement('div');\r\n    dessertsContainer.classList.add('dessertsDishes');\r\n    const otherContainer = document.createElement('div');\r\n    otherContainer.classList.add('otherDishes');\r\n\r\n    _dishes_json__WEBPACK_IMPORTED_MODULE_0__.Dishes.forEach(dish => {\r\n        const dishDiv = document.createElement('div');\r\n        dishDiv.classList.add('dish');\r\n\r\n        //Dish name\r\n        const dishName = document.createElement('p');\r\n        dishName.classList.add('dishName');\r\n        dishName.innerText = dish.name;\r\n        dishDiv.appendChild(dishName);\r\n\r\n        //Dish description\r\n        const dishDesc = document.createElement('p');\r\n        dishDesc.classList.add('dishDesc');\r\n        dishDesc.innerText = dish.description;\r\n        dishDiv.appendChild(dishDesc);\r\n\r\n        //Ingredients\r\n        const dishIngredients = document.createElement('p');\r\n        dishIngredients.classList.add('dishIngredients');\r\n        dishIngredients.innerText = 'Ingredients: ';\r\n        dish.ingredients.forEach(ingredient => {\r\n            dishIngredients.innerText += ingredient + ' | ';\r\n        });\r\n        dishDiv.appendChild(dishIngredients);\r\n\r\n        switch (dish.type) {\r\n            case 'main':\r\n                mainDishesContainer.appendChild(dishDiv);\r\n                break;\r\n            \r\n            case 'dessert':\r\n                dessertsContainer.appendChild(dishDiv);\r\n                break;\r\n\r\n            case 'other':\r\n            default:\r\n                otherContainer.appendChild(dishDiv);\r\n                break;\r\n        }\r\n    });\r\n\r\n    menuContainer.appendChild(mainDishesText);\r\n    menuContainer.appendChild(mainDishesContainer);\r\n    menuContainer.appendChild(dessertsText);\r\n    menuContainer.appendChild(dessertsContainer);\r\n    menuContainer.appendChild(otherText);\r\n    menuContainer.appendChild(otherContainer);\r\n\r\n\r\n    container.appendChild(menuContainer);\r\n    return container;\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/presentation.js":
/*!*****************************!*\
  !*** ./src/presentation.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderPresentation)\n/* harmony export */ });\n/* harmony import */ var _restaurant_interior_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant_interior.jpg */ \"./src/restaurant_interior.jpg\");\n\r\n\r\nfunction renderPresentation() {\r\n    const container = document.createElement('div');\r\n    container.classList.add('main', 'visible');\r\n\r\n    //Div for restaurant name and photo\r\n    const mainDiv = document.createElement('div');\r\n    mainDiv.classList.add('presDiv');\r\n\r\n    const restaurantName = document.createElement('p');\r\n    restaurantName.classList.add('em');\r\n    restaurantName.innerText = 'Slow Food';\r\n    mainDiv.appendChild(restaurantName);\r\n\r\n    const image = new Image();\r\n    image.src = _restaurant_interior_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n    image.style.width = '35vw';\r\n    image.style.height = 'auto';\r\n    mainDiv.appendChild(image);\r\n\r\n    const imgDesc = document.createElement('p');\r\n    imgDesc.innerText = 'Our interior (well, almost)';\r\n    imgDesc.classList.add('small');\r\n    mainDiv.appendChild(imgDesc);\r\n\r\n    const restaurantDesc = document.createElement('p');\r\n    restaurantDesc.classList.add('restaurantDesc');\r\n    restaurantDesc.innerText = 'Welcome to our restaurant! Here, you\\'ll take ' + \r\n                               'all the time you need to eat and enjoy our dishes!' +\r\n                               ' As our name says, we\\'re the exact opposite of your favorite fast-food!';\r\n    \r\n    mainDiv.appendChild(restaurantDesc);\r\n\r\n    const exploreText = document.createElement('p');\r\n    exploreText.classList.add('restaurantDesc');\r\n    exploreText.innerText = 'Feel free to explore our website to discover our dishes, our history and our location!';\r\n    mainDiv.appendChild(exploreText);\r\n\r\n    container.appendChild(mainDiv);\r\n    return container;\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/presentation.js?");

/***/ }),

/***/ "./src/background.jpg":
/*!****************************!*\
  !*** ./src/background.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bb9d647211d9252807f6.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/background.jpg?");

/***/ }),

/***/ "./src/restaurant_interior.jpg":
/*!*************************************!*\
  !*** ./src/restaurant_interior.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9ece4d1d309f04b1ca6f.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/restaurant_interior.jpg?");

/***/ }),

/***/ "./src/dishes.json":
/*!*************************!*\
  !*** ./src/dishes.json ***!
  \*************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"Dishes\":[{\"name\":\"Basil and garam masala bread\",\"description\":\"Fluffy bread made with fresh basil and garam masala\",\"type\":\"main\",\"ingredients\":[\"flour\",\"salt\",\"yeast\",\"butter\",\"water\",\"onions\",\"basil\",\"garam masala\"]},{\"name\":\"Aubergine and pesto lasagne\",\"type\":\"main\",\"description\":\"Layers of fresh egg pasta interspersed with fresh aubergine and red pesto\",\"ingredients\":[\"tomato\",\"passata\",\"onion\",\"garlic\",\"pasta\",\"oregano\",\"black pepper\",\"basil\",\"aubergine\",\"pesto\"]},{\"name\":\"Beef and squash lasagne\",\"type\":\"main\",\"description\":\"Layers of fresh egg pasta interspersed with beef and acorn squash\",\"ingredients\":[\"tomato\",\"passata\",\"onion\",\"garlic\",\"pasta\",\"oregano\",\"black pepper\",\"basil\",\"beef\",\"squash\"]},{\"name\":\"Pepper and cheese lasagne\",\"type\":\"main\",\"description\":\"Layers of fresh egg pasta interspersed with green pepper and mature cheese\",\"ingredients\":[\"tomato\",\"passata\",\"onion\",\"garlic\",\"pasta\",\"oregano\",\"black pepper\",\"basil\",\"pepper\",\"cheese\"]},{\"name\":\"Red onion salad with basil dressing\",\"type\":\"main\",\"description\":\"A mouth-watering red onion salad served with basil dressing\",\"ingredients\":[\"cucumber\",\"lettuce\",\"cress\",\"red onion\",\"basil\"]},{\"name\":\"Pumpkin and sugar cake\",\"type\":\"dessert\",\"description\":\"Rich cake made with fresh pumpkin and caster sugar\",\"ingredients\":[\"flour\",\"butter\",\"egg\",\"sugar\",\"pumpkin\"]},{\"name\":\"Almond and cinnamon muffins\",\"type\":\"dessert\",\"description\":\"Rich muffins made with toasted almond and cinnamon\",\"ingredients\":[\"flour\",\"butter\",\"egg\",\"sugar\",\"almond\",\"cinnamon\"]},{\"name\":\"Apple and banana buns\",\"type\":\"dessert\",\"description\":\"Moist buns made with dessert apple and fresh banana\",\"ingredients\":[\"flour\",\"butter\",\"egg\",\"sugar\",\"apple\",\"banana\"]},{\"name\":\"Apple and banana crepes\",\"type\":\"dessert\",\"description\":\"Fluffy crepes filled with fresh apple and banana\",\"ingredients\":[\"flour\",\"butter\",\"egg\",\"milk\",\"apple\",\"banana\"]},{\"name\":\"Coffee\",\"type\":\"other\",\"description\":\"A coffee from the best producers\",\"ingredients\":[\"coffee\"]}]}');\n\n//# sourceURL=webpack://restaurant-page/./src/dishes.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;