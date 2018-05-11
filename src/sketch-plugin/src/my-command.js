var that = this
function __skpm_run(key, context) {
  that.context = context

  var exports = /******/ (function(modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {} // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports
        /******/
      } // Create a new module (and put it into the cache)
      /******/ /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {}
        /******/
      }) // Execute the module function
      /******/
      /******/ /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      ) // Flag the module as loaded
      /******/
      /******/ /******/ module.l = true // Return the exports of the module
      /******/
      /******/ /******/ return module.exports
      /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __webpack_require__.m = modules // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, {
          /******/ configurable: false,
          /******/ enumerable: true,
          /******/ get: getter
          /******/
        })
        /******/
      }
      /******/
    } // define __esModule on exports
    /******/
    /******/ /******/ __webpack_require__.r = function(exports) {
      /******/ Object.defineProperty(exports, '__esModule', { value: true })
      /******/
    } // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function(module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function getDefault() {
              return module['default']
            }
          : /******/ function getModuleExports() {
              return module
            }
      /******/ __webpack_require__.d(getter, 'a', getter)
      /******/ return getter
      /******/
    } // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function(object, property) {
      return Object.prototype.hasOwnProperty.call(object, property)
    } // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = '' // Load entry module and return exports
    /******/
    /******/
    /******/ /******/ return __webpack_require__((__webpack_require__.s = './src/my-command.js'))
    /******/
  })(
    /************************************************************************/
    /******/ {
      /***/ './src/my-command.js':
        /*!***************************!*\
  !*** ./src/my-command.js ***!
  \***************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict'
          __webpack_require__.r(__webpack_exports__)
          var sketch = __webpack_require__(/*! sketch */ 'sketch')

          var Library = __webpack_require__(/*! sketch/dom */ 'sketch/dom').Library

          var library = Library.getLibraryForDocumentAtPath(
            '/Users/siddharth/code/siddharthkp/cosmos-paste/src/cosmos.sketch'
          )

          var SymbolInstance = __webpack_require__(/*! sketch/dom */ 'sketch/dom').SymbolInstance

          var UI = __webpack_require__(/*! sketch/ui */ 'sketch/ui')

          var onRun = function onRun(context) {
            var key = UI.getStringFromUser(
              'Which component do you want to import?',
              'paste component key from docs'
            )
            var document = sketch.fromNative(context.document)
            var page = document.selectedPage
            var symbolReferences = library.getImportableSymbolReferencesForDocument(document)
            var masterSymbol = symbolReferences
              .filter(function(symbol) {
                return symbol.name === key
              })[0]
              .import()
            var instance = new SymbolInstance({
              name: 'button',
              parent: page,
              master: masterSymbol
            })
            document.centerOnLayer(instance)
          }

          /* harmony default export */ __webpack_exports__['default'] = onRun

          /***/
        },

      /***/ sketch:
        /*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          module.exports = require('sketch')

          /***/
        },

      /***/ 'sketch/dom':
        /*!*****************************!*\
  !*** external "sketch/dom" ***!
  \*****************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          module.exports = require('sketch/dom')

          /***/
        },

      /***/ 'sketch/ui':
        /*!****************************!*\
  !*** external "sketch/ui" ***!
  \****************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          module.exports = require('sketch/ui')

          /***/
        }

      /******/
    }
  )
  if (key === 'default' && typeof exports === 'function') {
    exports(context)
  } else {
    exports[key](context)
  }
}
that['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=my-command.js.map
