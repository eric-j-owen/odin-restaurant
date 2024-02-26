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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ about)\n/* harmony export */ });\nfunction about() {\r\n    const content = document.querySelector(\"#content\");\r\n    const div = document.createElement(\"div\");\r\n    const h1 = document.createElement(\"h1\");\r\n    const p = document.createElement(\"p\");\r\n\r\n    const h1Text = document.createTextNode(\"About\");\r\n    const pText = document.createTextNode(\r\n        \"Explore the mystique of [Redacted] Bistro, an imaginary culinary haven where an enigmatic chef conjures [redacted] dishes that defy reality. [Redacted] comments from imaginative minds speak of [redacted] experiences and [redacted] flavors. Welcome to [Redacted] Bistro, a whimsical [redacted] woven [redacted] creative thought, [redacted] its [redacted] [redacted] in the boundless landscapes of the imaginary.\"\r\n    );\r\n\r\n    h1.appendChild(h1Text);\r\n    p.appendChild(pText);\r\n\r\n    div.appendChild(h1);\r\n    div.appendChild(p);\r\n\r\n    content.appendChild(div);\r\n}\r\n\n\n//# sourceURL=webpack://odin-restaurant/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ home)\n/* harmony export */ });\nfunction home() {\r\n    const content = document.querySelector(\"#content\");\r\n    const div = document.createElement(\"div\");\r\n    const h1 = document.createElement(\"h1\");\r\n    const p = document.createElement(\"p\");\r\n    const h2 = document.createElement(\"h2\");\r\n    const pHours = document.createElement(\"p\");\r\n\r\n    const h1Text = document.createTextNode(\"[redacted] Bistrot\");\r\n    const pText = document.createTextNode(\r\n        \"We do not serve food, please don't visit as we don't exist.\"\r\n    );\r\n    const h2Text = document.createTextNode(\"Hours of Operation\");\r\n    const hoursText = document.createTextNode(\"[redacted]\");\r\n\r\n    h1.appendChild(h1Text);\r\n    p.appendChild(pText);\r\n    h2.appendChild(h2Text);\r\n    pHours.appendChild(hoursText);\r\n\r\n    div.appendChild(h1);\r\n    div.appendChild(p);\r\n    div.appendChild(h2);\r\n    div.appendChild(pHours);\r\n\r\n    content.appendChild(div);\r\n}\r\n\n\n//# sourceURL=webpack://odin-restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\r\n\r\n\r\n\r\nconst content = document.querySelector('#content');\r\n(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\ndocument.querySelector(\"nav\").addEventListener(\"click\", (e) => {\r\n    if (e.target.classList.contains(\"home\")) {\r\n        content.textContent = '';\r\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    } else if (e.target.classList.contains(\"menu\")) {\r\n        content.textContent = '';\r\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    } else if (e.target.classList.contains(\"about\")) {\r\n        content.textContent = '';\r\n        (0,_about__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://odin-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu() {\r\n    const content = document.querySelector(\"#content\");\r\n    const div = document.createElement(\"div\");\r\n    const h1 = document.createElement(\"h1\");\r\n    const menuItem1 = document.createElement(\"p\");\r\n    const menuItem2 = document.createElement(\"p\");\r\n    const menuItem3 = document.createElement(\"p\");\r\n\r\n    const h1Text = document.createTextNode(\"Menu\");\r\n    const menuItem1Text = document.createTextNode(\r\n        \"[redacted] Sandwich served with [redacted]\"\r\n    );\r\n    const menuItem2Text = document.createTextNode(\r\n        \"Salad with [redacted] and your choice of [redacted]\"\r\n    );\r\n    const menuItem3Text = document.createTextNode(\"Cake.\");\r\n\r\n    h1.appendChild(h1Text);\r\n    menuItem1.appendChild(menuItem1Text);\r\n    menuItem2.appendChild(menuItem2Text);\r\n    menuItem3.appendChild(menuItem3Text);\r\n\r\n    div.appendChild(h1);\r\n    div.appendChild(menuItem1);\r\n    div.appendChild(menuItem2);\r\n    div.appendChild(menuItem3);\r\n\r\n    content.appendChild(div);\r\n}\r\n\n\n//# sourceURL=webpack://odin-restaurant/./src/menu.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;