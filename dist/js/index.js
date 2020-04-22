/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_init_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/init/index */ \"./lib/init/index.js\");\n\n/**\r\n * Export\r\n * @param {*} options\r\n */\n\nclass Export {\n  constructor(options) {\n    this._el = options.el || null; // 挂载点\n\n    this._data = options.data || {};\n\n    if (!this._el && Object.keys(this._data).length === 0) {\n      return console.log('data sources must be identified!');\n    }\n\n    if (this._el && !this._el.__proto__.constructor === HTMLTableElement) {\n      return console.log('el must be an HTMLTableElement!');\n    }\n\n    if (this._data && !this._data.__proto__.constructor === Object) {\n      return console.log('data must be a Object!');\n    }\n  }\n\n  export() {\n    Object(_lib_init_index__WEBPACK_IMPORTED_MODULE_0__[\"initData\"])(this);\n  }\n\n}\n\nwindow.Export = Export;\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./lib/init/index.js":
/*!***************************!*\
  !*** ./lib/init/index.js ***!
  \***************************/
/*! exports provided: initData, getHeadData, getBodyData, getTdData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initData\", function() { return initData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getHeadData\", function() { return getHeadData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBodyData\", function() { return getBodyData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTdData\", function() { return getTdData; });\n/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print */ \"./lib/init/print.js\");\n\nfunction initData(vm) {\n  let el = vm._el;\n  let headData = [];\n\n  if (!el) {\n    return console.log('data sources must be identified!');\n  }\n\n  if (el && !el.__proto__.constructor === HTMLTableElement) {\n    return console.log('el must be an HTMLTableElement!');\n  }\n\n  let thead = el.getElementsByTagName('thead');\n  let tbody = el.getElementsByTagName('tbody'); // 判断thead是否存在\n\n  if (thead.length > 0) {\n    let th = thead[0].getElementsByTagName('th');\n    headData = getHeadData(th);\n  }\n\n  let tr = tbody[0].getElementsByTagName('tr');\n  let bodyData = getBodyData(tr);\n  Object(_print__WEBPACK_IMPORTED_MODULE_0__[\"print\"])(headData, bodyData, 'report');\n}\nfunction getHeadData(th) {\n  let res = [];\n\n  for (let i = 0; i < th.length; i++) {\n    res.push({\n      value: th[i].innerText,\n      \"type\": \"ROW_HEADER_HEADER\",\n      \"datatype\": \"string\"\n    });\n  }\n\n  return res;\n}\nfunction getBodyData(tr) {\n  let res = [];\n\n  for (let i = 0; i < tr.length; i++) {\n    let td = tr[i].getElementsByTagName('td');\n    let value = getTdData(td);\n    res.push(value);\n  }\n\n  return res;\n}\nfunction getTdData(td) {\n  let res = [];\n\n  for (let i = 0; i < td.length; i++) {\n    let value = td[i].innerText;\n    res.push({\n      value: value,\n      type: \"ROW_HEADER\"\n    });\n  }\n\n  return res;\n}\n\n//# sourceURL=webpack:///./lib/init/index.js?");

/***/ }),

/***/ "./lib/init/print.js":
/*!***************************!*\
  !*** ./lib/init/print.js ***!
  \***************************/
/*! exports provided: print */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"print\", function() { return print; });\nfunction print(head, body, fileName) {\n  /*纯前端实现则不需要转化为table标签，应为其本身就是table标签*/\n  //\t\t\t\tlet excel = head;\n\n  /*前后端合作产生的表格，西安转化为JSON数据，然后转化为table表格*/\n  //先转化json\n  let arrData = typeof body != 'object' ? JSON.parse(body) : body;\n  let excel = '<table>'; //设置表头\n\n  if (head.length > 0) {\n    let row = \"<tr>\";\n\n    for (let i = 0, l = head.length; i < l; i++) {\n      row += \"<td>\" + head[i].value + '</td>';\n    } //换行\n\n\n    excel += row + \"</tr>\";\n  } //设置数据\n\n\n  for (let i = 0; i < arrData.length; i++) {\n    let row = \"<tr>\";\n\n    for (let index in arrData[i]) {\n      let value = arrData[i][index].value === \".\" ? \"\" : arrData[i][index].value;\n      row += '<td>' + value + '</td>';\n    }\n\n    excel += row + \"</tr>\";\n  }\n\n  excel += \"</table>\"; //转化为excel可识别的标签\n\n  let excelFile = \"<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:x='urn:schemas-microsoft-com:office:excel' xmlns='http://www.w3.org/TR/REC-html40'>\";\n  excelFile += '<meta http-equiv=\"content-type\" content=\"application/vnd.ms-excel; charset=UTF-8\">';\n  excelFile += '<meta http-equiv=\"content-type\" content=\"application/vnd.ms-excel';\n  excelFile += '; charset=UTF-8\">';\n  excelFile += \"<head>\";\n  excelFile += \"<!--[if gte mso 9]>\";\n  excelFile += \"<xml>\";\n  excelFile += \"<x:ExcelWorkbook>\";\n  excelFile += \"<x:ExcelWorksheets>\";\n  excelFile += \"<x:ExcelWorksheet>\";\n  excelFile += \"<x:Name>\";\n  excelFile += \"{worksheet}\";\n  excelFile += \"</x:Name>\";\n  excelFile += \"<x:WorksheetOptions>\";\n  excelFile += \"<x:DisplayGridlines/>\";\n  excelFile += \"</x:WorksheetOptions>\";\n  excelFile += \"</x:ExcelWorksheet>\";\n  excelFile += \"</x:ExcelWorksheets>\";\n  excelFile += \"</x:ExcelWorkbook>\";\n  excelFile += \"</xml>\";\n  excelFile += \"<![endif]-->\";\n  excelFile += \"</head>\";\n  excelFile += \"<body>\";\n  excelFile += excel;\n  excelFile += \"</body>\";\n  excelFile += \"</html>\";\n  let uri = 'data:application/vnd.ms-excel;charset=utf-8,' + encodeURIComponent(excelFile);\n  let link = document.createElement(\"a\");\n  link.href = uri;\n  link.style = \"visibility:hidden\";\n  link.download = fileName + \".xls\";\n  document.body.appendChild(link);\n  link.click();\n  document.body.removeChild(link);\n}\n\n//# sourceURL=webpack:///./lib/init/print.js?");

/***/ })

/******/ });