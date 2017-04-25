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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

AFRAME.registerComponent('checkpoint-generator', {
  init: function () {
    // Solution for Creating Entities.
    var sceneEl = document.querySelector('a-scene'); 
    
    for (var i = 0; i < 5; i++) {
      var checkpointEl = document.createElement('a-cylinder');
      checkpointEl.setAttribute('radius', 1);
      checkpointEl.setAttribute('height', 0.1);
      checkpointEl.setAttribute('color', '#39BB82');
      checkpointEl.setAttribute('position', {x: 0, y: 0, z: -(10 * i)});
      checkpointEl.setAttribute('checkpoint', {'offset': '0 1.6 0'});       
      checkpointEl.setAttribute('handle-hover', true);     
      sceneEl.appendChild(checkpointEl);
    }
  }
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

      AFRAME.registerComponent('frame-generator', {
        init: function () {
          // Solution for Creating Entities.
          var sceneEl = document.querySelector('a-scene'); 
          
          for (var i = 0; i < 5; i++) {
            var frameEl = document.createElement('a-entity');
            frameEl.setAttribute('gltf-model', '#frame');
            frameEl.setAttribute('position', {x: -1.5, y: 2, z: -(10 * i) - .5});
            frameEl.setAttribute('rotation', {x: 90, y: 90, z: 0});
            frameEl.setAttribute('frame-hover', true);

            var imgEl = document.createElement('a-image');            
            imgEl.setAttribute('src', '#me');
            imgEl.setAttribute('position', {x: -.5, y: 0, z: 0});
            imgEl.setAttribute('rotation', {x: -90, y: 0, z: 0});
            imgEl.setAttribute('height', 1.75);
            
            
            frameEl.appendChild(imgEl);            
            sceneEl.appendChild(frameEl);
          }
        }
      });


/***/ }),
/* 3 */
/***/ (function(module, exports) {

AFRAME.registerComponent('frame-hover', {
    init: function () {
        var el = this.el;
        console.log(el);   
        el.addEventListener('mouseenter', function () {
            console.log(el);                        
        });
    }
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

AFRAME.registerComponent('handle-hover', {
  init: function () {
    var el = this.el;
    el.addEventListener('mouseenter', function () {
      console.log('hi');
      el.setAttribute('color', '#a442f4');  
    });
    el.addEventListener('mouseleave', function () {
      el.setAttribute('color', '#39BB82');  
    });
  } 
});

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_hover_handler_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_hover_handler_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_hover_handler_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_frame_hover_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_frame_hover_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_frame_hover_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_frame_generator_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_frame_generator_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_frame_generator_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_checkpoint_generator_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_checkpoint_generator_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_checkpoint_generator_js__);






/***/ })
/******/ ]);