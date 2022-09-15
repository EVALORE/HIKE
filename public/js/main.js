/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval("if (window.NodeList && !NodeList.prototype.forEach) {\r\n    NodeList.prototype.forEach = function (callback, thisArg) {\r\n        thisArg = thisArg || window;\r\n        for (var i = 0; i < this.length; i++) {\r\n            callback.call(thisArg, this[i], i, this);\r\n        }\r\n    };\r\n}\r\n\r\ndocument.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {\r\n\r\n    const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');\r\n    const dropDownList = dropDownWrapper.querySelector('.dropdown__list');\r\n    const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');\r\n    const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden')\r\n\r\n    dropDownBtn.addEventListener('click', function () {\r\n        dropDownList.classList.toggle('dropdown__list--visible');\r\n        this.classList.add('dropdown__button--active');\r\n\r\n    });\r\n\r\n    dropDownListItems.forEach(function(listItem) {\r\n        listItem.addEventListener('click', function (e) {\r\n            e.stopPropagation();\r\n            dropDownBtn.innerText = this.innerText;\r\n            dropDownBtn.focus();\r\n            dropDownInput.value = this.dataset.value;\r\n            dropDownList.classList.remove('dropdown__list--visible');\r\n        })\r\n    });\r\n\r\n    document.addEventListener('click', function(e) {\r\n        if ( e.target !== dropDownBtn ) {\r\n            dropDownBtn.classList.remove('dropdown__button--active');\r\n            dropDownList.classList.remove('dropdown__list--visible');\r\n        }\r\n    });\r\n\r\n    document.addEventListener('keydown', function (e) {\r\n        if ( e.key === 'Tab' || e.key === 'Escape' ) {\r\n            dropDownBtn.classList.remove('dropdown__button--active');\r\n            dropDownList.classList.remove('dropdown__list--visible');\r\n        }\r\n    });\r\n\r\n}); \n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;