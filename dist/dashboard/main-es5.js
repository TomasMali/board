function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-flex header_row pt-2 pl-5 pr-5 mt-2  text-white border-dark\">\n\n  <form #searchForm=\"ngForm\" (ngSubmit)=\"onSearch(searchForm.value);  searchForm.reset(); \">\n  <div class=\"row mb-1 mt-3\">\n    <div class=\"col-1 \">\n      <button class=\"btn btn-dark\" type=\"submit\">Search</button>\n    </div>\n    <div class=\"col-11 \">\n      <input type=\"text\" class=\"form-control \" placeholder=\"Cerca\" aria-label=\"Username\"\n        aria-describedby=\"basic-addon1\" name=\"searchForm\" ngModel>\n    </div>\n\n  </div>\n</form>\n\n\n \n  <div class=\"container bg-dark pt-3 pl-3 pr-3 pb-2 my-3 text-white \">\n\n  \n    <form #workItemForm=\"ngForm\" (ngSubmit)=\"onInsertWiSubmit(workItemForm.value);  workItemForm.reset(); \">\n    \n      <div class=\"row \">\n       \n        <div class=\"col col-0 col-md -1\"></div>\n\n        <div class=\"col col-12 col-md-3\">\n\n          <div class=\"input-group mb-2\">\n            <div class=\"input-group-prepend \">\n              <span class=\"input-group height-span input-group-text \"><b>WI</b> </span>\n            </div>\n            <input type=\"number\" class=\"form-control form-control-sm\" placeholder=\"Work item\" name=\"workItemForm\" ngModel>\n          </div>\n          <div class=\"input-group mb-2\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text height-span \"><b>Desc</b> </span>\n            </div>\n            <input type=\"text\" class=\"form-control  form-control-sm\" placeholder=\"Wi descrizione\" name=\"descForm\" ngModel>\n          </div>\n        </div>\n\n\n        <div class=\"col col-12 col-md-3\">\n\n          <div class=\"input-group mb-2\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text height-span \"><b>S.Point</b> </span>\n            </div>\n            <input type=\"number\" class=\"form-control form-control-sm\" placeholder=\"Story point\" name=\"storyPointForm\" ngModel>\n          </div>\n          <div class=\"input-group mb-2\">\n\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text height-span \"><b>Sprint</b> </span>\n            </div>\n\n            <select class=\"ml-0\" (change)=\"onSprintChange($event.target.value)\" [(ngModel)]=\"selectedSprintNumber\" name=\"selectedSprintNumber\"\n            [value]='selectedSprintNumber'>\n            <option *ngFor=\"let sprint of sprintNumber\">{{sprint}}</option>\n          </select>\n\n          </div>\n\n        </div>\n\n        <div class=\"col col-12 col-md-4\">\n\n          <div class=\"input-group mb-2\">\n            <input type=\"submit\" value=\"Crea WorkItem\" class=\"btn btn-sm btn-primary\" >\n          </div>\n        </div>\n\n        <div class=\"col col-0  col-md-1\"></div>\n\n      </div>\n    </form>\n\n  </div>\n</div>\n\n\n\n<div class=\"container-flex body_all pt-3 pb-5 pl-5 pr-5 mt-1  text-white border-dark\">\n  \n  <div class=\"row  mt-0\">\n\n    <div class=\"col bg-danger mr-1 col_height text-center\">\n      <hr>\n      <h5 class=\"font-weight-bold p-1 border-dark\"> <i class=\"fas fa-align-right\"></i> TO DO <small class=\"pl-2 font-weight-bold font-italic \"> ({{percTodo | number  }}%)</small> </h5>\n      <hr>\n      <div class=\"list-group  \"  [ngClass]=\"{'scroll': getToDo().length > 4}\" >\n         \n  <app-wokitem *ngFor=\"let workitem of getToDo();  let i = index\" [workitem]=\"workitem\"></app-wokitem>\n    \n      </div>\n    </div>\n\n\n\n    <div class=\"col bg-warning mr-1 col_height text-center\">\n      <hr>\n      <h5 class=\"font-weight-bold p-1 border-dark\"> <i class=\"fas fa-hourglass-start\"></i> START WORKING <small class=\"pl-2 font-weight-bold font-italic \"> ({{percStart | number }}%)</small></h5>\n      <hr>\n\n      <div class=\"list-group \" [ngClass]=\"{'scroll': getStartWorking().length > 4}\">\n        <app-wokitem *ngFor=\"let workitem of getStartWorking(); let i = index\" [workitem]=\"workitem\" >\n        </app-wokitem>\n      </div>\n\n    </div>\n\n\n    <div class=\"col bg-success mr-1 col_height\">\n      <hr>\n      <h5 class=\"font-weight-bold p-1 border-dark text-center \"> <i class=\"fas fa-tasks\"></i> TEST <small class=\"pl-2 font-weight-bold font-italic \"> ({{percTest | number  }}%)</small></h5>\n      <hr>\n\n      <div class=\"list-group\" [ngClass]=\"{'scroll': getTest().length > 4}\">\n\n        <app-wokitem *ngFor=\"let workitem of getTest()\" [workitem]=\"workitem\">\n        </app-wokitem>\n\n      </div>\n    </div>\n\n    <div class=\"col bg-primary col_height\">\n      <hr>\n      <h5 class=\"font-weight-bold p-1 border-dar text-center \" [class.text-dark]=\"false\"> <i class=\"fas fa-check\"></i>\n        DONE <small class=\"pl-2 font-weight-bold font-italic \"> ({{percDone | number  }}%)</small></h5>\n      <hr>\n\n      <div class=\"list-group \" [ngClass]=\"{'scroll': getDone().length > 4}\"   >\n\n        <app-wokitem *ngFor=\"let workitem of getDone()\" [workitem]=\"workitem\">\n        </app-wokitem>\n\n      </div>\n\n\n    </div>\n  </div>\n\n\n\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/wokitem/wokitem.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wokitem/wokitem.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWokitemWokitemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"list-group-item mb-1 text-danger\" [style.background-color]=\"selectedColor\">\n\n  <button class=\" text-dark mr-2\" (click)=\"deleteWorkItem()\">\n    <i class=\"fas fa-trash\"></i>\n  </button>\n\n  Colore:\n  <select (change)=\"selectOptionColors($event.target.value)\" [(ngModel)]=\"selectedColor\" name=\"selectedColor\"\n    [value]= colors[0].name>\n    <option *ngFor=\"let color of colors\">{{color.name}}</option>\n  </select>\n\n  Sposta:\n  <select (change)=\"selectOptionState($event.target.value)\" [(ngModel)]=\"selectedState\" name=\"selectedState\"\n    [value]=states[0].name>\n    <option *ngFor=\"let state of states\">{{state.name}}</option>\n  </select>\n\n  <span>\n    <kbd class=\"ml-3\"> {{workitem.wi}}</kbd> [{{workitem.storyPoint}}] <small class=\"text-info\">\n      [{{workitem.sprint}}]\n    </small> <small class=\"text-primary\"> <b> {{workitem.description}} </b>\n    </small>\n  </span>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var routes = [{
      path: "",
      component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
    }, {
      path: "dashboard",
      component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header_row {\r\n    border-radius: 20px !important;\r\n    border-width: 1.5px !important;\r\n    border-style: solid !important;\r\n    border-color: rgb(114, 95, 238) !important;\r\n    width: 90%;  /*Tested and working as expected: */\r\n    padding-top: 1%;\r\n    margin: 0px auto;\r\n    float: none;\r\n    background-color: rgb(19, 16, 219)\r\n  }\r\n\r\n  .body_page {\r\n    border-radius: 20px !important;\r\n    width: 90%;  /*Tested and working as expected: */\r\n    padding-top: 1%;\r\n    margin: 0px auto;\r\n    float: none;\r\n  \r\n    background-color: #F2F2F2;\r\n  }\r\n\r\n  .col_height{\r\n    height: 690px;\r\n    border-radius: 20px !important;\r\n    border-width: 3.5px !important;\r\n    border-style: solid !important;\r\n  }\r\n\r\n  .body_all {\r\n    border-radius: 20px !important;\r\n    border-width: 1.5px !important;\r\n    border-style: solid !important;\r\n    border-color: rgb(226, 226, 226) !important;\r\n    width: 90%;  /*Tested and working as expected: */\r\n    padding-top: 1%;\r\n    margin: 0px auto;\r\n    float: none;\r\n   \r\n    background-color: #F6F6F6\r\n  }\r\n\r\n  .scroll {\r\n    overflow-y: scroll;\r\n     max-height: 550px\r\n  }\r\n\r\n  .height-span{\r\n    height: 31px;\r\n  }\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIsOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5QiwwQ0FBMEM7SUFDMUMsVUFBVSxHQUFHLG1DQUFtQztJQUNoRCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWDtFQUNGOztFQUVBO0lBQ0UsOEJBQThCO0lBQzlCLFVBQVUsR0FBRyxtQ0FBbUM7SUFDaEQsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixXQUFXOztJQUVYLHlCQUF5QjtFQUMzQjs7RUFHQTtJQUNFLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsOEJBQThCO0lBQzlCLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLDhCQUE4QjtJQUM5Qiw4QkFBOEI7SUFDOUIsOEJBQThCO0lBQzlCLDJDQUEyQztJQUMzQyxVQUFVLEdBQUcsbUNBQW1DO0lBQ2hELGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVzs7SUFFWDtFQUNGOztFQUdBO0lBQ0Usa0JBQWtCO0tBQ2pCO0VBQ0g7O0VBRUE7SUFDRSxZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJfcm93IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci13aWR0aDogMS41cHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDExNCwgOTUsIDIzOCkgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA5MCU7ICAvKlRlc3RlZCBhbmQgd29ya2luZyBhcyBleHBlY3RlZDogKi9cclxuICAgIHBhZGRpbmctdG9wOiAxJTtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOSwgMTYsIDIxOSlcclxuICB9XHJcblxyXG4gIC5ib2R5X3BhZ2Uge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDkwJTsgIC8qVGVzdGVkIGFuZCB3b3JraW5nIGFzIGV4cGVjdGVkOiAqL1xyXG4gICAgcGFkZGluZy10b3A6IDElO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIGZsb2F0OiBub25lO1xyXG4gIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcclxuICB9XHJcblxyXG5cclxuICAuY29sX2hlaWdodHtcclxuICAgIGhlaWdodDogNjkwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDMuNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYm9keV9hbGwge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxLjVweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjI2LCAyMjYsIDIyNikgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA5MCU7ICAvKlRlc3RlZCBhbmQgd29ya2luZyBhcyBleHBlY3RlZDogKi9cclxuICAgIHBhZGRpbmctdG9wOiAxJTtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGNkY2XHJcbiAgfVxyXG5cclxuXHJcbiAgLnNjcm9sbCB7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgbWF4LWhlaWdodDogNTUwcHhcclxuICB9XHJcblxyXG4gIC5oZWlnaHQtc3BhbntcclxuICAgIGhlaWdodDogMzFweDtcclxuICB9XHJcblxyXG5cclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _workitem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./workitem.service */
    "./src/app/workitem.service.ts");
    /* harmony import */


    var _service_messaging_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./service/messaging.service */
    "./src/app/service/messaging.service.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(WIService, messagingService) {
        _classCallCheck(this, AppComponent);

        this.WIService = WIService;
        this.messagingService = messagingService; //

        this.title = 'dashboard';
        this.malFormed = false;
        this.workItems = [];
        this.percTodo = 0;
        this.percStart = 0;
        this.percTest = 0;
        this.percDone = 0;
        this.sprintNumber = ["Sprint 07", "Sprint 08", "Sprint 09", "Sprint 10", "Sprint 11", "Sprint 12", "Sprint 13"];
        this.selectedSprintNumber = "";
        this.sprints = [{
          name: 'N'
        }, {
          name: 'S'
        }, {
          name: 'T'
        }, {
          name: 'D'
        }];
        this.selectedSprint = this.sprints[this.sprints.length - 1].name;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          //
          this.messagingService.requestPermission();
          this.messagingService.receiveMessage();
          this.message = this.messagingService.currentMessage; //

          this.selectedSprintNumber = this.getCookie("sprint") === "" ? "Sprint 07" : this.getCookie("sprint");
          this.WIService.getAllWi(this.selectedSprintNumber); //console.log(this.getCookie("sprint"))

          this.workItemSUb = this.WIService.getWorkItemsUpdateListener().subscribe(function (workItems_) {
            _this.workItems = workItems_;
            _this.selectedSprintNumber = _this.getCookie("sprint") === "" ? "Sprint 07" : _this.getCookie("sprint");
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.workItemSUb.unsubscribe();
        }
      }, {
        key: "getCookie",
        value: function getCookie(cname) {
          var name = cname + "=";
          var decodedCookie = decodeURIComponent(document.cookie);
          var ca = decodedCookie.split(';');

          for (var i = 0; i < ca.length; i++) {
            var c = ca[i];

            while (c.charAt(0) == ' ') {
              c = c.substring(1);
            }

            if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
            }
          }

          return "";
        }
      }, {
        key: "onSprintChange",
        value: function onSprintChange(sprint) {
          this.selectedSprintNumber = sprint;
          this.WIService.getAllWi(sprint);
          document.cookie = "sprint=" + sprint;
        }
      }, {
        key: "onSearch",
        value: function onSearch(data) {
          //   alert(  data.searchForm )
          this.WIService.getOne(data.searchForm).subscribe(function (res) {
            if (res.message != "Nessun risultato trovao") {
              alert("******************  Il risultato del Wi :  *************** \n" + "Wi: " + res.message[0].wi + "\n" + "StoryPoint: " + res.message[0].storyPoint + "\n" + "Owner: " + res.message[0].owner + "\n" + "Description: " + res.message[0].description + "\n" + "State: " + res.message[0].state);
            } else {
              alert("Il WI " + data.searchForm + " non è stato trovato!");
            }
          }, function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "onInsertWiSubmit",
        value: function onInsertWiSubmit(data) {
          var obj = {
            wi: data.workItemForm,
            storyPoint: data.storyPointForm,
            sprint: data.selectedSprintNumber == null ? this.sprintNumber[0] : data.selectedSprintNumber,
            description: data.descForm,
            state: "N",
            color: "Lavender"
          };
          console.log("I coockie sono: " + this.getCookie("sprint"));
          this.WIService.insertWorkItem(obj);
        }
      }, {
        key: "selectOptionSprint",
        value: function selectOptionSprint(sel) {
          console.log(sel);
          this.ngOnInit();
        }
      }, {
        key: "getToDo",
        value: function getToDo() {
          var totalPoint = 0;
          var todo = 0;
          this.workItems.forEach(function (x) {
            totalPoint += x.storyPoint;

            if (x.state === "N") {
              todo += x.storyPoint;
            }
          });
          this.percTodo = todo * 100 / totalPoint;
          return this.workItems.filter(function (x) {
            return x.state === "N"; // sta per to do 
          });
        }
      }, {
        key: "getStartWorking",
        value: function getStartWorking() {
          var totalPoint = 0;
          var start = 0;
          this.workItems.forEach(function (x) {
            totalPoint += x.storyPoint;

            if (x.state === "S") {
              start += x.storyPoint;
            }
          });
          this.percStart = start * 100 / totalPoint;
          return this.workItems.filter(function (x) {
            return x.state === "S";
          });
        }
      }, {
        key: "getTest",
        value: function getTest() {
          var totalPoint = 0;
          var test = 0;
          this.workItems.forEach(function (x) {
            totalPoint += x.storyPoint;

            if (x.state === "T") {
              test += x.storyPoint;
            }
          });
          this.percTest = test * 100 / totalPoint;
          return this.workItems.filter(function (x) {
            return x.state === "T";
          });
        }
      }, {
        key: "getDone",
        value: function getDone() {
          var totalPoint = 0;
          var done = 0;
          this.workItems.forEach(function (x) {
            totalPoint += x.storyPoint;

            if (x.state === "D") {
              done += x.storyPoint;
            }
          });
          this.percDone = done * 100 / totalPoint;
          return this.workItems.filter(function (x) {
            return x.state === "D";
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _workitem_service__WEBPACK_IMPORTED_MODULE_2__["WorkitemService"]
      }, {
        type: _service_messaging_service__WEBPACK_IMPORTED_MODULE_3__["MessagingService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _wokitem_wokitem_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./wokitem/wokitem.component */
    "./src/app/wokitem/wokitem.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/fire/messaging */
    "./node_modules/@angular/fire/messaging/es2015/index.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/es2015/index.js");
    /* harmony import */


    var _service_messaging_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./service/messaging.service */
    "./src/app/service/messaging.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _node_modules_angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../node_modules/@angular/common */
    "./node_modules/@angular/common/fesm2015/common.js"); //


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _wokitem_wokitem_component__WEBPACK_IMPORTED_MODULE_5__["WokitemComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_9__["AngularFireDatabaseModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"], _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_8__["AngularFireMessagingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebase)],
      providers: [_service_messaging_service__WEBPACK_IMPORTED_MODULE_12__["MessagingService"], _node_modules_angular_common__WEBPACK_IMPORTED_MODULE_14__["AsyncPipe"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/service/messaging.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/service/messaging.service.ts ***!
    \**********************************************/

  /*! exports provided: MessagingService */

  /***/
  function srcAppServiceMessagingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagingService", function () {
      return MessagingService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/messaging */
    "./node_modules/@angular/fire/messaging/es2015/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _workitem_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../workitem.service */
    "./src/app/workitem.service.ts");

    var MessagingService =
    /*#__PURE__*/
    function () {
      function MessagingService(angularFireMessaging, workItemService) {
        _classCallCheck(this, MessagingService);

        this.angularFireMessaging = angularFireMessaging;
        this.workItemService = workItemService;
        this.currentMessage = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.angularFireMessaging.messaging.subscribe(function (_messaging) {
          _messaging.onMessage = _messaging.onMessage.bind(_messaging);
          _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
        });
      }

      _createClass(MessagingService, [{
        key: "requestPermission",
        value: function requestPermission() {
          this.angularFireMessaging.requestToken.subscribe(function (token) {
            console.log(token); //REMOVE   this.workItemService.insertTokenPushNotification(token)
          }, function (err) {
            console.error('Unable to get permission to notify.', err);
          });
        }
      }, {
        key: "receiveMessage",
        value: function receiveMessage() {
          var _this2 = this;

          this.angularFireMessaging.messages.subscribe(function (payload) {
            console.log("new message received. ", payload);

            _this2.currentMessage.next(payload); //   this.showWithClick(payload)

          });
        }
      }, {
        key: "showWithClick",
        value: function showWithClick(payload) {
          var notify_data = payload['notification'];
          var title = notify_data['title'];
          var option = {
            body: notify_data['title']
          };
          var notify = new Notification(title, option);

          notify.onclick = function (event) {
            event.preventDefault();
            window.location.href = "https://board-ivs97i8m4.now.sh/";
          };
        }
      }]);

      return MessagingService;
    }();

    MessagingService.ctorParameters = function () {
      return [{
        type: _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_2__["AngularFireMessaging"]
      }, {
        type: _workitem_service__WEBPACK_IMPORTED_MODULE_4__["WorkitemService"]
      }];
    };

    MessagingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], MessagingService);
    /***/
  },

  /***/
  "./src/app/wokitem/wokitem.component.css":
  /*!***********************************************!*\
    !*** ./src/app/wokitem/wokitem.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppWokitemWokitemComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dva2l0ZW0vd29raXRlbS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/wokitem/wokitem.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/wokitem/wokitem.component.ts ***!
    \**********************************************/

  /*! exports provided: WokitemComponent */

  /***/
  function srcAppWokitemWokitemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WokitemComponent", function () {
      return WokitemComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _workitem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../workitem.service */
    "./src/app/workitem.service.ts");

    var WokitemComponent =
    /*#__PURE__*/
    function () {
      function WokitemComponent(WIService) {
        _classCallCheck(this, WokitemComponent);

        this.WIService = WIService;
        this.color = "Lavender";
        this.colors = [{
          name: 'Lavender'
        }, {
          name: 'yellow'
        }, {
          name: 'GreenYellow'
        }, {
          name: 'Lavender'
        }, {
          name: "LightSkyBlue"
        }, {
          name: "DarkOrange"
        }, {
          name: "Orange"
        }];
        this.selectedColor = "";
        this.states = [{
          name: 'N'
        }, {
          name: 'S'
        }, {
          name: 'T'
        }, {
          name: 'D'
        }];
        this.selectedState = "";
      }

      _createClass(WokitemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.colors = [{
            name: 'Lavender'
          }, {
            name: 'yellow'
          }, {
            name: 'GreenYellow'
          }, {
            name: 'Lavender'
          }, {
            name: "LightSkyBlue"
          }, {
            name: "DarkOrange"
          }, {
            name: "Orange"
          }];
          this.states = [{
            name: 'N'
          }, {
            name: 'S'
          }, {
            name: 'T'
          }, {
            name: 'D'
          }];
          this.selectedState = this.workitem.state;
          this.selectedColor = this.workitem.color;
        }
      }, {
        key: "selectOptionColors",
        value: function selectOptionColors(colore) {
          this.selectedColor = this.workitem.color;
          var workItem = {
            wi: this.workitem.wi,
            storyPoint: this.workitem.storyPoint,
            sprint: this.workitem.sprint,
            description: this.workitem.description,
            state: null,
            color: colore
          };
          this.WIService.changeColorOrStateWorkItem(workItem);
        }
      }, {
        key: "selectOptionState",
        value: function selectOptionState(sel) {
          this.selectedState = this.workitem.state;
          var workItem = {
            wi: this.workitem.wi,
            storyPoint: this.workitem.storyPoint,
            sprint: this.workitem.sprint,
            description: this.workitem.description,
            state: sel,
            color: null
          };
          this.WIService.changeColorOrStateWorkItem(workItem); //
          //REMOVE   this.WIService.notifyAll(workItem)
        }
      }, {
        key: "deleteWorkItem",
        value: function deleteWorkItem() {
          if (confirm("Stai per cancellare il WI, proseguire?")) {
            this.WIService.deleteWorkI(this.workitem.wi, this.workitem.sprint);
          }
        }
      }]);

      return WokitemComponent;
    }();

    WokitemComponent.ctorParameters = function () {
      return [{
        type: _workitem_service__WEBPACK_IMPORTED_MODULE_2__["WorkitemService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WokitemComponent.prototype, "workitem", void 0);
    WokitemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-wokitem',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./wokitem.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/wokitem/wokitem.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./wokitem.component.css */
      "./src/app/wokitem/wokitem.component.css")).default]
    })], WokitemComponent);
    /***/
  },

  /***/
  "./src/app/workitem.service.ts":
  /*!*************************************!*\
    !*** ./src/app/workitem.service.ts ***!
    \*************************************/

  /*! exports provided: WorkitemService */

  /***/
  function srcAppWorkitemServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkitemService", function () {
      return WorkitemService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var WorkitemService =
    /*#__PURE__*/
    function () {
      function WorkitemService(http) {
        _classCallCheck(this, WorkitemService);

        this.http = http;
        /*
          board = "https://board--server.herokuapp.com/board"
          insertWi = "https://board--server.herokuapp.com/board/insert"
          deleteWi = "https://board--server.herokuapp.com/board/delete_one"
          //
          pushnotification = "https://board--server.herokuapp.com/pushtoken"
          pushnotificationInsert = "https://board--server.herokuapp.com/pushtoken/insert"
          */

        this.board = "http://93.49.6.246:3008/board";
        this.insertWi = "http://93.49.6.246:3008/board/insert";
        this.deleteWi = "http://93.49.6.246:3008/board/delete_one"; //

        this.pushnotification = "http://93.49.6.246:3008/pushtoken";
        this.pushnotificationInsert = "http://93.49.6.246:3008/pushtoken/insert";
        this.workItemsUpdatet = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.workItems = [];
        this.pushNotificationTokens = [];
      }

      _createClass(WorkitemService, [{
        key: "getWorkItemsUpdateListener",
        value: function getWorkItemsUpdateListener() {
          return this.workItemsUpdatet.asObservable();
        }
      }, {
        key: "getAllWi",
        value: function getAllWi(sprint) {
          var _this3 = this;

          this.http.get(this.board).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data.message.map(function (workI) {
              return {
                wi: workI.wi,
                storyPoint: workI.storyPoint,
                sprint: workI.sprint,
                description: workI.description,
                state: workI.state,
                color: workI.color
              };
            });
          })).subscribe(function (resultData) {
            //  console.log("I dati sono: " + resultData)
            _this3.workItems = resultData.filter(function (x) {
              return x.sprint === sprint;
            });

            _this3.workItemsUpdatet.next(_toConsumableArray(_this3.workItems));
          });
        }
      }, {
        key: "getOne",
        value: function getOne(wi) {
          return this.http.get(this.board + "/getBoard/" + wi);
        }
      }, {
        key: "changeColorOrStateWorkItem",
        value: function changeColorOrStateWorkItem(wi) {
          var _this4 = this;

          return this.http.post(this.insertWi, wi).subscribe(function (resultData) {
            if (resultData) {
              // find the WorkItem and modify it
              var foundIndexWi = _this4.workItems.findIndex(function (x) {
                return x.wi === wi.wi;
              });

              var wi_new = Object.assign({}, _this4.workItems[foundIndexWi]); // voglio modificare lo stato

              if (wi.color == null) {
                wi_new.state = wi.state;
              } else // voglio modificare il colore
                if (wi.state == null) {
                  wi_new.color = wi.color;
                }

              _this4.workItems[foundIndexWi] = wi_new;

              _this4.workItemsUpdatet.next(_toConsumableArray(_this4.workItems));
            }
          }, function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "insertWorkItem",
        value: function insertWorkItem(wi) {
          var _this5 = this;

          return this.http.post(this.insertWi, wi).subscribe(function (resultData) {
            console.log(resultData);

            if (resultData.message) {
              _this5.workItems.push(wi);

              _this5.workItemsUpdatet.next(_toConsumableArray(_this5.workItems));
            } else {
              alert("Work item già esistente");
            }
          }, function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "insertTokenPushNotification",
        value: function insertTokenPushNotification(token) {
          return this.http.post(this.pushnotificationInsert, {
            "token": token
          }).subscribe(function (resultData) {
            console.log(resultData);

            if (resultData.message) {
              console.log("Token inserito correnttamente");
            } else {
              console.log("Token pushNotification già esistente");
            }
          }, function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "notifyAll",
        value: function notifyAll(wi) {
          var _this6 = this;

          var state = "";
          if (wi.state === "N") state = "To do";else if (wi.state === "S") state = "Start working";else if (wi.state === "T") state = "Test";else if (wi.state === "D") state = "Done";
          this.http.get(this.pushnotification).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data.message.map(function (tokenReturned) {
              return tokenReturned.token;
            });
          })).subscribe(function (resultData) {
            _this6.pushNotificationTokens = resultData;
            console.log("I dati token sono: " + _this6.pushNotificationTokens); // per ogni token manda un messaggio 

            _this6.pushNotificationTokens.forEach(function (token) {
              var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                  'Content-Type': 'application/json',
                  'Authorization': 'key=AAAA_tYOfNY:APA91bEL7LjhmU2jPjoQTLSI9hww7mDt7hLwcIPlyu6-c8GB_vcG39bflYUCxKOkKBz3iGgbRiWvylZ_CwUj_aWuYrzVbOkDGZcjNG6TRMiT6AN1KkQcJZKAK_n_jFc8uZDMxCR2ZNnQ'
                })
              };

              _this6.http.post("https://fcm.googleapis.com/fcm/send", {
                "notification": {
                  "title": "Dashboard",
                  "icon": "",
                  "image": "",
                  "body": wi.description.substring(0, 40) + " ---> " + state
                },
                "to": token
              }, httpOptions).subscribe(function (resultData) {
                console.log(resultData);

                if (resultData.message) {
                  console.log("Token inserito correnttamente");
                } else {
                  console.log("Token pushNotification già esistente");
                }
              }, function (err) {
                return console.log(err);
              });
            });
          });
        }
      }, {
        key: "deleteWorkI",
        value: function deleteWorkI(wi, sprint) {
          var _this7 = this;

          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            }),
            body: {
              wi: wi,
              sprint: sprint
            }
          };
          this.http.delete(this.deleteWi, options).subscribe(function (res) {
            _this7.workItems.splice(_this7.workItems.findIndex(function (i) {
              return i.wi === wi;
            }), 1);

            _this7.workItemsUpdatet.next(_toConsumableArray(_this7.workItems));
          }, function (err) {
            return alert("Problemi con la cancellazione!");
          });
        }
      }]);

      return WorkitemService;
    }();

    WorkitemService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    WorkitemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], WorkitemService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebase: {
        apiKey: "AIzaSyDM7spvYY1kp161h9tkKo252jxQRP5Qp6Y",
        authDomain: "fir-41a1a.firebaseapp.com",
        databaseURL: "https://fir-41a1a.firebaseio.com",
        projectId: "fir-41a1a",
        storageBucket: "fir-41a1a.appspot.com",
        messagingSenderId: "1094512966870",
        appId: "1:1094512966870:web:730f238cc2b81135821d77",
        measurementId: "G-F8KHFMY77W"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/tomas/Desktop/board/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map