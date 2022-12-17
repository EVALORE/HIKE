/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/carousel */ \"./src/js/module/carousel.js\");\n\r\n\r\n(0,_module_carousel__WEBPACK_IMPORTED_MODULE_0__.carousel)();\r\n\r\nif (window.NodeList && !NodeList.prototype.forEach) {\r\n    NodeList.prototype.forEach = function (callback, thisArg) {\r\n        thisArg = thisArg || window;\r\n        for (var i = 0; i < this.length; i++) {\r\n            callback.call(thisArg, this[i], i, this);\r\n        }\r\n    };\r\n}\r\n\r\ndocument.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {\r\n\r\n    const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');\r\n    const dropDownList = dropDownWrapper.querySelector('.dropdown__list');\r\n    const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');\r\n    const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden')\r\n\r\n    dropDownBtn.addEventListener('click', function () {\r\n        dropDownList.classList.toggle('dropdown__list--visible');\r\n        this.classList.add('dropdown__button--active');\r\n\r\n    });\r\n\r\n    dropDownListItems.forEach(function(listItem) {\r\n        listItem.addEventListener('click', function (e) {\r\n            e.stopPropagation();\r\n            dropDownBtn.innerText = this.innerText;\r\n            dropDownBtn.focus();\r\n            dropDownInput.value = this.dataset.value;\r\n            dropDownList.classList.remove('dropdown__list--visible');\r\n        })\r\n    });\r\n\r\n    document.addEventListener('click', function(e) {\r\n        if ( e.target !== dropDownBtn ) {\r\n            dropDownBtn.classList.remove('dropdown__button--active');\r\n            dropDownList.classList.remove('dropdown__list--visible');\r\n        }\r\n    });\r\n\r\n    document.addEventListener('keydown', function (e) {\r\n        if ( e.key === 'Tab' || e.key === 'Escape' ) {\r\n            dropDownBtn.classList.remove('dropdown__button--active');\r\n            dropDownList.classList.remove('dropdown__list--visible');\r\n        }\r\n    });\r\n\r\n}); \n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/carousel.js":
/*!***********************************!*\
  !*** ./src/js/module/carousel.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"carousel\": function() { return /* binding */ carousel; }\n/* harmony export */ });\nconst carousel = () => {\r\n  const carousel = document.querySelector('.carousel')\r\n  const item = carousel.querySelectorAll('.card')[0]\r\n\r\n  const arrowLeft = document.querySelector('.arrow-left')\r\n  const arrowRight = document.querySelector('.arrow-right')\r\n\r\n  const dotsNav = document.querySelector('.dots')\r\n  const dots = Array.from(dotsNav.children)\r\n\r\n  const itemWidth = item.offsetWidth\r\n  const slideWidth = (itemWidth + 20) * 4\r\n\r\n  function dotMoveSlide(a) {\r\n    carousel.scrollLeft = slideWidth * a\r\n  }\r\n\r\n  function dotChange(active, target) {\r\n    active.classList.remove('active')\r\n    target.classList.add('active')\r\n  }\r\n\r\n  function check() {\r\n    const activeDot = dotsNav.querySelector('.active')\r\n    const index = dots.indexOf(activeDot)\r\n\r\n    arrowLeft.style.visibility = index == 0 ? 'hidden' : 'visible'\r\n    arrowRight.style.visibility = index < dots.length - 1 ? 'visible' : 'hidden'\r\n  }\r\n\r\n  check()\r\n  arrowRight.addEventListener('click', () => {\r\n    const activeDot = dotsNav.querySelector('.active')\r\n    const nextDot = activeDot.nextElementSibling\r\n    carousel.scrollLeft += slideWidth\r\n\r\n    dotChange(activeDot, nextDot)\r\n    check()\r\n  })\r\n\r\n  arrowLeft.addEventListener('click', () => {\r\n    const activeDot = dotsNav.querySelector('.active')\r\n    const prevDot = activeDot.previousElementSibling\r\n    carousel.scrollLeft += -slideWidth\r\n\r\n    dotChange(activeDot, prevDot)\r\n    check()\r\n  })\r\n\r\n  dotsNav.addEventListener('click', (e) => {\r\n    const targetDot = e.target.closest('.dot')\r\n\r\n    if (!targetDot) return\r\n\r\n    const activeDot = dotsNav.querySelector('.active')\r\n    const targetIndex = dots.findIndex((dot) => dot === targetDot)\r\n\r\n    \r\n    dotMoveSlide(targetIndex)\r\n    dotChange(activeDot, targetDot)\r\n    check()\r\n  })\r\n}\r\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/module/carousel.js?");

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;