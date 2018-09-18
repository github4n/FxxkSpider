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
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst http_1 = __webpack_require__(/*! ./http */ \"./src/http/index.ts\");\nconst config_1 = __webpack_require__(/*! ./http/config */ \"./src/http/config/index.ts\");\n(async () => {\n    try {\n        const app = await http_1.createHttpServer();\n        const server = app.listen(config_1.default.PORT, () => {\n            console.log(`Server is listening on ${config_1.default.PORT}`);\n        });\n    }\n    catch (e) {\n        console.log(e);\n        process.exit(1);\n    }\n})();\n\n\n//# sourceURL=webpack:///./src/index.ts?");

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