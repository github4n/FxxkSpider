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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/core/apis/buff.ts":
/*!*******************************!*\
  !*** ./src/core/apis/buff.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst services_1 = __webpack_require__(/*! ../services */ \"./src/core/services/index.ts\");\nconst helpers_1 = __webpack_require__(/*! ../helpers */ \"./src/core/helpers/index.ts\");\nexports.getGoodsListFromPage = async (gameName = \"csgo\", startPage = 1, endPage, ms) => {\n    let res = [];\n    for (let nowPage = startPage; nowPage <= endPage; nowPage++) {\n        const goodsList = await services_1.getGoodsList(gameName, nowPage);\n        res = [...res, ...goodsList.data.items];\n        nowPage = nowPage + 1;\n        await helpers_1.sleep(ms);\n    }\n    return res;\n};\n\n\n//# sourceURL=webpack:///./src/core/apis/buff.ts?");

/***/ }),

/***/ "./src/core/apis/index.ts":
/*!********************************!*\
  !*** ./src/core/apis/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__export(__webpack_require__(/*! ./buff */ \"./src/core/apis/buff.ts\"));\n\n\n//# sourceURL=webpack:///./src/core/apis/index.ts?");

/***/ }),

/***/ "./src/core/helpers/index.ts":
/*!***********************************!*\
  !*** ./src/core/helpers/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__export(__webpack_require__(/*! ./sleep */ \"./src/core/helpers/sleep.ts\"));\n\n\n//# sourceURL=webpack:///./src/core/helpers/index.ts?");

/***/ }),

/***/ "./src/core/helpers/sleep.ts":
/*!***********************************!*\
  !*** ./src/core/helpers/sleep.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.sleep = (ms) => new Promise((resolve) => {\n    setTimeout(() => resolve(), ms);\n});\n\n\n//# sourceURL=webpack:///./src/core/helpers/sleep.ts?");

/***/ }),

/***/ "./src/core/services/buff/goods.ts":
/*!*****************************************!*\
  !*** ./src/core/services/buff/goods.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst axios_1 = __webpack_require__(/*! axios */ \"axios\");\nexports.getGoodsList = async (gameName, pageNum) => {\n    const res = await axios_1.default.get(`https://buff.163.com/api/market/goods?game=${gameName}&page_num=${pageNum}`);\n    return res.data;\n};\n\n\n//# sourceURL=webpack:///./src/core/services/buff/goods.ts?");

/***/ }),

/***/ "./src/core/services/buff/index.ts":
/*!*****************************************!*\
  !*** ./src/core/services/buff/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__export(__webpack_require__(/*! ./goods */ \"./src/core/services/buff/goods.ts\"));\n\n\n//# sourceURL=webpack:///./src/core/services/buff/index.ts?");

/***/ }),

/***/ "./src/core/services/index.ts":
/*!************************************!*\
  !*** ./src/core/services/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__export(__webpack_require__(/*! ./buff */ \"./src/core/services/buff/index.ts\"));\n\n\n//# sourceURL=webpack:///./src/core/services/index.ts?");

/***/ }),

/***/ "./src/http/app.ts":
/*!*************************!*\
  !*** ./src/http/app.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst Koa = __webpack_require__(/*! koa */ \"koa\");\nconst serve = __webpack_require__(/*! koa-static */ \"koa-static\");\nconst ms = __webpack_require__(/*! ms */ \"ms\");\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\nconst routing_controllers_1 = __webpack_require__(/*! routing-controllers */ \"routing-controllers\");\nconst config_1 = __webpack_require__(/*! ./config */ \"./src/http/config/index.ts\");\nconst createHttpServer = async () => {\n    const koa = new Koa();\n    koa.use(serve(__dirname + \"/../page/dist\", {\n        maxAge: config_1.default.NAME === \"production\" ? ms(\"20d\") : 0,\n    }));\n    routing_controllers_1.useKoaServer(koa, {\n        routePrefix: \"/api\",\n        controllers: [],\n        classTransformer: false,\n    });\n    return koa;\n};\nexports.default = createHttpServer;\n\n/* WEBPACK VAR INJECTION */}.call(this, \"src/http\"))\n\n//# sourceURL=webpack:///./src/http/app.ts?");

/***/ }),

/***/ "./src/http/config/config.dev.ts":
/*!***************************************!*\
  !*** ./src/http/config/config.dev.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.default = {\n    NAME: \"development\",\n    PORT: 9998,\n};\n\n\n//# sourceURL=webpack:///./src/http/config/config.dev.ts?");

/***/ }),

/***/ "./src/http/config/config.prod.ts":
/*!****************************************!*\
  !*** ./src/http/config/config.prod.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.default = {\n    NAME: \"production\",\n    PORT: 9999,\n};\n\n\n//# sourceURL=webpack:///./src/http/config/config.prod.ts?");

/***/ }),

/***/ "./src/http/config/index.ts":
/*!**********************************!*\
  !*** ./src/http/config/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst config_dev_1 = __webpack_require__(/*! ./config.dev */ \"./src/http/config/config.dev.ts\");\nconst config_prod_1 = __webpack_require__(/*! ./config.prod */ \"./src/http/config/config.prod.ts\");\nconst config =  true ? config_dev_1.default : undefined;\nexports.default = config;\n\n\n//# sourceURL=webpack:///./src/http/config/index.ts?");

/***/ }),

/***/ "./src/http/index.ts":
/*!***************************!*\
  !*** ./src/http/index.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst app_1 = __webpack_require__(/*! ./app */ \"./src/http/app.ts\");\nexports.createHttpServer = app_1.default;\n\n\n//# sourceURL=webpack:///./src/http/index.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst http_1 = __webpack_require__(/*! ./http */ \"./src/http/index.ts\");\nconst config_1 = __webpack_require__(/*! ./http/config */ \"./src/http/config/index.ts\");\nconst apis_1 = __webpack_require__(/*! ./core/apis */ \"./src/core/apis/index.ts\");\n(async () => {\n    try {\n        const app = await http_1.createHttpServer();\n        app.listen(config_1.default.PORT, async () => {\n            console.log(`Server is listening on ${config_1.default.PORT}`);\n            console.log(await apis_1.getGoodsListFromPage(\"csgo\", 1, 10, 1000));\n        });\n    }\n    catch (e) {\n        console.log(e);\n        process.exit(1);\n    }\n})();\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa\");\n\n//# sourceURL=webpack:///external_%22koa%22?");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-static\");\n\n//# sourceURL=webpack:///external_%22koa-static%22?");

/***/ }),

/***/ "ms":
/*!*********************!*\
  !*** external "ms" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ms\");\n\n//# sourceURL=webpack:///external_%22ms%22?");

/***/ }),

/***/ "reflect-metadata":
/*!***********************************!*\
  !*** external "reflect-metadata" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"reflect-metadata\");\n\n//# sourceURL=webpack:///external_%22reflect-metadata%22?");

/***/ }),

/***/ "routing-controllers":
/*!**************************************!*\
  !*** external "routing-controllers" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"routing-controllers\");\n\n//# sourceURL=webpack:///external_%22routing-controllers%22?");

/***/ })

/******/ });