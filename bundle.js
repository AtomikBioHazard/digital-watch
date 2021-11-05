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

/***/ "./src/Component.js":
/*!**************************!*\
  !*** ./src/Component.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateHour\": () => (/* binding */ updateHour)\n/* harmony export */ });\n/* harmony import */ var _modules_dateSetUp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dateSetUp.js */ \"./src/modules/dateSetUp.js\");\n/* harmony import */ var _modules_watchSetUp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/watchSetUp.js */ \"./src/modules/watchSetUp.js\");\n\n\nfunction updateHour() {\n  var d = document; // Date type obj to extract the values\n\n  var myDate = new Date();\n  var dateSetUp = {\n    hrs: myDate.getHours(),\n    ampm: \"\",\n    minutes: myDate.getMinutes(),\n    seconds: myDate.getSeconds(),\n    weekDay: myDate.getDay(),\n    day: myDate.getDate(),\n    month: myDate.getMonth(),\n    year: myDate.getFullYear()\n  },\n      watchSetUp = {\n    Hrs: d.getElementById(\"hrs\"),\n    AMPM: d.getElementById(\"ampm\"),\n    Minutes: d.getElementById(\"minutes\"),\n    Seconds: d.getElementById(\"seconds\"),\n    WeekDay: d.getElementById(\"weekDay\"),\n    Day: d.getElementById(\"day\"),\n    Month: d.getElementById(\"month\"),\n    Year: d.getElementById(\"year\")\n  };\n  (0,_modules_dateSetUp_js__WEBPACK_IMPORTED_MODULE_0__.dateSetUpP)(dateSetUp, watchSetUp), (0,_modules_watchSetUp_js__WEBPACK_IMPORTED_MODULE_1__.watchSetUpP)(dateSetUp, watchSetUp);\n}\n\n//# sourceURL=webpack:///./src/Component.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ \"./src/Component.js\");\n/* harmony import */ var _modules_alarmSetUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/alarmSetUp */ \"./src/modules/alarmSetUp.js\");\n\n\nvar d = document,\n    $set = d.getElementById(\"set-button\"),\n    $clear = d.getElementById(\"clear-button\");\nd.addEventListener(\"DOMContentLoaded\", function (e) {\n  (0,_Component__WEBPACK_IMPORTED_MODULE_0__.updateHour)();\n  (0,_modules_alarmSetUp__WEBPACK_IMPORTED_MODULE_1__.hoursMenu)();\n  (0,_modules_alarmSetUp__WEBPACK_IMPORTED_MODULE_1__.minsMenu)();\n  (0,_modules_alarmSetUp__WEBPACK_IMPORTED_MODULE_1__.secsMenu)();\n});\nd.addEventListener(\"click\", function (e) {\n  if (e.target === $set) {\n    (0,_modules_alarmSetUp__WEBPACK_IMPORTED_MODULE_1__.alarmSet)();\n  } else if (e.target === $clear) {\n    (0,_modules_alarmSetUp__WEBPACK_IMPORTED_MODULE_1__.alarmClear)();\n  }\n});\nvar interval = setInterval(_Component__WEBPACK_IMPORTED_MODULE_0__.updateHour, 1000);\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/modules/alarmSetUp.js":
/*!***********************************!*\
  !*** ./src/modules/alarmSetUp.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hoursMenu\": () => (/* binding */ hoursMenu),\n/* harmony export */   \"minsMenu\": () => (/* binding */ minsMenu),\n/* harmony export */   \"secsMenu\": () => (/* binding */ secsMenu),\n/* harmony export */   \"alarmSet\": () => (/* binding */ alarmSet),\n/* harmony export */   \"alarmClear\": () => (/* binding */ alarmClear)\n/* harmony export */ });\nvar d = document,\n    $hours = d.getElementById(\"alarm-hrs\"),\n    $mins = d.getElementById(\"alarm-mins\"),\n    $secs = d.getElementById(\"alarm-secs\"),\n    $ampm = d.getElementById(\"alarm-ampm\");\nvar mySound = new Audio(\"assets/alarma.mp3\"); // \"https://raw.githubusercontent.com/Xiija/TestFiles/master/Yuki%20%26%20Tako%2001.mp3\";\n\nmySound.loop = true;\nvar alarmTempo;\n\nfunction addZero(params) {\n  return params < 10 ? \"0\" + params : params;\n}\n\nfunction fillOptions(opt, val, params) {\n  opt = opt;\n  val = val;\n  params = params;\n  console.log(opt, val, params);\n\n  for (var i = val; i <= params; i++) {\n    opt[opt.options.length] = new Option(i < 10 ? \"0\" + i : i, i);\n  }\n}\n\nfunction hoursMenu() {\n  var hrs = 12;\n  fillOptions($hours, 1, hrs);\n}\n\nfunction minsMenu() {\n  var mins = 59;\n  fillOptions($mins, 0, mins);\n}\n\nfunction secsMenu() {\n  var secs = 59;\n  fillOptions($secs, 0, secs);\n}\n\nfunction alarmSet() {\n  var alarmHour = $hours.value,\n      alarmMins = $mins.value,\n      alarmSecs = $secs.value,\n      alarmAMPM = $ampm.value;\n  console.log(alarmHour, alarmMins, alarmSecs, alarmAMPM);\n  var alarmTime = alarmHour + addZero(alarmMins) + addZero(alarmSecs) + alarmAMPM;\n  alarmTempo = setInterval(function () {\n    var currHr = d.getElementById(\"hrs\").innerHTML,\n        currMin = d.getElementById(\"minutes\").innerHTML,\n        currSec = d.getElementById(\"seconds\").innerHTML,\n        currAMPM = d.getElementById(\"ampm\").innerHTML;\n    var currTime = currHr + currMin + currSec + currAMPM;\n    console.log(currTime);\n    if (alarmTime === currTime) mySound.play();\n  }, 1000); // console.log(alarmTime, currTime);\n  // if (alarmTime === currTime) sound.play();\n\n  $hours.disabled = true;\n  $mins.disabled = true;\n  $secs.disabled = true;\n  $ampm.disabled = true;\n}\n\nfunction alarmClear() {\n  clearTimeout(alarmTempo);\n  mySound.pause();\n  $hours.disabled = false;\n  $mins.disabled = false;\n  $secs.disabled = false;\n  $ampm.disabled = false;\n}\n\n\n\n//# sourceURL=webpack:///./src/modules/alarmSetUp.js?");

/***/ }),

/***/ "./src/modules/dateSetUp.js":
/*!**********************************!*\
  !*** ./src/modules/dateSetUp.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dateSetUpP\": () => (/* binding */ dateSetUpP)\n/* harmony export */ });\nfunction dateSetUpP(date, watch) {\n  var weekDay = date.weekDay,\n      day = date.day,\n      month = date.month,\n      year = date.year,\n      WeekDay = watch.WeekDay,\n      Day = watch.Day,\n      Month = watch.Month,\n      Year = watch.Year; // Date setUp\n\n  var weekDays = [\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"];\n  WeekDay.textContent = weekDays[weekDay];\n  Day.textContent = day;\n  var months = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"];\n  Month.textContent = months[month];\n  Year.textContent = year;\n}\n\n//# sourceURL=webpack:///./src/modules/dateSetUp.js?");

/***/ }),

/***/ "./src/modules/watchSetUp.js":
/*!***********************************!*\
  !*** ./src/modules/watchSetUp.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"watchSetUpP\": () => (/* binding */ watchSetUpP)\n/* harmony export */ });\nfunction watchSetUpP(date, watch) {\n  var hrs = date.hrs,\n      ampm = date.ampm,\n      minutes = date.minutes,\n      seconds = date.seconds,\n      Hrs = watch.Hrs,\n      Minutes = watch.Minutes,\n      Seconds = watch.Seconds,\n      AMPM = watch.AMPM; // Watch setUp\n\n  if (hrs >= 12) {\n    hrs -= 12;\n    ampm = \"PM\";\n  } else ampm = \"AM\";\n\n  if (hrs === 0) hrs = 12;\n  Hrs.textContent = hrs;\n  AMPM.textContent = ampm;\n  if (minutes < 10) minutes = \"0\" + minutes;\n  if (seconds < 10) seconds = \"0\" + seconds;\n  Minutes.textContent = minutes;\n  Seconds.textContent = seconds;\n}\n\n//# sourceURL=webpack:///./src/modules/watchSetUp.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;