(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _images_images_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/images.component */ "./src/app/images/images.component.ts");
/* harmony import */ var _trainers_trainers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trainers/trainers.component */ "./src/app/trainers/trainers.component.ts");
/* harmony import */ var _rooms_rooms_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rooms/rooms.component */ "./src/app/rooms/rooms.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        redirectTo: 'pages',
        pathMatch: 'full'
    },
    {
        path: 'images',
        component: _images_images_component__WEBPACK_IMPORTED_MODULE_3__["ImagesComponent"],
        data: {
            name: 'Изображения'
        }
    },
    {
        path: 'pages',
        component: _pages_pages_component__WEBPACK_IMPORTED_MODULE_2__["PagesComponent"],
        data: {
            name: 'Страницы'
        },
    },
    {
        path: 'trainers',
        component: _trainers_trainers_component__WEBPACK_IMPORTED_MODULE_4__["TrainersComponent"],
        data: {
            name: 'Тренеры'
        }
    },
    {
        path: 'rooms',
        component: _rooms_rooms_component__WEBPACK_IMPORTED_MODULE_5__["RoomsComponent"],
        data: {
            name: 'Номера'
        }
    },
    {
        path: 'settings',
        component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"],
        data: {
            name: 'Настройки'
        }
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Application-wide Styles */\n.bordered-section {\n  border: 1px solid #444;\n  margin: 5px;\n}\n.shadowed {\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);\n}\n.put-right {\n  position: absolute;\n  right: 11px;\n  left: 350px;\n  top: 17px;\n  max-height: 100%;\n  overflow-y: auto;\n}\n.sub-menu {\n  background-color: #fff;\n  position: relative;\n}\n.sub-menu .navbar-selector-item {\n  border: none!important;\n}\n.triangle.top {\n  top: 0;\n  right: 50%;\n  position: absolute;\n  content: '';\n  display: block;\n  width: 10px;\n  height: 10px;\n  background: #fff;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  z-index: 1;\n  margin-top: calc(-10px/2);\n}\n.sub-menu-items {\n  display: none;\n}\n.active + .sub-menu-items {\n  display: initial;\n}\n.menu-items {\n  padding-left: 0;\n  background-color: #eee;\n}\n.menu-items li {\n  text-align: center;\n}\n.menu-items li a {\n  color: #444;\n  width: 100%;\n}\n.menu-items li a.active {\n  background-color: #bbb;\n}\nh1 {\n  color: #369;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 250%;\n}\nh2,\nh3 {\n  color: #444;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: lighter;\n}\nbody {\n  margin: 2em;\n}\nbody,\ninput[text],\nbutton {\n  color: #888;\n  font-family: Cambria, Georgia;\n}\n/* everywhere else */\n* {\n  font-family: Arial, Helvetica, sans-serif;\n}\nnav a {\n  text-decoration: none;\n  display: inline-block;\n  background-color: #eee;\n}\nnav a:visited,\na:link {\n  color: #607D8B;\n}\nnav a:hover {\n  color: #039be5;\n  background-color: #CFD8DC;\n}\nnav a.active {\n  color: #039be5;\n}\n.card-header {\n  padding: .15rem .15rem!important;\n}\n.btn-link {\n  text-decoration: none!important;\n  color: #444!important;\n}\naccordion-group .panel.card {\n  margin-bottom: 10px;\n}\n.bordered-section {\n  border: 1px solid #444;\n  margin: 5px;\n}\n.shadowed {\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);\n}\n.put-right {\n  position: absolute;\n  right: 11px;\n  left: 350px;\n  top: 17px;\n  max-height: 100%;\n  overflow-y: auto;\n}\n.toolbar-element {\n  background-color: #fff;\n  text-align: center;\n}\n.toolbar-element div {\n  display: inline-block;\n  border: none;\n  background-color: #fff;\n  padding: 5px;\n}\n.toolbar-element div i {\n  color: #0D47A1;\n  width: 31px;\n  height: 31px;\n  position: relative;\n}\n.toolbar-element div i:before {\n  display: none;\n}\n.toolbar-element div i.fa-plus {\n  background: url('/admin/assets/icons/plus.svg') no-repeat;\n}\n.toolbar-element div i.fa-bars {\n  background: url('/admin/assets/icons/bars.svg') no-repeat 0 3px;\n}\n.module-list {\n  background: #fff;\n}\n.module-list .trainers-list-element,\n.module-list .toolbar-element {\n  display: block;\n}\n.module-editor {\n  background: #fff;\n}\n.module-editor.module-editor-visible:not(.visible) {\n  display: none;\n}\n/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n.switch input {\n  display: none;\n}\n.switch .slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: .4s;\n}\n.switch .slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: .4s;\n}\n.switch .slider.round {\n  border-radius: 34px;\n}\n.switch .slider.round:before {\n  border-radius: 50%;\n}\n.switch input:checked + .slider {\n  background-color: #97a0a7;\n}\n.switch input:focus + .slider {\n  box-shadow: 0 0 1px #97a0a7;\n}\n.switch input:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  transform: translateX(26px);\n}\n.ripple {\n  background-position: center;\n  transition: background 0.8s;\n}\n.ripple:hover {\n  background: rgba(255, 255, 255, 0.1) radial-gradient(circle, transparent 1%, rgba(255, 255, 255, 0.3) 1%) center / 15000%;\n}\n.ripple:active {\n  background-color: rgba(255, 255, 255, 0.1);\n  background-size: 100%;\n  transition: background 0s;\n}\n/**\nбабахаем все стили прямо сюда, временно, разумеется\n*/\ndiv.menu ul {\n  list-style: none;\n}\nbody {\n  margin: 0;\n  padding: 0;\n}\nbody app-root {\n  display: flex;\n  min-height: 100vh;\n  flex-direction: column;\n}\n.module-wrapper-element {\n  position: relative;\n  flex: 1 1;\n  margin-left: 250px;\n  margin-top: 60px;\n}\nheader.admin-header {\n  background-color: #000;\n  height: 50px;\n  right: 0;\n  top: 0;\n  position: fixed;\n  left: 0;\n  z-index: 90;\n}\n.admin-content-wrapper {\n  background-color: #dcdcdc;\n  overflow: hidden;\n  flex: 1 0 auto;\n  z-index: 1;\n  display: flex;\n}\n.admin-content-wrapper > .wrapper {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n}\n.admin-content-wrapper > .wrapper > .menu {\n  flex: 0 0;\n}\n.admin-content-wrapper > .wrapper > .content {\n  flex: 1 1;\n}\n.admin-content-wrapper .wrapper .menu {\n  height: 100%;\n  background-color: #eee;\n  min-width: 200px;\n  float: left;\n}\n.navbar-selector-item {\n  border-bottom: 1px solid #444;\n  padding: 10px 20px;\n  text-align: left;\n}\n.navbar-selector-item:first-of-type {\n  border-top: 1px solid #444;\n}\n.navbar-selector-item.active {\n  position: relative;\n  background-color: #c5c5c5;\n}\n.menu-selector-item a {\n  padding: 10px 20px;\n  background-color: #d6d6d6;\n}\n.module-menu-element {\n  width: 320px;\n}\n.module-menu-element > div:not(.module-panel) {\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);\n}\n.module-menu-element h3 {\n  font-size: 20px;\n  margin-left: 16px;\n  margin-top: 24px;\n}\n.module-menu-element .module-panel {\n  margin-top: 10px;\n  margin-left: 15px;\n  display: inline-flex;\n  flex-direction: row;\n  width: 100%;\n}\n.module-content-element {\n  position: absolute;\n  right: 11px;\n  left: 350px;\n  top: 17px;\n  max-height: 100%;\n  overflow-y: auto;\n}\n.large-popup {\n  width: 80%;\n  max-width: none;\n}\n.admin-menu-element {\n  box-shadow: 4px 0 24px rgba(0, 0, 0, 0.15);\n  left: 0;\n  top: 50px;\n  bottom: 0;\n  position: fixed;\n  width: 250px;\n  z-index: 90;\n}\n.switch {\n  top: 6px;\n}\n.language-selector-label {\n  display: inline-block;\n  top: -12px;\n  position: relative;\n  margin: 0 10px;\n}\n.module-control-button-element {\n  background-color: #fff;\n  border: none;\n  height: 52px;\n  padding: 0 20px;\n  margin-right: 18px;\n  flex: 0 0;\n  color: #000;\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);\n}\n.module-control-button-element.default {\n  background-color: #4a90e2;\n  color: #fff;\n}\n.module-control-button-element.delete {\n  background-color: #888;\n  color: #fff;\n}\n.module-control-button-element:last-child {\n  flex: 1 1;\n  margin-right: 0;\n}\n.page-editor .module-editor {\n  position: absolute;\n  right: 11px;\n  left: 350px;\n  top: 17px;\n  max-height: 100%;\n  overflow-y: auto;\n}\ntrainers:not(.integrated) .module-list,\nrooms:not(.integrated) .module-list {\n  float: left;\n  margin-left: 10px;\n  margin-right: 10px;\n}\ntrainers:not(.integrated) .module-editor,\nrooms:not(.integrated) .module-editor {\n  overflow: hidden;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<header class=\"admin-header\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <a class=\"header-logo\" href=\"\" title=\"beshitza.ru\">\n        <img src=\"assets/img/logo_header.jpg\">\n      </a>\n    </div>\n    <div class=\"col-md-2\">\n      <span class=\"language-selector-label\">RU</span>\n      <label class=\"switch\">\n        <input type=\"checkbox\" class=\"switch\" id=\"switch-language\" [ngModel]=\"languageEn\"  (change)=\"toggleLanguage()\">\n        <span class=\"slider round\"></span>\n      </label>\n      <span class=\"language-selector-label\">EN</span>\n    </div>\n    <div class=\"col-md-2\">\n    </div>\n  </div>\n</header>\n<section class=\"admin-content-wrapper\">\n  <div class=\"wrapper\">\n    <div class=\"admin-menu-element\">\n      <nav>\n        <ul class=\"menu-items\">\n          <li *ngFor=\"let item of getMenuItems()\" class=\"menu-selector-item\">\n            <a routerLinkActive=\"active\" routerLink=\"{{item.getPath()}}\">{{item.getName()}}</a>\n            <div class=\"sub-menu-items\">\n              <sub-menu [subMenu]=\"item.getSubmenu()\"></sub-menu>\n            </div>\n          </li>\n        </ul>\n      </nav>\n    </div>\n    <div class=\"module-wrapper-element\">\n      <header>\n      </header>\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.service */ "./src/app/menu.service.ts");
/* harmony import */ var _select_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select-item.service */ "./src/app/select-item.service.ts");
/* harmony import */ var _models_select_item_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/select-item-event */ "./src/app/models/select-item-event.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(route, router, menuService, selectItemService) {
        this.route = route;
        this.router = router;
        this.menuService = menuService;
        this.selectItemService = selectItemService;
        this.title = 'Админка';
        this.currentMenuContent = null;
        this.currentRoute = null;
        this.languageEn = false;
    }
    AppComponent.prototype.toggleLanguage = function () {
        this.languageEn = !this.languageEn;
        this.selectItemService.emit(new _models_select_item_event__WEBPACK_IMPORTED_MODULE_5__["SelectItemEvent"](_models_select_item_event__WEBPACK_IMPORTED_MODULE_5__["SelectItemEvent"].Type.LanguageChange, {
            language: this.languageEn ? 2 : 1
        }));
    };
    AppComponent.prototype.getMenuItems = function () {
        return this.menuService.getItems();
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; })
            .subscribe(function (event) {
            _this.currentRoute = _this.route.root;
            while (_this.currentRoute.children[0] !== undefined) {
                _this.currentRoute = _this.currentRoute.children[0];
            }
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"],
            _select_item_service__WEBPACK_IMPORTED_MODULE_4__["SelectItemService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _pages_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages.service */ "./src/app/pages.service.ts");
/* harmony import */ var _model_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./model.service */ "./src/app/model.service.ts");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu.service */ "./src/app/menu.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _images_images_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/images.component */ "./src/app/images/images.component.ts");
/* harmony import */ var _trainers_trainers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./trainers/trainers.component */ "./src/app/trainers/trainers.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./page/page.component */ "./src/app/page/page.component.ts");
/* harmony import */ var _page_editor_tree_page_editor_tree_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./page-editor-tree/page-editor-tree.component */ "./src/app/page-editor-tree/page-editor-tree.component.ts");
/* harmony import */ var _sub_menu_sub_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sub-menu/sub-menu.component */ "./src/app/sub-menu/sub-menu.component.ts");
/* harmony import */ var _sub_menu_pages_pages_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sub-menu/pages/pages.component */ "./src/app/sub-menu/pages/pages.component.ts");
/* harmony import */ var _sub_menu_settings_settings_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sub-menu/settings/settings.component */ "./src/app/sub-menu/settings/settings.component.ts");
/* harmony import */ var _pages_list_pages_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages-list/pages-list.component */ "./src/app/pages-list/pages-list.component.ts");
/* harmony import */ var _select_item_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./select-item.service */ "./src/app/select-item.service.ts");
/* harmony import */ var ngx_trumbowyg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-trumbowyg */ "./node_modules/ngx-trumbowyg/fesm5/ngx-trumbowyg.js");
/* harmony import */ var _trainer_editor_trainer_editor_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./trainer-editor/trainer-editor.component */ "./src/app/trainer-editor/trainer-editor.component.ts");
/* harmony import */ var ngx_file_helpers__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-file-helpers */ "./node_modules/ngx-file-helpers/esm5/ngx-file-helpers.js");
/* harmony import */ var _filters_word_count_limit__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./filters/word-count-limit */ "./src/app/filters/word-count-limit.ts");
/* harmony import */ var _filters_values__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./filters/values */ "./src/app/filters/values.ts");
/* harmony import */ var _filters_keys__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./filters/keys */ "./src/app/filters/keys.ts");
/* harmony import */ var _image_chooser_image_chooser_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./image-chooser/image-chooser.component */ "./src/app/image-chooser/image-chooser.component.ts");
/* harmony import */ var _ng_for_in_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ng-for-in.directive */ "./src/app/ng-for-in.directive.ts");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "./node_modules/ngx-bootstrap/accordion/index.js");
/* harmony import */ var _page_editor_field_page_editor_field_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./page-editor-field/page-editor-field.component */ "./src/app/page-editor-field/page-editor-field.component.ts");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var _room_editor_room_editor_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./room-editor/room-editor.component */ "./src/app/room-editor/room-editor.component.ts");
/* harmony import */ var _rooms_rooms_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./rooms/rooms.component */ "./src/app/rooms/rooms.component.ts");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var _settings_list_settings_list_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./settings-list/settings-list.component */ "./src/app/settings-list/settings-list.component.ts");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./settings.service */ "./src/app/settings.service.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _pages_pages_component__WEBPACK_IMPORTED_MODULE_5__["PagesComponent"],
                _images_images_component__WEBPACK_IMPORTED_MODULE_10__["ImagesComponent"],
                _trainers_trainers_component__WEBPACK_IMPORTED_MODULE_11__["TrainersComponent"],
                _rooms_rooms_component__WEBPACK_IMPORTED_MODULE_32__["RoomsComponent"],
                _page_page_component__WEBPACK_IMPORTED_MODULE_13__["PageComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_36__["SettingsComponent"],
                _page_editor_tree_page_editor_tree_component__WEBPACK_IMPORTED_MODULE_14__["PageEditorTreeComponent"],
                _sub_menu_sub_menu_component__WEBPACK_IMPORTED_MODULE_15__["SubMenuComponent"],
                _sub_menu_pages_pages_component__WEBPACK_IMPORTED_MODULE_16__["SubMenuPagesComponent"],
                _sub_menu_settings_settings_component__WEBPACK_IMPORTED_MODULE_17__["SubMenuSettingsComponent"],
                _pages_list_pages_list_component__WEBPACK_IMPORTED_MODULE_18__["PagesListComponent"],
                _settings_list_settings_list_component__WEBPACK_IMPORTED_MODULE_34__["SettingsListComponent"],
                _trainer_editor_trainer_editor_component__WEBPACK_IMPORTED_MODULE_21__["TrainerEditorComponent"],
                _room_editor_room_editor_component__WEBPACK_IMPORTED_MODULE_31__["RoomEditorComponent"],
                _filters_word_count_limit__WEBPACK_IMPORTED_MODULE_23__["WordCountLimit"],
                _filters_values__WEBPACK_IMPORTED_MODULE_24__["Values"],
                _filters_keys__WEBPACK_IMPORTED_MODULE_25__["Keys"],
                _image_chooser_image_chooser_component__WEBPACK_IMPORTED_MODULE_26__["ImageChooserComponent"],
                _ng_for_in_directive__WEBPACK_IMPORTED_MODULE_27__["NgForIn"],
                _page_editor_field_page_editor_field_component__WEBPACK_IMPORTED_MODULE_29__["PageEditorFieldComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                ngx_trumbowyg__WEBPACK_IMPORTED_MODULE_20__["NgxTrumbowygModule"].withConfig({
                    lang: 'ru',
                    svgPath: 'assets/icons/icons.svg',
                    removeformatPasted: true,
                    autogrow: true,
                    btns: [
                        ['formatting'],
                        ['strong', 'em', 'del'],
                        ['superscript', 'subscript'],
                        ['link'],
                        ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
                        ['unorderedList', 'orderedList'],
                        ['horizontalRule'],
                        ['removeformat'],
                        ['fullscreen']
                    ]
                }),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalModule"].forRoot(),
                ngx_file_helpers__WEBPACK_IMPORTED_MODULE_22__["FileHelpersModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["TabsModule"].forRoot(),
                ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_28__["AccordionModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["SortableModule"].forRoot(),
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_30__["ColorPickerModule"]
            ],
            providers: [
                _pages_service__WEBPACK_IMPORTED_MODULE_6__["PagesService"], _menu_service__WEBPACK_IMPORTED_MODULE_8__["MenuService"], _select_item_service__WEBPACK_IMPORTED_MODULE_19__["SelectItemService"], _model_service__WEBPACK_IMPORTED_MODULE_7__["ModelService"], _services_language_service__WEBPACK_IMPORTED_MODULE_33__["LanguageService"], _settings_service__WEBPACK_IMPORTED_MODULE_35__["SettingsService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            exports: [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalModule"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/object-editor.component.css":
/*!****************************************************!*\
  !*** ./src/app/common/object-editor.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".object-editor {\n  padding: 0 10px;\n  position: relative;\n}\n.object-editor:not(.active) .close {\n  display: none;\n}\n.object-editor .field * {\n  vertical-align: top;\n  margin-bottom: 20px;\n}\n.object-editor .field .label {\n  width: 200px;\n  text-align: left;\n  margin-right: 20px;\n  display: inline-block;\n}\n.object-editor .close,\n.object-editor .cancel {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n.image-picker {\n  position: relative;\n}\n.image-picker .img-crop img {\n  width: 400px;\n}\n.image-picker [ngxfiledropzone] {\n  border: 5px dashed #eee;\n  padding: 50px;\n  text-align: center;\n  display: inline-block;\n  margin-left: 10px;\n}\n"

/***/ }),

/***/ "./src/app/common/object-list.component.css":
/*!**************************************************!*\
  !*** ./src/app/common/object-list.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::-webkit-scrollbar {\n  width: 0px;\n  /* remove scrollbar space */\n  background: transparent;\n  /* optional: just make scrollbar invisible */\n}\n/* optional: show position indicator in red */\n::-webkit-scrollbar-thumb {\n  background: #FF0000;\n}\n.object-list-element {\n  padding: 0;\n  max-height: 70vh;\n  overflow-y: scroll;\n  min-width: 200px;\n}\n.object-list-element li {\n  list-style: none;\n  padding: 10px 20px;\n  height: 43px;\n}\n.object-name {\n  font-size: 17px;\n  overflow: hidden;\n}\n.object-id {\n  float: left;\n  margin-right: 8px;\n}\n.object-item.active {\n  background-color: #eee;\n}\n"

/***/ }),

/***/ "./src/app/components/app-helper.ts":
/*!******************************************!*\
  !*** ./src/app/components/app-helper.ts ***!
  \******************************************/
/*! exports provided: AppHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHelper", function() { return AppHelper; });
var AppHelper = /** @class */ (function () {
    function AppHelper() {
    }
    AppHelper.uuid = function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    };
    return AppHelper;
}());



/***/ }),

/***/ "./src/app/filters/keys.ts":
/*!*********************************!*\
  !*** ./src/app/filters/keys.ts ***!
  \*********************************/
/*! exports provided: Keys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Keys", function() { return Keys; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Keys = /** @class */ (function () {
    function Keys() {
    }
    Keys.prototype.transform = function (value) {
        return Object.keys(value);
    };
    Keys = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'keys'
        })
    ], Keys);
    return Keys;
}());



/***/ }),

/***/ "./src/app/filters/values.ts":
/*!***********************************!*\
  !*** ./src/app/filters/values.ts ***!
  \***********************************/
/*! exports provided: Values */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Values", function() { return Values; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Values = /** @class */ (function () {
    function Values() {
    }
    Values.prototype.transform = function (value) {
        return Object.values(value);
    };
    Values = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'values'
        })
    ], Values);
    return Values;
}());



/***/ }),

/***/ "./src/app/filters/word-count-limit.ts":
/*!*********************************************!*\
  !*** ./src/app/filters/word-count-limit.ts ***!
  \*********************************************/
/*! exports provided: WordCountLimit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordCountLimit", function() { return WordCountLimit; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WordCountLimit = /** @class */ (function () {
    function WordCountLimit() {
    }
    WordCountLimit.prototype.transform = function (value, count) {
        return value.split(" ").slice(0, count).join(" ");
    };
    WordCountLimit = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'wordCountLimit'
        })
    ], WordCountLimit);
    return WordCountLimit;
}());



/***/ }),

/***/ "./src/app/image-chooser/image-chooser.component.css":
/*!***********************************************************!*\
  !*** ./src/app/image-chooser/image-chooser.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .tick {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 15px;\n  height: 15px;\n  border: 1px solid #000;\n  background-color: #fff;\n}\n:host .tick.ticked:after {\n  content: '';\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  top: 2px;\n  left: 2px;\n  border-radius: 5px;\n  background-color: #000;\n}\n"

/***/ }),

/***/ "./src/app/image-chooser/image-chooser.component.html":
/*!************************************************************!*\
  !*** ./src/app/image-chooser/image-chooser.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"image-chooser-element\">\n    <div>\n        <tabset>\n            <tab heading=\"Загрузите новый\" id=\"tab1\">\n\n            </tab>\n            <tab heading=\"Выбор из медиатеки\">\n                <div class=\"images\">\n                    <div class=\"content module-editor\" *ngIf=\"images !== null\">\n                        <div *ngFor=\"let image of images; let i = index;\" class=\"image-card\" (click)=\"markImage(i)\">\n                            <img #imagesList src=\"//hotel/{{image.filename}}\" (load)=\"detectOrientation(i)\">\n                            <div class=\"short-description\">\n                                {{image.description | wordCountLimit: 3 }}\n                            </div>\n                            <div class=\"tick\" [class.ticked]=\"multiple ? preSelectedImageIds[image.id] : preSelectedImageId === image.id\"></div>\n                        </div>\n                    </div>\n                </div>\n            </tab>\n        </tabset>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/image-chooser/image-chooser.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/image-chooser/image-chooser.component.ts ***!
  \**********************************************************/
/*! exports provided: ImageChooserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageChooserComponent", function() { return ImageChooserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model.service */ "./src/app/model.service.ts");
/* harmony import */ var _select_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../select-item.service */ "./src/app/select-item.service.ts");
/* harmony import */ var _models_select_item_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/select-item-event */ "./src/app/models/select-item-event.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImageChooserComponent = /** @class */ (function () {
    function ImageChooserComponent(modelService, selectItemService) {
        var _this = this;
        this.modelService = modelService;
        this.selectItemService = selectItemService;
        this.multiple = false;
        this.preSelectedImageId = null;
        this.preSelectedImageIds = [];
        this.selectedImageId = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedImageIds = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectItemService.event$.subscribe(function (event) {
            if (event.itemType === _models_select_item_event__WEBPACK_IMPORTED_MODULE_3__["SelectItemEvent"].Type.ImageChooserApply) {
                if (_this.multiple) {
                    var result = [];
                    var _loop_1 = function (imageId) {
                        if (!_this.preSelectedImageIds[imageId])
                            return "continue";
                        result.push(_this.images.find(function (i) { return i.id === Number(imageId); }));
                    };
                    for (var imageId in _this.preSelectedImageIds) {
                        _loop_1(imageId);
                    }
                    _this.selectedImageIds.emit(result);
                }
                else {
                    _this.selectedImageId.emit(_this.images.find(function (i) { return i.id === Number(_this.preSelectedImageId); }));
                }
            }
        });
    }
    ImageChooserComponent.prototype.markImage = function (i) {
        var imageId = this.images[i].id;
        if (this.multiple) {
            if (this.preSelectedImageIds[imageId] === undefined) {
                this.preSelectedImageIds[imageId] = true;
            }
            else {
                this.preSelectedImageIds[imageId] = !this.preSelectedImageIds[imageId];
            }
        }
        else {
            this.preSelectedImageId = imageId;
        }
    };
    ImageChooserComponent.prototype.detectOrientation = function (i) {
        var image = this.imageList.toArray()[i].nativeElement;
        if (image.naturalWidth > image.naturalHeight) {
            image.classList.add('landscape');
        }
        else if (image.naturalWidth < image.naturalHeight) {
            image.classList.add('portrait');
        }
    };
    ImageChooserComponent.prototype.loadImages = function () {
        var _this = this;
        this.modelService.getImages().subscribe(function (images) {
            _this.images = images;
        });
    };
    ImageChooserComponent.prototype.ngOnInit = function () {
        this.loadImages();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('imagesList'),
        __metadata("design:type", Object)
    ], ImageChooserComponent.prototype, "imageList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ImageChooserComponent.prototype, "multiple", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ImageChooserComponent.prototype, "selectedImageId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ImageChooserComponent.prototype, "selectedImageIds", void 0);
    ImageChooserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-chooser',
            template: __webpack_require__(/*! ./image-chooser.component.html */ "./src/app/image-chooser/image-chooser.component.html"),
            styles: [__webpack_require__(/*! ./image-chooser.component.css */ "./src/app/image-chooser/image-chooser.component.css"), __webpack_require__(/*! ../images/images.component.css */ "./src/app/images/images.component.css")]
        }),
        __metadata("design:paramtypes", [_model_service__WEBPACK_IMPORTED_MODULE_1__["ModelService"],
            _select_item_service__WEBPACK_IMPORTED_MODULE_2__["SelectItemService"]])
    ], ImageChooserComponent);
    return ImageChooserComponent;
}());



/***/ }),

/***/ "./src/app/images/images.component.css":
/*!*********************************************!*\
  !*** ./src/app/images/images.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bordered-section {\n  border: 1px solid #444;\n  margin: 5px;\n}\n.shadowed {\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);\n}\n.put-right {\n  position: absolute;\n  right: 11px;\n  left: 350px;\n  top: 17px;\n  max-height: 100%;\n  overflow-y: auto;\n}\n.image-card {\n  display: inline-block;\n  width: 12.5%;\n  padding: 2%;\n  padding-top: 12.5%;\n  overflow: hidden;\n  position: relative;\n  height: 0;\n}\n.image-card img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translateY(-50%) translateX(-50%);\n          transform: translateY(-50%) translateX(-50%);\n}\n.image-card img.landscape {\n  height: 96%!important;\n}\n.image-card img.portrait {\n  width: 96%!important;\n}\n.image-card .new-image {\n  border: 3px dashed #0D47A1;\n  position: absolute;\n  top: 2%;\n  left: 2%;\n  right: 2%;\n  bottom: 2%;\n}\n.image-card .short-description {\n  position: absolute;\n  bottom: 0;\n}\n[ngxFileDropzone] {\n  text-align: center;\n}\n.image-for-crop {\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/images/images.component.html":
/*!**********************************************!*\
  !*** ./src/app/images/images.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"images\">\n    <div class=\"content module-editor module-editor-full\" *ngIf=\"images !== null\">\n      <div class=\"image-card\">\n          <div class=\"new-image\" accept=\"image/*\" ngxFileDropzone (fileDrop)=\"dropped($event)\" ngxFilePicker (filePick)=\"dropped($event)\">\n            Drop a file in this zone.<br>\n            <i class=\"fa fa-plus\"></i><br>\n            <button accept=\"image/*\">Browse</button>\n          </div>\n      </div>\n      <div *ngFor=\"let image of images; let i = index;\" class=\"image-card\" (click)=\"openEditor(image)\">\n        <img #imagesList src=\"//hotel/{{image.filename}}\" (load)=\"detectOrientation(i)\">\n        <div class=\"short-description\">\n          {{image.description | wordCountLimit: 3 }}\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<ng-template #imageEditor>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Настроить создание превью</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <section>\n      <div [ngSwitch]=\"imageDataForUpdateEditing === null\">\n        <img src=\"//hotel/{{editingImage.filename}}\" class=\"image-for-crop\" *ngSwitchCase=\"true\">\n        <img src=\"{{imageDataForUpdateEditing.content}}\" class=\"image-for-crop\" *ngSwitchCase=\"false\">\n      </div>\n\n      <div class=\"update-image\" accept=\"image/*\" ngxFileDropzone (fileDrop)=\"droppedForUpdate($event)\" ngxFilePicker (filePick)=\"droppedForUpdate($event)\">\n        Заменить изображение.<br>\n        <i class=\"fa fa-plus\"></i><br>\n        <button accept=\"image/*\">Выбор</button>\n      </div>\n\n      <div class=\"cropper-zone\">\n\n      </div>\n    </section>\n    <section>\n      <button class=\"btn btn-primary\" (click)=\"modalRef.hide()\">отмена</button>\n      <button class=\"btn btn-success\" (click)=\"delete()\">сохранить</button>\n    </section>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/images/images.component.ts":
/*!********************************************!*\
  !*** ./src/app/images/images.component.ts ***!
  \********************************************/
/*! exports provided: ImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesComponent", function() { return ImagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model.service */ "./src/app/model.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImagesComponent = /** @class */ (function () {
    function ImagesComponent(modelService, modalService) {
        this.modelService = modelService;
        this.modalService = modalService;
        this.imageDataForUpdateEditing = null;
    }
    ImagesComponent.prototype.openEditor = function (image) {
        this.editingImage = image;
        this.modalRef = this.modalService.show(this.imageEditor);
    };
    ImagesComponent.prototype.loadImages = function () {
        var _this = this;
        this.modelService.getImages().subscribe(function (images) {
            _this.images = images;
        });
    };
    ImagesComponent.prototype.ngOnInit = function () {
        this.loadImages();
    };
    ImagesComponent.prototype.detectOrientation = function (i) {
        var image = this.imageList.toArray()[i].nativeElement;
        if (image.naturalWidth > image.naturalHeight) {
            image.classList.add('landscape');
        }
        else if (image.naturalWidth < image.naturalHeight) {
            image.classList.add('portrait');
        }
    };
    ImagesComponent.prototype.dropped = function ($event) {
        var _this = this;
        var content = $event.content;
        this.modelService.createImage($event, function (response) {
            if (response.status === 'success') {
                _this.images.unshift(response.image);
            }
        });
    };
    ImagesComponent.prototype.droppedForUpdate = function ($event) {
        this.imageDataForUpdateEditing = $event;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('imagesList'),
        __metadata("design:type", Object)
    ], ImagesComponent.prototype, "imageList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('imageEditor'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], ImagesComponent.prototype, "imageEditor", void 0);
    ImagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-images',
            template: __webpack_require__(/*! ./images.component.html */ "./src/app/images/images.component.html"),
            styles: [__webpack_require__(/*! ./images.component.css */ "./src/app/images/images.component.css")]
        }),
        __metadata("design:paramtypes", [_model_service__WEBPACK_IMPORTED_MODULE_1__["ModelService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])
    ], ImagesComponent);
    return ImagesComponent;
}());



/***/ }),

/***/ "./src/app/menu.service.ts":
/*!*********************************!*\
  !*** ./src/app/menu.service.ts ***!
  \*********************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_menu_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/menu-item */ "./src/app/models/menu-item.ts");
/* harmony import */ var _models_sub_menu_pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/sub-menu-pages */ "./src/app/models/sub-menu-pages.ts");
/* harmony import */ var _models_sub_menu_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/sub-menu-settings */ "./src/app/models/sub-menu-settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuService = /** @class */ (function () {
    function MenuService() {
        this.defaultRoute = {
            path: '',
            redirectTo: 'pages',
            pathMatch: 'full'
        };
        this.menuItems = [];
        this.menuItems.push(new _models_menu_item__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]('images', 'Изображения', null));
        this.menuItems.push(new _models_menu_item__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]('pages', 'Страницы', new _models_sub_menu_pages__WEBPACK_IMPORTED_MODULE_2__["SubMenuPages"]()));
        this.menuItems.push(new _models_menu_item__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]('trainers', 'Тренеры', null));
        this.menuItems.push(new _models_menu_item__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]('rooms', 'Номера', null));
        this.menuItems.push(new _models_menu_item__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]('settings', 'Настройки', new _models_sub_menu_settings__WEBPACK_IMPORTED_MODULE_3__["SubMenuSettings"]()));
    }
    MenuService.prototype.getItems = function () {
        return this.menuItems;
    };
    MenuService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MenuService);
    return MenuService;
}());



/***/ }),

/***/ "./src/app/model.service.ts":
/*!**********************************!*\
  !*** ./src/app/model.service.ts ***!
  \**********************************/
/*! exports provided: ModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelService", function() { return ModelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_trainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/trainer */ "./src/app/models/trainer.ts");
/* harmony import */ var _models_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/image */ "./src/app/models/image.ts");
/* harmony import */ var _models_room__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/room */ "./src/app/models/room.ts");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/language.service */ "./src/app/services/language.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var ModelService = /** @class */ (function () {
    function ModelService(http, languageService) {
        this.http = http;
        this.languageService = languageService;
        this.baseUrl = '/api/';
        _models_trainer__WEBPACK_IMPORTED_MODULE_2__["Trainer"].setupLanguageService(this.languageService);
        _models_room__WEBPACK_IMPORTED_MODULE_4__["Room"].setupLanguageService(this.languageService);
    }
    ModelService.prototype.reorderApply = function (modelName, modelList) {
        var order = {};
        var n = 1;
        for (var _i = 0, modelList_1 = modelList; _i < modelList_1.length; _i++) {
            var item = modelList_1[_i];
            var id = item['id'];
            order[id] = n;
            n++;
        }
        return this.http.post(this.baseUrl + 'reorder?model=' + modelName, { order: order }, httpOptions)
            .subscribe();
    };
    //rooms
    ModelService.prototype.getRooms = function () {
        return this.getModelListing(_models_room__WEBPACK_IMPORTED_MODULE_4__["Room"].getApiMethodName());
    };
    ModelService.prototype.saveRoom = function (room) {
        return this.http.put(this.baseUrl + _models_room__WEBPACK_IMPORTED_MODULE_4__["Room"].getApiMethodName(room.id), room.forSave())
            .subscribe();
    };
    ModelService.prototype.deleteRoom = function (room) {
        return this.http.delete(this.baseUrl + _models_room__WEBPACK_IMPORTED_MODULE_4__["Room"].getApiMethodName(room.id));
    };
    ModelService.prototype.createRoom = function (room) {
        return this.http.post(this.baseUrl + _models_room__WEBPACK_IMPORTED_MODULE_4__["Room"].getApiMethodName(), room, httpOptions);
    };
    //trainers
    ModelService.prototype.getTrainers = function () {
        return this.getModelListing(_models_trainer__WEBPACK_IMPORTED_MODULE_2__["Trainer"].getApiMethodName());
    };
    ModelService.prototype.saveTrainer = function (trainer) {
        return this.http.put(this.baseUrl + _models_trainer__WEBPACK_IMPORTED_MODULE_2__["Trainer"].getApiMethodName(trainer.id), trainer.forSave())
            .subscribe();
    };
    ModelService.prototype.deleteTrainer = function (trainer) {
        return this.http.delete(this.baseUrl + _models_trainer__WEBPACK_IMPORTED_MODULE_2__["Trainer"].getApiMethodName() + '/' + trainer.id);
    };
    ModelService.prototype.createTrainer = function (trainer) {
        return this.http.post(this.baseUrl + _models_trainer__WEBPACK_IMPORTED_MODULE_2__["Trainer"].getApiMethodName(), trainer, httpOptions);
    };
    //images
    ModelService.prototype.getImages = function () {
        return this.getModelListing(_models_image__WEBPACK_IMPORTED_MODULE_3__["Image"].getApiMethodName());
    };
    ModelService.prototype.getImage = function (id) {
        return this.http.get(this.baseUrl + _models_image__WEBPACK_IMPORTED_MODULE_3__["Image"].getApiMethodName(id));
    };
    ModelService.prototype.saveImage = function (image) {
        return this.http.put(this.baseUrl + _models_image__WEBPACK_IMPORTED_MODULE_3__["Image"].getApiMethodName() + '/' + image.id, image)
            .subscribe();
    };
    ModelService.prototype.deleteImage = function (image) {
        return this.http.delete(this.baseUrl + _models_image__WEBPACK_IMPORTED_MODULE_3__["Image"].getApiMethodName() + '/' + image.id);
    };
    ModelService.prototype.createImage = function (image, callback) {
        return this.http.post(this.baseUrl + _models_image__WEBPACK_IMPORTED_MODULE_3__["Image"].getApiMethodName(), {
            content: image.content,
            filename: image.name
        }, httpOptions)
            .subscribe(function (response) {
            if (callback instanceof Function) {
                callback(response);
            }
        });
    };
    ModelService.prototype.updateImage = function (imageData, image, callback) {
        return this.http.put(this.baseUrl + _models_image__WEBPACK_IMPORTED_MODULE_3__["Image"].getApiMethodName() + '/' + image.id, {
            content: imageData.content,
            filename: imageData.name
        }, httpOptions)
            .subscribe(function (response) {
            if (callback instanceof Function) {
                callback(response);
            }
        });
    };
    //common
    ModelService.prototype.getModelListing = function (apiMethod) {
        return this.http.get(this.baseUrl + apiMethod);
    };
    ModelService.getFormUrlEncoded = function (toConvert) {
        return JSON.parse(JSON.stringify(toConvert));
    };
    ModelService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"]])
    ], ModelService);
    return ModelService;
}());



/***/ }),

/***/ "./src/app/models/base-api-model.ts":
/*!******************************************!*\
  !*** ./src/app/models/base-api-model.ts ***!
  \******************************************/
/*! exports provided: BaseApiModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseApiModel", function() { return BaseApiModel; });
var BaseApiModel = /** @class */ (function () {
    function BaseApiModel() {
    }
    BaseApiModel.setupLanguageService = function (languageService) {
        this.languageService = languageService;
    };
    BaseApiModel.getApiMethodName = function (id) {
        var result = this.apiMethodName + (id ? ('/' + id) : '');
        if (this.passLang && this.languageService) {
            result += '?lang=' + this.languageService.getLanguage();
        }
        return result;
    };
    BaseApiModel.passLang = false;
    BaseApiModel.languageService = null;
    return BaseApiModel;
}());



/***/ }),

/***/ "./src/app/models/image.ts":
/*!*********************************!*\
  !*** ./src/app/models/image.ts ***!
  \*********************************/
/*! exports provided: Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony import */ var _base_api_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-api-model */ "./src/app/models/base-api-model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    function Image() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Image.apiMethodName = 'images';
    return Image;
}(_base_api_model__WEBPACK_IMPORTED_MODULE_0__["BaseApiModel"]));



/***/ }),

/***/ "./src/app/models/menu-item.ts":
/*!*************************************!*\
  !*** ./src/app/models/menu-item.ts ***!
  \*************************************/
/*! exports provided: MenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return MenuItem; });
var MenuItem = /** @class */ (function () {
    function MenuItem(path, name, subMenu) {
        this.path = path;
        this.name = name;
        this.subMenu = subMenu;
    }
    MenuItem.prototype.getPath = function () {
        return this.path;
    };
    MenuItem.prototype.getName = function () {
        return this.name;
    };
    MenuItem.prototype.getSubmenu = function () {
        return this.subMenu;
    };
    return MenuItem;
}());



/***/ }),

/***/ "./src/app/models/room.ts":
/*!********************************!*\
  !*** ./src/app/models/room.ts ***!
  \********************************/
/*! exports provided: Room */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Room", function() { return Room; });
/* harmony import */ var _base_api_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-api-model */ "./src/app/models/base-api-model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Room = /** @class */ (function (_super) {
    __extends(Room, _super);
    function Room() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Room.prototype.forSave = function () {
        var result = Object.assign({}, this);
        return result;
    };
    Room.apiMethodName = 'room';
    Room.passLang = true;
    return Room;
}(_base_api_model__WEBPACK_IMPORTED_MODULE_0__["BaseApiModel"]));



/***/ }),

/***/ "./src/app/models/select-item-event.ts":
/*!*********************************************!*\
  !*** ./src/app/models/select-item-event.ts ***!
  \*********************************************/
/*! exports provided: SelectItemEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectItemEvent", function() { return SelectItemEvent; });
var SelectItemEvent = /** @class */ (function () {
    function SelectItemEvent(itemType, payload) {
        this.itemType = itemType;
        this.payload = payload;
    }
    return SelectItemEvent;
}());

(function (SelectItemEvent) {
    var Type;
    (function (Type) {
        Type[Type["Page"] = 0] = "Page";
        Type[Type["SettingsGroup"] = 1] = "SettingsGroup";
        Type[Type["TrainerSelect"] = 2] = "TrainerSelect";
        Type[Type["TrainerRemove"] = 3] = "TrainerRemove";
        Type[Type["TrainerClose"] = 4] = "TrainerClose";
        Type[Type["RoomSelect"] = 5] = "RoomSelect";
        Type[Type["RoomRemove"] = 6] = "RoomRemove";
        Type[Type["RoomClose"] = 7] = "RoomClose";
        Type[Type["LanguageChange"] = 8] = "LanguageChange";
        Type[Type["ImageChooserApply"] = 9] = "ImageChooserApply";
        Type[Type["CloseAllSelectedItems"] = 10] = "CloseAllSelectedItems";
    })(Type = SelectItemEvent.Type || (SelectItemEvent.Type = {}));
})(SelectItemEvent || (SelectItemEvent = {}));


/***/ }),

/***/ "./src/app/models/state.ts":
/*!*********************************!*\
  !*** ./src/app/models/state.ts ***!
  \*********************************/
/*! exports provided: State */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage */ "./src/app/storage.ts");

var State = /** @class */ (function () {
    function State() {
        this.componentName = this.constructor.name;
        this.loadState();
    }
    State.prototype.setStateProperty = function (propertyName, value) {
        console.log('setting');
        this.componentState[propertyName] = value;
        localStorage.setItem(this.componentName, JSON.stringify(Object.assign({}, this.componentState)));
    };
    State.prototype.getState = function () {
        return this.componentState;
    };
    State.prototype.loadState = function () {
        var state = Object(_storage__WEBPACK_IMPORTED_MODULE_0__["getFromLocalStorage"])(this.componentName);
        if (state) {
            this.componentState = state;
        }
        else {
            this.componentState = {};
        }
    };
    return State;
}());



/***/ }),

/***/ "./src/app/models/sub-menu-pages.ts":
/*!******************************************!*\
  !*** ./src/app/models/sub-menu-pages.ts ***!
  \******************************************/
/*! exports provided: SubMenuPages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubMenuPages", function() { return SubMenuPages; });
/* harmony import */ var _sub_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub-menu */ "./src/app/models/sub-menu.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var SubMenuPages = /** @class */ (function (_super) {
    __extends(SubMenuPages, _super);
    function SubMenuPages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubMenuPages.prototype.getType = function () {
        return 'pages';
    };
    ;
    return SubMenuPages;
}(_sub_menu__WEBPACK_IMPORTED_MODULE_0__["SubMenu"]));



/***/ }),

/***/ "./src/app/models/sub-menu-settings.ts":
/*!*********************************************!*\
  !*** ./src/app/models/sub-menu-settings.ts ***!
  \*********************************************/
/*! exports provided: SubMenuSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubMenuSettings", function() { return SubMenuSettings; });
/* harmony import */ var _sub_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub-menu */ "./src/app/models/sub-menu.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var SubMenuSettings = /** @class */ (function (_super) {
    __extends(SubMenuSettings, _super);
    function SubMenuSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubMenuSettings.prototype.getType = function () {
        return 'settings';
    };
    ;
    return SubMenuSettings;
}(_sub_menu__WEBPACK_IMPORTED_MODULE_0__["SubMenu"]));



/***/ }),

/***/ "./src/app/models/sub-menu.ts":
/*!************************************!*\
  !*** ./src/app/models/sub-menu.ts ***!
  \************************************/
/*! exports provided: SubMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubMenu", function() { return SubMenu; });
var SubMenu = /** @class */ (function () {
    function SubMenu() {
    }
    SubMenu.prototype.getType = function () {
        return 'none';
    };
    ;
    return SubMenu;
}());



/***/ }),

/***/ "./src/app/models/trainer.ts":
/*!***********************************!*\
  !*** ./src/app/models/trainer.ts ***!
  \***********************************/
/*! exports provided: Trainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trainer", function() { return Trainer; });
/* harmony import */ var _base_api_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-api-model */ "./src/app/models/base-api-model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Trainer = /** @class */ (function (_super) {
    __extends(Trainer, _super);
    function Trainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Trainer.prototype.forSave = function () {
        var result = Object.assign({}, this);
        delete result.img_src;
        return result;
    };
    Trainer.apiMethodName = 'trainer';
    Trainer.passLang = true;
    return Trainer;
}(_base_api_model__WEBPACK_IMPORTED_MODULE_0__["BaseApiModel"]));



/***/ }),

/***/ "./src/app/ng-for-in.directive.ts":
/*!****************************************!*\
  !*** ./src/app/ng-for-in.directive.ts ***!
  \****************************************/
/*! exports provided: NgForIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgForIn", function() { return NgForIn; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgForIn = /** @class */ (function (_super) {
    __extends(NgForIn, _super);
    function NgForIn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgForIn.prototype.ngOnChanges = function (changes) {
        console.log("hello");
        if (changes.ngForIn) {
            this.ngForOf = Object.keys(this.ngForIn);
            var change = changes.ngForIn;
            var currentValue = Object.keys(change.currentValue);
            var previousValue = change.previousValue ? Object.keys(change.previousValue) : undefined;
            console.log(currentValue);
            console.log(previousValue);
            changes.ngForOf = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SimpleChange"](previousValue, currentValue, change.firstChange);
            _super.prototype.ngOnChanges.call(this, changes);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgForIn.prototype, "ngForIn", void 0);
    NgForIn = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[ngFor][ngForIn]'
        })
    ], NgForIn);
    return NgForIn;
}(_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]));



/***/ }),

/***/ "./src/app/page-editor-field/page-editor-field.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/page-editor-field/page-editor-field.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .inline {\n  display: inline-block;\n}\n:host .title {\n  display: inline-block;\n  vertical-align: top;\n}\n:host .content input:not([type=checkbox]) {\n  width: 50%;\n  display: block;\n}\n:host .fr-box.fr-inline {\n  border: 1px solid #d4d4d4;\n  margin: 5px;\n  padding: 5px;\n  color: #000;\n}\n"

/***/ }),

/***/ "./src/app/page-editor-field/page-editor-field.component.html":
/*!********************************************************************!*\
  !*** ./src/app/page-editor-field/page-editor-field.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"field\">\n  <div class=\"title\"><label for=\"{{uniqId}}\">{{title}}</label></div>\n  <div [ngSwitch]=\"params.type\" class=\"content\" [class.inline]=\"params.type === 'checkbox'\">\n    <div *ngSwitchCase=\"'string'\">\n      <input id={{uniqId}} type=\"text\" [(ngModel)]=\"valueSet[valueKey]\">\n    </div>\n    <div *ngSwitchCase=\"'select'\">\n      <select id={{uniqId}} type=\"checkbox\" [(ngModel)]=\"valueSet[valueKey]\">\n        <option *ngFor=\"let option in params.options\" [value]=\"option\">{{params.options[option]}}</option>\n      </select>\n    </div>\n    <div *ngSwitchCase=\"'checkbox'\">\n      <input id={{uniqId}} type=\"checkbox\" [(ngModel)]=\"valueSet[valueKey]\">\n    </div>\n    <div *ngSwitchCase=\"'textarea'\">\n      <textarea id={{uniqId}} ngxTrumbowygEditor name=\"editorDirective\" [(ngModel)]=\"valueSet[valueKey]\"></textarea>\n    </div>\n    <div *ngSwitchCase=\"'color'\">\n      <input id={{uniqId}} type=\"text\" (colorPickerChange)=\"setVal($event)\" [colorPicker]=\"valueSet[valueKey]\" [style.background]=\"valueSet[valueKey]\" [cpOutputFormat]=\"hex\"/>\n    </div>\n    <div *ngSwitchCase=\"'image'\">\n      <img *ngIf=\"imageSrc !== null\" width=\"200px\" src=\"//hotel/{{imageSrc}}\">\n      <app-image-chooser (selectedImageId)=\"selectImage($event)\"></app-image-chooser>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/page-editor-field/page-editor-field.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/page-editor-field/page-editor-field.component.ts ***!
  \******************************************************************/
/*! exports provided: PageEditorFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageEditorFieldComponent", function() { return PageEditorFieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_app_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/app-helper */ "./src/app/components/app-helper.ts");
/* harmony import */ var _model_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model.service */ "./src/app/model.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageEditorFieldComponent = /** @class */ (function () {
    function PageEditorFieldComponent(modelService) {
        this.modelService = modelService;
        this.froalaSettings = {
            toolbarInline: true,
        };
        this.uniqId = _components_app_helper__WEBPACK_IMPORTED_MODULE_1__["AppHelper"].uuid();
    }
    PageEditorFieldComponent.prototype.selectImage = function (image) {
        this.valueSet[this.valueKey] = image.id;
        this.imageSrc = image.filename;
    };
    PageEditorFieldComponent.prototype.setVal = function (value) {
        this.valueSet[this.valueKey] = value;
    };
    PageEditorFieldComponent.prototype.reloadImageSrc = function () {
        var _this = this;
        this.modelService.getImage(this.valueSet[this.valueKey]).subscribe(function (image) {
            console.log('image obtained!');
            _this.imageSrc = image.filename;
        });
    };
    PageEditorFieldComponent.prototype.ngOnInit = function () {
        if (this.params.type === 'image') {
            console.log('azazaza');
            this.reloadImageSrc();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PageEditorFieldComponent.prototype, "valueSet", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PageEditorFieldComponent.prototype, "valueKey", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PageEditorFieldComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PageEditorFieldComponent.prototype, "params", void 0);
    PageEditorFieldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-editor-field',
            template: __webpack_require__(/*! ./page-editor-field.component.html */ "./src/app/page-editor-field/page-editor-field.component.html"),
            styles: [__webpack_require__(/*! ./page-editor-field.component.css */ "./src/app/page-editor-field/page-editor-field.component.css")]
        }),
        __metadata("design:paramtypes", [_model_service__WEBPACK_IMPORTED_MODULE_2__["ModelService"]])
    ], PageEditorFieldComponent);
    return PageEditorFieldComponent;
}());



/***/ }),

/***/ "./src/app/page-editor-tree/page-editor-tree.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/page-editor-tree/page-editor-tree.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bordered-section {\n  border: 1px solid #444;\n  margin: 5px;\n}\n.shadowed {\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);\n}\n.put-right {\n  position: absolute;\n  right: 11px;\n  left: 350px;\n  top: 17px;\n  max-height: 100%;\n  overflow-y: auto;\n}\n/*.composite-field-items page-editor {*/\n/*display: none;*/\n/*}*/\n:host {\n  display: block;\n}\n.empty-wrapper {\n  display: inline-block;\n}\n.toolbar button {\n  margin: 0 5px;\n}\n.instance-item {\n  position: relative;\n  border: 2px solid #aaa;\n  border-radius: 5px;\n  padding: 5px;\n  margin: 5px;\n}\n.instance-item .toolbar {\n  display: block;\n  overflow: hidden;\n}\n.instance-item .instance-toolbar {\n  position: absolute;\n  top: 0;\n  right: 5px;\n}\n.composite-field-items {\n  padding-right: 30px;\n}\n.composite-field-items .item {\n  width: 100%;\n  height: 20px;\n  padding: 10px;\n  border-radius: 10px;\n  background-color: rgba(247, 231, 213, 0.64);\n  margin-bottom: 5px;\n}\n.not-grouped-content {\n  background-color: #fff;\n}\nul {\n  list-style: none;\n  padding-left: 0;\n}\n"

/***/ }),

/***/ "./src/app/page-editor-tree/page-editor-tree.component.html":
/*!******************************************************************!*\
  !*** ./src/app/page-editor-tree/page-editor-tree.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<accordion *ngIf=\"paramsHasGroups\" class=\"super\">\n    <accordion-group *ngFor=\"let group in groupedParamsSet\" heading=\"{{groupedParamsSet[group].title}}\" style=\"color: #f00\" (isOpenChange)=\"logToggle($event, group)\">\n        <div *ngFor=\"let key in groupedParamsSet[group].values\">\n            <div [ngSwitch]=\"params[key].type\">\n                <div *ngSwitchCase=\"'composite'\">\n                    <div *ngFor=\"let section of values[key]; let i = index;\" class=\"instance-item\">\n                        <div class=\"toolbar\">\n                            <span class=\"close\" (click)=\"deleteInstanceWithConfirm(key, i)\"><i class=\"fa fa-close\"></i></span>\n                        </div>\n                        <page-editor [uniqKey]=\"uniqKey + '_' + key\" [params]=\"params[key]['availableInstances'][section.type]\" [values]=\"section\"></page-editor>\n                    </div>\n                    <div class=\"toolbar\">\n                        <div class=\"empty-wrapper\" [ngSwitch]=\"(params[key]['availableInstances'] | values).length === 1\">\n                            <button *ngSwitchCase=\"true\" dropdownToggle type=\"button\" class=\"btn btn-primary\" aria-controls=\"dropdown-basic\" #item value=\"{{(params[key]['availableInstances'] | keys)[0]}}\" (click)=\"appendInstance(key, item.value)\">\n                                Добавить {{(params[key]['instancesLabels'] | values)[0] | lowercase }}<i class=\"fa fa-plus\"></i>\n                            </button>\n                            <div *ngSwitchCase=\"false\" class=\"btn-group\" dropdown #dropdown=\"bs-dropdown\" [autoClose]=\"true\">\n                                <button dropdownToggle type=\"button\" class=\"btn btn-primary\" aria-controls=\"dropdown-basic\">\n                                    Добавить секцию <i class=\"fa fa-plus\"></i>\n                                </button>\n                                <ul *dropdownMenu class=\"dropdown-menu\"\n                                    role=\"menu\" aria-labelledby=\"button-triggers-manual\">\n                                    <li *ngFor=\"let instanceType in params[key]['availableInstances']\" role=\"menuitem\">\n                                        <a class=\"dropdown-item\" (click)=\"appendInstance(key, instanceType)\">\n                                            {{params[key]['instancesLabels'][instanceType]}}\n                                        </a>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"reorder(key)\">\n                            Поменять местами\n                        </button>\n                    </div>\n                </div>\n                <div *ngSwitchDefault>\n                    <app-page-editor-field [title]=\"params[key].title\" [params]=\"params[key]\" [valueSet]=\"values\" [valueKey]=\"key\"></app-page-editor-field>\n                </div>\n            </div>\n        </div>\n    </accordion-group>\n    <accordion-group *ngIf=\"(notGroupdParams | json) !== '{}'\" heading=\"Содержимое блока\" (isOpenChange)=\"logToggle($event, 'nogroup')\">\n        <div *ngFor=\"let key in notGroupdParams\">\n            <div [ngSwitch]=\"params[key].type\">\n                <div *ngSwitchCase=\"'composite'\">\n                    <div *ngFor=\"let section of values[key]; let i = index;\" class=\"instance-item\">\n                        <div class=\"instance-toolbar\">\n                            <span class=\"close\" (click)=\"deleteInstanceWithConfirm(key, i)\"><i class=\"fa fa-close\"></i></span>\n                        </div>\n                        <page-editor [uniqKey]=\"uniqKey + '_' + key\" [params]=\"params[key]['availableInstances'][section.type]\" [values]=\"section\"></page-editor>\n                    </div>\n                    <div class=\"toolbar\">\n                        <div class=\"empty-wrapper\" [ngSwitch]=\"(params[key]['availableInstances'] | values).length === 1\">\n                            <button *ngSwitchCase=\"true\" dropdownToggle type=\"button\" class=\"btn btn-primary\" aria-controls=\"dropdown-basic\" #item value=\"{{(params[key]['availableInstances'] | keys)[0]}}\" (click)=\"appendInstance(key, item.value)\">\n                                Добавить {{(params[key]['instancesLabels'] | values)[0] | lowercase }}<i class=\"fa fa-plus\"></i>\n                            </button>\n                            <div *ngSwitchCase=\"false\" class=\"btn-group\" dropdown #dropdown=\"bs-dropdown\" [autoClose]=\"true\">\n                                <button dropdownToggle type=\"button\" class=\"btn btn-primary\" aria-controls=\"dropdown-basic\">\n                                    Добавить секцию <i class=\"fa fa-plus\"></i>\n                                </button>\n                                <ul *dropdownMenu class=\"dropdown-menu\"\n                                    role=\"menu\" aria-labelledby=\"button-triggers-manual\">\n                                    <li *ngFor=\"let instanceType in params[key]['availableInstances']\" role=\"menuitem\">\n                                        <a class=\"dropdown-item\" (click)=\"appendInstance(key, instanceType)\">\n                                            {{params[key]['instancesLabels'][instanceType]}}\n                                        </a>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"reorder(key)\">\n                            Поменять местами\n                        </button>\n                    </div>\n                </div>\n                <div *ngSwitchDefault>\n                    <app-page-editor-field [title]=\"params[key].title\" [params]=\"params[key]\" [valueSet]=\"values\" [valueKey]=\"key\"></app-page-editor-field>\n                </div>\n            </div>\n        </div>\n    </accordion-group>\n</accordion>\n<accordion  *ngIf=\"!paramsHasGroups\">\n    <accordion-group heading=\"Содержимое блока\" [isOpen]=\"true\" (isOpenChange)=\"logToggle($event, 'nogroup')\">\n        <div *ngFor=\"let key in notGroupdParams\">\n            <div [ngSwitch]=\"params[key].type\">\n                <div *ngSwitchCase=\"'composite'\">\n                    <div *ngFor=\"let section of values[key]; let i = index;\" class=\"instance-item\">\n                        <div class=\"instance-toolbar\">\n                            <span class=\"close\" (click)=\"deleteInstanceWithConfirm(key, i)\"><i class=\"fa fa-close\"></i></span>\n                        </div>\n                        <page-editor [uniqKey]=\"uniqKey + '_' + key\" [params]=\"params[key]['availableInstances'][section.type]\" [values]=\"section\"></page-editor>\n                    </div>\n                    <div class=\"toolbar\">\n                        <div class=\"empty-wrapper\" [ngSwitch]=\"(params[key]['availableInstances'] | values).length === 1\">\n                            <button *ngSwitchCase=\"true\" dropdownToggle type=\"button\" class=\"btn btn-primary\" aria-controls=\"dropdown-basic\" #item value=\"{{(params[key]['availableInstances'] | keys)[0]}}\" (click)=\"appendInstance(key, item.value)\">\n                                Добавить {{(params[key]['instancesLabels'] | values)[0] | lowercase }}<i class=\"fa fa-plus\"></i>\n                            </button>\n                            <div *ngSwitchCase=\"false\" class=\"btn-group\" dropdown #dropdown=\"bs-dropdown\" [autoClose]=\"true\">\n                                <button dropdownToggle type=\"button\" class=\"btn btn-primary\" aria-controls=\"dropdown-basic\">\n                                    Добавить секцию <i class=\"fa fa-plus\"></i>\n                                </button>\n                                <ul *dropdownMenu class=\"dropdown-menu\"\n                                    role=\"menu\" aria-labelledby=\"button-triggers-manual\">\n                                    <li *ngFor=\"let instanceType in params[key]['availableInstances']\" role=\"menuitem\">\n                                        <a class=\"dropdown-item\" (click)=\"appendInstance(key, instanceType)\">\n                                            {{params[key]['instancesLabels'][instanceType]}}\n                                        </a>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"reorder(key)\">\n                            Поменять местами\n                        </button>\n                    </div>\n                </div>\n                <div *ngSwitchDefault>\n                    <app-page-editor-field [title]=\"params[key].title\" [params]=\"params[key]\" [valueSet]=\"values\" [valueKey]=\"key\"></app-page-editor-field>\n                </div>\n            </div>\n        </div>\n    </accordion-group>\n</accordion>\n<ng-template #reorderDialog>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Поменять местами</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <bs-sortable *ngIf=\"selectedInstanceOrder\"\n                     [(ngModel)]=\"selectedInstanceOrder\"\n                     itemClass=\"sortable-item\"\n                     itemActiveClass=\"sortable-item-active\"\n                     placeholderItem=\"Drag here\"\n                     placeholderClass=\"placeholderStyle\"\n                     wrapperClass=\"sortable-wrapper\"\n                     fieldName=\"name\"\n        ></bs-sortable>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"reorderApply()\">Да</button>\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modalRef.hide()\">Отмена</button>\n    </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/page-editor-tree/page-editor-tree.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/page-editor-tree/page-editor-tree.component.ts ***!
  \****************************************************************/
/*! exports provided: PageEditorTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageEditorTreeComponent", function() { return PageEditorTreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageEditorTreeComponent = /** @class */ (function () {
    function PageEditorTreeComponent(modalService) {
        this.modalService = modalService;
    }
    PageEditorTreeComponent.prototype.logToggle = function ($event, key) {
        console.log('Accrodion toggle event!');
        console.log(key);
        console.log(this.uniqKey);
        console.log($event);
    };
    PageEditorTreeComponent.prototype.reorder = function (key) {
        this.prepareSelectedInstanceOrder(key);
        this.openModal(this.reorderDialog);
    };
    PageEditorTreeComponent.prototype.prepareSelectedInstanceOrder = function (key) {
        this.selectedInstanceKey = key;
        this.selectedInstanceOrder = [];
        var orderId = 0;
        for (var _i = 0, _a = this.values[key]; _i < _a.length; _i++) {
            var instance = _a[_i];
            this.selectedInstanceOrder.push({
                id: orderId,
                name: this.params[key]['instancesLabels'][instance.type]
            });
            orderId++;
        }
    };
    PageEditorTreeComponent.prototype.reorderApply = function () {
        var orderedSections = [];
        for (var realId in this.selectedInstanceOrder) {
            orderedSections[realId] = this.values[this.selectedInstanceKey][this.selectedInstanceOrder[realId].id];
        }
        this.values[this.selectedInstanceKey] = orderedSections;
        this.modalRef.hide();
    };
    PageEditorTreeComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    PageEditorTreeComponent.prototype.ngOnInit = function () {
        this.initGroupedParamsInfo();
    };
    PageEditorTreeComponent.prototype.ngOnChanges = function () {
        this.initGroupedParamsInfo();
    };
    PageEditorTreeComponent.prototype.prepareInstance = function (instanceParams, sectionType, fieldName) {
        var newSection = {
            sectionType: sectionType,
            type: sectionType,
            sectionTypeName: this.params[fieldName]['instancesLabels'][sectionType]
        };
        for (var key in instanceParams) {
            if (instanceParams[key].type !== 'composite') {
                newSection[key] = instanceParams[key].default;
            }
            else {
                newSection[key] = [];
            }
        }
        return newSection;
    };
    PageEditorTreeComponent.prototype.deleteInstanceWithConfirm = function (key, instanceIndex) {
        this.deleteInstance(key, instanceIndex);
    };
    PageEditorTreeComponent.prototype.deleteInstance = function (key, instanceIndex) {
        this.values[key].splice(instanceIndex, 1);
        console.log(this.values[key].length);
        console.log(this.values[key]);
    };
    PageEditorTreeComponent.prototype.appendInstance = function (key, instanceType) {
        console.log(key);
        console.log(instanceType);
        var newInstance = this.prepareInstance(this.params[key]['availableInstances'][instanceType], instanceType, key);
        this.values[key].push(newInstance);
    };
    PageEditorTreeComponent.prototype.initGroupedParamsInfo = function () {
        this.groupedParamsSet = {};
        this.notGroupdParams = {};
        var paramsHasGroups = false;
        for (var key in this.params) {
            var param = this.params[key];
            if (!param.tabTitle) {
                this.notGroupdParams[key] = param;
            }
            else {
                paramsHasGroups = true;
                var title = param.tabTitle;
                if (this.groupedParamsSet[title] === undefined) {
                    this.groupedParamsSet[title] = {
                        title: title,
                        values: {}
                    };
                }
                this.groupedParamsSet[title].values[key] = param;
            }
        }
        console.log(this.notGroupdParams);
        this.paramsHasGroups = paramsHasGroups;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PageEditorTreeComponent.prototype, "params", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PageEditorTreeComponent.prototype, "values", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PageEditorTreeComponent.prototype, "uniqKey", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('reorderDialog'),
        __metadata("design:type", Object)
    ], PageEditorTreeComponent.prototype, "reorderDialog", void 0);
    PageEditorTreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'page-editor',
            template: __webpack_require__(/*! ./page-editor-tree.component.html */ "./src/app/page-editor-tree/page-editor-tree.component.html"),
            styles: [__webpack_require__(/*! ./page-editor-tree.component.css */ "./src/app/page-editor-tree/page-editor-tree.component.css")],
            providers: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]],
        }),
        __metadata("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])
    ], PageEditorTreeComponent);
    return PageEditorTreeComponent;
}());



/***/ }),

/***/ "./src/app/page/page.component.css":
/*!*****************************************!*\
  !*** ./src/app/page/page.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/page.component.html":
/*!******************************************!*\
  !*** ./src/app/page/page.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page works!\n</p>\n"

/***/ }),

/***/ "./src/app/page/page.component.ts":
/*!****************************************!*\
  !*** ./src/app/page/page.component.ts ***!
  \****************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageComponent = /** @class */ (function () {
    function PageComponent() {
    }
    PageComponent.prototype.ngOnInit = function () {
    };
    PageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page',
            template: __webpack_require__(/*! ./page.component.html */ "./src/app/page/page.component.html"),
            styles: [__webpack_require__(/*! ./page.component.css */ "./src/app/page/page.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], PageComponent);
    return PageComponent;
}());



/***/ }),

/***/ "./src/app/pages-list/pages-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages-list/pages-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "select {\n  margin: 10px;\n  width: -webkit-fill-available;\n}\n"

/***/ }),

/***/ "./src/app/pages-list/pages-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages-list/pages-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<select [(ngModel)]=\"selectedDomain\" class=\"form-control form-control-lg\">\n  <option *ngFor='let domain of domains' [value]=\"domain.id\">{{domain.title}}</option>\n</select>\n<div *ngFor='let page of groupedPages[selectedDomain]' class='navbar-selector-item' (click)=\"loadPage(page)\" [ngClass]=\"{'active':page.id==selectedPageId}\"> {{page.name}} </div>\n<div class=\"toolbar-element\">\n  <div (click)=\"openModal(createPage)\"><i class=\"fa fa-plus\"></i></div>\n</div>\n<ng-template #createPage>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Создать новую страницу</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div>\n      Введите название страницы:\n    </div>\n    <div>\n      <input type=\"text\" #newPageName>\n    </div>\n    <div>\n      Выберите домен:\n    </div>\n    <div>\n      <select #newPageDomain class=\"form-control form-control-lg\" [value]=\"selectedDomain\">\n        <option *ngFor='let domain of domains' [value]=\"domain.id\">{{domain.title}}</option>\n      </select>\n    </div>\n    <div>\n      Введите url:\n    </div>\n    <div>\n      {{findDomainById(newPageDomain.value).base_url}}\n      <input type=\"text\" #newPageUrl>\n    </div>\n    <div>\n      Показывать в меню:\n    </div>\n    <div>\n      <input type=\"checkbox\" #showInMenu>\n    </div>\n    <div>\n      Выберите тип содержимого:\n    </div>\n    <div>\n      <select #newPagePageType class=\"form-control form-control-lg\">\n        <option *ngFor='let pageType of pageTypes' [value]=\"pageType.id\">{{pageType.name}}</option>\n      </select>\n    </div>\n    <div>\n      Выберите способ отображения:\n    </div>\n    <div>\n      <select #newPageAction class=\"form-control form-control-lg\">\n        <option *ngFor='let action of actions' [value]=\"action.id\">{{action.name}}</option>\n      </select>\n    </div>\n\n    <div>\n      <button class=\"btn btn-primary\"\n        (click)=\"createNewPage(newPageName.value, newPageDomain.value, newPagePageType.value, showInMenu.value, newPageUrl.value, newPageAction.value); modalRef.hide();\">создать</button>\n    </div>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/pages-list/pages-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages-list/pages-list.component.ts ***!
  \****************************************************/
/*! exports provided: PagesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesListComponent", function() { return PagesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages.service */ "./src/app/pages.service.ts");
/* harmony import */ var _models_select_item_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/select-item-event */ "./src/app/models/select-item-event.ts");
/* harmony import */ var _select_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../select-item.service */ "./src/app/select-item.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../storage */ "./src/app/storage.ts");
/* harmony import */ var _models_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/state */ "./src/app/models/state.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PagesListComponent = /** @class */ (function (_super) {
    __extends(PagesListComponent, _super);
    function PagesListComponent(pageService, selectItemService, modalService) {
        var _this = _super.call(this) || this;
        _this.pageService = pageService;
        _this.selectItemService = selectItemService;
        _this.modalService = modalService;
        _this.domainsLoaded = false;
        _this.pagesLoaded = false;
        return _this;
    }
    PagesListComponent.prototype.processLoadedState = function () {
        var _this = this;
        var state = this.getState();
        for (var key in state) {
            this[key] = state[key];
        }
        this.loadPage(this.pages.find(function (p) { return p.id == _this.selectedPageId; }), true);
    };
    PagesListComponent.prototype.loadPage = function (page, initial) {
        if (initial === void 0) { initial = false; }
        this.selectedPageId = page.id;
        this.selectItemService.emit(new _models_select_item_event__WEBPACK_IMPORTED_MODULE_2__["SelectItemEvent"](_models_select_item_event__WEBPACK_IMPORTED_MODULE_2__["SelectItemEvent"].Type.Page, {
            page: page,
            pageId: page.id,
            initial: initial
        }));
    };
    PagesListComponent.prototype.findDomainById = function (domainId) {
        return this.domains.find(function (d) { return d.id == domainId; });
    };
    PagesListComponent.prototype.openModal = function (template, options) {
        this.modalRef = this.modalService.show(template, options);
    };
    PagesListComponent.prototype.groupPages = function () {
        if (this.domainsLoaded && this.pagesLoaded) {
            for (var _i = 0, _a = this.pages; _i < _a.length; _i++) {
                var page = _a[_i];
                if (this.groupedPages[page.domain_id] === undefined) {
                    this.groupedPages[page.domain_id] = [];
                }
                this.groupedPages[page.domain_id].push(page);
            }
            console.log(this.groupedPages);
        }
    };
    ;
    PagesListComponent.prototype.createNewPage = function (name, domainId, pageTypeId, showInMenu, url, actionId) {
        var _this = this;
        this.pageService.createPage({
            'name': name,
            'domain_id': domainId,
            'pages_id': pageTypeId,
            'show_in_menu': showInMenu,
            'url': url,
            'action_id': actionId,
        }).subscribe(function (page) {
            _this.groupedPages[page.domain_id].push(page);
            _this.selectedDomain = domainId;
        });
    };
    PagesListComponent.prototype.getPages = function () {
        var _this = this;
        this.pageService.getPages()
            .subscribe(function (pages) {
            _this.pages = pages;
            _this.pagesLoaded = true;
            _this.groupPages();
            _this.processLoadedState();
        });
    };
    PagesListComponent.prototype.getDomains = function () {
        var _this = this;
        this.pageService.getDomains()
            .subscribe(function (domains) {
            _this.domains = domains;
            _this.domainsLoaded = true;
            _this.groupPages();
            _this.processLoadedState();
        });
    };
    PagesListComponent.prototype.getActions = function () {
        var _this = this;
        this.pageService.getActions()
            .subscribe(function (actions) {
            _this.actions = actions.filter(function (a) { return a.is_available == true; });
        });
    };
    PagesListComponent.prototype.getPagesTypes = function () {
        var _this = this;
        this.pageService.getPageTypes()
            .subscribe(function (pageTypes) {
            _this.pageTypes = pageTypes;
        });
    };
    PagesListComponent.prototype.ngOnInit = function () {
        this.getPages();
        this.getDomains();
        this.getActions();
        this.getPagesTypes();
        this.groupedPages = [];
    };
    __decorate([
        _storage__WEBPACK_IMPORTED_MODULE_5__["bindToComponentState"],
        __metadata("design:type", Number)
    ], PagesListComponent.prototype, "selectedDomain", void 0);
    __decorate([
        _storage__WEBPACK_IMPORTED_MODULE_5__["bindToComponentState"],
        __metadata("design:type", Number)
    ], PagesListComponent.prototype, "selectedPageId", void 0);
    PagesListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pages-list',
            template: __webpack_require__(/*! ./pages-list.component.html */ "./src/app/pages-list/pages-list.component.html"),
            styles: [__webpack_require__(/*! ./pages-list.component.css */ "./src/app/pages-list/pages-list.component.css")]
        }),
        __metadata("design:paramtypes", [_pages_service__WEBPACK_IMPORTED_MODULE_1__["PagesService"],
            _select_item_service__WEBPACK_IMPORTED_MODULE_3__["SelectItemService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]])
    ], PagesListComponent);
    return PagesListComponent;
}(_models_state__WEBPACK_IMPORTED_MODULE_6__["State"]));



/***/ }),

/***/ "./src/app/pages.service.ts":
/*!**********************************!*\
  !*** ./src/app/pages.service.ts ***!
  \**********************************/
/*! exports provided: PagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesService", function() { return PagesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PagesService = /** @class */ (function () {
    function PagesService(http) {
        this.http = http;
        this.pagesUrl = '/api/page';
        this.pageFieldsUrl = '/api/pageFields';
        this.domainsUrl = '/api/domain';
        this.actionsUrl = '/api/actions';
        this.pageTypesUrl = '/api/pageTypes';
    }
    PagesService.prototype.createPage = function (pageData) {
        return this.http.post(this.pagesUrl, pageData);
    };
    PagesService.prototype.getPages = function () {
        return this.http.get(this.pagesUrl);
    };
    PagesService.prototype.getPageFields = function (pageId, language) {
        return this.http.get(this.pageFieldsUrl + '/' + pageId + '?lang=' + language);
    };
    PagesService.prototype.savePageFields = function (pageId, pageFields, language) {
        return this.http.put(this.pageFieldsUrl + '/' + pageId + '?lang=' + language, pageFields);
    };
    PagesService.prototype.deletePage = function (pageId) {
        return this.http.delete(this.pagesUrl + '/' + pageId);
    };
    PagesService.prototype.getDomains = function () {
        return this.http.get(this.domainsUrl);
    };
    PagesService.prototype.getActions = function () {
        return this.http.get(this.actionsUrl);
    };
    PagesService.prototype.getPageTypes = function () {
        return this.http.get(this.pageTypesUrl);
    };
    PagesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PagesService);
    return PagesService;
}());



/***/ }),

/***/ "./src/app/pages/pages.component.css":
/*!*******************************************!*\
  !*** ./src/app/pages/pages.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bordered-section {\n  border: 1px solid #444;\n  margin: 5px;\n}\n.shadowed {\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);\n}\n.put-right {\n  position: absolute;\n  right: 11px;\n  left: 350px;\n  top: 17px;\n  max-height: 100%;\n  overflow-y: auto;\n}\n.sections-selector,\n.general-info,\n.items-block {\n  background-color: #fff;\n  margin: 15px;\n  display: block;\n  width: 100%;\n  vertical-align: top;\n}\n.sections-selector + page-editor,\n.general-info + page-editor,\n.items-block + page-editor {\n  background-color: #fff;\n  margin-left: 10px;\n  padding: 10px;\n  box-shadow: 0 0 50px rgba(0, 0, 0, 0.05);\n  display: inline-block;\n  vertical-align: top;\n}\n.sections-selector .item,\n.general-info .item,\n.items-block .item {\n  height: 35px;\n  line-height: 35px;\n  padding-left: 10px;\n}\n.sections-selector .item.selected,\n.general-info .item.selected,\n.items-block .item.selected {\n  background-color: #eee;\n}\n"

/***/ }),

/***/ "./src/app/pages/pages.component.html":
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-editor\">\n    <div class=\"wrapper\">\n\n        <div class=\"module-menu-element\" *ngIf=\"selectedPageId !== null\">\n            <h3 *ngIf=\"selectedPageId == 26\">Тренеры</h3>\n            <div class=\"items-block\" *ngIf=\"selectedPageId == 26\">\n                <trainers class=\"integrated\"></trainers>\n            </div>\n\n            <h3 *ngIf=\"selectedPageId == 19\">Номера</h3>\n            <div class=\"items-block\" *ngIf=\"selectedPageId == 19\">\n                <rooms class=\"integrated\"></rooms>\n            </div>\n\n\n            <h3>Список секций</h3>\n            <div class=\"sections-selector\" *ngIf=\"selectedPageFieldsSections\">\n                <div *ngFor=\"let section of selectedPageFieldsSections.values; index as sectionNumber;\"\n                     (click)=\"selectSection(sectionNumber)\" [class.selected]=\"sectionNumber === selectedSectionNumber\" class=\"item\">\n                    {{selectedPageFieldsSections.values[sectionNumber].sectionTypeName}}\n                    <div class=\"delete\" (click)=\"deleteSectionWithConfirm()\"></div>\n                </div>\n                <div class=\"sections-panel toolbar-element\" *ngIf=\"selectedPageFields.params['sectionsParams'] !== undefined && (selectedPageFields.params['sectionsParams']['availableInstances'] | json) != '{}'\">\n                    <div class=\"btn-group\" dropdown #dropdown=\"bs-dropdown\" [autoClose]=\"true\">\n                        <div dropdownToggle aria-controls=\"dropdown-basic\">\n                            <i class=\"fa fa-plus\"></i>\n                        </div>\n                        <ul id=\"dropdown-triggers-manual\" *dropdownMenu class=\"dropdown-menu\"\n                            role=\"menu\" aria-labelledby=\"button-triggers-manual\">\n                            <li *ngFor=\"let sectionType in selectedPageFields.params['sectionsParams']['availableInstances']\" role=\"menuitem\">\n                                <a class=\"dropdown-item\" (click)=\"appendSection('sectionsParams', sectionType)\">\n                                    {{selectedPageFields.params['sectionsParams']['instancesLabels'][sectionType]}}\n                                </a>\n                            </li>\n                        </ul>\n                        <div (click)=\"reorder()\"><i class=\"fa fa-bars\"></i></div>\n                    </div>\n                </div>\n            </div>\n\n            <h3>Общие настройки</h3>\n            <div (click)=\"selectOther()\"  class=\"general-info\">\n                <div class=\"item\" [class.selected]=\"selectOtherParams === true\">Общие настройки</div>\n            </div>\n\n            <div class=\"module-panel\" *ngIf=\"selectedPageFields !== null\">\n                <button (click)=\"save()\" class=\"ripple module-control-button-element default\">Сохранить</button>\n                <a href=\"{{currentPage.url}}\" target=\"_blank\"><button class=\"ripple module-control-button-element\">Просмотр</button></a>\n                <button (click)=\"deleteWithConfirm()\" class=\"ripple module-control-button-element delete\">Удалить</button>\n            </div>\n        </div>\n        <div class=\"module-content-element\">\n            <accordion *ngIf=\"selectOtherParams == true\">\n                <accordion-group heading=\"Параметры страницы\">\n                    {{currentPage.url}}\n                </accordion-group>\n            </accordion>\n            <page-editor *ngIf=\"selectOtherParams == true && sectionsInited\"\n                         [params]=\"selectedPageFieldsOther.params\"\n                         [values]=\"selectedPageFieldsOther.values\"\n                         [uniqKey]=\"'root'\">\n            </page-editor>\n            <page-editor *ngIf=\"selectedSectionNumber !== null && sectionsInited\"\n                         [params]=\"selectedPageFieldsSections.params['availableInstances'][selectedPageFieldsSections.values[selectedSectionNumber].type]\"\n                         [values]=\"selectedPageFieldsSections.values[selectedSectionNumber]\"\n                         [uniqKey]=\"'root'\">\n            </page-editor>\n        </div>\n    </div>\n</div>\n<ng-template #confirmationDialog class=\"alert-box\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Подтвердите действиe</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        Удалить страницу?\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"onConfirm()\">Да</button>\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"onCancel()\">Нет</button>\n    </div>\n</ng-template>\n\n<ng-template #reorderDialog>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Поменять местами секции</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <bs-sortable *ngIf=\"pageFieldsSectionsOrder\"\n            [(ngModel)]=\"pageFieldsSectionsOrder\"\n            itemClass=\"sortable-item\"\n            itemActiveClass=\"sortable-item-active\"\n            placeholderItem=\"Drag here\"\n            placeholderClass=\"placeholderStyle\"\n            wrapperClass=\"sortable-wrapper\"\n            fieldName=\"name\"\n        ></bs-sortable>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"reorderApply()\">Да</button>\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modalRef.hide()\">Отмена</button>\n    </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages.service */ "./src/app/pages.service.ts");
/* harmony import */ var _select_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../select-item.service */ "./src/app/select-item.service.ts");
/* harmony import */ var _models_select_item_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/select-item-event */ "./src/app/models/select-item-event.ts");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _models_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/state */ "./src/app/models/state.ts");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../storage */ "./src/app/storage.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PagesComponent = /** @class */ (function (_super) {
    __extends(PagesComponent, _super);
    function PagesComponent(pageService, selectItemService, modalService, ref) {
        var _this = _super.call(this) || this;
        _this.pageService = pageService;
        _this.selectItemService = selectItemService;
        _this.modalService = modalService;
        _this.ref = ref;
        _this.domainsLoaded = false;
        _this.pagesLoaded = false;
        _this.selectedDomain = 1;
        _this.selectedPageId = null;
        _this.selectedPageFields = null;
        _this.language = 1;
        _this.sectionsInited = false;
        selectItemService.event$.subscribe(function (event) {
            if (event.itemType === _models_select_item_event__WEBPACK_IMPORTED_MODULE_3__["SelectItemEvent"].Type.LanguageChange) {
                _this.language = event.payload.language;
                if (_this.selectedPageId !== null) {
                    _this.loadPage(_this.selectedPageId, false);
                }
            }
            else if (event.itemType === _models_select_item_event__WEBPACK_IMPORTED_MODULE_3__["SelectItemEvent"].Type.Page) {
                _this.currentPage = event.payload.page;
                _this.loadPage(event.payload.pageId, !event.payload.initial);
                if (!event.payload.initial) {
                    _this.selectItemService.emitCloseAll('page');
                }
            }
            else if (event.itemType === _models_select_item_event__WEBPACK_IMPORTED_MODULE_3__["SelectItemEvent"].Type.CloseAllSelectedItems && event.payload.model !== 'page') {
                _this.unload();
            }
        });
        return _this;
    }
    PagesComponent.prototype.processLoadedState = function () {
        var state = this.getState();
        for (var key in state) {
            this[key] = state[key];
        }
    };
    PagesComponent.prototype.unload = function () {
        this.selectOtherParams = false;
        this.selectedSectionNumber = null;
    };
    PagesComponent.prototype.selectSection = function (sectionNumber) {
        this.selectOtherParams = false;
        this.selectedSectionNumber = sectionNumber;
        this.selectItemService.emitCloseAll('page');
    };
    PagesComponent.prototype.closeSection = function () {
        this.selectedSectionNumber = null;
        this.selectOtherParams = false;
    };
    PagesComponent.prototype.selectOther = function () {
        this.selectedSectionNumber = null;
        this.selectOtherParams = true;
        this.selectItemService.emitCloseAll('page');
    };
    PagesComponent.prototype.closeOther = function () {
        this.selectedSectionNumber = null;
        this.selectOtherParams = false;
    };
    PagesComponent.prototype.loadPage = function (pageId, unload) {
        var _this = this;
        this.pageService.getPageFields(pageId, this.language)
            .subscribe(function (page) {
            console.log('Initing section!');
            _this.initSectionsAndOther(page);
            _this.selectedPageFields = page;
            if (unload) {
                _this.unload();
            }
        });
        this.selectedPageId = pageId;
        if (unload) {
            this.unload();
        }
    };
    PagesComponent.prototype.reorderApply = function () {
        var orderedSections = [];
        for (var realId in this.pageFieldsSectionsOrder) {
            orderedSections[realId] = this.selectedPageFields.values['sectionsParams'][this.pageFieldsSectionsOrder[realId].id];
        }
        this.selectedPageFields.values['sectionsParams'] = orderedSections;
        this.selectedPageFieldsSections.values = orderedSections;
        this.modalRef.hide();
    };
    PagesComponent.prototype.onConfirm = function () {
        this.confirmationResult.next(true);
        this.modalRef.hide();
    };
    PagesComponent.prototype.onCancel = function () {
        this.confirmationResult.next(false);
        this.modalRef.hide();
    };
    PagesComponent.prototype.prepareSectionInstance = function (sectionInstance, sectionType, fieldName) {
        var newSection = {
            sectionType: sectionType,
            type: sectionType,
            sectionTypeName: this.selectedPageFields.params[fieldName]['instancesLabels'][sectionType]
        };
        for (var key in sectionInstance) {
            if (sectionInstance[key].type !== 'composite') {
                newSection[key] = sectionInstance[key].default;
            }
            else {
                newSection[key] = [];
            }
        }
        return newSection;
    };
    PagesComponent.prototype.appendSection = function (fieldName, sectionType) {
        if (fieldName === void 0) { fieldName = 'sectionsParams'; }
        var newSection = this.prepareSectionInstance(this.selectedPageFields.params[fieldName]['availableInstances'][sectionType], sectionType, fieldName);
        this.selectedPageFields.values[fieldName].push(newSection);
        this.initSectionsAndOther(this.selectedPageFields);
    };
    PagesComponent.prototype.initSectionsAndOther = function (pageFields) {
        this.processLoadedState();
        this.selectedPageFieldsOther = {
            params: {},
            values: []
        };
        this.selectedPageFieldsSections = {
            params: {},
            values: [],
        };
        this.pageFieldsSectionsOrder = [];
        var orderId = 0;
        for (var key in pageFields.params) {
            if (key === 'sectionsParams') {
                this.selectedPageFieldsSections = {
                    params: pageFields.params['sectionsParams'],
                    values: Object.values(pageFields.values['sectionsParams']),
                };
                for (var _i = 0, _a = pageFields.values['sectionsParams']; _i < _a.length; _i++) {
                    var section = _a[_i];
                    var sectionType = section.type;
                    var sectionName = pageFields.params[key]['instancesLabels'][sectionType];
                    console.log(sectionName);
                    this.pageFieldsSectionsOrder.push({
                        id: orderId,
                        name: sectionName
                    });
                    orderId++;
                }
            }
            else {
                this.selectedPageFieldsOther.params[key] = pageFields.params[key];
                this.selectedPageFieldsOther.values[key] = pageFields.values[key];
            }
        }
        this.sectionsInited = true;
    };
    PagesComponent.prototype.getPageFieldsValues = function (params, values) {
        var result = {};
        for (var key in params) {
            if (params[key].type === 'composite') {
                var sectionDataList = [];
                for (var _i = 0, _a = values[key]; _i < _a.length; _i++) {
                    var section = _a[_i];
                    var sectionData = this.getPageFieldsValues(params[key]['availableInstances'][section.type], section);
                    sectionData.type = section.type;
                    sectionDataList.push(sectionData);
                }
                result[key] = sectionDataList;
            }
            else {
                result[key] = values[key];
            }
        }
        return result;
    };
    PagesComponent.prototype.save = function () {
        //for (let section)
        this.pageService.savePageFields(this.selectedPageId, this.getPageFieldsValues(this.selectedPageFields.params, this.selectedPageFields.values), this.language)
            .subscribe();
    };
    PagesComponent.prototype.deleteWithConfirm = function () {
        var _this = this;
        this.modalRef = this.modalService.show(this.confirmationDialog);
        this.confirmationResult.subscribe(function (result) {
            if (result === true) {
                _this.delete();
            }
        });
    };
    PagesComponent.prototype.reorder = function () {
        this.modalRef = this.modalService.show(this.reorderDialog);
    };
    PagesComponent.prototype.delete = function () {
        this.pageService.deletePage(this.selectedPageId)
            .subscribe();
    };
    PagesComponent.prototype.groupPages = function () {
        if (this.domainsLoaded && this.pagesLoaded) {
            for (var _i = 0, _a = this.pages; _i < _a.length; _i++) {
                var page = _a[_i];
                if (this.groupedPages[page.domain_id] === undefined) {
                    this.groupedPages[page.domain_id] = [];
                }
                this.groupedPages[page.domain_id].push(page);
            }
        }
    };
    ;
    PagesComponent.prototype.getPages = function () {
        var _this = this;
        this.pageService.getPages()
            .subscribe(function (pages) {
            _this.pages = pages;
            _this.pagesLoaded = true;
            _this.groupPages();
        });
    };
    PagesComponent.prototype.getDomains = function () {
        var _this = this;
        this.pageService.getDomains()
            .subscribe(function (domains) {
            _this.domains = domains;
            _this.domainsLoaded = true;
        });
    };
    PagesComponent.prototype.ngOnInit = function () {
        this.confirmationResult = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.getPages();
        this.getDomains();
        this.groupedPages = [];
    };
    __decorate([
        _storage__WEBPACK_IMPORTED_MODULE_7__["bindToComponentState"],
        __metadata("design:type", Number)
    ], PagesComponent.prototype, "selectedSectionNumber", void 0);
    __decorate([
        _storage__WEBPACK_IMPORTED_MODULE_7__["bindToComponentState"],
        __metadata("design:type", Boolean)
    ], PagesComponent.prototype, "selectOtherParams", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('confirmationDialog'),
        __metadata("design:type", Object)
    ], PagesComponent.prototype, "confirmationDialog", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('reorderDialog'),
        __metadata("design:type", Object)
    ], PagesComponent.prototype, "reorderDialog", void 0);
    PagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pages',
            template: __webpack_require__(/*! ./pages.component.html */ "./src/app/pages/pages.component.html"),
            styles: [__webpack_require__(/*! ./pages.component.css */ "./src/app/pages/pages.component.css")],
        }),
        __metadata("design:paramtypes", [_pages_service__WEBPACK_IMPORTED_MODULE_1__["PagesService"],
            _select_item_service__WEBPACK_IMPORTED_MODULE_2__["SelectItemService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], PagesComponent);
    return PagesComponent;
}(_models_state__WEBPACK_IMPORTED_MODULE_6__["State"]));



/***/ }),

/***/ "./src/app/room-editor/room-editor.component.html":
/*!********************************************************!*\
  !*** ./src/app/room-editor/room-editor.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"object-editor\" [ngClass]=\"{active: room !== null}\">\n  <div class=\"close\" (click)=\"close()\">\n    <i class=\"fa fa-window-close\" aria-hidden=\"true\"></i>\n  </div>\n  <div *ngIf=\"room !== null\">\n    <div class=\"field name\">\n      <span class=\"label\">Название комнаты</span>\n      <input type=\"text\" [(ngModel)]=\"room.title\">\n    </div>\n\n    <div class=\"buttons\">\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"save()\">Save</button>\n      <button type=\"button\" class=\"btn btn-danger\" (click)=\"openModal(confirmDelete)\">Delete</button>\n    </div>\n  </div>\n</div>\n<ng-template #imageChoose>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Выберите изображение</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <app-image-chooser (selectedImageId)=\"selectImage($event)\"></app-image-chooser>\n    <button class=\"btn btn-primary\">выбор</button>\n    <button class=\"btn btn-danger\" (click)=\"modalRef.hide()\">отмена</button>\n  </div>\n</ng-template>\n<ng-template #confirmDelete>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Вы точно хотите удалить этот номер?</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <button class=\"btn btn-primary\" (click)=\"modalRef.hide()\">отмена</button>\n    <button class=\"btn btn-danger\" (click)=\"delete()\">да, удалить</button>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/room-editor/room-editor.component.ts":
/*!******************************************************!*\
  !*** ./src/app/room-editor/room-editor.component.ts ***!
  \******************************************************/
/*! exports provided: RoomEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomEditorComponent", function() { return RoomEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_select_item_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/select-item-event */ "./src/app/models/select-item-event.ts");
/* harmony import */ var _select_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../select-item.service */ "./src/app/select-item.service.ts");
/* harmony import */ var _model_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model.service */ "./src/app/model.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _models_room__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/room */ "./src/app/models/room.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RoomEditorComponent = /** @class */ (function () {
    function RoomEditorComponent(selectItemService, modelService, modalService) {
        var _this = this;
        this.selectItemService = selectItemService;
        this.modelService = modelService;
        this.modalService = modalService;
        selectItemService.event$.subscribe(function (event) {
            if (event.itemType === _models_select_item_event__WEBPACK_IMPORTED_MODULE_1__["SelectItemEvent"].Type.RoomSelect) {
                _this.room = event.payload.room;
                if (!event.payload.initial) {
                    _this.selectItemService.emitCloseAll('room');
                }
            }
        });
    }
    RoomEditorComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    RoomEditorComponent.prototype.close = function () {
        if (this.room !== null) {
            this.selectItemService.emit(new _models_select_item_event__WEBPACK_IMPORTED_MODULE_1__["SelectItemEvent"](_models_select_item_event__WEBPACK_IMPORTED_MODULE_1__["SelectItemEvent"].Type.RoomClose, {
                roomId: this.room.id
            }));
        }
        this.room = null;
    };
    RoomEditorComponent.prototype.save = function () {
        var roomItem = Object.setPrototypeOf(this.room, _models_room__WEBPACK_IMPORTED_MODULE_5__["Room"].prototype);
        this.modelService.saveRoom(roomItem);
    };
    RoomEditorComponent.prototype.delete = function () {
        var _this = this;
        this.modelService.deleteRoom(this.room)
            .subscribe(function () {
            var roomId = _this.room.id;
            _this.room = null;
            _this.modalRef.hide();
            _this.selectItemService.emit(new _models_select_item_event__WEBPACK_IMPORTED_MODULE_1__["SelectItemEvent"](_models_select_item_event__WEBPACK_IMPORTED_MODULE_1__["SelectItemEvent"].Type.RoomRemove, {
                roomId: roomId
            }));
        });
    };
    RoomEditorComponent.prototype.dropped = function (file) {
        this.newImageFile = file;
        //this.cropper.setImage(this.newImageFile.content);
    };
    RoomEditorComponent.prototype.cancelImage = function () {
        this.newImageFile = null;
    };
    RoomEditorComponent.prototype.fileOver = function (event) {
        console.log(event);
    };
    RoomEditorComponent.prototype.fileLeave = function (event) {
        console.log(event);
    };
    RoomEditorComponent.prototype.ngOnInit = function () {
        this.room = null;
        this.newImageFile = null;
    };
    RoomEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'room-editor',
            template: __webpack_require__(/*! ./room-editor.component.html */ "./src/app/room-editor/room-editor.component.html"),
            styles: [__webpack_require__(/*! ../common/object-editor.component.css */ "./src/app/common/object-editor.component.css")],
        }),
        __metadata("design:paramtypes", [_select_item_service__WEBPACK_IMPORTED_MODULE_2__["SelectItemService"],
            _model_service__WEBPACK_IMPORTED_MODULE_3__["ModelService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]])
    ], RoomEditorComponent);
    return RoomEditorComponent;
}());



/***/ }),

/***/ "./src/app/rooms/rooms.component.html":
/*!********************************************!*\
  !*** ./src/app/rooms/rooms.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n    <div class=\"module-list\">\n        <ul class=\"object-list-element\" *ngIf=\"rooms !== null\" [ngClass]=\"{active: selectedRoom !== null}\" #trainersList>\n            <li class=\"object-item\" *ngFor=\"let room of rooms\" (click)=\"loadRoom(room)\" [ngClass]=\"{active: this.selectedRoom && room.id == selectedRoom.id}\">\n                <h2 class=\"object-name\">{{room.title | wordCountLimit: 2 }}</h2>\n            </li>\n        </ul>\n        <div class=\"toolbar-element\">\n            <div (click)=\"openModal(createRoom)\"><i class=\"fa fa-plus\"></i></div>\n            <div (click)=\"openModal(reorderRooms)\"><i class=\"fa fa-bars\"></i></div>\n        </div>\n    </div>\n    <div class=\"module-editor module-editor-visible\" [ngClass]=\"{'visible': selectedRoom != null}\">\n        <room-editor></room-editor>\n    </div>\n</div>\n<ng-template #createRoom>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Создание нового номера</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div>\n            Введите название номера:\n        </div>\n        <div>\n            <input type=\"text\" #newRoomName>\n        </div>\n        <div>\n            <button class=\"btn btn-primary\" (click)=\"createNewRoom(newRoomName.value)\">создать</button>\n        </div>\n    </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/rooms/rooms.component.ts":
/*!******************************************!*\
  !*** ./src/app/rooms/rooms.component.ts ***!
  \******************************************/
/*! exports provided: RoomsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomsComponent", function() { return RoomsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model.service */ "./src/app/model.service.ts");
/* harmony import */ var _models_room__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/room */ "./src/app/models/room.ts");
/* harmony import */ var _models_select_item_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/select-item-event */ "./src/app/models/select-item-event.ts");
/* harmony import */ var _select_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../select-item.service */ "./src/app/select-item.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _models_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/state */ "./src/app/models/state.ts");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../storage */ "./src/app/storage.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RoomsComponent = /** @class */ (function (_super) {
    __extends(RoomsComponent, _super);
    function RoomsComponent(modelService, selectItemService, modalService) {
        var _this = _super.call(this) || this;
        _this.modelService = modelService;
        _this.selectItemService = selectItemService;
        _this.modalService = modalService;
        _this.newRoom = new _models_room__WEBPACK_IMPORTED_MODULE_2__["Room"]();
        selectItemService.event$.subscribe(function (event) {
            if (event.itemType === _models_select_item_event__WEBPACK_IMPORTED_MODULE_3__["SelectItemEvent"].Type.LanguageChange) {
                _this.loadRooms(true);
            }
            else if (event.itemType === _models_select_item_event__WEBPACK_IMPORTED_MODULE_3__["SelectItemEvent"].Type.RoomRemove) {
                _this.rooms = _this.rooms.filter(function (t) { return t.id !== event.payload.roomId; });
            }
            else if (event.itemType === _models_select_item_event__WEBPACK_IMPORTED_MODULE_3__["SelectItemEvent"].Type.RoomClose) {
                if (_this.selectedRoom.id == event.payload.roomId) {
                    _this.unselectRoom();
                }
            }
            else if (event.itemType === _models_select_item_event__WEBPACK_IMPORTED_MODULE_3__["SelectItemEvent"].Type.CloseAllSelectedItems && event.payload.model !== 'room') {
                _this.unselectRoom();
            }
        });
        return _this;
    }
    RoomsComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    RoomsComponent.prototype.processLoadedState = function () {
        var _this = this;
        var state = this.getState();
        for (var key in state) {
            this[key] = state[key];
        }
        this.loadRoom(this.rooms.find(function (r) { return r.id == _this.selectedRoom.id; }), true);
    };
    RoomsComponent.prototype.loadRooms = function (force) {
        var _this = this;
        if (force === void 0) { force = false; }
        this.modelService.getRooms().subscribe(function (rooms) {
            _this.rooms = rooms;
            _this.processLoadedState();
            if (force) {
                if (_this.selectedRoom !== null) {
                    var selectedRoomId_1 = _this.selectedRoom.id;
                    _this.selectedRoom = _this.rooms.find(function (r) { return r.id == selectedRoomId_1; });
                    _this.loadRoom(_this.selectedRoom);
                }
            }
        });
    };
    RoomsComponent.prototype.unselectRoom = function () {
        this.selectedRoom = null;
    };
    RoomsComponent.prototype.loadRoom = function (room, initial) {
        if (initial === void 0) { initial = false; }
        this.selectedRoom = room;
        this.selectItemService.emit(new _models_select_item_event__WEBPACK_IMPORTED_MODULE_3__["SelectItemEvent"](_models_select_item_event__WEBPACK_IMPORTED_MODULE_3__["SelectItemEvent"].Type.RoomSelect, {
            room: room,
            initial: initial
        }));
    };
    RoomsComponent.prototype.createNewRoom = function (newRoomName) {
        var _this = this;
        this.newRoom.title = newRoomName;
        this.modelService.createRoom(this.newRoom).subscribe(function (room) {
            _this.rooms.push(room);
            _this.loadRoom(room);
            _this.modalRef.hide();
            _this.newRoom = new _models_room__WEBPACK_IMPORTED_MODULE_2__["Room"]();
            _this.roomsContainer.scrollTop = _this.roomsContainer.scrollHeight;
        });
    };
    RoomsComponent.prototype.ngOnInit = function () {
        this.loadRooms();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('roomsList'),
        __metadata("design:type", Object)
    ], RoomsComponent.prototype, "roomsContainer", void 0);
    __decorate([
        _storage__WEBPACK_IMPORTED_MODULE_7__["bindToComponentState"],
        __metadata("design:type", _models_room__WEBPACK_IMPORTED_MODULE_2__["Room"])
    ], RoomsComponent.prototype, "selectedRoom", void 0);
    RoomsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'rooms',
            template: __webpack_require__(/*! ./rooms.component.html */ "./src/app/rooms/rooms.component.html"),
            styles: [__webpack_require__(/*! ../common/object-list.component.css */ "./src/app/common/object-list.component.css")],
        }),
        __metadata("design:paramtypes", [_model_service__WEBPACK_IMPORTED_MODULE_1__["ModelService"],
            _select_item_service__WEBPACK_IMPORTED_MODULE_4__["SelectItemService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsModalService"]])
    ], RoomsComponent);
    return RoomsComponent;
}(_models_state__WEBPACK_IMPORTED_MODULE_6__["State"]));



/***/ }),

/***/ "./src/app/select-item.service.ts":
/*!****************************************!*\
  !*** ./src/app/select-item.service.ts ***!
  \****************************************/
/*! exports provided: SelectItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectItemService", function() { return SelectItemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _models_select_item_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/select-item-event */ "./src/app/models/select-item-event.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SelectItemService = /** @class */ (function () {
    function SelectItemService() {
        this._event = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.event$ = this._event.asObservable();
    }
    SelectItemService.prototype.emitEventOfType = function (type) {
        this.emit(new _models_select_item_event__WEBPACK_IMPORTED_MODULE_2__["SelectItemEvent"](type, {}));
    };
    SelectItemService.prototype.emitImageChooserEvent = function () {
        this.emitEventOfType(_models_select_item_event__WEBPACK_IMPORTED_MODULE_2__["SelectItemEvent"].Type.ImageChooserApply);
    };
    SelectItemService.prototype.emit = function (selectItem) {
        this._event.next(selectItem);
    };
    SelectItemService.prototype.emitCloseAll = function (model) {
        this._event.next(new _models_select_item_event__WEBPACK_IMPORTED_MODULE_2__["SelectItemEvent"](_models_select_item_event__WEBPACK_IMPORTED_MODULE_2__["SelectItemEvent"].Type.CloseAllSelectedItems, { model: model }));
    };
    SelectItemService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], SelectItemService);
    return SelectItemService;
}());



/***/ }),

/***/ "./src/app/services/language.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/language.service.ts ***!
  \**********************************************/
/*! exports provided: LanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
/* harmony import */ var _models_select_item_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/select-item-event */ "./src/app/models/select-item-event.ts");
/* harmony import */ var _select_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../select-item.service */ "./src/app/select-item.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LanguageService = /** @class */ (function () {
    function LanguageService(selectItemService) {
        var _this = this;
        this.selectItemService = selectItemService;
        this.language = 1;
        this.selectItemService.event$.subscribe(function (event) {
            if (event.itemType === _models_select_item_event__WEBPACK_IMPORTED_MODULE_0__["SelectItemEvent"].Type.LanguageChange) {
                _this.language = event.payload.language;
            }
        });
    }
    LanguageService.prototype.getLanguage = function () {
        return this.language;
    };
    LanguageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_select_item_service__WEBPACK_IMPORTED_MODULE_1__["SelectItemService"]])
    ], LanguageService);
    return LanguageService;
}());



/***/ }),

/***/ "./src/app/settings-list/settings-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/settings-list/settings-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "select {\n  margin: 10px;\n  width: -webkit-fill-available;\n}\n"

/***/ }),

/***/ "./src/app/settings-list/settings-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/settings-list/settings-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<select [(ngModel)]=\"selectedDomain\" class=\"form-control form-control-lg\">\n  <option *ngFor='let domain of domains' [value]=\"domain.id\">{{domain.title}}</option>\n</select>\n<div *ngFor='let groupTitle in groupedSettings[selectedDomain]' class='navbar-selector-item' (click)=\"loadGroup(groupTitle)\"\n     [ngClass]=\"{'active':groupTitle==selectedGroupTitle}\"> {{groupTitle}} </div>"

/***/ }),

/***/ "./src/app/settings-list/settings-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/settings-list/settings-list.component.ts ***!
  \**********************************************************/
/*! exports provided: SettingsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsListComponent", function() { return SettingsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages.service */ "./src/app/pages.service.ts");
/* harmony import */ var _models_select_item_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/select-item-event */ "./src/app/models/select-item-event.ts");
/* harmony import */ var _select_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../select-item.service */ "./src/app/select-item.service.ts");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../settings.service */ "./src/app/settings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsListComponent = /** @class */ (function () {
    function SettingsListComponent(pageService, selectItemService, settingsService) {
        this.pageService = pageService;
        this.selectItemService = selectItemService;
        this.settingsService = settingsService;
        this.settingsLoaded = false;
        this.domainsLoaded = false;
        this.selectedDomain = 1;
        this.selectedGroupTitle = null;
    }
    SettingsListComponent.prototype.loadGroup = function (groupTitle) {
        this.selectedGroupTitle = groupTitle;
        var group = this.groupedSettings[this.selectedDomain][groupTitle];
        this.selectItemService.emit(new _models_select_item_event__WEBPACK_IMPORTED_MODULE_2__["SelectItemEvent"](_models_select_item_event__WEBPACK_IMPORTED_MODULE_2__["SelectItemEvent"].Type.SettingsGroup, {
            groupTitle: groupTitle,
            groupData: group
        }));
    };
    SettingsListComponent.prototype.loadSettings = function () {
        this.getSettings();
        for (var _i = 0, _a = this.domains; _i < _a.length; _i++) {
            var domain = _a[_i];
            this.getSettings(domain.id);
        }
    };
    ;
    SettingsListComponent.prototype.getSettings = function (siteId) {
        var _this = this;
        this.settingsService.getSettings(siteId)
            .subscribe(function (settings) {
            _this.groupedSettings[siteId ? siteId : 0] = settings;
            _this.settingsLoaded = true;
        });
    };
    SettingsListComponent.prototype.getDomains = function () {
        var _this = this;
        this.pageService.getDomains()
            .subscribe(function (domains) {
            _this.domains = domains;
            _this.domainsLoaded = true;
            _this.loadSettings();
        });
    };
    SettingsListComponent.prototype.ngOnInit = function () {
        this.groupedSettings = [];
        this.getDomains();
    };
    SettingsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'settings-list',
            template: __webpack_require__(/*! ./settings-list.component.html */ "./src/app/settings-list/settings-list.component.html"),
            styles: [__webpack_require__(/*! ./settings-list.component.css */ "./src/app/settings-list/settings-list.component.css")]
        }),
        __metadata("design:paramtypes", [_pages_service__WEBPACK_IMPORTED_MODULE_1__["PagesService"],
            _select_item_service__WEBPACK_IMPORTED_MODULE_3__["SelectItemService"],
            _settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"]])
    ], SettingsListComponent);
    return SettingsListComponent;
}());



/***/ }),

/***/ "./src/app/settings.service.ts":
/*!*************************************!*\
  !*** ./src/app/settings.service.ts ***!
  \*************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsService = /** @class */ (function () {
    function SettingsService(http) {
        this.http = http;
        this.settingsUrl = '/api/settings';
    }
    SettingsService.prototype.getSettings = function (siteId) {
        return this.http.get(this.settingsUrl + (siteId ? '?site_id=' + siteId : ''));
    };
    SettingsService.prototype.save = function (item) {
        return this.http.put(this.settingsUrl + '/' + item.id, item).subscribe();
    };
    SettingsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.css":
/*!*************************************************!*\
  !*** ./src/app/settings/settings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".settings-container {\n  overflow: hidden;\n}\n.settings-sub-group {\n  width: 900px;\n  margin: 20px;\n  border: 1px solid #000;\n}\n.settings-sub-group header {\n  background: #f8efc0;\n}\n"

/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"settings-container\">\n    <div class=\"settings-sub-group\" *ngFor=\"let subGroupTitle in groupSettings\">\n        <header>{{subGroupTitle}}</header>\n        <section class=\"settings-list\">\n            <div *ngFor=\"let item of groupSettings[subGroupTitle]\">\n                <app-page-editor-field [title]=\"item.key\" [params]=\"item\" [valueSet]=\"item\" [valueKey]=\"'value'\"></app-page-editor-field>\n            </div>\n        </section>\n    </div>\n    <button (click)=\"save()\">save</button>\n</div>"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages.service */ "./src/app/pages.service.ts");
/* harmony import */ var _select_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../select-item.service */ "./src/app/select-item.service.ts");
/* harmony import */ var _models_select_item_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/select-item-event */ "./src/app/models/select-item-event.ts");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../settings.service */ "./src/app/settings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(pageService, selectItemService, settinsService) {
        var _this = this;
        this.pageService = pageService;
        this.selectItemService = selectItemService;
        this.settinsService = settinsService;
        this.groupSettings = null;
        selectItemService.event$.subscribe(function (event) {
            if (event.itemType === _models_select_item_event__WEBPACK_IMPORTED_MODULE_3__["SelectItemEvent"].Type.SettingsGroup) {
                _this.groupSettings = event.payload.groupData;
                _this.initialValues = [];
                for (var subGroupTitle in _this.groupSettings) {
                    for (var _i = 0, _a = _this.groupSettings[subGroupTitle]; _i < _a.length; _i++) {
                        var item = _a[_i];
                        _this.initialValues[item.id] = item.value;
                    }
                }
                console.log('ivaules:');
                console.log(_this.initialValues);
            }
        });
    }
    SettingsComponent.prototype.save = function () {
        for (var subGroupTitle in this.groupSettings) {
            for (var _i = 0, _a = this.groupSettings[subGroupTitle]; _i < _a.length; _i++) {
                var item = _a[_i];
                if (this.initialValues[item.id] !== item.value) {
                    this.settinsService.save(item);
                }
            }
        }
    };
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/settings/settings.component.css"), __webpack_require__(/*! ../page-editor-field/page-editor-field.component.css */ "./src/app/page-editor-field/page-editor-field.component.css")],
        }),
        __metadata("design:paramtypes", [_pages_service__WEBPACK_IMPORTED_MODULE_1__["PagesService"],
            _select_item_service__WEBPACK_IMPORTED_MODULE_2__["SelectItemService"],
            _settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/storage.ts":
/*!****************************!*\
  !*** ./src/app/storage.ts ***!
  \****************************/
/*! exports provided: bindToComponentState, getFromLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindToComponentState", function() { return bindToComponentState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFromLocalStorage", function() { return getFromLocalStorage; });
function bindToComponentState(target, property) {
    var val;
    return {
        set: function (value) {
            val = value;
            this.setStateProperty(property, value);
        },
        get: function () {
            return val;
        },
        enumerable: true,
        configurable: true
    };
}
;
function getFromLocalStorage(key) {
    if (localStorage[key] === undefined) {
        return [];
    }
    return JSON.parse(localStorage[key]);
}


/***/ }),

/***/ "./src/app/sub-menu/pages/pages.component.css":
/*!****************************************************!*\
  !*** ./src/app/sub-menu/pages/pages.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bordered-section {\n  border: 1px solid #444;\n  margin: 5px;\n}\n.shadowed {\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);\n}\n.put-right {\n  position: absolute;\n  right: 11px;\n  left: 350px;\n  top: 17px;\n  max-height: 100%;\n  overflow-y: auto;\n}\n:host {\n  width: 100%;\n  display: block;\n  overflow: hidden;\n  position: relative;\n}\n"

/***/ }),

/***/ "./src/app/sub-menu/pages/pages.component.html":
/*!*****************************************************!*\
  !*** ./src/app/sub-menu/pages/pages.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<pages-list></pages-list>"

/***/ }),

/***/ "./src/app/sub-menu/pages/pages.component.ts":
/*!***************************************************!*\
  !*** ./src/app/sub-menu/pages/pages.component.ts ***!
  \***************************************************/
/*! exports provided: SubMenuPagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubMenuPagesComponent", function() { return SubMenuPagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sub_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sub-menu.component */ "./src/app/sub-menu/sub-menu.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SubMenuPagesComponent = /** @class */ (function (_super) {
    __extends(SubMenuPagesComponent, _super);
    function SubMenuPagesComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubMenuPagesComponent.prototype.ngOnInit = function () {
    };
    SubMenuPagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sub-menu-pages',
            template: __webpack_require__(/*! ./pages.component.html */ "./src/app/sub-menu/pages/pages.component.html"),
            styles: [__webpack_require__(/*! ./pages.component.css */ "./src/app/sub-menu/pages/pages.component.css")],
        })
    ], SubMenuPagesComponent);
    return SubMenuPagesComponent;
}(_sub_menu_component__WEBPACK_IMPORTED_MODULE_1__["SubMenuComponent"]));



/***/ }),

/***/ "./src/app/sub-menu/settings/settings.component.css":
/*!**********************************************************!*\
  !*** ./src/app/sub-menu/settings/settings.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bordered-section {\n  border: 1px solid #444;\n  margin: 5px;\n}\n.shadowed {\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);\n}\n.put-right {\n  position: absolute;\n  right: 11px;\n  left: 350px;\n  top: 17px;\n  max-height: 100%;\n  overflow-y: auto;\n}\n:host {\n  width: 100%;\n  display: block;\n  overflow: hidden;\n  position: relative;\n}\n"

/***/ }),

/***/ "./src/app/sub-menu/settings/settings.component.html":
/*!***********************************************************!*\
  !*** ./src/app/sub-menu/settings/settings.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<settings-list></settings-list>"

/***/ }),

/***/ "./src/app/sub-menu/settings/settings.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/sub-menu/settings/settings.component.ts ***!
  \*********************************************************/
/*! exports provided: SubMenuSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubMenuSettingsComponent", function() { return SubMenuSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sub_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sub-menu.component */ "./src/app/sub-menu/sub-menu.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SubMenuSettingsComponent = /** @class */ (function (_super) {
    __extends(SubMenuSettingsComponent, _super);
    function SubMenuSettingsComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubMenuSettingsComponent.prototype.ngOnInit = function () {
    };
    SubMenuSettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sub-menu-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/sub-menu/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/sub-menu/settings/settings.component.css")],
        })
    ], SubMenuSettingsComponent);
    return SubMenuSettingsComponent;
}(_sub_menu_component__WEBPACK_IMPORTED_MODULE_1__["SubMenuComponent"]));



/***/ }),

/***/ "./src/app/sub-menu/sub-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/sub-menu/sub-menu.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bordered-section {\n  border: 1px solid #444;\n  margin: 5px;\n}\n.shadowed {\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);\n}\n.put-right {\n  position: absolute;\n  right: 11px;\n  left: 350px;\n  top: 17px;\n  max-height: 100%;\n  overflow-y: auto;\n}\n.sub-menu {\n  background-color: #fff;\n  position: relative;\n}\n.sub-menu .navbar-selector-item {\n  border: none!important;\n}\n.triangle.top {\n  top: 0;\n  right: 50%;\n  position: absolute;\n  content: '';\n  display: block;\n  width: 10px;\n  height: 10px;\n  background: #fff;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  z-index: 1;\n  margin-top: calc(-10px/2);\n}\n.sub-menu-items {\n  display: none;\n}\n.active + .sub-menu-items {\n  display: initial;\n}\n.menu-items {\n  padding-left: 0;\n  background-color: #eee;\n}\n.menu-items li {\n  text-align: center;\n}\n.menu-items li a {\n  color: #444;\n  width: 100%;\n}\n.menu-items li a.active {\n  background-color: #bbb;\n}\n"

/***/ }),

/***/ "./src/app/sub-menu/sub-menu.component.html":
/*!**************************************************!*\
  !*** ./src/app/sub-menu/sub-menu.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sub-menu\">\n  <div class=\"triangle top\" *ngIf=\"subMenu !== null &&\n  (subMenu.getType() === 'pages' ||\n   subMenu.getType() === 'settings')\">\n  </div>\n  <sub-menu-pages *ngIf=\"subMenu !== null && subMenu.getType() === 'pages'\"></sub-menu-pages>\n  <sub-menu-settings *ngIf=\"subMenu !== null && subMenu.getType() === 'settings'\"></sub-menu-settings>\n</div>"

/***/ }),

/***/ "./src/app/sub-menu/sub-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/sub-menu/sub-menu.component.ts ***!
  \************************************************/
/*! exports provided: SubMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubMenuComponent", function() { return SubMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_sub_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/sub-menu */ "./src/app/models/sub-menu.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubMenuComponent = /** @class */ (function () {
    function SubMenuComponent() {
    }
    SubMenuComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_sub_menu__WEBPACK_IMPORTED_MODULE_1__["SubMenu"])
    ], SubMenuComponent.prototype, "subMenu", void 0);
    SubMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sub-menu',
            template: __webpack_require__(/*! ./sub-menu.component.html */ "./src/app/sub-menu/sub-menu.component.html"),
            styles: [__webpack_require__(/*! ./sub-menu.component.css */ "./src/app/sub-menu/sub-menu.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], SubMenuComponent);
    return SubMenuComponent;
}());



/***/ }),

/***/ "./src/app/trainer-editor/trainer-editor.component.html":
/*!**************************************************************!*\
  !*** ./src/app/trainer-editor/trainer-editor.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"object-editor\" [ngClass]=\"{active: trainer !== null}\">\n  <div class=\"close\" (click)=\"close()\">\n    <i class=\"fa fa-window-close\" aria-hidden=\"true\"></i>\n  </div>\n  <div *ngIf=\"trainer !== null\">\n    <div class=\"field name\">\n      <span class=\"label\">Имя тренера</span>\n      <input type=\"text\" [(ngModel)]=\"trainer.name\">\n    </div>\n\n    <div class=\"field vk\">\n      <span class=\"label\"><input type=\"checkbox\" [checked]=\"trainer.has_vk\" (change)=\"trainer.has_vk = 1 - trainer.has_vk\"> <a target=\"_blank\" href=\"{{trainer.vk_link}}\">VK</a></span>\n      <input type=\"text\" [(ngModel)]=\"trainer.vk_link\" [disabled]=\"!trainer.has_vk\">\n    </div>\n    <div class=\"field fb\">\n      <span class=\"label\"><input type=\"checkbox\" [checked]=\"trainer.has_fb\" (change)=\"trainer.has_fb = 1 - trainer.has_fb\"> <a target=\"_blank\" href=\"{{trainer.fb_link}}\">FB</a></span>\n      <input type=\"text\" [(ngModel)]=\"trainer.fb_link\" [disabled]=\"!trainer.has_fb\">\n    </div>\n    <div class=\"field inst\">\n      <span class=\"label\"><input type=\"checkbox\" [checked]=\"trainer.has_inst\" (change)=\"trainer.has_inst = 1 - trainer.has_inst\"> <a target=\"_blank\" href=\"{{trainer.inst_link}}\">Insta</a></span>\n      <input type=\"text\" [(ngModel)]=\"trainer.inst_link\" [disabled]=\"!trainer.has_inst\">\n    </div>\n\n\n    <div class=\"field\">\n      <span class=\"label\">Изображение</span>\n      <img width=\"200px\" src=\"//hotel/{{trainer.img_src}}\">\n      <button (click)=\"openModal(imageChoose, {class: 'large-popup'})\">Browse</button>\n    </div>\n\n    <div class=\"field\">\n      <span class=\"label\">Должность</span>\n      <input [(ngModel)]=\"trainer.position\">\n    </div>\n\n    <div class=\"field\">\n      <span class=\"label\">В 2 строки</span>\n      <span [ngSwitch]=\"language\">\n          <input *ngSwitchCase=\"1\" type=\"checkbox\" [(ngModel)]=\"trainer.two_lines_position\">\n          <input *ngSwitchCase=\"2\" type=\"checkbox\" [(ngModel)]=\"trainer.two_lines_position_en\">\n      </span>\n    </div>\n\n    <div class=\"field\">\n      <span class=\"label\">Описание</span>\n      <textarea ngxTrumbowygEditor [(ngModel)]=\"trainer.description\"></textarea>\n    </div>\n\n    <div class=\"field\">\n      <span class=\"label\">Путь URL</span>\n      <input [(ngModel)]=\"trainer.alias\">\n    </div>\n\n\n    <div class=\"buttons\">\n      <button class=\"ripple module-control-button-element default\" (click)=\"save()\">Сохранить</button>\n      <button class=\"ripple module-control-button-element delete\" (click)=\"openModal(confirmDelete)\">Удалить</button>\n    </div>\n  </div>\n</div>\n<ng-template #imageChoose>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Выберите изображение</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <app-image-chooser (selectedImageId)=\"selectImage($event)\"></app-image-chooser>\n    <button class=\"btn btn-primary\" (click)=\"selectItemService.emitImageChooserEvent(); modalRef.hide();\">выбор</button>\n    <button class=\"btn btn-danger\" (click)=\"modalRef.hide()\">отмена</button>\n  </div>\n</ng-template>\n<ng-template #confirmDelete>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Вы точно хотите удалить этого тренера?</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <button class=\"btn btn-primary\" (click)=\"modalRef.hide()\">отмена</button>\n    <button class=\"btn btn-danger\" (click)=\"delete()\">да, удалить</button>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/trainer-editor/trainer-editor.component.ts":
/*!************************************************************!*\
  !*** ./src/app/trainer-editor/trainer-editor.component.ts ***!
  \************************************************************/
/*! exports provided: TrainerEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainerEditorComponent", function() { return TrainerEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_select_item_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/select-item-event */ "./src/app/models/select-item-event.ts");
/* harmony import */ var _select_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../select-item.service */ "./src/app/select-item.service.ts");
/* harmony import */ var _models_trainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/trainer */ "./src/app/models/trainer.ts");
/* harmony import */ var _model_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model.service */ "./src/app/model.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TrainerEditorComponent = /** @class */ (function () {
    function TrainerEditorComponent(selectItemService, modelService, modalService) {
        var _this = this;
        this.selectItemService = selectItemService;
        this.modelService = modelService;
        this.modalService = modalService;
        this.language = 1;
        this.selectItemService.event$.subscribe(function (event) {
            if (event.itemType === _models_select_item_event__WEBPACK_IMPORTED_MODULE_1__["SelectItemEvent"].Type.TrainerSelect) {
                _this.trainer = event.payload.trainer;
                if (!event.payload.initial) {
                    _this.selectItemService.emitCloseAll('trainer');
                }
            }
            else if (event.itemType === _models_select_item_event__WEBPACK_IMPORTED_MODULE_1__["SelectItemEvent"].Type.CloseAllSelectedItems && event.payload.model !== 'trainer') {
                _this.close();
            }
            else if (event.itemType === _models_select_item_event__WEBPACK_IMPORTED_MODULE_1__["SelectItemEvent"].Type.LanguageChange) {
                _this.language = event.payload.language;
            }
        });
    }
    TrainerEditorComponent.prototype.selectImage = function (image) {
        this.trainer.img_id = image.id;
        this.trainer.img_src = image.filename;
    };
    TrainerEditorComponent.prototype.openModal = function (template, options) {
        this.modalRef = this.modalService.show(template, options);
    };
    TrainerEditorComponent.prototype.close = function () {
        if (this.trainer !== null) {
            this.selectItemService.emit(new _models_select_item_event__WEBPACK_IMPORTED_MODULE_1__["SelectItemEvent"](_models_select_item_event__WEBPACK_IMPORTED_MODULE_1__["SelectItemEvent"].Type.TrainerClose, {
                trainerId: this.trainer.id
            }));
        }
        this.trainer = null;
    };
    TrainerEditorComponent.prototype.save = function () {
        var trainerItem = Object.setPrototypeOf(this.trainer, _models_trainer__WEBPACK_IMPORTED_MODULE_3__["Trainer"].prototype);
        this.modelService.saveTrainer(trainerItem);
    };
    TrainerEditorComponent.prototype.delete = function () {
        var _this = this;
        this.modelService.deleteTrainer(this.trainer)
            .subscribe(function () {
            var trainerId = _this.trainer.id;
            _this.trainer = null;
            _this.modalRef.hide();
            _this.selectItemService.emit(new _models_select_item_event__WEBPACK_IMPORTED_MODULE_1__["SelectItemEvent"](_models_select_item_event__WEBPACK_IMPORTED_MODULE_1__["SelectItemEvent"].Type.RoomRemove, {
                trainerId: trainerId
            }));
        });
    };
    TrainerEditorComponent.prototype.dropped = function (file) {
        this.newImageFile = file;
        //this.cropper.setImage(this.newImageFile.content);
    };
    TrainerEditorComponent.prototype.cancelImage = function () {
        this.newImageFile = null;
    };
    TrainerEditorComponent.prototype.fileOver = function (event) {
        console.log(event);
    };
    TrainerEditorComponent.prototype.fileLeave = function (event) {
        console.log(event);
    };
    TrainerEditorComponent.prototype.ngOnInit = function () {
        this.trainer = null;
        this.newImageFile = null;
    };
    TrainerEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'trainer-editor',
            template: __webpack_require__(/*! ./trainer-editor.component.html */ "./src/app/trainer-editor/trainer-editor.component.html"),
            styles: [__webpack_require__(/*! ../common/object-editor.component.css */ "./src/app/common/object-editor.component.css")],
        }),
        __metadata("design:paramtypes", [_select_item_service__WEBPACK_IMPORTED_MODULE_2__["SelectItemService"],
            _model_service__WEBPACK_IMPORTED_MODULE_4__["ModelService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsModalService"]])
    ], TrainerEditorComponent);
    return TrainerEditorComponent;
}());



/***/ }),

/***/ "./src/app/trainers/trainers.component.html":
/*!**************************************************!*\
  !*** ./src/app/trainers/trainers.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n    <div class=\"module-list\">\n        <ul class=\"object-list-element\" *ngIf=\"trainers !== null\" [ngClass]=\"{active: selectedTrainer !== null}\" #trainersList>\n            <li class=\"object-item\" *ngFor=\"let trainer of trainers\" (click)=\"loadTrainer(trainer)\" [ngClass]=\"{active: this.selectedTrainer && trainer.id == selectedTrainer.id}\">\n                <h2 class=\"object-name\">{{trainer.name | wordCountLimit: 2 }}</h2>\n            </li>\n        </ul>\n        <div class=\"toolbar-element\">\n            <div (click)=\"openModal(createTrainer)\"><i class=\"fa fa-plus\"></i></div>\n            <div (click)=\"openModal(reorderTrainers)\"><i class=\"fa fa-bars\"></i></div>\n        </div>\n    </div>\n    <div class=\"module-editor module-editor-visible\" [ngClass]=\"{'visible': selectedTrainer != null}\">\n        <trainer-editor></trainer-editor>\n    </div>\n</div>\n<ng-template #reorderTrainers>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Поменять местами</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <bs-sortable *ngIf=\"trainers\"\n                     [(ngModel)]=\"trainers\"\n                     itemClass=\"sortable-item\"\n                     itemActiveClass=\"sortable-item-active\"\n                     placeholderItem=\"Drag here\"\n                     placeholderClass=\"placeholderStyle\"\n                     wrapperClass=\"sortable-wrapper\"\n                     fieldName=\"name\"\n        ></bs-sortable>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"reorderApply();modalRef.hide();\">Да</button>\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modalRef.hide()\">Отмена</button>\n    </div>\n</ng-template>\n\n<ng-template #createTrainer>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Создать нового тренера</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div>\n            Введите имя вашего любимого тренера:\n        </div>\n        <div>\n            <input type=\"text\" #newTrainerName>\n        </div>\n        <div>\n            <button class=\"btn btn-primary\" (click)=\"createNewTrainer(newTrainerName.value)\">создать</button>\n        </div>\n    </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/trainers/trainers.component.ts":
/*!************************************************!*\
  !*** ./src/app/trainers/trainers.component.ts ***!
  \************************************************/
/*! exports provided: TrainersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainersComponent", function() { return TrainersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model.service */ "./src/app/model.service.ts");
/* harmony import */ var _models_trainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/trainer */ "./src/app/models/trainer.ts");
/* harmony import */ var _models_select_item_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/select-item-event */ "./src/app/models/select-item-event.ts");
/* harmony import */ var _select_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../select-item.service */ "./src/app/select-item.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _models_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/state */ "./src/app/models/state.ts");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../storage */ "./src/app/storage.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TrainersComponent = /** @class */ (function (_super) {
    __extends(TrainersComponent, _super);
    function TrainersComponent(modelService, selectItemService, modalService) {
        var _this = _super.call(this) || this;
        _this.modelService = modelService;
        _this.selectItemService = selectItemService;
        _this.modalService = modalService;
        _this.newTrainer = new _models_trainer__WEBPACK_IMPORTED_MODULE_2__["Trainer"]();
        selectItemService.event$.subscribe(function (event) {
            if (event.itemType === _models_select_item_event__WEBPACK_IMPORTED_MODULE_3__["SelectItemEvent"].Type.TrainerRemove) {
                _this.trainers = _this.trainers.filter(function (t) { return t.id !== event.payload.trainerId; });
            }
            else if (event.itemType === _models_select_item_event__WEBPACK_IMPORTED_MODULE_3__["SelectItemEvent"].Type.LanguageChange) {
                _this.loadTrainers(true);
            }
            else if (event.itemType === _models_select_item_event__WEBPACK_IMPORTED_MODULE_3__["SelectItemEvent"].Type.TrainerClose) {
                if (_this.selectedTrainer.id == event.payload.trainerId) {
                    _this.unselectTrainer();
                }
            }
        });
        return _this;
    }
    TrainersComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    TrainersComponent.prototype.processLoadedState = function () {
        var _this = this;
        var state = this.getState();
        for (var key in state) {
            this[key] = state[key];
        }
        this.loadTrainer(this.trainers.find(function (t) { return t.id == _this.selectedTrainer.id; }), true);
    };
    TrainersComponent.prototype.reorderApply = function () {
        this.modelService.reorderApply('trainer', this.trainers);
    };
    TrainersComponent.prototype.loadTrainers = function (force) {
        var _this = this;
        if (force === void 0) { force = false; }
        this.modelService.getTrainers().subscribe(function (trainers) {
            trainers.sort(function (a, b) {
                return a.n - b.n;
            });
            _this.trainers = trainers;
            _this.processLoadedState();
            if (force) {
                if (_this.selectedTrainer !== null) {
                    var selectedTrainerId_1 = _this.selectedTrainer.id;
                    _this.selectedTrainer = _this.trainers.find(function (t) { return t.id == selectedTrainerId_1; });
                    _this.loadTrainer(_this.selectedTrainer);
                }
            }
        });
    };
    TrainersComponent.prototype.unselectTrainer = function () {
        this.selectedTrainer = null;
    };
    TrainersComponent.prototype.loadTrainer = function (trainer, initial) {
        if (initial === void 0) { initial = false; }
        this.selectedTrainer = trainer;
        this.selectItemService.emit(new _models_select_item_event__WEBPACK_IMPORTED_MODULE_3__["SelectItemEvent"](_models_select_item_event__WEBPACK_IMPORTED_MODULE_3__["SelectItemEvent"].Type.TrainerSelect, {
            trainer: trainer,
            initial: initial
        }));
    };
    TrainersComponent.prototype.createNewTrainer = function (newTrainerName) {
        var _this = this;
        this.newTrainer.name = newTrainerName;
        this.modelService.createTrainer(this.newTrainer).subscribe(function (trainer) {
            _this.trainers.push(trainer);
            _this.loadTrainer(trainer);
            _this.modalRef.hide();
            _this.newTrainer = new _models_trainer__WEBPACK_IMPORTED_MODULE_2__["Trainer"]();
            _this.trainersContainer.scrollTop = _this.trainersContainer.scrollHeight;
        });
    };
    TrainersComponent.prototype.ngOnInit = function () {
        this.loadTrainers();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('trainersList'),
        __metadata("design:type", Object)
    ], TrainersComponent.prototype, "trainersContainer", void 0);
    __decorate([
        _storage__WEBPACK_IMPORTED_MODULE_7__["bindToComponentState"],
        __metadata("design:type", _models_trainer__WEBPACK_IMPORTED_MODULE_2__["Trainer"])
    ], TrainersComponent.prototype, "selectedTrainer", void 0);
    TrainersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'trainers',
            template: __webpack_require__(/*! ./trainers.component.html */ "./src/app/trainers/trainers.component.html"),
            styles: [__webpack_require__(/*! ../common/object-list.component.css */ "./src/app/common/object-list.component.css")],
        }),
        __metadata("design:paramtypes", [_model_service__WEBPACK_IMPORTED_MODULE_1__["ModelService"],
            _select_item_service__WEBPACK_IMPORTED_MODULE_4__["SelectItemService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsModalService"]])
    ], TrainersComponent);
    return TrainersComponent;
}(_models_state__WEBPACK_IMPORTED_MODULE_6__["State"]));



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/bezhitsa.com/admin/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map