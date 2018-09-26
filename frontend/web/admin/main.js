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
/* harmony import */ var _trainings_trainings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./trainings/trainings.component */ "./src/app/trainings/trainings.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _need_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./need-auth-guard */ "./src/app/need-auth-guard.ts");
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
        },
        canActivate: [_need_auth_guard__WEBPACK_IMPORTED_MODULE_10__["NeedAuthGuard"]]
    },
    {
        path: 'pages',
        component: _pages_pages_component__WEBPACK_IMPORTED_MODULE_2__["PagesComponent"],
        data: {
            name: 'Страницы'
        },
        canActivate: [_need_auth_guard__WEBPACK_IMPORTED_MODULE_10__["NeedAuthGuard"]]
    },
    {
        path: 'trainers',
        component: _trainers_trainers_component__WEBPACK_IMPORTED_MODULE_4__["TrainersComponent"],
        data: {
            name: 'Тренеры'
        },
        canActivate: [_need_auth_guard__WEBPACK_IMPORTED_MODULE_10__["NeedAuthGuard"]]
    },
    {
        path: 'rooms',
        component: _rooms_rooms_component__WEBPACK_IMPORTED_MODULE_5__["RoomsComponent"],
        data: {
            name: 'Номера'
        },
        canActivate: [_need_auth_guard__WEBPACK_IMPORTED_MODULE_10__["NeedAuthGuard"]]
    },
    {
        path: 'trainings',
        component: _trainings_trainings_component__WEBPACK_IMPORTED_MODULE_7__["TrainingsComponent"],
        data: {
            name: 'Тренировки'
        },
        canActivate: [_need_auth_guard__WEBPACK_IMPORTED_MODULE_10__["NeedAuthGuard"]]
    },
    {
        path: 'restaurant',
        component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["RestaurantMenuComponent"],
        data: {
            name: 'Меню ресторана'
        },
        canActivate: [_need_auth_guard__WEBPACK_IMPORTED_MODULE_10__["NeedAuthGuard"]]
    },
    {
        path: 'settings',
        component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"],
        data: {
            name: 'Настройки'
        },
        canActivate: [_need_auth_guard__WEBPACK_IMPORTED_MODULE_10__["NeedAuthGuard"]]
    },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
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

module.exports = "/* Application-wide Styles */\n.bordered-section {\n  border: 1px solid #444;\n  margin: 5px;\n}\n.shadowed {\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);\n}\n.put-right {\n  position: absolute;\n  right: 11px;\n  left: 350px;\n  top: 17px;\n  max-height: 100%;\n  overflow-y: auto;\n}\n.sub-menu {\n  background-color: #fff;\n  position: relative;\n}\n.sub-menu .navbar-selector-item {\n  border: none!important;\n}\n.triangle.top {\n  top: 0;\n  right: 50%;\n  position: absolute;\n  content: '';\n  display: block;\n  width: 10px;\n  height: 10px;\n  background: #fff;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  z-index: 1;\n  margin-top: calc(-10px/2);\n}\n.sub-menu-items {\n  display: none;\n}\n.active + .sub-menu-items {\n  display: initial;\n}\n.menu-items {\n  padding-left: 0;\n  background-color: #eee;\n}\n.menu-items li {\n  text-align: center;\n}\n.menu-items li a {\n  color: #444;\n  width: 100%;\n}\n.menu-items li a.active {\n  background-color: #bbb;\n}\nh1 {\n  color: #369;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 250%;\n}\nh2,\nh3 {\n  color: #444;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: lighter;\n}\nbody {\n  margin: 2em;\n}\nbody,\ninput[text],\nbutton {\n  color: #888;\n  font-family: Cambria, Georgia;\n}\n/* everywhere else */\n*:not(.fa) {\n  font-family: Arial, Helvetica, sans-serif;\n}\nnav a {\n  text-decoration: none;\n  display: inline-block;\n  background-color: #eee;\n}\nnav a:visited,\na:link {\n  color: #607D8B;\n}\nnav a:hover {\n  color: #039be5;\n  background-color: #CFD8DC;\n}\nnav a.active {\n  color: #039be5;\n}\n.card-header {\n  padding: .15rem .15rem!important;\n}\n.btn-link {\n  text-decoration: none!important;\n  color: #444!important;\n}\naccordion-group .panel.card {\n  margin-bottom: 10px;\n}\n.bordered-section {\n  border: 1px solid #444;\n  margin: 5px;\n}\n.shadowed {\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);\n}\n.put-right {\n  position: absolute;\n  right: 11px;\n  left: 350px;\n  top: 17px;\n  max-height: 100%;\n  overflow-y: auto;\n}\n.toolbar-element {\n  background-color: #fff;\n  text-align: center;\n}\n.toolbar-element div {\n  display: inline-block;\n  border: none;\n  background-color: #fff;\n  padding: 5px;\n}\n.toolbar-element div i {\n  color: #0D47A1;\n  width: 31px;\n  height: 31px;\n  position: relative;\n}\n.toolbar-element div i:before {\n  display: none;\n}\n.toolbar-element div i.fa-plus {\n  background: url('/admin/assets/icons/plus.svg') no-repeat;\n}\n.toolbar-element div i.fa-bars {\n  background: url('/admin/assets/icons/bars.svg') no-repeat 0 3px;\n}\n.module-list {\n  background: #fff;\n}\n.module-list .trainers-list-element,\n.module-list .toolbar-element {\n  display: block;\n}\n.module-editor {\n  background: #fff;\n}\n.module-editor.module-editor-visible:not(.visible) {\n  display: none;\n}\n/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n.switch input {\n  display: none;\n}\n.switch .slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: .4s;\n}\n.switch .slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: .4s;\n}\n.switch .slider.round {\n  border-radius: 34px;\n}\n.switch .slider.round:before {\n  border-radius: 50%;\n}\n.switch input:checked + .slider {\n  background-color: #97a0a7;\n}\n.switch input:focus + .slider {\n  box-shadow: 0 0 1px #97a0a7;\n}\n.switch input:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  transform: translateX(26px);\n}\n.ripple {\n  background-position: center;\n  transition: background 0.8s;\n}\n.ripple:hover {\n  background: rgba(255, 255, 255, 0.1) radial-gradient(circle, transparent 1%, rgba(255, 255, 255, 0.3) 1%) center / 15000%;\n}\n.ripple:active {\n  background-color: rgba(255, 255, 255, 0.1);\n  background-size: 100%;\n  transition: background 0s;\n}\n/**\nбабахаем все стили прямо сюда, временно, разумеется\n*/\ndiv.menu ul {\n  list-style: none;\n}\nbody,\nhtml {\n  min-height: 100%;\n}\nbody {\n  margin: 0;\n  padding: 0;\n}\nbody app-root {\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n}\n.module-wrapper-element {\n  min-height: 100vh;\n  position: relative;\n  flex: 1 1;\n}\n.module-wrapper-element:not(.login) {\n  margin-left: 250px;\n  margin-top: 50px;\n}\n.module-wrapper-element.login {\n  background: url('/admin/assets/img/login_form_bg.png') no-repeat;\n  background-size: cover;\n  display: inline-flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\nheader.admin-header {\n  background-color: #000;\n  height: 50px;\n  right: 0;\n  top: 0;\n  position: fixed;\n  left: 0;\n  z-index: 90;\n  box-shadow: 0 0 22px rgba(0, 0, 0, 0.5);\n}\n.alert-element {\n  position: fixed;\n  right: 10px;\n  top: 60px;\n  width: 200px;\n  background-color: #eee;\n  z-index: 999;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n  display: none;\n}\n.alert-element .message {\n  padding: 10px;\n}\n.alert-element .close {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n}\n.admin-content-wrapper {\n  height: 100%;\n  background-color: #dcdcdc;\n  overflow: hidden;\n  flex: 1 0 auto;\n  z-index: 1;\n  display: flex;\n}\n.admin-content-wrapper > .wrapper {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 100%;\n}\n.admin-content-wrapper > .wrapper > .menu {\n  flex: 0 0;\n}\n.admin-content-wrapper > .wrapper > .content {\n  flex: 1 1;\n}\n.admin-content-wrapper .wrapper .menu {\n  height: 100%;\n  background-color: #eee;\n  min-width: 200px;\n  float: left;\n}\n.navbar-selector-item {\n  border-bottom: 1px solid #444;\n  padding: 10px 20px;\n  text-align: left;\n}\n.navbar-selector-item:first-of-type {\n  border-top: 1px solid #444;\n}\n.navbar-selector-item.active {\n  position: relative;\n  background-color: #c5c5c5;\n}\n.menu-selector-item a {\n  padding: 10px 20px;\n  background-color: #d6d6d6;\n}\n.module-menu-element {\n  width: 320px;\n}\n.module-menu-element > div:not(.module-panel) {\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);\n}\n.module-menu-element h3 {\n  font-size: 20px;\n  margin-left: 16px;\n  margin-top: 24px;\n}\n.module-menu-element .module-panel {\n  margin-top: 10px;\n  margin-left: 15px;\n  display: inline-flex;\n  flex-direction: row;\n  width: 100%;\n}\n.page-editor .module-panel .save {\n  margin-right: 0!important;\n}\n.page-editor .module-panel .view {\n  margin: 0 10px;\n  padding: 8px;\n}\n.module-content-element {\n  position: absolute;\n  right: 11px;\n  left: 350px;\n  top: 17px;\n  max-height: 100%;\n  overflow-y: auto;\n}\n.large-popup {\n  width: 80%;\n  max-width: none;\n}\n.admin-menu-element {\n  box-shadow: 4px 0 24px rgba(0, 0, 0, 0.15);\n  left: 0;\n  top: 50px;\n  bottom: 0;\n  position: fixed;\n  width: 250px;\n  z-index: 90;\n}\n.switch {\n  top: 6px;\n}\n.language-selector-label {\n  display: inline-block;\n  top: -12px;\n  position: relative;\n  margin: 0 10px;\n}\n.language-selector {\n  height: 50px;\n  display: inline-block;\n  vertical-align: top;\n}\n.user-area {\n  height: 50px;\n  display: inline-block;\n  position: relative;\n  line-height: 50px;\n  vertical-align: top;\n  margin: 0 18px;\n  cursor: pointer;\n}\n.module-control-button-element {\n  background-color: #fff;\n  border: none;\n  height: 52px;\n  padding: 0 20px;\n  margin-right: 18px;\n  flex: 0 0;\n  color: #000;\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);\n}\n.module-control-button-element.default {\n  background-color: #4a90e2;\n  color: #fff;\n}\n.module-control-button-element.cancel {\n  background-color: #888;\n  color: #fff;\n}\n.module-control-button-element.delete {\n  background-color: #bd0e0e;\n  color: #fff;\n}\n.page-editor .module-editor {\n  position: absolute;\n  right: 11px;\n  left: 350px;\n  top: 17px;\n  max-height: 100%;\n  overflow-y: auto;\n}\ntrainers:not(.integrated) .module-list,\nrooms:not(.integrated) .module-list,\ntrainings:not(.integrated) .module-list {\n  float: left;\n  margin-left: 10px;\n  margin-right: 10px;\n}\ntrainers:not(.integrated) .module-editor,\nrooms:not(.integrated) .module-editor,\ntrainings:not(.integrated) .module-editor {\n  overflow: hidden;\n}\n.modal-dialog.vertical {\n  min-width: 700px!important;\n}\n[hidden] {\n  display: none !important;\n}\n.form-control-inline {\n  width: initial;\n  display: inline-block;\n}\n.modal-dialog {\n  width: -webkit-min-content;\n  width: -moz-min-content;\n  width: min-content;\n  min-width: 500px;\n}\n.fast-image-editor-popup .modal-body {\n  height: auto!important;\n}\nselect.form-control,\ninput.form-control {\n  border-radius: 0!important;\n  height: 30px!important;\n  padding: 0!important;\n  padding-left: 6px!important;\n}\nselect.form-control:focus,\ninput.form-control:focus {\n  border-color: #ced4da;\n  -o-box-shadow: none;\n  box-shadow: none;\n}\ninput.color {\n  display: inline-block;\n  width: 30px!important;\n  height: 30px;\n  outline: none;\n  border: 2px solid #757575;\n  border-radius: 2px;\n}\n.modal-dialog.image-chooser-popup {\n  width: 90%!important;\n  max-width: none!important;\n}\nmat-checkbox {\n  margin-right: 10px;\n  margin-left: 10px;\n}\n.mat-checkbox-checked.mat-primary .mat-checkbox-background,\n.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background {\n  background-color: #4a90e2!important;\n}\n.trumbowyg-box {\n  margin-top: 0!important;\n  border: 1px solid #a9a9a9!important;\n}\n.trumbowyg-button-pane {\n  background: #eeeeee!important;\n}\n.textarea-field .trumbowyg-box {\n  min-height: 0;\n  height: 200px;\n}\n.sortable-item-unset {\n  display: unset;\n}\n.sortable-item-active img {\n  display: none;\n}\n.sortable-item-active .image-card-wrapper {\n  background-image: url('/admin/assets/img/anyimage.png');\n  background-size: 80% 80%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.2;\n}\ntextarea {\n  width: 100%;\n}\n.sindu_dragger table {\n  background: none!important;\n}\n.field.description .trumbowyg-box,\n.settings .field .trumbowyg-box,\n.field.description .trumbowyg-editor,\n.settings .field .trumbowyg-editor {\n  min-height: auto!important;\n}\ncolor-picker {\n  z-index: 10;\n}\n.language-selector {\n  white-space: nowrap;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert-element\">\n    <div class=\"message\">\n    </div>\n    <span class=\"close\" (click)=\"hideAlert()\">\n    <i class=\"fa fa-close\"></i>\n  </span>\n</div>\n<header class=\"admin-header\" *ngIf=\"isAuthorized()\">\n    <div class=\"row\">\n        <div class=\"col-md-8 col-sm-6 col-6\">\n            <a class=\"header-logo\" href=\"\" title=\"beshitza.ru\">\n                <img src=\"assets/img/logo_header.jpg\">\n            </a>\n        </div>\n        <div class=\"col-md-4 col-sm-6 col-6 text-right\">\n            <span class=\"language-selector\">\n                <span class=\"language-selector-label\">RU</span>\n                <label class=\"switch\">\n                    <input type=\"checkbox\" class=\"switch\" id=\"switch-language\" [ngModel]=\"languageEn\"\n                           (change)=\"toggleLanguage()\">\n                    <span class=\"slider round\"></span>\n                </label>\n                <span class=\"language-selector-label\">EN</span>\n            </span>\n            <span class=\"user-area\">\n                <b>{{getUserName() | titlecase}}</b>, <span (click)=\"logout()\">выйти</span>\n            </span>\n        </div>\n    </div>\n</header>\n<section class=\"admin-content-wrapper\">\n    <div class=\"wrapper\">\n        <div class=\"admin-menu-element\" *ngIf=\"isAuthorized()\">\n            <nav>\n                <ul class=\"menu-items\">\n                    <li *ngFor=\"let item of getMenuItems()\" class=\"menu-selector-item\">\n                        <a routerLinkActive=\"active\" routerLink=\"{{item.getPath()}}\">{{item.getName()}}</a>\n                        <div class=\"sub-menu-items\">\n                            <sub-menu [subMenu]=\"item.getSubmenu()\"></sub-menu>\n                        </div>\n                    </li>\n                </ul>\n            </nav>\n        </div>\n        <div class=\"module-wrapper-element\" [class.login]=\"!isAuthorized()\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</section>"

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
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notification.service */ "./src/app/notification.service.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");
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
    function AppComponent(route, router, menuService, selectItemService, notificationService, auth) {
        this.route = route;
        this.router = router;
        this.menuService = menuService;
        this.selectItemService = selectItemService;
        this.notificationService = notificationService;
        this.auth = auth;
        this.title = 'Админка';
        this.currentMenuContent = null;
        this.currentRoute = null;
        this.languageEn = false;
        this.notificationService.onError(function (event) {
            AppComponent_1.showErrorAlert(event.message);
        });
        this.auth.checkAuth();
    }
    AppComponent_1 = AppComponent;
    AppComponent.prototype.isAuthorized = function () {
        return this.auth.isAuthenticated();
    };
    AppComponent.prototype.hideAlert = function () {
        jquery__WEBPACK_IMPORTED_MODULE_6__('.alert-element').hide();
    };
    AppComponent.prototype.getUserName = function () {
        return this.auth.getUserName();
    };
    AppComponent.prototype.logout = function () {
        this.auth.logout();
    };
    AppComponent.showErrorAlert = function (message) {
        jquery__WEBPACK_IMPORTED_MODULE_6__('.alert-element .message').text(message);
        jquery__WEBPACK_IMPORTED_MODULE_6__('.alert-element').show();
    };
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
    AppComponent = AppComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"],
            _select_item_service__WEBPACK_IMPORTED_MODULE_4__["SelectItemService"],
            _notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"],
            _authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"]])
    ], AppComponent);
    return AppComponent;
    var AppComponent_1;
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
/* harmony import */ var _click_stop_propogation_directive__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./click-stop-propogation.directive */ "./src/app/click-stop-propogation.directive.ts");
/* harmony import */ var _page_editor_tree_item_page_editor_tree_item_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./page-editor-tree-item/page-editor-tree-item.component */ "./src/app/page-editor-tree-item/page-editor-tree-item.component.ts");
/* harmony import */ var ng2_img_cropper__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ng2-img-cropper */ "./node_modules/ng2-img-cropper/index.js");
/* harmony import */ var _image_cropper_image_cropper_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./image-cropper/image-cropper.component */ "./src/app/image-cropper/image-cropper.component.ts");
/* harmony import */ var _sub_menu_images_images_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./sub-menu/images/images.component */ "./src/app/sub-menu/images/images.component.ts");
/* harmony import */ var _focus_directive__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./focus.directive */ "./src/app/focus.directive.ts");
/* harmony import */ var ng2_scroll_to_el__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ng2-scroll-to-el */ "./node_modules/ng2-scroll-to-el/index.js");
/* harmony import */ var _image_chooser_popup_image_chooser_popup_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./image-chooser-popup/image-chooser-popup.component */ "./src/app/image-chooser-popup/image-chooser-popup.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _page_editor_field_extended_page_editor_field_extended_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./page-editor-field-extended/page-editor-field-extended.component */ "./src/app/page-editor-field-extended/page-editor-field-extended.component.ts");
/* harmony import */ var _trainings_editor_trainings_editor_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./trainings-editor/trainings-editor.component */ "./src/app/trainings-editor/trainings-editor.component.ts");
/* harmony import */ var _trainings_trainings_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./trainings/trainings.component */ "./src/app/trainings/trainings.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _need_auth_guard__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./need-auth-guard */ "./src/app/need-auth-guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule_1 = AppModule;
    AppModule.editorOptions = {
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
            ['removeformat']
        ]
    };
    AppModule = AppModule_1 = __decorate([
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
                _sub_menu_images_images_component__WEBPACK_IMPORTED_MODULE_41__["SubMenuImagesComponent"],
                _pages_list_pages_list_component__WEBPACK_IMPORTED_MODULE_18__["PagesListComponent"],
                _settings_list_settings_list_component__WEBPACK_IMPORTED_MODULE_34__["SettingsListComponent"],
                _trainer_editor_trainer_editor_component__WEBPACK_IMPORTED_MODULE_21__["TrainerEditorComponent"],
                _room_editor_room_editor_component__WEBPACK_IMPORTED_MODULE_31__["RoomEditorComponent"],
                _filters_word_count_limit__WEBPACK_IMPORTED_MODULE_23__["WordCountLimit"],
                _filters_values__WEBPACK_IMPORTED_MODULE_24__["Values"],
                _filters_keys__WEBPACK_IMPORTED_MODULE_25__["Keys"],
                _image_chooser_image_chooser_component__WEBPACK_IMPORTED_MODULE_26__["ImageChooserComponent"],
                _ng_for_in_directive__WEBPACK_IMPORTED_MODULE_27__["NgForIn"],
                _page_editor_field_page_editor_field_component__WEBPACK_IMPORTED_MODULE_29__["PageEditorFieldComponent"],
                _page_editor_field_extended_page_editor_field_extended_component__WEBPACK_IMPORTED_MODULE_46__["PageEditorFieldExtendedComponent"],
                _click_stop_propogation_directive__WEBPACK_IMPORTED_MODULE_37__["ClickStopPropagation"],
                _page_editor_tree_item_page_editor_tree_item_component__WEBPACK_IMPORTED_MODULE_38__["PageEditorTreeItemComponent"],
                ng2_img_cropper__WEBPACK_IMPORTED_MODULE_39__["ImageCropperComponent"],
                _image_cropper_image_cropper_component__WEBPACK_IMPORTED_MODULE_40__["CustomImageCropperComponent"],
                _focus_directive__WEBPACK_IMPORTED_MODULE_42__["FocusDirective"],
                _image_chooser_popup_image_chooser_popup_component__WEBPACK_IMPORTED_MODULE_44__["ImageChooserPopupComponent"],
                _trainings_editor_trainings_editor_component__WEBPACK_IMPORTED_MODULE_47__["TrainingsEditorComponent"],
                _trainings_trainings_component__WEBPACK_IMPORTED_MODULE_48__["TrainingsComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_49__["RestaurantMenuComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_50__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                ngx_trumbowyg__WEBPACK_IMPORTED_MODULE_20__["NgxTrumbowygModule"].withConfig(AppModule_1.editorOptions),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalModule"].forRoot(),
                ngx_file_helpers__WEBPACK_IMPORTED_MODULE_22__["FileHelpersModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["TabsModule"].forRoot(),
                ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_28__["AccordionModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["SortableModule"].forRoot(),
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_30__["ColorPickerModule"],
                ng2_scroll_to_el__WEBPACK_IMPORTED_MODULE_43__["ScrollToModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_45__["MatCheckboxModule"],
            ],
            providers: [
                _pages_service__WEBPACK_IMPORTED_MODULE_6__["PagesService"], _menu_service__WEBPACK_IMPORTED_MODULE_8__["MenuService"], _select_item_service__WEBPACK_IMPORTED_MODULE_19__["SelectItemService"], _model_service__WEBPACK_IMPORTED_MODULE_7__["ModelService"], _services_language_service__WEBPACK_IMPORTED_MODULE_33__["LanguageService"], _settings_service__WEBPACK_IMPORTED_MODULE_35__["SettingsService"], _need_auth_guard__WEBPACK_IMPORTED_MODULE_51__["NeedAuthGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            exports: [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalModule"]]
        })
    ], AppModule);
    return AppModule;
    var AppModule_1;
}());



/***/ }),

/***/ "./src/app/authentication.service.ts":
/*!*******************************************!*\
  !*** ./src/app/authentication.service.ts ***!
  \*******************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
        this.baseUrl = '/api';
    }
    AuthenticationService.prototype.isAuthenticated = function () {
        return !!localStorage.getItem('userName');
    };
    AuthenticationService.prototype.getUserName = function () {
        return localStorage.getItem('userName');
    };
    AuthenticationService.prototype.cleanUserDataAnddRedirect = function () {
        localStorage.removeItem('userName');
        localStorage.removeItem('userEmail');
        this.router.navigateByUrl(this.router.createUrlTree(['/login']));
    };
    AuthenticationService.prototype.checkAuth = function () {
        /* this.http.get<any>(`${this.baseUrl}/auth`, {})
             .subscribe(authData => {
                 // login successful if there's a jwt token in the response
                 if (authData.status === 'success' && authData.auth === false) {
                     this.cleanUserDataAnddRedirect();
                 }
             });*/
    };
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post(this.baseUrl + "/login", { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (authData) {
            // login successful if there's a jwt token in the response
            if (authData.status === 'success' && authData.auth === true) {
                localStorage.setItem('userName', authData.userName);
                localStorage.setItem('userEmail', authData.userEmail);
            }
            return authData;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        var _this = this;
        return this.http.post(this.baseUrl + "/logout", {})
            .subscribe(function () {
            _this.cleanUserDataAnddRedirect();
        });
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/click-stop-propogation.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/click-stop-propogation.directive.ts ***!
  \*****************************************************/
/*! exports provided: ClickStopPropagation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickStopPropagation", function() { return ClickStopPropagation; });
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

var ClickStopPropagation = /** @class */ (function () {
    function ClickStopPropagation() {
    }
    ClickStopPropagation.prototype.onClick = function (event) {
        event.stopPropagation();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("click", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ClickStopPropagation.prototype, "onClick", null);
    ClickStopPropagation = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[click-stop-propagation]"
        })
    ], ClickStopPropagation);
    return ClickStopPropagation;
}());



/***/ }),

/***/ "./src/app/common/object-editor.component.css":
/*!****************************************************!*\
  !*** ./src/app/common/object-editor.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".object-editor {\n  padding: 10px 10px;\n  position: relative;\n}\n.object-editor:not(.active) .close {\n  display: none;\n}\n.object-editor .field * {\n  vertical-align: top;\n  margin-bottom: 10px;\n}\n.object-editor .field .label {\n  width: 120px;\n  text-align: left;\n  margin-right: 20px;\n  display: inline-block;\n}\n.object-editor .field input[type=text] {\n  width: 300px;\n}\n.object-editor .close,\n.object-editor .cancel {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n.image-picker {\n  position: relative;\n}\n.image-picker .img-crop img {\n  width: 400px;\n}\n.image-picker [ngxfiledropzone] {\n  border: 5px dashed #eee;\n  padding: 50px;\n  text-align: center;\n  display: inline-block;\n  margin-left: 10px;\n}\n"

/***/ }),

/***/ "./src/app/common/object-list.component.css":
/*!**************************************************!*\
  !*** ./src/app/common/object-list.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::-webkit-scrollbar {\n  width: 0px;\n  /* remove scrollbar space */\n  background: transparent;\n  /* optional: just make scrollbar invisible */\n}\n/* optional: show position indicator in red */\n::-webkit-scrollbar-thumb {\n  background: #FF0000;\n}\n.object-list-element {\n  padding: 0;\n  max-height: 70vh;\n  overflow-y: scroll;\n  min-width: 200px;\n  width: 250px;\n}\n.object-list-element li {\n  list-style: none;\n  padding: 10px 20px;\n  height: 43px;\n}\n.object-list-element li h2 i {\n  float: right;\n}\n.object-name {\n  font-size: 17px;\n  overflow: hidden;\n}\n.object-id {\n  float: left;\n  margin-right: 8px;\n}\n.object-item.active {\n  background-color: #eee;\n}\n"

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
        return value ? value.split(" ").slice(0, count).join(" ") : '';
    };
    WordCountLimit = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'wordCountLimit'
        })
    ], WordCountLimit);
    return WordCountLimit;
}());



/***/ }),

/***/ "./src/app/focus.directive.ts":
/*!************************************!*\
  !*** ./src/app/focus.directive.ts ***!
  \************************************/
/*! exports provided: FocusDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusDirective", function() { return FocusDirective; });
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var FocusDirective = /** @class */ (function () {
    function FocusDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    FocusDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.focusEvent.subscribe(function (event) {
            switch (event) {
                case true:
                    _this.renderer.invokeElementMethod(_this.element.nativeElement, 'focus', []);
                    break;
                case false:
                    _this.renderer.invokeElementMethod(_this.element.nativeElement, 'blur', []);
                    break;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('focus'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FocusDirective.prototype, "focusEvent", void 0);
    FocusDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[focus]'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"]])
    ], FocusDirective);
    return FocusDirective;
}());



/***/ }),

/***/ "./src/app/image-chooser-popup/image-chooser-popup.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/image-chooser-popup/image-chooser-popup.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4 {\n  display: inline-block;\n}\n.modal-dialog {\n  overflow-y: initial !important;\n}\n.modal-body {\n  height: 70vh;\n  overflow-y: auto;\n}\n.modal-body label {\n  margin-right: 10px;\n}\n.modal-header > div:first-child {\n  flex: 1 1;\n}\n.modal-header > div:first-child * {\n  vertical-align: bottom;\n}\n.modal-header > div:first-child h4 {\n  margin-right: 10px;\n}\n.modal-header > div:first-child :nth-child(2) {\n  height: 68px;\n  display: inline-block;\n}\n.modal-footer {\n  text-align: right;\n}\n.toolbar {\n  display: inline-block;\n  width: 300px;\n}\n"

/***/ }),

/***/ "./src/app/image-chooser-popup/image-chooser-popup.component.html":
/*!************************************************************************!*\
  !*** ./src/app/image-chooser-popup/image-chooser-popup.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #imageChooser>\n  <div class=\"modal-header\">\n    <div class=\"pull-left\">\n      <sub-menu-images [inline]=\"true\" [showShowTitles]=\"false\" [fixedImageTypeId]=\"fixedImageTypeId\"></sub-menu-images>\n    </div>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <app-images\n            [preSelectedImageIds]=\"preSelectedImageIds\"\n            [initiallyFilterByTypeId]=\"fixedImageTypeId\"\n            [selectionMode]=\"true\"\n            [multiple]=\"multiple\"\n            (selectedImageId)=\"outputImageId($event)\" (selectedImageIds)=\"outputImageIds($event)\"></app-images>\n  </div>\n  <div class=\"modal-footer\">\n    <div class=\"toolbar\">\n      <button class=\"ripple module-control-button-element default\" (click)=\"imageChoose(); closePopup()\">Выбор</button>\n      <button class=\"ripple module-control-button-element delete\" (click)=\"closePopup()\">Отмена</button>\n    </div>\n  </div>\n</ng-template>\n<ng-template #fastImageEditor>\n  <div class=\"modal-header\">\n    <h4>Описание фотографии в слайдере</h4>\n  </div>\n  <div class=\"modal-body\">\n    <label>Описание:</label>\n    <input [(ngModel)]=\"editingImage.description\">\n  </div>\n\n  <div class=\"modal-footer\">\n    <div class=\"toolbar\">\n      <button class=\"ripple module-control-button-element default\" (click)=\"this.saveEditingImage();\">Сохранить</button>\n      <button class=\"ripple module-control-button-element delete\" (click)=\"closePopup()\">Отмена</button>\n    </div>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/image-chooser-popup/image-chooser-popup.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/image-chooser-popup/image-chooser-popup.component.ts ***!
  \**********************************************************************/
/*! exports provided: ImageChooserPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageChooserPopupComponent", function() { return ImageChooserPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _select_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../select-item.service */ "./src/app/select-item.service.ts");
/* harmony import */ var _model_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model.service */ "./src/app/model.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImageChooserPopupComponent = /** @class */ (function () {
    function ImageChooserPopupComponent(modalService, modelService, selectItemService) {
        this.modalService = modalService;
        this.modelService = modelService;
        this.selectItemService = selectItemService;
        this.multiple = false;
        this.fixedImageTypeId = null;
        this.selectedImageId = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedImageIds = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.preSelectedImageIds = [];
        this.editingImage = null;
    }
    ImageChooserPopupComponent.prototype.showPopup = function () {
        this.modalRef = this.modalService.show(this.imageChooser, {
            class: 'image-chooser-popup'
        });
    };
    ImageChooserPopupComponent.prototype.saveEditingImage = function () {
        var self = this;
        this.modelService.saveImage(this.editingImage, null, function () {
            self.closePopup();
        });
    };
    ImageChooserPopupComponent.prototype.showFastEditor = function (image) {
        console.log(this.editingImage);
        this.editingImage = image;
        this.modalRef = this.modalService.show(this.fastImageEditor, {
            class: 'fast-image-editor-popup'
        });
    };
    ImageChooserPopupComponent.prototype.imageChoose = function () {
        this.selectItemService.emitImageChooserEvent();
    };
    ImageChooserPopupComponent.prototype.closePopup = function () {
        this.modalRef.hide();
    };
    ImageChooserPopupComponent.prototype.outputImageId = function (imageId) {
        this.selectedImageId.emit(imageId);
    };
    ImageChooserPopupComponent.prototype.outputImageIds = function (imageIds) {
        this.selectedImageIds.emit(imageIds);
    };
    ImageChooserPopupComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ImageChooserPopupComponent.prototype, "multiple", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ImageChooserPopupComponent.prototype, "fixedImageTypeId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ImageChooserPopupComponent.prototype, "selectedImageId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ImageChooserPopupComponent.prototype, "selectedImageIds", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ImageChooserPopupComponent.prototype, "preSelectedImageIds", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('imageChooser'),
        __metadata("design:type", Object)
    ], ImageChooserPopupComponent.prototype, "imageChooser", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fastImageEditor'),
        __metadata("design:type", Object)
    ], ImageChooserPopupComponent.prototype, "fastImageEditor", void 0);
    ImageChooserPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-chooser-popup',
            template: __webpack_require__(/*! ./image-chooser-popup.component.html */ "./src/app/image-chooser-popup/image-chooser-popup.component.html"),
            styles: [__webpack_require__(/*! ./image-chooser-popup.component.css */ "./src/app/image-chooser-popup/image-chooser-popup.component.css")],
        }),
        __metadata("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            _model_service__WEBPACK_IMPORTED_MODULE_3__["ModelService"],
            _select_item_service__WEBPACK_IMPORTED_MODULE_2__["SelectItemService"]])
    ], ImageChooserPopupComponent);
    return ImageChooserPopupComponent;
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

module.exports = "<div class=\"image-chooser-element\">\n    <div>\n        <div class=\"images\">\n            <div class=\"content module-editor\" *ngIf=\"images !== null\">\n\n                <div class=\"image-card\">\n                    <div class=\"new-image image-wrapper\" accept=\"image/*\" ngxFileDropzone (fileDrop)=\"dropped($event)\" ngxFilePicker (filePick)=\"dropped($event)\">\n                        Добавьте фото<br>\n                        <i class=\"plus\"></i><br>\n                    </div>\n                </div>\n\n                <div *ngFor=\"let image of images; let i = index;\" class=\"image-card\" (click)=\"markImage(i)\" [hidden]=\"i >= limit\">\n                    <div class='image-card-wrapper' *ngIf=\"i < limit;\">\n                        <img #imagesList src=\"/{{image.filename}}\" (load)=\"detectOrientation(i)\">\n                        <div class=\"short-description\">\n                            {{image.description | wordCountLimit: 15 }}\n                        </div>\n                    </div>\n                    <div class=\"tick\" [class.ticked]=\"multiple ? preSelectedImageIds[image.id] : preSelectedImageId === image.id\"></div>\n                </div>\n\n                <div class=\"image-card\" (click)=\"loadMore()\" *ngIf=\"limit < images.length\">\n                    <div class=\"load-more image-wrapper\">\n                        Показать<br>ещё\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div #bottom></div>"

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
/* harmony import */ var _models_cms_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/cms-image */ "./src/app/models/cms-image.ts");
/* harmony import */ var _model_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model.service */ "./src/app/model.service.ts");
/* harmony import */ var _select_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../select-item.service */ "./src/app/select-item.service.ts");
/* harmony import */ var _models_select_item_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/select-item-event */ "./src/app/models/select-item-event.ts");
/* harmony import */ var ng2_scroll_to_el__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-scroll-to-el */ "./node_modules/ng2-scroll-to-el/index.js");
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
    function ImageChooserComponent(modelService, selectItemService, scrollService) {
        var _this = this;
        this.modelService = modelService;
        this.selectItemService = selectItemService;
        this.scrollService = scrollService;
        this.preSelectedImageId = null;
        this.preSelectedImageIds = [];
        this.limit = 10;
        this.multiple = false;
        this.fixedImageTypeId = null;
        this.selectedImageId = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedImageIds = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectItemService.event$.subscribe(function (event) {
            if (event.itemType === _models_select_item_event__WEBPACK_IMPORTED_MODULE_4__["SelectItemEvent"].Type.ImageChooserApply) {
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
        this.selectItemService.event$.subscribe(function (event) {
            if (event.itemType === _models_select_item_event__WEBPACK_IMPORTED_MODULE_4__["SelectItemEvent"].Type.ApplyFilter) {
                var filter = event.payload.filter;
                _this.loadImages(filter);
            }
        });
    }
    ImageChooserComponent.prototype.dropped = function ($event) {
    };
    ImageChooserComponent.prototype.loadMore = function () {
        if (this.images && this.limit < this.images.length) {
            this.limit += 14;
        }
        this.scrollService.scrollTo(this.bottom.nativeElement);
    };
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
    ImageChooserComponent.prototype.loadImages = function (filter) {
        var _this = this;
        if (filter === void 0) { filter = null; }
        this.modelService.getImages(filter).subscribe(function (images) {
            images.forEach(function (rawImage, index) { images[index] = _models_cms_image__WEBPACK_IMPORTED_MODULE_1__["CmsImage"].fromRaw(rawImage); });
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('bottom'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ImageChooserComponent.prototype, "bottom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ImageChooserComponent.prototype, "multiple", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ImageChooserComponent.prototype, "fixedImageTypeId", void 0);
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
        __metadata("design:paramtypes", [_model_service__WEBPACK_IMPORTED_MODULE_2__["ModelService"],
            _select_item_service__WEBPACK_IMPORTED_MODULE_3__["SelectItemService"],
            ng2_scroll_to_el__WEBPACK_IMPORTED_MODULE_5__["ScrollToService"]])
    ], ImageChooserComponent);
    return ImageChooserComponent;
}());



/***/ }),

/***/ "./src/app/image-cropper/image-cropper.component.css":
/*!***********************************************************!*\
  !*** ./src/app/image-cropper/image-cropper.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/image-cropper/image-cropper.component.html":
/*!************************************************************!*\
  !*** ./src/app/image-cropper/image-cropper.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img-cropper #cropper [image]=\"{}\" [settings]=\"cropperSettings\"></img-cropper>"

/***/ }),

/***/ "./src/app/image-cropper/image-cropper.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/image-cropper/image-cropper.component.ts ***!
  \**********************************************************/
/*! exports provided: CustomImageCropperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomImageCropperComponent", function() { return CustomImageCropperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_cms_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/cms-image */ "./src/app/models/cms-image.ts");
/* harmony import */ var ngx_img_cropper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-img-cropper */ "./node_modules/ngx-img-cropper/index.js");
/* harmony import */ var _select_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../select-item.service */ "./src/app/select-item.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomImageCropperComponent = /** @class */ (function () {
    function CustomImageCropperComponent(selectItemService) {
        this.selectItemService = selectItemService;
        this.imageWidth = null;
        this.imageHeight = null;
        this.editingImageObject = new Image();
        this.toDataURL = function (url) { return fetch(url)
            .then(function (response) { return response.blob(); })
            .then(function (blob) { return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onloadend = function () { return resolve(reader.result); };
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        }); }); };
        this.cropperSettings = new ngx_img_cropper__WEBPACK_IMPORTED_MODULE_2__["CropperSettings"]();
        this.cropperSettings.preserveSize = true;
        this.cropperSettings.noFileInput = true;
        this.cropperSettings.cropOnResize = false;
        this.cropperSettings.minWidth = 500;
        this.cropperSettings.minHeight = 500;
        this.cropperSettings.keepAspect = true;
    }
    CustomImageCropperComponent.prototype.loadPreviewData = function (image) {
        var _this = this;
        this.toDataURL('/' + image.filename).then(function (data) {
            _this.editingImageObject.src = data.toString();
            var that = _this;
            _this.editingImageObject.addEventListener("load", function () {
                console.log(this.naturalWidth + ' x ' + this.naturalHeight);
                that.imageWidth = this.naturalWidth;
                that.imageHeight = this.naturalHeight;
                that.updateCropperSettings();
            });
        });
    };
    CustomImageCropperComponent.prototype.updateCropperSettings = function () {
        var imageAspectRatio = this.imageWidth / this.imageHeight;
        this.cropper.cropper.resizeCanvas(650, 650 / imageAspectRatio);
        this.cropperSettings.minWidth = this.imageWidth / 5;
        this.cropperSettings.minHeight = this.imageHeight / 5;
        this.cropper.cropper.setImage(this.editingImageObject);
    };
    CustomImageCropperComponent.prototype.ngOnInit = function () {
        this.cropperSettings.width = 100;
        this.cropperSettings.height = 100 / this.aspectRatio;
        this.loadPreviewData(this.image);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_cms_image__WEBPACK_IMPORTED_MODULE_1__["CmsImage"])
    ], CustomImageCropperComponent.prototype, "image", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CustomImageCropperComponent.prototype, "aspectRatio", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('cropper'),
        __metadata("design:type", ngx_img_cropper__WEBPACK_IMPORTED_MODULE_2__["ImageCropperComponent"])
    ], CustomImageCropperComponent.prototype, "cropper", void 0);
    CustomImageCropperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-cropper',
            template: __webpack_require__(/*! ./image-cropper.component.html */ "./src/app/image-cropper/image-cropper.component.html"),
            styles: [__webpack_require__(/*! ./image-cropper.component.css */ "./src/app/image-cropper/image-cropper.component.css")]
        }),
        __metadata("design:paramtypes", [_select_item_service__WEBPACK_IMPORTED_MODULE_3__["SelectItemService"]])
    ], CustomImageCropperComponent);
    return CustomImageCropperComponent;
}());



/***/ }),

/***/ "./src/app/images/images.component.css":
/*!*********************************************!*\
  !*** ./src/app/images/images.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bordered-section {\n  border: 1px solid #444;\n  margin: 5px;\n}\n.shadowed {\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);\n}\n.put-right {\n  position: absolute;\n  right: 11px;\n  left: 350px;\n  top: 17px;\n  max-height: 100%;\n  overflow-y: auto;\n}\n:host {\n  height: 100%;\n  overflow: hidden;\n}\n:host .module-editor {\n  background: none;\n  padding: 8px;\n}\n:host .module-editor:not(.show-descriptions) .short-description {\n  display: none;\n}\n:host .module-editor.show-descriptions .image-card {\n  padding-top: 14.5%;\n}\n.tick {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 15px;\n  height: 15px;\n  border: 1px solid #000;\n  background-color: #fff;\n}\n.tick.ticked:after {\n  content: '';\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  top: 2px;\n  left: 2px;\n  border-radius: 5px;\n  background-color: #000;\n}\n.wrapper {\n  height: 100%;\n}\n.wrapper.one .image-card {\n  width: 99%;\n  padding-top: 99%;\n}\n.wrapper.two .image-card {\n  width: 49%;\n  padding-top: 49%;\n}\n.wrapper.four .image-card {\n  width: 24%;\n  padding-top: 24%;\n}\n.image-card {\n  display: inline-block;\n  width: 11.5%;\n  padding-top: 11.5%;\n  position: relative;\n  margin: 0.5%;\n}\n.image-card:hover .short-description {\n  height: initial;\n  white-space: initial;\n  line-height: 22px;\n  padding: 13px;\n  padding-left: 12px;\n}\n.image-card:before {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  bottom: 0;\n  left: 5px;\n  content: \"\";\n  border-radius: 6px;\n  box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.4);\n}\n.image-card .plus {\n  width: 31px;\n  height: 31px;\n  position: relative;\n  background: url(/admin/assets/icons/plus.svg) no-repeat;\n  font-size: 0;\n  margin-top: 11px;\n  display: block;\n}\n.image-card.ticked .image-card-wrapper:after {\n  position: absolute;\n  content: '';\n  width: 100%;\n  height: 100%;\n  border: 4px solid #4a90e2;\n  display: block;\n}\n.image-card .image-card-wrapper {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  background-color: #fff;\n  border-radius: 6px;\n  box-sizing: border-box;\n}\n.image-card:before {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  bottom: 0;\n  left: 5px;\n  content: \"\";\n  border-radius: 6px;\n  box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.4);\n}\n.image-card img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translateY(-50%) translateX(-50%);\n          transform: translateY(-50%) translateX(-50%);\n}\n.image-card img.landscape {\n  height: 100%!important;\n}\n.image-card img.portrait {\n  width: 100%!important;\n}\n.image-card .new-image,\n.image-card .load-more {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #fff;\n  border-radius: 6px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.image-card .short-description {\n  position: absolute;\n  bottom: 0;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 100%;\n  overflow: hidden;\n  padding: 12px;\n  background-color: #fff;\n  box-shadow: 0 -4px 7px rgba(0, 0, 0, 0.3);\n}\n[ngxFileDropzone] {\n  text-align: center;\n}\n.image-for-crop {\n  width: 100%;\n}\n.tags-list .tag {\n  border-radius: 18px;\n  background-color: #f8efc0;\n  color: #000;\n  padding: 5px;\n  margin: 0 4px;\n  padding-left: 10px;\n  padding-right: 20px;\n  display: inline-block;\n  position: relative;\n  margin-bottom: 8px;\n}\n.tags-list .tag .close {\n  top: 11px;\n  right: 6px;\n  font-size: 0.7em;\n  position: absolute;\n}\n.tags-list .tag.plus {\n  padding: 5px 12.34px!important;\n  cursor: pointer;\n}\n.tags-list .tag.input {\n  border: none;\n  padding-left: 10px;\n}\n.tags-list .tag.input:focus {\n  outline: none;\n}\n.image-editor-element .update-image {\n  position: relative;\n  text-align: center;\n  margin: 17px 0;\n}\n.image-editor-element .update-image .wrapper {\n  padding: 10px;\n}\n.image-editor-element .update-image .plus {\n  width: 31px;\n  height: 31px;\n  position: relative;\n  background: url(/admin/assets/icons/plus.svg) no-repeat;\n  font-size: 0;\n  margin-top: 11px;\n  display: inline-block;\n}\n.image-editor-element .update-image:before {\n  position: absolute;\n  top: 2px;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  content: \"\";\n  border-radius: 6px;\n  box-shadow: 0 3px 11px 0 rgba(0, 0, 0, 0.2);\n}\n.image-editor-element textarea {\n  width: 100%;\n  margin-bottom: 9px;\n}\n.image-editor-element .tags-list {\n  margin-bottom: 16px;\n}\n.image-editor-element .tags-list .tag:first-child {\n  margin-left: 0;\n}\n.image-editor-element .redactor {\n  margin-top: 0;\n}\n.image-editor-element .redactor.vertical .left-part {\n  vertical-align: top;\n  max-width: 200px;\n  display: inline-block;\n  margin-right: 16px;\n  float: left;\n}\n.image-editor-element .redactor.vertical .right-part {\n  vertical-align: top;\n  overflow: hidden;\n  padding: 0 9px;\n}\n.image-editor-element .redactor.vertical .right-part .update-image {\n  margin-top: 0!important;\n}\n.image-editor-element .redactor:not(.vertical) .right-part {\n  margin-top: 17px;\n}\nsection {\n  margin-top: 16px;\n}\n.preview-selector a {\n  border-radius: 20px;\n  margin: 10px 5px 10px 5px;\n  background: none;\n  padding: 3px 10px;\n  cursor: pointer;\n  display: inline-block;\n}\n.preview-selector a:first-child {\n  margin-left: 0;\n}\n.preview-selector a.selected {\n  background-color: #f8efc0;\n}\n"

/***/ }),

/***/ "./src/app/images/images.component.html":
/*!**********************************************!*\
  !*** ./src/app/images/images.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #wrapper (window:resize)=\"onResize($event)\" [class]=\"getWrapperClass()\">\n  <div class=\"images\">\n    <!--infiniteScroll-->\n    <!--[infiniteScrollDistance]=\"2\"-->\n    <!--[infiniteScrollThrottle]=\"50\"-->\n    <!--[infiniteScrollContainer]=\"'body'\"-->\n    <!--(scrolled)=\"loadMore()\"-->\n    <div class=\"content module-editor module-editor-full\" [class.show-descriptions]=\"showDescriptions\" *ngIf=\"images !== null\">\n      <div class=\"image-card\">\n          <div class=\"new-image image-wrapper\" accept=\"image/*\" ngxFileDropzone (fileDrop)=\"dropped($event)\" ngxFilePicker (filePick)=\"dropped($event)\">\n            Добавьте фото<br>\n            <i class=\"plus\"></i><br>\n          </div>\n      </div>\n      <div *ngFor=\"let image of images; let i = index;\"\n           class=\"image-card\"\n           (click)=\"this.selectionMode ? markImage(i) : openEditor(image, image.getOrientation)\"\n           [class.ticked]=\"multiple ? preSelectedImagesMap[image.id] : preSelectedImageMap === image.id\"\n           [hidden]=\"i >= limit\"\n      >\n        <div class='image-card-wrapper' *ngIf=\"i < limit;\">\n          <img #imagesList src=\"/{{image.filename}}\" (load)=\"initImageOrientation(i)\">\n          <div class=\"short-description\">\n            {{image.description | wordCountLimit: 15 }}\n          </div>\n        </div>\n      </div>\n      <div class=\"image-card\" (click)=\"loadMore()\" *ngIf=\"limit < images.length\">\n        <div class=\"load-more image-wrapper\">\n          Показать<br>ещё\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div #bottom></div>\n<ng-template #confirmDelete class=\"alert-box\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Подтвердите действиe</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    Удалить фото?\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"ripple module-control-button-element delete\" (click)=\"onConfirmDelete()\">Да</button>\n    <button type=\"button\" class=\"ripple module-control-button-element cancel\" (click)=\"onCancelDelete()\">Нет</button>\n  </div>\n</ng-template>\n\n<ng-template #imageEditor>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Настройки фото</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body image-editor-element\" [class.vertical]=\"editingImage.getOrientation\" *ngIf=\"editingImage !== null\">\n    <!--<tabset>-->\n      <!--<tab heading=\"Общие настройки\" id=\"redactor-tab\">-->\n        <section class=\"redactor\" [class.vertical]=\"editingImage.getOrientation\">\n\n          <div class=\"left-part\">\n            <div [ngSwitch]=\"imageDataForUpdateEditing === null\">\n              <img src=\"/{{editingImage.filename}}\" class=\"image-for-crop\" *ngSwitchCase=\"true\">\n              <img src=\"{{imageDataForUpdateEditing.content}}\" class=\"image-for-crop\" *ngSwitchCase=\"false\">\n            </div>\n          </div>\n\n          <div class=\"right-part\">\n            <div class=\"update-image\" accept=\"image/*\" ngxFileDropzone (fileDrop)=\"droppedForUpdate($event)\" ngxFilePicker (filePick)=\"droppedForUpdate($event)\">\n                <div class=\"wrapper\">\n                  Заменить фото<br>\n                  <i class=\"plus\"></i>\n                </div>\n            </div>\n\n            <textarea [(ngModel)]=\"editingImage.description\"></textarea>\n\n            <div class=\"tags-list\">\n              <div class=\"tag\" *ngFor=\"let tag of editingImage.getTags()\">\n                {{ tag }}\n                <i class=\"fa fa-close close\" (click)=\"removeTag(tag)\"></i>\n              </div>\n              <div *ngIf=\"tagAddingMode === false\" class=\"tag plus\" (click)=\"setTagEditingMode(true)\">+</div>\n              <input *ngIf=\"tagAddingMode === true\"\n                     #newTag class=\"tag input\"\n                     [focus]=\"focusEventEmitter\"\n                     (keyup.enter)=\"addTag(newTag.value)\"\n                     (keyup.space)=\"addTag(newTag.value, true);newTag.value = '';\"\n                     (blur)=\"setTagEditingMode(false)\">\n            </div>\n\n            <div class=\"type\" *ngIf=\"imageTypes !== null\">\n              Тип фото: <select [(ngModel)]=\"editingImage.image_type_id\" class=\"form-control form-control-inline\">\n                <option value=\"null\">Не выбран</option>\n                <option *ngFor=\"let type of imageTypes\" value=\"{{type.id}}\">\n                  {{ type.name }}\n                </option>\n              </select>\n            </div>\n\n            <section>\n              <button class=\"ripple module-control-button-element cancel\" (click)=\"modalRef.hide()\">отмена</button>\n              <button class=\"ripple module-control-button-element default\" (click)=\"saveEditingImage()\">сохранить</button>\n              <button class=\"ripple module-control-button-element delete\" (click)=\"deleteEditingImageWithConfirm()\">удалить</button>\n            </section>\n          </div>\n\n          <div class=\"cropper-zone\">\n\n          </div>\n        </section>\n      <!--</tab>-->\n      <!--<tab heading=\"Превью\" id=\"preview-tab\">-->\n        <!--<section class=\"preview-editor-element\">-->\n\n          <!--<nav class=\"preview-selector\" *ngIf=\"editingImage.image_type_id !== null\">-->\n            <!--<a (click)=\"selectPreview(preview)\" *ngFor=\"let preview of getEditingImagePreviews().previewSettings\" [class.selected]=\"currentPreview != null && preview.id === currentPreview.id\">-->\n             <!--Превью {{preview.width}} x {{preview.height}}-->\n            <!--</a>-->\n          <!--</nav>-->\n          <!--<div innerHTML={{currentPreview.description}}></div>-->\n\n          <!--<div *ngIf=\"currentPreview !== null\">-->\n            <!--<app-image-cropper [hidden]=\"preview.id !== currentPreview.id\" *ngFor=\"let preview of getEditingImagePreviews().previewSettings\" [aspectRatio]=\"preview.width / preview.height\" [image]=\"editingImage\"></app-image-cropper>-->\n          <!--</div>-->\n\n        <!--</section>-->\n      <!--</tab>-->\n    <!--</tabset>-->\n  </div>\n</ng-template>"

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
/* harmony import */ var _models_cms_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/cms-image */ "./src/app/models/cms-image.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _select_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../select-item.service */ "./src/app/select-item.service.ts");
/* harmony import */ var _models_select_item_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/select-item-event */ "./src/app/models/select-item-event.ts");
/* harmony import */ var ng2_scroll_to_el__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-scroll-to-el */ "./node_modules/ng2-scroll-to-el/index.js");
/* harmony import */ var _models_image_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/image-filter */ "./src/app/models/image-filter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};








var ImagesComponent = /** @class */ (function () {
    function ImagesComponent(modelService, modalService, selectItemService, scrollService) {
        var _this = this;
        this.modelService = modelService;
        this.modalService = modalService;
        this.selectItemService = selectItemService;
        this.scrollService = scrollService;
        this.selectionMode = false;
        this.multiple = false;
        this.selectedImageId = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedImageIds = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.images = null;
        this.imageDataForUpdateEditing = null;
        this.currentPreview = null;
        this.tagAddingMode = false;
        this.focusEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.imageTypes = null;
        this.showDescriptions = false;
        this.preSelectedImageMap = null;
        this.preSelectedImagesMap = [];
        this.preSelectedImageIds = [];
        this.actualSize = null;
        this.initiallyFilterByTypeId = null;
        this.limit = 50;
        this.imageDataForUpdateEditing = null;
        this.filter = new _models_image_filter__WEBPACK_IMPORTED_MODULE_7__["ImageFilter"]();
        this.selectItemService.event$.subscribe(function (event) {
            if (event.itemType === _models_select_item_event__WEBPACK_IMPORTED_MODULE_5__["SelectItemEvent"].Type.ApplyFilter) {
                _this.filter = event.payload.filter;
                _this.showDescriptions = _this.filter.showDescriptions;
                console.log(_this.filter);
                _this.loadImages(_this.filter);
            }
            else if (event.itemType === _models_select_item_event__WEBPACK_IMPORTED_MODULE_5__["SelectItemEvent"].Type.LanguageChange) {
                _this.loadImages(_this.filter, true);
            }
            else if (event.itemType === _models_select_item_event__WEBPACK_IMPORTED_MODULE_5__["SelectItemEvent"].Type.ImageChooserApply) {
                if (_this.multiple) {
                    var result = [];
                    var _loop_1 = function (imageId) {
                        if (!_this.preSelectedImagesMap[imageId])
                            return "continue";
                        var image = _this.images.find(function (i) { return i.id === Number(imageId); });
                        if (image !== undefined) {
                            result.push(image);
                        }
                    };
                    for (var imageId in _this.preSelectedImagesMap) {
                        _loop_1(imageId);
                    }
                    if (result.length) {
                        _this.selectedImageIds.emit(result);
                    }
                }
                else {
                    var image = _this.images.find(function (i) { return i.id === Number(_this.preSelectedImageMap); });
                    if (image !== undefined) {
                        _this.selectedImageId.emit(image);
                    }
                }
            }
        });
    }
    ImagesComponent.prototype.onResize = function ($event) {
        this.actualSize = this.wrapper.nativeElement.offsetWidth;
        console.log(this.actualSize);
    };
    ImagesComponent.prototype.loadMore = function () {
        if (this.images && this.limit < this.images.length) {
            this.limit += 14;
        }
        this.scrollService.scrollTo(this.bottom.nativeElement);
    };
    ImagesComponent.prototype.markImage = function (i) {
        var imageId = this.images[i].id;
        if (this.multiple) {
            if (this.preSelectedImagesMap[imageId] === undefined) {
                this.preSelectedImagesMap[imageId] = true;
            }
            else {
                this.preSelectedImagesMap[imageId] = !this.preSelectedImagesMap[imageId];
            }
        }
        else {
            this.preSelectedImageMap = imageId;
        }
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
    ImagesComponent.prototype.loadImages = function (filter, force) {
        var _this = this;
        if (filter === void 0) { filter = null; }
        if (force === void 0) { force = false; }
        if (this.initiallyFilterByTypeId && filter === null) {
            filter = new _models_image_filter__WEBPACK_IMPORTED_MODULE_7__["ImageFilter"]();
            filter.selectedTags = [];
            filter.selectedType = this.imageTypes.find(function (t) { return t.id === _this.initiallyFilterByTypeId; });
        }
        this.modelService.getImages(filter).subscribe(function (images) {
            images.forEach(function (rawImage, index) { images[index] = _models_cms_image__WEBPACK_IMPORTED_MODULE_2__["CmsImage"].fromRaw(rawImage); });
            _this.images = images.reverse();
        });
    };
    ImagesComponent.prototype.getWrapperClass = function () {
        var result = 'wrapper';
        if (this.actualSize < 400) {
            result += ' one';
        }
        if (this.actualSize >= 400 && this.actualSize < 900) {
            result += ' two';
        }
        if (this.actualSize >= 900 && this.actualSize < 1200) {
            result += ' four';
        }
        if (this.actualSize >= 1200) {
            result += ' eight';
        }
        return result;
    };
    ImagesComponent.prototype.load = function () {
        var _this = this;
        this.modelService.getImageTypes().subscribe(function (types) {
            _this.imageTypes = types;
            _this.loadImages();
        });
    };
    ImagesComponent.prototype.openEditor = function (image, orientation) {
        this.editingImage = image;
        if (this.imageTypes !== null) {
            var previews = this.getEditingImagePreviews();
            if (previews && previews.previewSettings[0]) {
                this.selectPreview(previews.previewSettings[0]);
            }
        }
        this.modalRef = this.modalService.show(this.imageEditor, { 'class': (orientation ? 'vertical' : '') });
    };
    ImagesComponent.prototype.calcAspectRatio = function (preview) {
        return preview.width / preview.height;
    };
    ImagesComponent.prototype.getEditingImagePreviews = function () {
        var _this = this;
        return this.imageTypes.find(function (t) { return t.id == _this.editingImage.image_type_id; });
    };
    ImagesComponent.prototype.getAspectRatio = function () {
        return this.currentPreview.width / this.currentPreview.height;
    };
    ImagesComponent.prototype.selectPreview = function (preview) {
        this.currentPreview = preview;
    };
    ImagesComponent.prototype.saveEditingImage = function () {
        var _this = this;
        this.modelService.saveImage(this.editingImage, this.imageDataForUpdateEditing, function (newImage) {
            var index = _this.images.findIndex(function (i) { return i.id === newImage.id; });
            _this.images[index] = _models_cms_image__WEBPACK_IMPORTED_MODULE_2__["CmsImage"].fromRaw(newImage);
        });
    };
    ImagesComponent.prototype.onConfirmDelete = function () {
        this.deleteEditingImage();
        this.modalRefConfirm.hide();
    };
    ImagesComponent.prototype.onCancelDelete = function () {
        this.modalRefConfirm.hide();
    };
    ImagesComponent.prototype.deleteEditingImageWithConfirm = function () {
        this.modalRefConfirm = this.modalService.show(this.confirmDelete);
    };
    ImagesComponent.prototype.deleteEditingImage = function () {
        var _this = this;
        this.modelService.deleteImage(this.editingImage).subscribe(function () {
            _this.modalRef.hide();
            _this.images = _this.images.filter(function (i) { return i.id !== _this.editingImage.id; });
            _this.editingImage = null;
        });
    };
    ImagesComponent.prototype.setTagEditingMode = function (mode) {
        var _this = this;
        this.tagAddingMode = mode;
        setTimeout(function () {
            _this.focusEventEmitter.emit(mode);
        }, 10);
    };
    ImagesComponent.prototype.removeTag = function (tag) {
        this.editingImage.removeTag(tag);
    };
    ImagesComponent.prototype.addTag = function (tag, keepInput) {
        if (keepInput === void 0) { keepInput = false; }
        this.editingImage.addTag(tag);
        this.selectItemService.emitEventOfType(_models_select_item_event__WEBPACK_IMPORTED_MODULE_5__["SelectItemEvent"].Type.NewTag, { tag: tag });
        if (!keepInput) {
            this.setTagEditingMode(false);
        }
    };
    ImagesComponent.prototype.ngOnInit = function () {
        this.load();
        this.actualSize = this.wrapper.nativeElement.offsetWidth;
        console.log(this.preSelectedImageIds);
        try {
            for (var _a = __values(this.preSelectedImageIds), _b = _a.next(); !_b.done; _b = _a.next()) {
                var id = _b.value;
                this.preSelectedImagesMap[id] = true;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var e_1, _c;
    };
    ImagesComponent.prototype.initImageOrientation = function (i) {
        var imageObject = this.images[i];
        var image = this.imageList.toArray()[i].nativeElement;
        var orientation = false;
        if (image.naturalWidth > image.naturalHeight) {
            image.classList.add('landscape');
        }
        else if (image.naturalWidth < image.naturalHeight) {
            image.classList.add('portrait');
            orientation = true;
        }
        imageObject.setupOrientationInfo(orientation);
    };
    ImagesComponent.prototype.dropped = function ($event) {
        var _this = this;
        var content = $event.content;
        this.modelService.createImage($event, this.filter, function (response) {
            if (response.status === 'success') {
                var image = _models_cms_image__WEBPACK_IMPORTED_MODULE_2__["CmsImage"].fromRaw(response.image);
                _this.images.unshift(image);
            }
        });
    };
    ImagesComponent.prototype.droppedForUpdate = function ($event) {
        console.log($event);
        this.imageDataForUpdateEditing = {
            content: $event.content,
            name: $event.name
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ImagesComponent.prototype, "selectionMode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ImagesComponent.prototype, "multiple", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ImagesComponent.prototype, "selectedImageId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ImagesComponent.prototype, "selectedImageIds", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ImagesComponent.prototype, "preSelectedImageIds", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('imagesList'),
        __metadata("design:type", Object)
    ], ImagesComponent.prototype, "imageList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('imageEditor'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], ImagesComponent.prototype, "imageEditor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('confirmDelete'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ImagesComponent.prototype, "confirmDelete", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('newTag'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ImagesComponent.prototype, "newTag", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('bottom'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ImagesComponent.prototype, "bottom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('wrapper'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ImagesComponent.prototype, "wrapper", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ImagesComponent.prototype, "initiallyFilterByTypeId", void 0);
    ImagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-images',
            template: __webpack_require__(/*! ./images.component.html */ "./src/app/images/images.component.html"),
            styles: [__webpack_require__(/*! ./images.component.css */ "./src/app/images/images.component.css")]
        }),
        __metadata("design:paramtypes", [_model_service__WEBPACK_IMPORTED_MODULE_1__["ModelService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _select_item_service__WEBPACK_IMPORTED_MODULE_4__["SelectItemService"],
            ng2_scroll_to_el__WEBPACK_IMPORTED_MODULE_6__["ScrollToService"]])
    ], ImagesComponent);
    return ImagesComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: relative;\n  display: block;\n}\n.login-form {\n  padding: 30px 50px;\n  box-sizing: content-box;\n  width: 400px;\n  margin: 0 auto;\n  background: #E0E0E0;\n  box-shadow: 0 0 27px 0 rgba(142, 127, 127, 0.5);\n  border-radius: 6px;\n  font-family: Lora, sans-serif;\n  font-size: 26px;\n  color: #E0E0E0;\n  text-align: center;\n}\n.login-form .login-logo {\n  width: 95px;\n  margin-bottom: 21px;\n  display: inline-block;\n}\n.login-form .invalid-feedback {\n  position: absolute;\n  background: #fff;\n  border: 1px solid #f00;\n  width: 195px;\n  right: -210px;\n  top: 7px;\n  padding: 0 10px;\n}\n.login-form input {\n  height: 52px!important;\n  padding-left: 18px!important;\n}\n.login-form .field {\n  margin-bottom: 2px;\n  position: relative;\n}\n.login-form button {\n  background: #6681E1;\n  box-shadow: 2px 2px 9px 0 rgba(0, 0, 0, 0.5);\n  /* LOGIN: */\n  font-family: Lora, sans-serif;\n  font-size: 26px;\n  color: #E0E0E0;\n  text-align: center;\n  padding: 5px 50px;\n  border-radius: 1px;\n  margin-top: 28px;\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-form\">\n  <img src=\"assets/img/logo.png\" class=\"login-logo\">\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"field\">\n      <input placeholder=\"login\" id=\"username\" type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n      <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.username.errors.required\">Введите логин</div>\n      </div>\n    </div>\n    <div class=\"field\">\n      <input placeholder=\"password\" id=\"password\" type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n      <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.password.errors.required\">Введите пароль</div>\n      </div>\n    </div>\n    <div class=\"field\">\n      <button [disabled]=\"loading\" class=\"btn btn-primary\">ВОЙТИ</button>\n      <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n    </div>\n    <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    LoginComponent.prototype.isAuthorized = function () {
        return this.authenticationService.isAuthenticated();
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.error = error;
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            selector: 'app-login',
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
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
/* harmony import */ var _models_sub_menu_images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/sub-menu-images */ "./src/app/models/sub-menu-images.ts");
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
        this.menuItems.push(new _models_menu_item__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]('images', 'Изображения', new _models_sub_menu_images__WEBPACK_IMPORTED_MODULE_4__["SubMenuImages"]()));
        this.menuItems.push(new _models_menu_item__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]('pages', 'Страницы', new _models_sub_menu_pages__WEBPACK_IMPORTED_MODULE_2__["SubMenuPages"]()));
        this.menuItems.push(new _models_menu_item__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]('trainers', 'Тренеры', null));
        this.menuItems.push(new _models_menu_item__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]('rooms', 'Номера', null));
        this.menuItems.push(new _models_menu_item__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]('trainings', 'Тренировки', null));
        this.menuItems.push(new _models_menu_item__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]('restaurant', 'Меню ресторана', null));
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

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".restaurant-menu-element .item {\n  margin-bottom: 10px;\n}\n@media screen and (min-width: 1200px) {\n}\n.restaurant-menu-element .item > div {\n  display: flex;\n  flex-direction: row;\n}\n.restaurant-menu-element .item > div .description {\n  line-height: 21px;\n  flex: 0 auto;\n  font-size: 15px;\n  font-family: 'Open Sans', sans-serif;\n}\n.restaurant-menu-element .item > div .price {\n  flex: 1 1;\n  text-align: right;\n  font-size: 15px;\n  font-family: 'Open Sans', sans-serif;\n  padding-right: 10px;\n  line-height: 20px;\n}\n.restaurant-menu-element .tab-list h3 {\n  font-family: 'Acrom-Light', sans-serif;\n}\n.restaurant-menu-element.mobile {\n  margin-bottom: 18px;\n  background-color: #fff;\n  padding: 5px;\n}\n.restaurant-menu-element.mobile > section > header {\n  text-align: center;\n  padding: 10px;\n  background-color: #f9f1dc;\n  font-size: 20px;\n  color: #000;\n  text-transform: uppercase;\n  font-family: 'Acrom-Light', sans-serif;\n}\n.restaurant-menu-element.mobile .menu-category {\n  padding-left: 10px;\n}\n.restaurant-menu-element.mobile .menu-category .item .description {\n  font-size: 15px;\n  color: #000;\n}\n.restaurant-menu-element.mobile .menu-category .item .price {\n  font-size: 15px;\n  color: #000;\n  line-height: 20px;\n}\n.restaurant-menu-element.mobile .menu-category .title {\n  text-transform: uppercase;\n  font-size: 22px;\n  margin: 15px 0;\n  color: #000;\n  font-family: 'Acrom-Regular', sans-serif;\n  text-align: center;\n  margin-left: -10px;\n}\n.restaurant-menu-element.desktop {\n  background-color: #fff;\n  padding: 12px;\n  margin-bottom: 30px;\n}\n@media screen and (min-width: 1200px) {\n  .restaurant-menu-element.desktop header li {\n    height: 55px;\n    line-height: 55px;\n    padding: 0!important;\n  }\n}\n.restaurant-menu-element.desktop .tab-list {\n  white-space: nowrap;\n  font-size: 0;\n}\n.restaurant-menu-element.desktop .tab-list li {\n  display: inline-block;\n  width: 33.3%;\n  text-align: center;\n  padding: 10px;\n  background-color: #eae5cf;\n  font-size: 20px;\n  color: #000;\n  text-transform: uppercase;\n}\n.restaurant-menu-element.desktop .tab-list li.active {\n  background-color: #f9f1dc;\n  color: #000;\n}\n.restaurant-menu-element.desktop .content .tab:not(.active) {\n  display: none;\n}\n.restaurant-menu-element.desktop .content .tab {\n  overflow: hidden;\n}\n.restaurant-menu-element.desktop .content .menu-category {\n  width: 33.3%;\n  display: inline-block;\n  color: #000;\n  font-size: 18px;\n  padding: 20px 0;\n  padding-top: 35px;\n  vertical-align: top;\n  float: left;\n}\n.restaurant-menu-element.desktop .content .menu-category .title {\n  text-transform: uppercase;\n  font-size: 22px;\n  margin-bottom: 25px;\n  font-family: 'Acrom-Regular', sans-serif;\n  text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" *ngIf=\"isReady()\">\n  <div class=\"restaurant-menu-element desktop ng-scope\" ng-controller=\"TabsController as tabs\" ng-init=\"tabs.activeTabIndex = 1\">\n    <header>\n      <ul class=\"tab-list\">\n        <li (click)=\"setActiveTabIndex(catId)\" *ngFor=\"let catId of getCategories()\" [class.active]=\"isActive(catId)\" role=\"button\" tabindex=\"0\" class=\"active\" style=\"\">\n          <h3>\n            {{getCategoryName(catId)}}\n            <span *ngIf=\"isActive(catId) && isEditingAllowed()\" (click)=\"openNewTitlePopup(catId)\">\n              <i class=\"fa fa-plus\"></i>\n            </span>\n            <span *ngIf=\"isActive(catId)\" (click)=\"openReorderTitlesPopup(catId)\">\n              <i class=\"fa fa-bars\"></i>\n            </span>\n          </h3>\n        </li>\n      </ul>\n    </header>\n    <section class=\"content\">\n      <div class=\"tab active\" [class.active]=\"isActive(n)\" *ngFor=\"let n of [1,2,3]\">\n        <div class=\"menu-category\" *ngFor=\"let menuCategoryTitle of getMenuCategories(n)\">\n          <div class=\"title\" (dblclick)=\"openEditTitlePopup(menuCategoryTitle)\">{{menuCategoryTitle}}</div>\n          <div class=\"item\" *ngFor=\"let item of getCategoryItems(n, menuCategoryTitle)\" (dblclick)=\"openEditItemPopup(item)\">\n            <div>\n              <div class=\"description\">{{item.title}}<span class=\"sizes\">{{item.size}}</span></div><div class=\"price\">{{item.price}}р.</div>\n            </div>\n          </div>\n          <div class=\"toolbar-element\">\n            <div (click)=\"openNewItemPopup(n, menuCategoryTitle)\" *ngIf=\"isEditingAllowed()\">\n              <i class=\"fa fa-plus\"></i>\n            </div>\n            <div (click)=\"openReorderPopup(n, menuCategoryTitle)\">\n              <i class=\"fa fa-bars\"></i>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n</div>\n\n<ng-template #newItemPopup>\n  <div class=\"modal-header\" [ngSwitch]=\"isCreatingNewCategory()\">\n      <h4 *ngSwitchCase=\"false\" class=\"modal-title pull-left\">Добавить блюдо в меню</h4>\n      <h4 *ngSwitchCase=\"true\" class=\"modal-title pull-left\">Добавить категорию и блюдо в меню</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"closePopup()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"field\" *ngIf=\"isCreatingNewCategory()\">\n      <label>Название категории</label>\n      <div class=\"input\">\n        <input autofocus placeholder='введите название' type=\"text\" [(ngModel)]=\"newItem.category_title\">\n      </div>\n    </div>\n\n    <div class=\"field\">\n      <label>Название</label>\n      <div class=\"input\">\n        <input type=\"text\" [(ngModel)]=\"newItem.title\">\n      </div>\n    </div>\n    <div class=\"field\">\n      <label>Цена</label>\n      <div class=\"input\">\n        <input type=\"text\" [(ngModel)]=\"newItem.price\">\n      </div>\n    </div>\n    <div class=\"field\">\n      <label>Кол-во</label>\n      <div class=\"input\">\n        <input type=\"text\" [(ngModel)]=\"newItem.size\">\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <div class=\"buttons\">\n      <button type=\"button\" class=\"ripple module-control-button-element default\" (click)=\"addItem()\">Создать</button>\n      <button type=\"button\" class=\"ripple module-control-button-element cancel\" (click)=\"closePopup()\">Отмена</button>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #reorderItemPopup>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Поменять местами</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closePopup()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <bs-sortable *ngIf=\"itemsToSort\"\n                 [(ngModel)]=\"itemsToSort\"\n                 itemClass=\"sortable-item\"\n                 itemActiveClass=\"sortable-item-active\"\n                 placeholderItem=\"Drag here\"\n                 placeholderClass=\"placeholderStyle\"\n                 wrapperClass=\"sortable-wrapper\"\n                 fieldName=\"title\"\n    ></bs-sortable>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"save ripple module-control-button-element default\" (click)=\"reorderApply();\">Да</button>\n    <button type=\"button\" class=\"ripple module-control-button-element cancel\" (click)=\"closePopup()\">Отмена</button>\n  </div>\n</ng-template>\n\n\n<ng-template #reorderTitlePopup>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Поменять местами</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closePopup()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <bs-sortable *ngIf=\"titlesToSort\"\n                 [(ngModel)]=\"titlesToSort\"\n                 itemClass=\"sortable-item\"\n                 itemActiveClass=\"sortable-item-active\"\n                 placeholderItem=\"Drag here\"\n                 placeholderClass=\"placeholderStyle\"\n                 wrapperClass=\"sortable-wrapper\"\n    ></bs-sortable>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"save ripple module-control-button-element default\" (click)=\"reorderTitleApply();\">Да</button>\n    <button type=\"button\" class=\"ripple module-control-button-element cancel\" (click)=\"closePopup()\">Отмена</button>\n  </div>\n</ng-template>\n\n<ng-template #deleteItemConfirmPopup>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Точно удалить?</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closePopup()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"save ripple module-control-button-element default\" (click)=\"deleteItem();\">Да</button>\n    <button type=\"button\" class=\"ripple module-control-button-element cancel\" (click)=\"closePopup()\">Отмена</button>\n  </div>\n</ng-template>\n\n<ng-template #deleteCategoryConfirmPopup>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Точно удалить?</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closePopup()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"save ripple module-control-button-element default\" (click)=\"deleteCategory();\">Да</button>\n        <button type=\"button\" class=\"ripple module-control-button-element cancel\" (click)=\"closePopup()\">Отмена</button>\n    </div>\n</ng-template>\n\n<ng-template #editItemPopup>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Редактировать блюдо в меню</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"closePopup()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"field\">\n      <label>Название</label>\n      <div class=\"input\">\n        <input type=\"text\" [(ngModel)]=\"editingItem.title\">\n      </div>\n    </div>\n    <div class=\"field\">\n      <label>Цена</label>\n      <div class=\"input\">\n        <input type=\"text\" [(ngModel)]=\"editingItem.price\">\n      </div>\n    </div>\n    <div class=\"field\">\n      <label>Кол-во</label>\n      <div class=\"input\">\n        <input type=\"text\" [(ngModel)]=\"editingItem.size\">\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <div class=\"buttons\">\n      <button type=\"button\" class=\"ripple module-control-button-element default\" (click)=\"apply()\">Применить</button>\n      <button type=\"button\" class=\"ripple module-control-button-element delete\" (click)=\"deleteItemWithConfirm(editingItem)\">Удалить</button>\n    </div>\n  </div>\n</ng-template>\n\n\n<ng-template #editTitlePopup>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Действия над категорией</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"closePopup()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"field\">\n            <label>Название категории</label>\n            <div class=\"input\">\n                <input type=\"text\" [(ngModel)]=\"editingTitle\">\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"buttons\">\n            <button type=\"button\" class=\"ripple module-control-button-element default\" (click)=\"changeTitle()\">Переименовать</button>\n            <button type=\"button\" class=\"ripple module-control-button-element delete\" (click)=\"deleteCategoryWithConfirm()\">Удалить</button>\n        </div>\n    </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: RestaurantMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantMenuComponent", function() { return RestaurantMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model.service */ "./src/app/model.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _select_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../select-item.service */ "./src/app/select-item.service.ts");
/* harmony import */ var _models_select_item_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/select-item-event */ "./src/app/models/select-item-event.ts");
/* harmony import */ var _models_restaurant_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/restaurant-menu */ "./src/app/models/restaurant-menu.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};






var RestaurantMenuComponent = /** @class */ (function () {
    function RestaurantMenuComponent(modelService, modalService, selectItemService) {
        var _this = this;
        this.modelService = modelService;
        this.modalService = modalService;
        this.selectItemService = selectItemService;
        this.menuItems = null;
        this.itemsToSort = [];
        this.titlesToSort = [];
        this.editingTitle = null;
        this.editingTitleOld = null;
        this.selectedTabId = 1;
        this.modalRefs = [];
        this.itemToDelete = null;
        this.isNewCategory = false;
        this.selectItemService.event$.subscribe(function (e) {
            if (e.itemType === _models_select_item_event__WEBPACK_IMPORTED_MODULE_4__["SelectItemEvent"].Type.TrainingItemTypeRemove) {
                _this.menuItems = _this.menuItems.filter(function (a) { return a.id !== e.payload.activityTypeId; });
            }
            else if (e.itemType === _models_select_item_event__WEBPACK_IMPORTED_MODULE_4__["SelectItemEvent"].Type.LanguageChange) {
                _this.loadMenuItems(true);
                _this.language = e.payload.language;
            }
        });
    }
    RestaurantMenuComponent.prototype.isEditingAllowed = function () {
        return this.language != 2;
    };
    RestaurantMenuComponent.prototype.openNewTitlePopup = function (catId) {
        this.openNewItemPopup(catId, '', true);
    };
    RestaurantMenuComponent.prototype.isCreatingNewCategory = function () {
        return this.isNewCategory;
    };
    RestaurantMenuComponent.prototype.changeTitle = function () {
        var _this = this;
        this.modelService
            .renameRestaurantMenuCategory(this.editingTitleOld, this.editingTitle)
            .subscribe(function () {
            _this.menuItems
                .filter(function (i) { return i.category_title === _this.editingTitleOld; })
                .forEach(function (item) {
                item.category_title = _this.editingTitle;
            });
            _this.closeAllPopups();
        }, function () { });
    };
    RestaurantMenuComponent.prototype.deleteCategory = function () {
        var _this = this;
        this.modelService
            .deleteRestaurantMenuCategory(this.editingTitleOld)
            .subscribe(function () {
            _this.menuItems = _this.menuItems.filter(function (i) { return i.category_title !== _this.editingTitleOld; });
            _this.closeAllPopups();
        }, function () { });
    };
    RestaurantMenuComponent.prototype.deleteCategoryWithConfirm = function () {
        this.openModal(this.deleteCategoryConfirmPopup);
    };
    RestaurantMenuComponent.prototype.reorderTitleApply = function () {
        var _this = this;
        var currentItems = this.menuItems.filter(function (i) { return i.menu_type === _this.selectedTabId; });
        currentItems.forEach(function (item) {
            item.n = item.n % 1000 + _this.titlesToSort.indexOf(item.category_title) * 1000;
            item.n = item.n % 1000 + _this.titlesToSort.indexOf(item.category_title) * 1000;
        });
        this.menuItems.sort(function (a, b) { return a.n - b.n; });
        this.modelService.reorderApplyByN('restaurantMenu', currentItems);
        this.closeAllPopups();
    };
    RestaurantMenuComponent.prototype.openReorderTitlesPopup = function (catId) {
        this.titlesToSort = this.getMenuCategories(catId);
        this.openModal(this.reorderTitlePopup);
    };
    RestaurantMenuComponent.prototype.openReorderPopup = function (catId, catTitle) {
        this.itemsToSort = this.getCategoryItems(catId, catTitle);
        this.openModal(this.reorderItemPopup);
    };
    RestaurantMenuComponent.prototype.apply = function () {
        var _this = this;
        this.modelService
            .updateRestaurantMenuItem(this.editingItem)
            .subscribe(function () {
            _this.closeAllPopups();
        });
    };
    RestaurantMenuComponent.prototype.deleteItemWithConfirm = function (item) {
        this.itemToDelete = item;
        this.openModal(this.deleteItemConfirmPopup);
    };
    RestaurantMenuComponent.prototype.deleteItem = function () {
        var _this = this;
        this.modelService
            .deleteRestaurantMenuItem(this.itemToDelete)
            .subscribe(function () {
            _this.menuItems = _this.menuItems.filter(function (i) { return i.id !== _this.itemToDelete.id; });
            _this.itemToDelete = null;
            _this.closeAllPopups();
        });
    };
    RestaurantMenuComponent.prototype.openNewItemPopup = function (catId, catTitle, isNewCategory) {
        if (catTitle === void 0) { catTitle = ''; }
        if (isNewCategory === void 0) { isNewCategory = false; }
        this.isNewCategory = isNewCategory;
        this.newItem = _models_restaurant_menu__WEBPACK_IMPORTED_MODULE_5__["RestaurantMenu"].fromRaw({
            menu_type: catId,
            category_title: catTitle,
            title: 'Новое блюдо',
            price: 555,
            size: ''
        });
        this.openModal(this.newItemPopup);
    };
    RestaurantMenuComponent.prototype.openEditItemPopup = function (item) {
        this.editingItem = item;
        this.openModal(this.editItemPopup);
    };
    RestaurantMenuComponent.prototype.openEditTitlePopup = function (title) {
        this.editingTitle = title;
        this.editingTitleOld = title;
        this.openModal(this.editTitlePopup);
    };
    RestaurantMenuComponent.prototype.addItem = function () {
        var _this = this;
        var newN = this.getMenuCategories(this.selectedTabId).length * 1000;
        if (!this.isNewCategory) {
            newN = Math.max.apply(Math, __spread(this.menuItems.filter(function (i) { return i.category_title == _this.newItem.category_title; }).map(function (i) { return i.n; }))) + 1;
        }
        this.isNewCategory = false;
        this.newItem.n = newN;
        this.modelService
            .createRestaurantMenuItem(this.newItem)
            .subscribe(function (item) {
            _this.menuItems.push(item);
            _this.closePopup();
        });
    };
    RestaurantMenuComponent.prototype.getMenuCategories = function (catId) {
        return Array.from(new Set(this.menuItems
            .filter(function (i) { return i.menu_type == catId; })
            .map(function (item) { return item.category_title; })));
    };
    RestaurantMenuComponent.prototype.getCategoryItems = function (catId, catTitle) {
        return this.menuItems
            .filter(function (i) { return i.menu_type == catId && i.category_title === catTitle; })
            .sort(function (a, b) { return a.n - b.n; });
    };
    RestaurantMenuComponent.prototype.getCategories = function () {
        return _models_restaurant_menu__WEBPACK_IMPORTED_MODULE_5__["RestaurantMenu"].getCategories();
    };
    RestaurantMenuComponent.prototype.getCategoryName = function (catId) {
        return _models_restaurant_menu__WEBPACK_IMPORTED_MODULE_5__["RestaurantMenu"].getMenuCategoryNameById(catId);
    };
    RestaurantMenuComponent.prototype.isActive = function (id) {
        return this.selectedTabId === id;
    };
    RestaurantMenuComponent.prototype.setActiveTabIndex = function (id) {
        this.selectedTabId = id;
    };
    RestaurantMenuComponent.prototype.isReady = function () {
        return this.menuItems !== null;
    };
    RestaurantMenuComponent.prototype.openModal = function (template) {
        this.modalRefs.push(this.modalService.show(template));
    };
    RestaurantMenuComponent.prototype.closePopup = function () {
        this.modalRefs[this.modalRefs.length - 1].hide();
        if (this.modalRefs.length > 0) {
            this.modalRefs.splice(-1, 1);
        }
    };
    RestaurantMenuComponent.prototype.reorderApply = function () {
        var _this = this;
        var data = [];
        this.itemsToSort.forEach(function (item, index) {
            var dataItem = _this.menuItems.find(function (i) { return i.id === item.id; });
            dataItem.n = index + Math.round(dataItem.n / 1000) * 1000;
            data.push(dataItem);
        });
        this.modelService.reorderApplyByN('restaurantMenu', data);
        this.closeAllPopups();
    };
    RestaurantMenuComponent.prototype.closeAllPopups = function () {
        while (this.modalRefs.length) {
            this.closePopup();
        }
    };
    RestaurantMenuComponent.prototype.loadMenuItems = function (force) {
        var _this = this;
        if (force === void 0) { force = false; }
        this.modelService.getRestaurantMenu().subscribe(function (menuItems) {
            menuItems.sort(function (a, b) {
                return a.n - b.n;
            });
            _this.menuItems = menuItems
                .map(function (a) { return _models_restaurant_menu__WEBPACK_IMPORTED_MODULE_5__["RestaurantMenu"].fromRaw(a); })
                .sort(function (a, b) { return a.n - b.n; });
            _this.titlesToSort = _this.getMenuCategories(_this.selectedTabId);
        });
    };
    RestaurantMenuComponent.prototype.ngOnInit = function () {
        this.loadMenuItems();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('newItemPopup'),
        __metadata("design:type", Object)
    ], RestaurantMenuComponent.prototype, "newItemPopup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('editItemPopup'),
        __metadata("design:type", Object)
    ], RestaurantMenuComponent.prototype, "editItemPopup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('reorderItemPopup'),
        __metadata("design:type", Object)
    ], RestaurantMenuComponent.prototype, "reorderItemPopup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('editTitlePopup'),
        __metadata("design:type", Object)
    ], RestaurantMenuComponent.prototype, "editTitlePopup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('reorderTitlePopup'),
        __metadata("design:type", Object)
    ], RestaurantMenuComponent.prototype, "reorderTitlePopup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('deleteItemConfirmPopup'),
        __metadata("design:type", Object)
    ], RestaurantMenuComponent.prototype, "deleteItemConfirmPopup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('deleteCategoryConfirmPopup'),
        __metadata("design:type", Object)
    ], RestaurantMenuComponent.prototype, "deleteCategoryConfirmPopup", void 0);
    RestaurantMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-restaurant-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ../common/object-list.component.css */ "./src/app/common/object-list.component.css"), __webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")],
        }),
        __metadata("design:paramtypes", [_model_service__WEBPACK_IMPORTED_MODULE_1__["ModelService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _select_item_service__WEBPACK_IMPORTED_MODULE_3__["SelectItemService"]])
    ], RestaurantMenuComponent);
    return RestaurantMenuComponent;
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
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_observable_forkJoin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/forkJoin */ "./node_modules/rxjs-compat/_esm5/add/observable/forkJoin.js");
/* harmony import */ var _models_trainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/trainer */ "./src/app/models/trainer.ts");
/* harmony import */ var _models_cms_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/cms-image */ "./src/app/models/cms-image.ts");
/* harmony import */ var _models_room__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/room */ "./src/app/models/room.ts");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var _models_image_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./models/image-type */ "./src/app/models/image-type.ts");
/* harmony import */ var _models_image_filters__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./models/image-filters */ "./src/app/models/image-filters.ts");
/* harmony import */ var _models_select_item_event__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./models/select-item-event */ "./src/app/models/select-item-event.ts");
/* harmony import */ var _select_item_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./select-item.service */ "./src/app/select-item.service.ts");
/* harmony import */ var _models_training_activity__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./models/training-activity */ "./src/app/models/training-activity.ts");
/* harmony import */ var _models_training_activity_type__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./models/training-activity-type */ "./src/app/models/training-activity-type.ts");
/* harmony import */ var _models_restaurant_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./models/restaurant-menu */ "./src/app/models/restaurant-menu.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};















var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var ModelService = /** @class */ (function () {
    function ModelService(http, languageService, selectItemService) {
        this.http = http;
        this.languageService = languageService;
        this.selectItemService = selectItemService;
        this.baseUrl = '/api/';
        _models_trainer__WEBPACK_IMPORTED_MODULE_4__["Trainer"].setupLanguageService(this.languageService);
        _models_training_activity__WEBPACK_IMPORTED_MODULE_12__["TrainingActivity"].setupLanguageService(this.languageService);
        _models_training_activity_type__WEBPACK_IMPORTED_MODULE_13__["TrainingActivityType"].setupLanguageService(this.languageService);
        _models_restaurant_menu__WEBPACK_IMPORTED_MODULE_14__["RestaurantMenu"].setupLanguageService(this.languageService);
        _models_room__WEBPACK_IMPORTED_MODULE_6__["Room"].setupLanguageService(this.languageService);
        _models_cms_image__WEBPACK_IMPORTED_MODULE_5__["CmsImage"].setupLanguageService(this.languageService);
    }
    ModelService.prototype.reorderApply = function (modelName, modelList) {
        var order = {};
        var n = 1;
        try {
            for (var modelList_1 = __values(modelList), modelList_1_1 = modelList_1.next(); !modelList_1_1.done; modelList_1_1 = modelList_1.next()) {
                var item = modelList_1_1.value;
                var id = item['id'];
                order[id] = n;
                n++;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (modelList_1_1 && !modelList_1_1.done && (_a = modelList_1.return)) _a.call(modelList_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return this.http.post(this.baseUrl + 'reorder?model=' + modelName, { order: order }, httpOptions)
            .subscribe();
        var e_1, _a;
    };
    ModelService.prototype.reorderApplyByN = function (modelName, modelList) {
        var order = {};
        try {
            for (var modelList_2 = __values(modelList), modelList_2_1 = modelList_2.next(); !modelList_2_1.done; modelList_2_1 = modelList_2.next()) {
                var item = modelList_2_1.value;
                var id = item['id'];
                order[id] = item['n'];
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (modelList_2_1 && !modelList_2_1.done && (_a = modelList_2.return)) _a.call(modelList_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return this.http.post(this.baseUrl + 'reorder?model=' + modelName, { order: order }, httpOptions)
            .subscribe();
        var e_2, _a;
    };
    //rooms
    ModelService.prototype.getRooms = function () {
        return this.getModelListing(_models_room__WEBPACK_IMPORTED_MODULE_6__["Room"].getApiMethodName());
    };
    ModelService.prototype.saveRoom = function (room) {
        return this.http.put(this.baseUrl + _models_room__WEBPACK_IMPORTED_MODULE_6__["Room"].getApiMethodName(room.id), room.forSave())
            .subscribe();
    };
    ModelService.prototype.deleteRoom = function (room) {
        return this.http.delete(this.baseUrl + _models_room__WEBPACK_IMPORTED_MODULE_6__["Room"].getApiMethodName(room.id));
    };
    ModelService.prototype.createRoom = function (room) {
        return this.http.post(this.baseUrl + _models_room__WEBPACK_IMPORTED_MODULE_6__["Room"].getApiMethodName(), room, httpOptions);
    };
    //trainers
    ModelService.prototype.getTrainers = function () {
        return this.getModelListing(_models_trainer__WEBPACK_IMPORTED_MODULE_4__["Trainer"].getApiMethodName());
    };
    ModelService.prototype.saveTrainer = function (trainer) {
        return this.http.put(this.baseUrl + _models_trainer__WEBPACK_IMPORTED_MODULE_4__["Trainer"].getApiMethodName(trainer.id), trainer.forSave())
            .subscribe();
    };
    ModelService.prototype.deleteTrainer = function (trainer) {
        return this.http.delete(this.baseUrl + _models_trainer__WEBPACK_IMPORTED_MODULE_4__["Trainer"].getApiMethodName(trainer.id));
    };
    ModelService.prototype.createTrainer = function (trainer) {
        return this.http.post(this.baseUrl + _models_trainer__WEBPACK_IMPORTED_MODULE_4__["Trainer"].getApiMethodName(), trainer, httpOptions);
    };
    // image filters
    ModelService.prototype.getImageFilters = function () {
        return this.http.get(this.baseUrl + _models_image_filters__WEBPACK_IMPORTED_MODULE_9__["ImageFilters"].getApiMethodName());
    };
    //images
    ModelService.prototype.getRoomImages = function (room) {
        var _this = this;
        var images = [];
        var tasks$ = [];
        room.image_ids.split(',').forEach(function (idStr) {
            var id = parseInt(idStr);
            if (id) {
                tasks$.push(_this.getImage(id));
            }
        });
        return tasks$.length ? rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].forkJoin(tasks$) : null;
    };
    ModelService.prototype.getImages = function (filter) {
        if (filter === void 0) { filter = null; }
        var options = {};
        if (filter !== null) {
            var params = {
                selectedType: filter.selectedType ? filter.selectedType.id : '',
                tags: filter.selectedTags.join(',')
            };
            var httpParams = { fromObject: params };
            options = { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"](httpParams) };
        }
        return this.http.get(this.baseUrl + _models_cms_image__WEBPACK_IMPORTED_MODULE_5__["CmsImage"].getApiMethodName(), options);
    };
    ModelService.prototype.getImage = function (id) {
        return this.http.get(this.baseUrl + _models_cms_image__WEBPACK_IMPORTED_MODULE_5__["CmsImage"].getApiMethodName(id));
    };
    ModelService.prototype.saveImage = function (image, data, callback) {
        var _this = this;
        image.beforeSave();
        if (data !== null) {
            image.data = data;
        }
        return this.http.put(this.baseUrl + _models_cms_image__WEBPACK_IMPORTED_MODULE_5__["CmsImage"].getApiMethodName(image.id), image)
            .subscribe(function (data) {
            _this.selectItemService.emitEventOfType(_models_select_item_event__WEBPACK_IMPORTED_MODULE_10__["SelectItemEvent"].Type.RefreshTags);
            if (callback instanceof Function) {
                callback(data);
            }
        });
    };
    ModelService.prototype.deleteImage = function (image) {
        return this.http.delete(this.baseUrl + _models_cms_image__WEBPACK_IMPORTED_MODULE_5__["CmsImage"].getApiMethodName(image.id));
    };
    ModelService.prototype.createImage = function (image, filter, callback) {
        return this.http.post(this.baseUrl + _models_cms_image__WEBPACK_IMPORTED_MODULE_5__["CmsImage"].getApiMethodName(), {
            content: image.content,
            filename: image.name,
            filter: filter
        }, httpOptions)
            .subscribe(function (response) {
            if (callback instanceof Function) {
                callback(response);
            }
        });
    };
    ModelService.prototype.updateImage = function (imageData, image, callback) {
        return this.http.put(this.baseUrl + _models_cms_image__WEBPACK_IMPORTED_MODULE_5__["CmsImage"].getApiMethodName(image.id), {
            content: imageData.content,
            filename: imageData.name
        }, httpOptions)
            .subscribe(function (response) {
            if (callback instanceof Function) {
                callback(response);
            }
        });
    };
    // image types
    ModelService.prototype.getImageTypes = function () {
        return this.getModelListing(_models_image_type__WEBPACK_IMPORTED_MODULE_8__["ImageType"].getApiMethodName());
    };
    // training activity types
    ModelService.prototype.getTrainingActivityTypes = function () {
        return this.getModelListing(_models_training_activity_type__WEBPACK_IMPORTED_MODULE_13__["TrainingActivityType"].getApiMethodName());
    };
    ModelService.prototype.createTrainingActivityType = function (trainingActivityType) {
        return this.http.post(this.baseUrl + _models_training_activity_type__WEBPACK_IMPORTED_MODULE_13__["TrainingActivityType"].getApiMethodName(), trainingActivityType, httpOptions);
    };
    ModelService.prototype.updateTrainingActivityType = function (trainingActivityType) {
        return this.http.put(this.baseUrl + _models_training_activity_type__WEBPACK_IMPORTED_MODULE_13__["TrainingActivityType"].getApiMethodName(trainingActivityType.id), trainingActivityType);
    };
    ModelService.prototype.deleteTrainingActivityType = function (trainingActivityType) {
        return this.http.delete(this.baseUrl + _models_training_activity_type__WEBPACK_IMPORTED_MODULE_13__["TrainingActivityType"].getApiMethodName(trainingActivityType.id));
    };
    // training activities
    ModelService.prototype.getTrainingActivitiesByType = function (typeId) {
        return this.getModelListing(_models_training_activity__WEBPACK_IMPORTED_MODULE_12__["TrainingActivity"].getApiMethodName(null, new Map().set('type_id', typeId)));
    };
    ModelService.prototype.createTrainingActivity = function (trainingActivity) {
        return this.http.post(this.baseUrl + _models_training_activity__WEBPACK_IMPORTED_MODULE_12__["TrainingActivity"].getApiMethodName(), trainingActivity, httpOptions);
    };
    ModelService.prototype.updateTrainingActivity = function (trainingActivity) {
        return this.http.put(this.baseUrl + _models_training_activity__WEBPACK_IMPORTED_MODULE_12__["TrainingActivity"].getApiMethodName(trainingActivity.id), trainingActivity);
    };
    ModelService.prototype.deleteTrainingActivity = function (trainingActivity) {
        return this.http.delete(this.baseUrl + _models_training_activity__WEBPACK_IMPORTED_MODULE_12__["TrainingActivity"].getApiMethodName(trainingActivity.id));
    };
    // menu
    ModelService.prototype.getRestaurantMenu = function () {
        return this.getModelListing(_models_restaurant_menu__WEBPACK_IMPORTED_MODULE_14__["RestaurantMenu"].getApiMethodName());
    };
    ModelService.prototype.deleteRestaurantMenuItem = function (item) {
        return this.http.delete(this.baseUrl + _models_restaurant_menu__WEBPACK_IMPORTED_MODULE_14__["RestaurantMenu"].getApiMethodName(item.id));
    };
    ModelService.prototype.updateRestaurantMenuItem = function (item) {
        return this.http.put(this.baseUrl + _models_restaurant_menu__WEBPACK_IMPORTED_MODULE_14__["RestaurantMenu"].getApiMethodName(item.id), item);
    };
    ModelService.prototype.deleteRestaurantMenuCategory = function (catTitle) {
        return this.http.delete(this.baseUrl + _models_restaurant_menu__WEBPACK_IMPORTED_MODULE_14__["RestaurantMenu"].getApiBulkMethodName('delete', new Map().set('catTitle', catTitle)));
    };
    ModelService.prototype.renameRestaurantMenuCategory = function (catTitle, newTitle) {
        return this.http.put(this.baseUrl + _models_restaurant_menu__WEBPACK_IMPORTED_MODULE_14__["RestaurantMenu"].getApiBulkMethodName('rename', new Map().set('catTitle', catTitle)), {
            oldTitle: catTitle,
            newTitle: newTitle
        });
    };
    ModelService.prototype.createRestaurantMenuItem = function (item) {
        return this.http.post(this.baseUrl + _models_restaurant_menu__WEBPACK_IMPORTED_MODULE_14__["RestaurantMenu"].getApiMethodName(item.id), item, httpOptions);
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
            _services_language_service__WEBPACK_IMPORTED_MODULE_7__["LanguageService"],
            _select_item_service__WEBPACK_IMPORTED_MODULE_11__["SelectItemService"]])
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
    BaseApiModel.getApiMethodName = function (id, params) {
        var result = this.apiMethodName + (id ? ('/' + id) : '');
        if (!params) {
            params = new Map();
        }
        if (this.passLang && this.languageService) {
            params.set('lang', this.languageService.getLanguage().toString());
        }
        if (params && params.size) {
            var parts_1 = [];
            params.forEach(function (value, key) { return parts_1.push(key + '=' + value); });
            result += '?' + parts_1.join('&');
        }
        return result;
    };
    BaseApiModel.passLang = false;
    BaseApiModel.languageService = null;
    return BaseApiModel;
}());



/***/ }),

/***/ "./src/app/models/cms-image.ts":
/*!*************************************!*\
  !*** ./src/app/models/cms-image.ts ***!
  \*************************************/
/*! exports provided: CmsImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmsImage", function() { return CmsImage; });
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

var CmsImage = /** @class */ (function (_super) {
    __extends(CmsImage, _super);
    function CmsImage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.orientation = false;
        _this.tags = null;
        return _this;
    }
    Object.defineProperty(CmsImage.prototype, "getOrientation", {
        get: function () {
            return this.orientation;
        },
        enumerable: true,
        configurable: true
    });
    CmsImage.prototype.setupOrientationInfo = function (orientation) {
        this.orientation = orientation;
    };
    CmsImage.prototype.init = function () {
        this.tags = JSON.parse(this.tags_json);
    };
    CmsImage.prototype.beforeSave = function () {
        this.tags_json = JSON.stringify(this.tags);
    };
    CmsImage.fromRaw = function (rawImage) {
        return Object.assign(new CmsImage(), rawImage);
    };
    CmsImage.prototype.addTag = function (tag) {
        if (this.tags === null) {
            this.tags = [];
        }
        if (this.tags.find(function (t) { return t === tag; }) === undefined) {
            this.tags.push(tag);
        }
    };
    CmsImage.prototype.removeTag = function (tag) {
        this.tags = this.tags.filter(function (t) { return t !== tag; });
    };
    CmsImage.prototype.getTags = function () {
        if (this.tags === null) {
            this.init();
        }
        return this.tags;
    };
    CmsImage.apiMethodName = 'images';
    CmsImage.passLang = true;
    return CmsImage;
}(_base_api_model__WEBPACK_IMPORTED_MODULE_0__["BaseApiModel"]));



/***/ }),

/***/ "./src/app/models/image-filter.ts":
/*!****************************************!*\
  !*** ./src/app/models/image-filter.ts ***!
  \****************************************/
/*! exports provided: ImageFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageFilter", function() { return ImageFilter; });
var ImageFilter = /** @class */ (function () {
    function ImageFilter() {
        this.selectedTags = [];
        this.selectedType = null;
        this.showDescriptions = false;
    }
    return ImageFilter;
}());



/***/ }),

/***/ "./src/app/models/image-filters.ts":
/*!*****************************************!*\
  !*** ./src/app/models/image-filters.ts ***!
  \*****************************************/
/*! exports provided: ImageFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageFilters", function() { return ImageFilters; });
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

var ImageFilters = /** @class */ (function (_super) {
    __extends(ImageFilters, _super);
    function ImageFilters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageFilters.apiMethodName = 'filters';
    return ImageFilters;
}(_base_api_model__WEBPACK_IMPORTED_MODULE_0__["BaseApiModel"]));



/***/ }),

/***/ "./src/app/models/image-type.ts":
/*!**************************************!*\
  !*** ./src/app/models/image-type.ts ***!
  \**************************************/
/*! exports provided: ImageType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageType", function() { return ImageType; });
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

var ImageType = /** @class */ (function (_super) {
    __extends(ImageType, _super);
    function ImageType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageType.apiMethodName = 'imageTypes';
    return ImageType;
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

/***/ "./src/app/models/notification-event.ts":
/*!**********************************************!*\
  !*** ./src/app/models/notification-event.ts ***!
  \**********************************************/
/*! exports provided: NotificationEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationEvent", function() { return NotificationEvent; });
var NotificationEvent = /** @class */ (function () {
    function NotificationEvent(status, message, payload) {
        this.status = status;
        this.message = message;
        this.payload = payload;
    }
    return NotificationEvent;
}());

(function (NotificationEvent) {
    var Status;
    (function (Status) {
        Status[Status["Error"] = 0] = "Error";
        Status[Status["Success"] = 1] = "Success";
        Status[Status["Warning"] = 2] = "Warning";
    })(Status = NotificationEvent.Status || (NotificationEvent.Status = {}));
})(NotificationEvent || (NotificationEvent = {}));


/***/ }),

/***/ "./src/app/models/restaurant-menu.ts":
/*!*******************************************!*\
  !*** ./src/app/models/restaurant-menu.ts ***!
  \*******************************************/
/*! exports provided: RestaurantMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantMenu", function() { return RestaurantMenu; });
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

var RestaurantMenu = /** @class */ (function (_super) {
    __extends(RestaurantMenu, _super);
    function RestaurantMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RestaurantMenu.getCategories = function () {
        return [
            this.ID_MENU_MAIN,
            this.ID_MENU_BANKET,
            this.ID_MENU_BAR
        ];
    };
    RestaurantMenu.getMenuCategoryNameById = function (catId) {
        switch (catId) {
            case this.ID_MENU_MAIN:
                return 'Основное меню';
            case this.ID_MENU_BANKET:
                return 'Банкетное меню';
            case this.ID_MENU_BAR:
                return 'Барная карта';
        }
    };
    RestaurantMenu.getApiBulkMethodName = function (actionName, params) {
        this.apiMethodName = 'menu-bulk/' + actionName;
        var res = this.getApiMethodName(null, params);
        this.apiMethodName = 'menu';
        return res;
    };
    RestaurantMenu.fromRaw = function (raw) {
        return Object.assign(new RestaurantMenu(), raw);
    };
    RestaurantMenu.ID_MENU_MAIN = 1;
    RestaurantMenu.ID_MENU_BANKET = 2;
    RestaurantMenu.ID_MENU_BAR = 3;
    RestaurantMenu.apiMethodName = 'menu';
    RestaurantMenu.passLang = true;
    return RestaurantMenu;
}(_base_api_model__WEBPACK_IMPORTED_MODULE_0__["BaseApiModel"]));



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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.images = [];
        return _this;
    }
    Room.fromRaw = function (rawRoom) {
        return Object.assign(new Room(), rawRoom);
    };
    Room.prototype.setImages = function (images) {
        this.images = images;
    };
    Room.prototype.forSave = function () {
        this.image_ids = this.images.map(function (i) { return i.id; }).join(',');
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
        Type[Type["PageRemove"] = 1] = "PageRemove";
        Type[Type["SettingsGroup"] = 2] = "SettingsGroup";
        Type[Type["TrainerSelect"] = 3] = "TrainerSelect";
        Type[Type["TrainerRemove"] = 4] = "TrainerRemove";
        Type[Type["TrainerClose"] = 5] = "TrainerClose";
        Type[Type["RoomSelect"] = 6] = "RoomSelect";
        Type[Type["RoomRemove"] = 7] = "RoomRemove";
        Type[Type["TrainingItemTypeRemove"] = 8] = "TrainingItemTypeRemove";
        Type[Type["RoomClose"] = 9] = "RoomClose";
        Type[Type["LanguageChange"] = 10] = "LanguageChange";
        Type[Type["ImageChooserApply"] = 11] = "ImageChooserApply";
        Type[Type["AvailableTags"] = 12] = "AvailableTags";
        Type[Type["NewTag"] = 13] = "NewTag";
        Type[Type["RefreshTags"] = 14] = "RefreshTags";
        Type[Type["CloseAllSelectedItems"] = 15] = "CloseAllSelectedItems";
        Type[Type["ChangeAspectRatio"] = 16] = "ChangeAspectRatio";
        Type[Type["ApplyFilter"] = 17] = "ApplyFilter";
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
        //console.log('setting');
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

/***/ "./src/app/models/sub-menu-images.ts":
/*!*******************************************!*\
  !*** ./src/app/models/sub-menu-images.ts ***!
  \*******************************************/
/*! exports provided: SubMenuImages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubMenuImages", function() { return SubMenuImages; });
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

var SubMenuImages = /** @class */ (function (_super) {
    __extends(SubMenuImages, _super);
    function SubMenuImages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubMenuImages.prototype.getType = function () {
        return 'images';
    };
    ;
    return SubMenuImages;
}(_sub_menu__WEBPACK_IMPORTED_MODULE_0__["SubMenu"]));



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

/***/ "./src/app/models/training-activity-type.ts":
/*!**************************************************!*\
  !*** ./src/app/models/training-activity-type.ts ***!
  \**************************************************/
/*! exports provided: TrainingActivityType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingActivityType", function() { return TrainingActivityType; });
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

var TrainingActivityType = /** @class */ (function (_super) {
    __extends(TrainingActivityType, _super);
    function TrainingActivityType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TrainingActivityType.fromRaw = function (raw) {
        return Object.assign(new TrainingActivityType(), raw);
    };
    TrainingActivityType.apiMethodName = 'trainingActivityType';
    TrainingActivityType.passLang = true;
    return TrainingActivityType;
}(_base_api_model__WEBPACK_IMPORTED_MODULE_0__["BaseApiModel"]));



/***/ }),

/***/ "./src/app/models/training-activity.ts":
/*!*********************************************!*\
  !*** ./src/app/models/training-activity.ts ***!
  \*********************************************/
/*! exports provided: TrainingActivity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingActivity", function() { return TrainingActivity; });
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

var TrainingActivity = /** @class */ (function (_super) {
    __extends(TrainingActivity, _super);
    function TrainingActivity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TrainingActivity.fromRaw = function (raw) {
        return Object.assign(new TrainingActivity(), raw);
    };
    TrainingActivity.apiMethodName = 'trainingActivity';
    TrainingActivity.passLang = true;
    return TrainingActivity;
}(_base_api_model__WEBPACK_IMPORTED_MODULE_0__["BaseApiModel"]));



/***/ }),

/***/ "./src/app/need-auth-guard.ts":
/*!************************************!*\
  !*** ./src/app/need-auth-guard.ts ***!
  \************************************/
/*! exports provided: NeedAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeedAuthGuard", function() { return NeedAuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NeedAuthGuard = /** @class */ (function () {
    function NeedAuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    NeedAuthGuard.prototype.canActivate = function (route, state) {
        var redirectUrl = route['_routerState']['url'];
        if (this.auth.isAuthenticated()) {
            return true;
        }
        this.router.navigateByUrl(this.router.createUrlTree(['/login'], {
            queryParams: {
                redirectUrl: redirectUrl
            }
        }));
        return false;
    };
    NeedAuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], NeedAuthGuard);
    return NeedAuthGuard;
}());



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
        //console.log("hello");
        if (changes.ngForIn) {
            this.ngForOf = Object.keys(this.ngForIn);
            var change = changes.ngForIn;
            var currentValue = Object.keys(change.currentValue);
            var previousValue = change.previousValue ? Object.keys(change.previousValue) : undefined;
            //console.log(currentValue);
            //console.log(previousValue);
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

/***/ "./src/app/notification.service.ts":
/*!*****************************************!*\
  !*** ./src/app/notification.service.ts ***!
  \*****************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _models_notification_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/notification-event */ "./src/app/models/notification-event.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotificationService = /** @class */ (function () {
    function NotificationService() {
        this._event = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.event$ = this._event.asObservable();
    }
    NotificationService.prototype.error = function (message, payload) {
        if (payload === void 0) { payload = {}; }
        this.emit(new _models_notification_event__WEBPACK_IMPORTED_MODULE_2__["NotificationEvent"](_models_notification_event__WEBPACK_IMPORTED_MODULE_2__["NotificationEvent"].Status.Error, message, payload));
    };
    NotificationService.prototype.onError = function (callback) {
        this.event$.subscribe(function (event) {
            if (event.status === _models_notification_event__WEBPACK_IMPORTED_MODULE_2__["NotificationEvent"].Status.Error) {
                callback(event);
            }
        });
    };
    NotificationService.prototype.emit = function (event) {
        this._event.next(event);
    };
    NotificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/page-editor-field-extended/page-editor-field-extended.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/page-editor-field-extended/page-editor-field-extended.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin-bottom: 15px;\n}\n:host .content input {\n  margin: 5px;\n  padding: 4px;\n}\n:host .content tr {\n  position: relative;\n}\n:host .content tr td {\n  position: relative;\n}\n:host .content tr td input:first-child {\n  margin-left: 0!important;\n}\n:host .fr-box.fr-inline {\n  border: 1px solid #d4d4d4;\n  margin: 5px;\n  padding: 5px;\n  color: #000;\n}\n:host .link-input {\n  white-space: nowrap;\n}\n.name-field,\n.title-field,\n.id-field {\n  display: block;\n}\n.textarea-field {\n  margin-left: 10px;\n}\n.fa-external-link,\n.fa-trash {\n  margin: 5px 0 5px 15px;\n  font-size: 20px;\n  position: relative;\n}\n.fa-trash {\n  position: relative;\n  top: -5px;\n}\n.fa-bars,\n.fa-trash {\n  color: #4a90e2;\n  font-size: 20px;\n  margin-left: 15px;\n}\n"

/***/ }),

/***/ "./src/app/page-editor-field-extended/page-editor-field-extended.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/page-editor-field-extended/page-editor-field-extended.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"field\">\n  <h2 class=\"title\">{{title}}</h2>\n  <div [ngSwitch]=\"params.type\" class=\"content\">\n    <div *ngSwitchCase=\"'simple_json_list'\">\n      <table id=\"{{uniqId}}\">\n        <thead>\n          <tr>\n            <th *ngFor=\"let key in params.options\" [hidden]=\"getFieldExtra(key)['titleRow'] === false\">{{params.options[key]}}</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let row of getRows; let i = index;\">\n            <td *ngFor=\"let key in params.options\" [class]=\"getFieldExtra(key)['class'] ? getFieldExtra(key)['class'] : ''\">\n\n              <span class=\"title\" *ngIf=\"getFieldExtra(key)['titleRow'] === false\">\n                {{params.options[key]}}\n              </span>\n              <div [ngSwitch]=\"getFieldType(key)\">\n                <input *ngSwitchCase=\"'string'\" type=\"text\" [(ngModel)]=\"row[key]\" (change)=\"updateJsonField()\">\n                <textarea *ngSwitchCase=\"'textarea'\" ngxTrumbowygEditor name=\"editorDirective\" [(ngModel)]=\"row[key]\" (ngModelChange)=\"updateJsonField()\"></textarea>\n                <select *ngSwitchCase=\"'select'\" [(ngModel)]=\"row[key]\" (change)=\"updateJsonField()\">\n                  <option *ngFor=\"let value in getFieldOptions(key)\" value=\"{{value}}\">{{getFieldOptions(key)[value]}}</option>\n                </select>\n                <div *ngSwitchCase=\"'link'\" class=\"link-input\">\n                  <input [(ngModel)]=\"row[key]\" (change)=\"updateJsonField()\" placeholder=\"http://yandex.ru\">\n                  <a target=\"_blank\" [href]=\"row[key]\"><i class=\"fa fa-external-link\"></i></a>\n                </div>\n              </div>\n\n            </td>\n            <td>\n              <span class=\"handle\"><i class=\"fa fa-bars\"></i></span>\n              <span class=\"close\" (click)=\"deleteJsonRow(i)\"><i class=\"fa fa-trash\"></i></span>\n            </td>\n          </tr>\n          <tr colspan=\"0\">\n           <td><span class=\"add\" (click)=\"addJsonRow()\"><i class=\"fa fa-plus\"></i></span></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <div *ngSwitchCase=\"'simple_json'\">\n      <div *ngFor=\"let key in params.options\">\n        {{params.options[key]}}\n        <div [ngSwitch]=\"getFieldType(key)\">\n          <input *ngSwitchCase=\"'string'\" type=\"text\" [(ngModel)]=\"jsonData[key]\" (change)=\"updateJsonField()\">\n          <textarea *ngSwitchCase=\"'textarea'\" ngxTrumbowygEditor name=\"editorDirective\" [(ngModel)]=\"jsonData[key]\" (ngModelChange)=\"updateJsonField()\"></textarea>\n          <select *ngSwitchCase=\"'select'\" [(ngModel)]=\"jsonData[key]\" (change)=\"updateJsonField()\">\n            <option *ngFor=\"let value in getFieldOptions(key)\" value=\"{{value}}\">{{getFieldOptions(key)[value]}}</option>\n          </select>\n          <div *ngSwitchCase=\"'link'\" class=\"link-input\">\n            <input [(ngModel)]=\"jsonData[key]\" (change)=\"updateJsonField()\" placeholder=\"http://yandex.ru\">\n            <a target=\"_blank\" [href]=\"jsonData[key]\">{{jsonData[key]}}</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/page-editor-field-extended/page-editor-field-extended.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/page-editor-field-extended/page-editor-field-extended.component.ts ***!
  \************************************************************************************/
/*! exports provided: PageEditorFieldExtendedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageEditorFieldExtendedComponent", function() { return PageEditorFieldExtendedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_app_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/app-helper */ "./src/app/components/app-helper.ts");
/* harmony import */ var table_dragger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! table-dragger */ "./node_modules/table-dragger/dist/table-dragger.js");
/* harmony import */ var table_dragger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(table_dragger__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageEditorFieldExtendedComponent = /** @class */ (function () {
    function PageEditorFieldExtendedComponent() {
        this.titleEachField = false;
        this.jsonData = null;
        this.dragger = null;
        this.reinitRequired = false;
        this.uniqId = _components_app_helper__WEBPACK_IMPORTED_MODULE_1__["AppHelper"].uuid();
    }
    PageEditorFieldExtendedComponent.prototype.swapRows = function (from, to) {
        var tmp = this.jsonData[from];
        this.jsonData[from] = this.jsonData[to];
        this.jsonData[to] = tmp;
    };
    PageEditorFieldExtendedComponent.prototype.getFieldType = function (key) {
        var fieldType = this.params['options_types'][key];
        if (fieldType === undefined) {
            fieldType = null;
        }
        if (fieldType && typeof fieldType !== 'string') {
            fieldType = fieldType[0] ? fieldType[0] : 'string';
        }
        return fieldType ? fieldType : 'string';
    };
    PageEditorFieldExtendedComponent.prototype.getFieldOptions = function (key) {
        var fieldTypeData = this.params['options_types'][key];
        if (fieldTypeData && typeof fieldTypeData !== 'string') {
            return fieldTypeData[1] ? fieldTypeData[1] : [];
        }
        return [];
    };
    PageEditorFieldExtendedComponent.prototype.getFieldExtra = function (key) {
        var fieldTypeData = this.params['options_types'][key];
        if (fieldTypeData && typeof fieldTypeData !== 'string') {
            return fieldTypeData[2] ? fieldTypeData[2] : {};
        }
        return {};
    };
    Object.defineProperty(PageEditorFieldExtendedComponent.prototype, "getRows", {
        get: function () {
            return this.jsonData && this.jsonData.length ? this.jsonData : [];
        },
        enumerable: true,
        configurable: true
    });
    PageEditorFieldExtendedComponent.prototype.updateJsonField = function () {
        this.valueSet[this.valueKey] = JSON.stringify(this.jsonData);
    };
    PageEditorFieldExtendedComponent.prototype.addJsonRow = function () {
        if (!this.jsonData) {
            this.jsonData = [];
        }
        try {
            var newRow_1 = Object.assign({}, this.params.options);
            Object.keys(newRow_1).forEach(function (key) { newRow_1[key] = ''; });
            console.log(newRow_1);
            this.jsonData.push(newRow_1);
        }
        finally {
        }
        this.reinitRequired = true;
    };
    PageEditorFieldExtendedComponent.prototype.deleteJsonRow = function (index) {
        try {
            var data_1 = this.jsonData;
            this.jsonData = data_1.filter(function (item) { return data_1.indexOf(item) !== index; });
        }
        finally {
        }
        this.updateJsonField();
    };
    PageEditorFieldExtendedComponent.prototype.setVal = function (value) {
        this.valueSet[this.valueKey] = value;
    };
    PageEditorFieldExtendedComponent.prototype.reinitDragger = function () {
        if (this.jsonData.length) {
            if (this.dragger) {
                this.dragger.destroy();
            }
            this.initDragger(true);
        }
        ;
    };
    PageEditorFieldExtendedComponent.prototype.initDragger = function (force) {
        if (force === void 0) { force = false; }
        if (force || (this.dragger === null && this.jsonData.length)) {
            var el = document.getElementById(this.uniqId);
            this.dragger = table_dragger__WEBPACK_IMPORTED_MODULE_2___default()(el, {
                mode: 'row',
                dragHandler: '.handle',
                onlyBody: true,
                animation: 300
            });
            var that_1 = this;
            this.dragger.on('drop', function (from, to) {
                that_1.swapRows(from - 1, to - 1);
                that_1.updateJsonField();
                that_1.reinitDragger();
            });
        }
        ;
    };
    PageEditorFieldExtendedComponent.prototype.ngAfterViewChecked = function () {
        if (this.params.type == 'simple_json_list') {
            this.initDragger();
            if (this.reinitRequired) {
                this.reinitDragger();
                this.reinitRequired = false;
            }
        }
    };
    PageEditorFieldExtendedComponent.prototype.ngOnInit = function () {
        this.jsonData = JSON.parse(this.valueSet[this.valueKey]);
        if (!this.jsonData && this.params.type == 'simple_json') {
            this.jsonData = {};
            for (var key in this.params['options']) {
                this.jsonData[key] = '';
            }
        }
        else if (!this.jsonData && this.params.type == 'simple_json_list') {
            this.jsonData = [];
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PageEditorFieldExtendedComponent.prototype, "valueSet", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PageEditorFieldExtendedComponent.prototype, "valueKey", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PageEditorFieldExtendedComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PageEditorFieldExtendedComponent.prototype, "params", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], PageEditorFieldExtendedComponent.prototype, "titleEachField", void 0);
    PageEditorFieldExtendedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-editor-field-extended',
            template: __webpack_require__(/*! ./page-editor-field-extended.component.html */ "./src/app/page-editor-field-extended/page-editor-field-extended.component.html"),
            styles: [__webpack_require__(/*! ./page-editor-field-extended.component.css */ "./src/app/page-editor-field-extended/page-editor-field-extended.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageEditorFieldExtendedComponent);
    return PageEditorFieldExtendedComponent;
}());



/***/ }),

/***/ "./src/app/page-editor-field/page-editor-field.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/page-editor-field/page-editor-field.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin-bottom: 15px;\n}\n:host .inline {\n  display: inline-block;\n  margin-left: 10px;\n}\n:host .inline input.color {\n  position: relative;\n  top: -3px;\n}\n:host .title {\n  display: inline-block;\n  vertical-align: top;\n}\n:host .content input:not([type=checkbox]) {\n  width: 100%;\n  display: block;\n}\n:host .content input[type=text] {\n  width: 300px;\n}\n:host .fr-box.fr-inline {\n  border: 1px solid #d4d4d4;\n  margin: 5px;\n  padding: 5px;\n  color: #000;\n}\n"

/***/ }),

/***/ "./src/app/page-editor-field/page-editor-field.component.html":
/*!********************************************************************!*\
  !*** ./src/app/page-editor-field/page-editor-field.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"field\">\n  <div class=\"title\">\n    <b *ngIf=\"params.required === 1\">\n      <label for=\"{{uniqId}}\">{{title}}</label>\n    </b>\n    <label *ngIf=\"params.required !== 1\" for=\"{{uniqId}}\">{{title}}</label>\n  </div>\n  <div [ngSwitch]=\"params.type\" class=\"content\" [class.inline]=\"params.type === 'checkbox' || params.type === 'color'\">\n    <div *ngSwitchCase=\"'string'\">\n      <input id={{uniqId}} type=\"text\" [(ngModel)]=\"valueSet[valueKey]\">\n    </div>\n    <div *ngSwitchCase=\"'select'\">\n      <select id={{uniqId}} [(ngModel)]=\"valueSet[valueKey]\">\n        <option *ngFor=\"let option in params.options\" [value]=\"option\">{{params.options[option]}}</option>\n      </select>\n    </div>\n    <div *ngSwitchCase=\"'checkbox'\">\n      <mat-checkbox id={{uniqId}} [(ngModel)]=\"valueSet[valueKey]\" [color]=\"'primary'\"></mat-checkbox>\n    </div>\n    <div *ngSwitchCase=\"'textarea'\">\n      <textarea id={{uniqId}} ngxTrumbowygEditor name=\"editorDirective\" [(ngModel)]=\"valueSet[valueKey]\"></textarea>\n    </div>\n    <div *ngSwitchCase=\"'script'\">\n      <textarea id={{uniqId}} name=\"editorDirective\" [(ngModel)]=\"valueSet[valueKey]\"></textarea>\n    </div>\n    <div *ngSwitchCase=\"'color'\">\n      <input class=\"color\" id={{uniqId}} type=\"text\" (colorPickerChange)=\"setVal($event)\" [colorPicker]=\"valueSet[valueKey]\" [style.background]=\"valueSet[valueKey]\" [cpOutputFormat]=\"hex\"/>\n    </div>\n    <div *ngSwitchCase=\"'image'\">\n      <img *ngIf=\"imageSrc && imageSrc.length\" width=\"200px\" src=\"/{{imageSrc}}\" (click)=\"openChooser()\">\n      <button *ngIf=\"!(imageSrc && imageSrc.length)\" (click)=\"openChooser()\">Выбор</button>\n\n      <app-image-chooser-popup #imageChooser (selectedImageId)=\"selectImage($event)\"></app-image-chooser-popup>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _select_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../select-item.service */ "./src/app/select-item.service.ts");
/* harmony import */ var _image_chooser_popup_image_chooser_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../image-chooser-popup/image-chooser-popup.component */ "./src/app/image-chooser-popup/image-chooser-popup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import {CustomCheckBoxModel} from "angular-custom-checkbox";
var PageEditorFieldComponent = /** @class */ (function () {
    function PageEditorFieldComponent(modelService, modalService, selectItemService) {
        this.modelService = modelService;
        this.modalService = modalService;
        this.selectItemService = selectItemService;
        this.imageSrc = null;
        this.jsonData = null;
        this.froalaSettings = {
            toolbarInline: true,
        };
        this.uniqId = _components_app_helper__WEBPACK_IMPORTED_MODULE_1__["AppHelper"].uuid();
    }
    PageEditorFieldComponent.prototype.openChooser = function () {
        this.imageChooser.showPopup();
    };
    PageEditorFieldComponent.prototype.getRows = function () {
        if (this.jsonData === null) {
            this.jsonData = JSON.parse(this.valueSet[this.valueKey]);
        }
        return this.jsonData && this.jsonData.length ? this.jsonData : [];
    };
    PageEditorFieldComponent.prototype.updateJsonField = function () {
        this.valueSet[this.valueKey] = JSON.stringify(this.jsonData);
    };
    PageEditorFieldComponent.prototype.addJsonRow = function () {
        if (!this.jsonData) {
            this.jsonData = [];
        }
        try {
            var newRow_1 = Object.assign({}, this.params.options);
            Object.keys(newRow_1).forEach(function (key) { newRow_1[key] = ''; });
            console.log(newRow_1);
            this.jsonData.push(newRow_1);
        }
        finally {
        }
    };
    PageEditorFieldComponent.prototype.deleteJsonRow = function (index) {
        try {
            var data_1 = this.jsonData;
            this.jsonData = data_1.filter(function (item) { return data_1.indexOf(item) !== index; });
        }
        finally {
        }
    };
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
            //console.log('image obtained!');
            _this.imageSrc = image.filename;
        });
    };
    PageEditorFieldComponent.prototype.ngOnInit = function () {
        if (this.params.type === 'image') {
            //console.log('azazaza');
            this.reloadImageSrc();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('imageChooser'),
        __metadata("design:type", _image_chooser_popup_image_chooser_popup_component__WEBPACK_IMPORTED_MODULE_5__["ImageChooserPopupComponent"])
    ], PageEditorFieldComponent.prototype, "imageChooser", void 0);
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
        __metadata("design:paramtypes", [_model_service__WEBPACK_IMPORTED_MODULE_2__["ModelService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _select_item_service__WEBPACK_IMPORTED_MODULE_4__["SelectItemService"]])
    ], PageEditorFieldComponent);
    return PageEditorFieldComponent;
}());



/***/ }),

/***/ "./src/app/page-editor-tree-item/page-editor-tree-item.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/page-editor-tree-item/page-editor-tree-item.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar button {\n  margin: 0 5px;\n}\n.instances {\n  position: relative;\n  border-radius: 5px;\n  padding: 5px;\n  margin: 5px;\n  margin-bottom: 15px;\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.instances .toolbar-element {\n  background-color: transparent!important;\n}\n.instances .toolbar-element div {\n  background-color: transparent!important;\n}\n.instances .instance-item {\n  position: relative;\n}\n.instances .instance-item .toolbar {\n  display: block;\n  overflow: hidden;\n}\n.instances .instance-item .instance-toolbar {\n  position: absolute;\n  top: 0;\n  right: 5px;\n  z-index: 90;\n}\n.instances .instance-item .instance-toolbar .close {\n  top: 13px;\n  position: absolute;\n  right: 8px;\n  font-size: 17px;\n}\n.composite-field-items {\n  padding-right: 30px;\n}\n.composite-field-items .item {\n  width: 100%;\n  height: 20px;\n  padding: 10px;\n  border-radius: 10px;\n  background-color: rgba(247, 231, 213, 0.64);\n  margin-bottom: 5px;\n}\n.empty-wrapper {\n  display: inline-block;\n}\n"

/***/ }),

/***/ "./src/app/page-editor-tree-item/page-editor-tree-item.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/page-editor-tree-item/page-editor-tree-item.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"params[key].type\">\n  <div *ngSwitchCase=\"'composite'\">\n    <h3>{{params[key].title}}</h3>\n    <div class=\"instances\">\n      <div *ngFor=\"let section of values[key]; let i = index;\" class=\"instance-item\">\n        <div class=\"instance-toolbar\">\n          <span class=\"close\" (click)=\"deleteInstanceWithConfirm(key, i)\"><i class=\"fa fa-close\"></i></span>\n        </div>\n        <page-editor\n                [level]=\"level + 1\"\n                [generalName]=\"getSectionGeneralName(section)\"\n                [itemTitle]=\"getSectionTitle(section)\"\n                [uniqKey]=\"uniqKey + '_' + key\"\n                [params]=\"params[key]['availableInstances'][section.type]\"\n                [values]=\"section\">\n        </page-editor>\n      </div>\n      <div class=\"toolbar toolbar-element\">\n        <div class=\"empty-wrapper\" [ngSwitch]=\"(params[key]['availableInstances'] | values).length === 1\">\n          <div *ngSwitchCase=\"true\" dropdownToggle aria-controls=\"dropdown-basic\" #item (click)=\"appendInstance(key)\">\n            <i class=\"fa fa-plus\"></i>\n          </div>\n          <div *ngSwitchCase=\"false\" class=\"btn-group\" dropdown #dropdown=\"bs-dropdown\" [autoClose]=\"true\">\n            <div dropdownToggle aria-controls=\"dropdown-basic\">\n              <i class=\"fa fa-plus\"></i>\n            </div>\n            <ul *dropdownMenu class=\"dropdown-menu\"\n                role=\"menu\" aria-labelledby=\"button-triggers-manual\">\n              <li *ngFor=\"let instanceType in params[key]['availableInstances']\" role=\"menuitem\">\n                <a class=\"dropdown-item\" (click)=\"appendInstance(key, instanceType)\">\n                  {{params[key]['instancesLabels'][instanceType]}}\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div *ngIf=\"values[key].length > 1\"(click)=\"reorder()\">\n          <i class=\"fa fa-bars\"></i>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div *ngSwitchDefault>\n    <app-page-editor-field [title]=\"params[key].title\" [params]=\"params[key]\" [valueSet]=\"values\" [valueKey]=\"key\"></app-page-editor-field>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/page-editor-tree-item/page-editor-tree-item.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/page-editor-tree-item/page-editor-tree-item.component.ts ***!
  \**************************************************************************/
/*! exports provided: PageEditorTreeItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageEditorTreeItemComponent", function() { return PageEditorTreeItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _page_editor_tree_page_editor_tree_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../page-editor-tree/page-editor-tree.component */ "./src/app/page-editor-tree/page-editor-tree.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageEditorTreeItemComponent = /** @class */ (function () {
    function PageEditorTreeItemComponent() {
        this.level = 1;
    }
    PageEditorTreeItemComponent_1 = PageEditorTreeItemComponent;
    PageEditorTreeItemComponent.prototype.ngOnInit = function () {
    };
    PageEditorTreeItemComponent.prototype.getSectionGeneralName = function (section) {
        return this.params[this.key]['instancesLabels'][section.type];
    };
    PageEditorTreeItemComponent.prototype.getSectionTitle = function (section) {
        return PageEditorTreeItemComponent_1.obtainSectionTitle(this.params, this.key, section);
    };
    PageEditorTreeItemComponent.obtainSectionTitle = function (params, key, section) {
        if (params[key] && params[key].itemTitleKey) {
            var fieldName = params[key].itemTitleKey;
            var result = void 0;
            var itemTitleFieldType = null;
            try {
                var subsectionType = section.type;
                itemTitleFieldType = params[key].availableInstances[subsectionType][fieldName].type;
                switch (itemTitleFieldType) {
                    case 'select':
                        try {
                            var subsectionType_1 = section.type;
                            var fieldValue = section[fieldName];
                            var options = params[key].availableInstances[subsectionType_1][fieldName].options;
                            result = options[fieldValue];
                        }
                        catch (e) {
                            var subsectionTypeName = section.sectionTypeName ? section.sectionTypeName : '';
                            result = 'Не выбрано';
                            if (subsectionTypeName) {
                                result += ' :' + subsectionTypeName;
                            }
                        }
                        break;
                    case 'string':
                        result = section[fieldName];
                        break;
                }
            }
            catch (e) {
                result = 'Нет названия';
            }
            return result ? result : 'Без названия';
        }
        return 'Без названия';
    };
    PageEditorTreeItemComponent.prototype.prepareInstance = function (instanceParams, sectionType, fieldName) {
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
    PageEditorTreeItemComponent.prototype.reorder = function () {
        this.parent.reorder(this.key);
    };
    PageEditorTreeItemComponent.prototype.deleteInstanceWithConfirm = function (key, instanceIndex) {
        this.deleteInstance(key, instanceIndex);
    };
    PageEditorTreeItemComponent.prototype.deleteInstance = function (key, instanceIndex) {
        this.values[key].splice(instanceIndex, 1);
        //console.log(this.values[key].length);
        //console.log(this.values[key]);
    };
    PageEditorTreeItemComponent.prototype.appendInstance = function (key) {
        var instanceType = Object.keys(this.params[key]['availableInstances'])[0];
        //console.log(key);
        //console.log(instanceType);
        var newInstance = this.prepareInstance(this.params[key]['availableInstances'][instanceType], instanceType, key);
        this.values[key].push(newInstance);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PageEditorTreeItemComponent.prototype, "params", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PageEditorTreeItemComponent.prototype, "key", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PageEditorTreeItemComponent.prototype, "values", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PageEditorTreeItemComponent.prototype, "uniqKey", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PageEditorTreeItemComponent.prototype, "level", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _page_editor_tree_page_editor_tree_component__WEBPACK_IMPORTED_MODULE_1__["PageEditorTreeComponent"])
    ], PageEditorTreeItemComponent.prototype, "parent", void 0);
    PageEditorTreeItemComponent = PageEditorTreeItemComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-editor-tree-item',
            template: __webpack_require__(/*! ./page-editor-tree-item.component.html */ "./src/app/page-editor-tree-item/page-editor-tree-item.component.html"),
            styles: [__webpack_require__(/*! ./page-editor-tree-item.component.css */ "./src/app/page-editor-tree-item/page-editor-tree-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageEditorTreeItemComponent);
    return PageEditorTreeItemComponent;
    var PageEditorTreeItemComponent_1;
}());



/***/ }),

/***/ "./src/app/page-editor-tree/page-editor-tree.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/page-editor-tree/page-editor-tree.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bordered-section {\n  border: 1px solid #444;\n  margin: 5px;\n}\n.shadowed {\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);\n}\n.put-right {\n  position: absolute;\n  right: 11px;\n  left: 350px;\n  top: 17px;\n  max-height: 100%;\n  overflow-y: auto;\n}\n/*.composite-field-items page-editor {*/\n/*display: none;*/\n/*}*/\n:host {\n  display: block;\n}\n.not-grouped-content {\n  background-color: #fff;\n}\nul {\n  list-style: none;\n  padding-left: 0;\n}\n"

/***/ }),

/***/ "./src/app/page-editor-tree/page-editor-tree.component.html":
/*!******************************************************************!*\
  !*** ./src/app/page-editor-tree/page-editor-tree.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<accordion  *ngIf=\"!paramsHasGroups\">\n    <accordion-group heading=\"{{getHeading}}\" [isOpen]=\"false\" (isOpenChange)=\"logToggle($event, 'nogroup')\">\n        <div *ngFor=\"let key in notGroupdParams\">\n            <app-page-editor-tree-item [level]=\"level\" [key]=\"key\" [params]=\"params\" [values]=\"values\" [parent]=\"this\" [uniqKey]=\"uniqKey\"></app-page-editor-tree-item>\n        </div>\n    </accordion-group>\n</accordion>\n<accordion *ngIf=\"paramsHasGroups\" class=\"super\">\n    <accordion-group *ngIf=\"(notGroupdParams | json) !== '{}'\" heading=\"{{getHeading}}\" [isOpen]=\"false\" (isOpenChange)=\"logToggle($event, 'nogroup')\">\n        <div *ngFor=\"let key in notGroupdParams\">\n            <app-page-editor-tree-item [level]=\"level\" [key]=\"key\" [params]=\"params\" [values]=\"values\" [parent]=\"this\" [uniqKey]=\"uniqKey\"></app-page-editor-tree-item>\n        </div>\n    </accordion-group>\n    <accordion-group *ngFor=\"let group in groupedParamsSet\" heading=\"{{groupedParamsSet[group].title}}\" style=\"color: #f00\" [isOpen]=\"false\" (isOpenChange)=\"logToggle($event, group)\">\n        <div *ngFor=\"let key in groupedParamsSet[group].values\">\n            <app-page-editor-tree-item [level]=\"level\" [key]=\"key\" [params]=\"params\" [values]=\"values\" [parent]=\"this\" [uniqKey]=\"uniqKey\"></app-page-editor-tree-item>\n        </div>\n    </accordion-group>\n</accordion>\n<ng-template #reorderDialog>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Поменять местами</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <i class=\"fa fa-close\"></i>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <bs-sortable *ngIf=\"selectedInstanceOrder\"\n                     [(ngModel)]=\"selectedInstanceOrder\"\n                     itemClass=\"sortable-item\"\n                     itemActiveClass=\"sortable-item-active\"\n                     placeholderItem=\"Drag here\"\n                     placeholderClass=\"placeholderStyle\"\n                     wrapperClass=\"sortable-wrapper\"\n                     fieldName=\"name\"\n        ></bs-sortable>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"ripple module-control-button-element default\" (click)=\"reorderApply()\">Да</button>\n        <button type=\"button\" class=\"ripple module-control-button-element cancel\" (click)=\"modalRef.hide()\">Отмена</button>\n    </div>\n</ng-template>"

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
/* harmony import */ var _page_editor_tree_item_page_editor_tree_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page-editor-tree-item/page-editor-tree-item.component */ "./src/app/page-editor-tree-item/page-editor-tree-item.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};




var PageEditorTreeComponent = /** @class */ (function () {
    function PageEditorTreeComponent(modalService) {
        this.modalService = modalService;
        this.level = 0;
    }
    PageEditorTreeComponent.prototype.logToggle = function ($event, key) {
        //console.log('Accrodion toggle event!');
        //console.log(key);
        //console.log(this.uniqKey);
        //console.log($event);
    };
    Object.defineProperty(PageEditorTreeComponent.prototype, "getHeading", {
        get: function () {
            return this.level == 0 ? 'Содержимое блока' : this.itemTitle;
        },
        enumerable: true,
        configurable: true
    });
    PageEditorTreeComponent.prototype.reorder = function (key) {
        this.prepareSelectedInstanceOrder(key);
        this.openModal(this.reorderDialog);
    };
    PageEditorTreeComponent.prototype.prepareSelectedInstanceOrder = function (key) {
        this.selectedInstanceKey = key;
        this.selectedInstanceOrder = [];
        var orderId = 0;
        try {
            for (var _a = __values(this.values[key]), _b = _a.next(); !_b.done; _b = _a.next()) {
                var instance = _b.value;
                this.selectedInstanceOrder.push({
                    id: orderId,
                    name: _page_editor_tree_item_page_editor_tree_item_component__WEBPACK_IMPORTED_MODULE_3__["PageEditorTreeItemComponent"].obtainSectionTitle(this.params, key, instance)
                });
                orderId++;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var e_1, _c;
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PageEditorTreeComponent.prototype, "generalName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PageEditorTreeComponent.prototype, "itemTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PageEditorTreeComponent.prototype, "level", void 0);
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

module.exports = "select {\n  margin: 10px;\n  width: -webkit-fill-available;\n}\n.navbar-selector-item a {\n  display: inline;\n  padding: 0;\n}\n.navbar-selector-item a i {\n  float: right;\n}\n"

/***/ }),

/***/ "./src/app/pages-list/pages-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages-list/pages-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<select [(ngModel)]=\"selectedDomain\" class=\"form-control form-control-lg\">\n  <option *ngFor='let domain of domains' [value]=\"domain.id\">{{domain.title}}</option>\n</select>\n<div *ngFor='let page of groupedPages[selectedDomain]' class='navbar-selector-item' (click)=\"loadPage(page)\" [ngClass]=\"{'active':page.id==selectedPageId}\">\n  {{page.name}}\n  <a *ngIf=\"page.url\" [href]=\"page.url\" target=\"_blank\"><i class=\"fa fa-external-link\" aria-hidden=\"true\"></i></a>\n</div>\n<div class=\"toolbar-element\">\n  <div (click)=\"openModal(createPage)\"><i class=\"fa fa-plus\"></i></div>\n  <div (click)=\"openModal(reorderPages)\"><i class=\"fa fa-bars\"></i></div>\n</div>\n<ng-template #createPage>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Создать новую страницу</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div>\n      Введите название страницы:\n    </div>\n    <div>\n      <input type=\"text\" #newPageName>\n    </div>\n    <div>\n      Выберите домен:\n    </div>\n    <div>\n      <select #newPageDomain class=\"form-control form-control-lg\" [value]=\"selectedDomain\">\n        <option *ngFor='let domain of domains' [value]=\"domain.id\">{{domain.title}}</option>\n      </select>\n    </div>\n    <div>\n      Введите url:\n    </div>\n    <div>\n      {{findDomainById(newPageDomain.value).base_url}}\n      <input type=\"text\" #newPageUrl>\n    </div>\n    <div>\n      Показывать в меню:\n    </div>\n    <div>\n      <input type=\"checkbox\" #showInMenu>\n    </div>\n\n\n    <div>\n      <button class=\"btn btn-primary\"\n        (click)=\"createNewPage(newPageName.value, newPageDomain.value, showInMenu.value, newPageUrl.value); modalRef.hide();\">создать</button>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #reorderPages>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Поменять местами</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <bs-sortable *ngIf=\"groupedPages[selectedDomain]\"\n                 [(ngModel)]=\"groupedPages[selectedDomain]\"\n                 itemClass=\"sortable-item\"\n                 itemActiveClass=\"sortable-item-active\"\n                 placeholderItem=\"Drag here\"\n                 placeholderClass=\"placeholderStyle\"\n                 wrapperClass=\"sortable-wrapper\"\n                 fieldName=\"name\"\n    ></bs-sortable>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"save ripple module-control-button-element default\" (click)=\"reorderApply();modalRef.hide();\">Да</button>\n    <button type=\"button\" class=\"ripple module-control-button-element cancel\" (click)=\"modalRef.hide()\">Отмена</button>\n  </div>\n</ng-template>\n"

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
/* harmony import */ var _model_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model.service */ "./src/app/model.service.ts");
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
var __values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};








var PagesListComponent = /** @class */ (function (_super) {
    __extends(PagesListComponent, _super);
    function PagesListComponent(pageService, selectItemService, modalService, modelService) {
        var _this = _super.call(this) || this;
        _this.pageService = pageService;
        _this.selectItemService = selectItemService;
        _this.modalService = modalService;
        _this.modelService = modelService;
        _this.domainsLoaded = false;
        _this.pagesLoaded = false;
        _this.selectItemService.event$.subscribe(function (e) {
            if (e.itemType === _models_select_item_event__WEBPACK_IMPORTED_MODULE_2__["SelectItemEvent"].Type.PageRemove) {
                _this.pages = _this.pages.filter(function (p) { return p.id !== e.payload.pageId; });
                _this.groupPages();
            }
        });
        return _this;
    }
    PagesListComponent.prototype.processLoadedState = function () {
        var _this = this;
        var state = this.getState();
        for (var key in state) {
            this[key] = state[key];
        }
        if (this.pages) {
            this.loadPage(this.pages.find(function (p) { return p.id == _this.selectedPageId; }), true);
        }
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
    PagesListComponent.prototype.reorderApply = function () {
        this.modelService.reorderApply('page', this.groupedPages[this.selectedDomain]);
    };
    PagesListComponent.prototype.findDomainById = function (domainId) {
        return this.domains.find(function (d) { return d.id == domainId; });
    };
    PagesListComponent.prototype.openModal = function (template, options) {
        this.modalRef = this.modalService.show(template, options);
    };
    PagesListComponent.prototype.groupPages = function () {
        this.groupedPages = [];
        if (this.domainsLoaded && this.pagesLoaded) {
            try {
                for (var _a = __values(this.pages), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var page = _b.value;
                    if (this.groupedPages[page.domain_id] === undefined) {
                        this.groupedPages[page.domain_id] = [];
                    }
                    this.groupedPages[page.domain_id].push(page);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        for (var domainId in this.groupedPages) {
            this.groupedPages[domainId] = this.groupedPages[domainId].sort(function (a, b) { return a.order - b.order; });
        }
        var e_1, _c;
    };
    ;
    PagesListComponent.prototype.createNewPage = function (name, domainId, showInMenu, url) {
        var _this = this;
        this.pageService.createPage({
            'name': name,
            'domain_id': domainId,
            'show_in_menu': showInMenu,
            'url': url
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
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _model_service__WEBPACK_IMPORTED_MODULE_7__["ModelService"]])
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
    PagesService.prototype.getPage = function (pageId) {
        return this.http.get(this.pagesUrl + '/' + pageId);
    };
    PagesService.prototype.getPageFields = function (pageId, language) {
        return this.http.get(this.pageFieldsUrl + '/' + pageId + '?lang=' + language);
    };
    PagesService.prototype.savePageFields = function (pageId, pageFields, language) {
        return this.http.put(this.pageFieldsUrl + '/' + pageId + '?lang=' + language, pageFields);
    };
    PagesService.prototype.savePage = function (page, language) {
        return this.http.put(this.pagesUrl + '/' + page.id + '?lang=' + language, page);
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

module.exports = ".bordered-section {\n  border: 1px solid #444;\n  margin: 5px;\n}\n.shadowed {\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);\n}\n.put-right {\n  position: absolute;\n  right: 11px;\n  left: 350px;\n  top: 17px;\n  max-height: 100%;\n  overflow-y: auto;\n}\n.sections-selector,\n.general-info,\n.items-block {\n  background-color: #fff;\n  margin: 15px;\n  display: block;\n  width: 100%;\n  vertical-align: top;\n}\n.sections-selector + page-editor,\n.general-info + page-editor,\n.items-block + page-editor {\n  background-color: #fff;\n  margin-left: 10px;\n  padding: 10px;\n  box-shadow: 0 0 50px rgba(0, 0, 0, 0.05);\n  display: inline-block;\n  vertical-align: top;\n}\n.sections-selector .item,\n.general-info .item,\n.items-block .item {\n  height: 35px;\n  line-height: 35px;\n  padding-left: 10px;\n  position: relative;\n  overflow: hidden;\n}\n.sections-selector .item:not(.selected) .delete,\n.general-info .item:not(.selected) .delete,\n.items-block .item:not(.selected) .delete {\n  display: none;\n}\n.sections-selector .item.selected,\n.general-info .item.selected,\n.items-block .item.selected {\n  background-color: #eee;\n}\n.sections-selector .item.selected .delete,\n.general-info .item.selected .delete,\n.items-block .item.selected .delete {\n  position: absolute;\n  top: -5px;\n  right: 0;\n  padding: 5px;\n  background-color: #eee;\n}\n"

/***/ }),

/***/ "./src/app/pages/pages.component.html":
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-editor\">\n    <div class=\"wrapper\">\n\n        <div class=\"module-menu-element\" *ngIf=\"selectedPageId !== null\">\n            <h3 *ngIf=\"selectedPageId == 26\">Тренеры</h3>\n            <div class=\"items-block\" *ngIf=\"selectedPageId == 26\">\n                <trainers class=\"integrated\"></trainers>\n            </div>\n\n            <h3 *ngIf=\"selectedPageId == 19\">Номера</h3>\n            <div class=\"items-block\" *ngIf=\"selectedPageId == 19\">\n                <rooms class=\"integrated\"></rooms>\n            </div>\n\n\n            <h3>Список секций</h3>\n            <div class=\"sections-selector\" *ngIf=\"selectedPageFieldsSections\">\n                <div *ngFor=\"let section of selectedPageFieldsSections.values; index as sectionNumber;\"\n                     (click)=\"selectSection(sectionNumber)\" [class.selected]=\"sectionNumber === selectedSectionNumber\" class=\"item\">\n                    {{getSectionTitle(sectionNumber)}}\n                    <div class=\"delete\" click-stop-propagation (click)=\"deleteSectionWithConfirm('sectionsParams', sectionNumber)\"><i class=\"fa fa-close\"></i></div>\n                </div>\n                <div class=\"sections-panel toolbar-element\" *ngIf=\"selectedPageFields.params['sectionsParams'] !== undefined && (selectedPageFields.params['sectionsParams']['availableInstances'] | json) != '{}'\">\n                    <div class=\"btn-group\" dropdown #dropdown=\"bs-dropdown\" [autoClose]=\"true\">\n                        <div dropdownToggle aria-controls=\"dropdown-basic\">\n                            <i class=\"fa fa-plus\"></i>\n                        </div>\n                        <ul id=\"dropdown-triggers-manual\" *dropdownMenu class=\"dropdown-menu\"\n                            role=\"menu\" aria-labelledby=\"button-triggers-manual\">\n                            <li *ngFor=\"let sectionType in selectedPageFields.params['sectionsParams']['availableInstances']\" role=\"menuitem\">\n                                <a class=\"dropdown-item\" (click)=\"appendSection('sectionsParams', sectionType)\">\n                                    {{selectedPageFields.params['sectionsParams']['instancesLabels'][sectionType]}}\n                                </a>\n                            </li>\n                        </ul>\n                        <div (click)=\"reorder()\"><i class=\"fa fa-bars\"></i></div>\n                    </div>\n                </div>\n            </div>\n\n            <h3>Общие настройки</h3>\n            <div (click)=\"selectOther()\"  class=\"general-info\">\n                <div class=\"item\" [class.selected]=\"selectOtherParams === true\">Общие настройки</div>\n            </div>\n\n            <div class=\"module-panel\" *ngIf=\"selectedPageFields !== null\">\n                <button (click)=\"save()\" class=\"save ripple module-control-button-element default\">Сохранить</button>\n                <button (click)=\"deleteWithConfirm()\" class=\"ripple module-control-button-element delete\">Удалить</button>\n            </div>\n        </div>\n        <div class=\"module-content-element\">\n            <accordion *ngIf=\"selectOtherParams == true\">\n                <accordion-group heading=\"Параметры страницы\">\n                    <div class=\"field title\">\n                        ID страницы: {{currentPage.id}}\n                    </div>\n                    <div class=\"field\">\n                        <div class=\"title\"><label for=\"editor-page-name\">Название</label></div>\n                        <div class=\"content\">\n                            <input id=\"editor-page-name\" [(ngModel)]=\"currentPage.name\">\n                        </div>\n                    </div>\n                    <div class=\"field\">\n                        <div class=\"title\"><label for=\"editor-page-url\">URL</label></div>\n                        <div class=\"content\">\n                            <input id=\"editor-page-url\" [(ngModel)]=\"currentPage.url\">\n                        </div>\n                    </div>\n                    <div class=\"field\">\n                        <div class=\"title\"><label for=\"editor-page-published\">Опубликована</label></div>\n                        <div class=\"content\">\n                            <mat-checkbox [color]=\"'primary'\" id=\"editor-page-published\" [(ngModel)]=\"currentPage.is_enabled\"></mat-checkbox>\n                        </div>\n                    </div>\n                    <div class=\"field\">\n                        <div class=\"title\"><label for=\"editor-page-show\">Показывать в меню</label></div>\n                        <div class=\"content\">\n                            <mat-checkbox [color]=\"'primary'\" id=\"editor-page-show\" [(ngModel)]=\"currentPage.show_in_menu\"></mat-checkbox>\n                        </div>\n                    </div>\n                </accordion-group>\n            </accordion>\n            <page-editor *ngIf=\"selectOtherParams == true && sectionsInited\"\n                         [params]=\"selectedPageFieldsOther.params\"\n                         [values]=\"selectedPageFieldsOther.values\"\n                         [uniqKey]=\"'root'\">\n            </page-editor>\n            <page-editor *ngIf=\"selectedSectionNumber !== null && sectionsInited\"\n                         [params]=\"selectedPageFieldsSections.params['availableInstances'][selectedPageFieldsSections.values[selectedSectionNumber].type]\"\n                         [values]=\"selectedPageFieldsSections.values[selectedSectionNumber]\"\n                         [uniqKey]=\"'root'\">\n            </page-editor>\n        </div>\n    </div>\n</div>\n<ng-template #confirmationDialog class=\"alert-box\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Подтвердите действиe</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        Удалить страницу?\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"delete()\">Да</button>\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modalRef.hide()\">Нет</button>\n    </div>\n</ng-template>\n\n<ng-template #sectionConfirmationDialog class=\"alert-box\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Подтвердите действиe</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        Удалить секцию?\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"deleteSection()\">Да</button>\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modalRef.hide()\">Нет</button>\n    </div>\n</ng-template>\n\n\n<ng-template #reorderDialog>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Поменять местами секции</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <bs-sortable *ngIf=\"pageFieldsSectionsOrder\"\n            [(ngModel)]=\"pageFieldsSectionsOrder\"\n            itemClass=\"sortable-item\"\n            itemActiveClass=\"sortable-item-active\"\n            placeholderItem=\"Drag here\"\n            placeholderClass=\"placeholderStyle\"\n            wrapperClass=\"sortable-wrapper\"\n            fieldName=\"name\"\n        ></bs-sortable>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"ripple module-control-button-element default\" (click)=\"reorderApply()\">Да</button>\n        <button type=\"button\" class=\"ripple module-control-button-element cancel\" (click)=\"modalRef.hide()\">Отмена</button>\n    </div>\n</ng-template>\n"

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
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _models_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/state */ "./src/app/models/state.ts");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../storage */ "./src/app/storage.ts");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../notification.service */ "./src/app/notification.service.ts");
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
var __values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};








var PagesComponent = /** @class */ (function (_super) {
    __extends(PagesComponent, _super);
    function PagesComponent(pageService, selectItemService, modalService, ref, notificationService) {
        var _this = _super.call(this) || this;
        _this.pageService = pageService;
        _this.selectItemService = selectItemService;
        _this.modalService = modalService;
        _this.ref = ref;
        _this.notificationService = notificationService;
        _this.domainsLoaded = false;
        _this.pagesLoaded = false;
        _this.selectedDomain = 1;
        _this.selectedPageId = null;
        _this.selectedPageFields = null;
        _this.language = 1;
        _this.deleteSectionFieldName = null;
        _this.deleteSectionNumber = null;
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
    PagesComponent_1 = PagesComponent;
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
            //console.log('Initing section!');
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
    PagesComponent.prototype.deleteSectionWithConfirm = function (fieldName, sectionNumber) {
        if (fieldName === void 0) { fieldName = 'sectionsParams'; }
        this.deleteSectionFieldName = fieldName;
        this.deleteSectionNumber = sectionNumber;
        this.modalRef = this.modalService.show(this.sectionConfirmationDialog);
    };
    PagesComponent.prototype.deleteSection = function () {
        var fieldName = this.deleteSectionFieldName;
        var sectionNumber = this.deleteSectionNumber;
        this.selectedPageFields.values[fieldName].splice(sectionNumber, 1);
        this.selectedSectionNumber = null;
        this.initSectionsAndOther(this.selectedPageFields);
        this.modalRef.hide();
    };
    PagesComponent.prototype.initSectionsAndOther = function (pageFields, process) {
        if (process === void 0) { process = true; }
        if (process) {
            this.processLoadedState();
        }
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
                try {
                    for (var _a = __values(pageFields.values['sectionsParams']), _b = _a.next(); !_b.done; _b = _a.next()) {
                        var section = _b.value;
                        var sectionType = section.type;
                        var sectionName = this.getSectionTitle(orderId);
                        this.pageFieldsSectionsOrder.push({
                            id: orderId,
                            name: sectionName
                        });
                        orderId++;
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            else {
                this.selectedPageFieldsOther.params[key] = pageFields.params[key];
                this.selectedPageFieldsOther.values[key] = pageFields.values[key];
            }
        }
        this.sectionsInited = true;
        var e_1, _c;
    };
    PagesComponent.prototype.getPageFieldsValues = function (params, values) {
        var result = {};
        for (var key in params) {
            if (params[key].type === 'composite') {
                var sectionDataList = [];
                try {
                    for (var _a = __values(values[key]), _b = _a.next(); !_b.done; _b = _a.next()) {
                        var section = _b.value;
                        var sectionData = this.getPageFieldsValues(params[key]['availableInstances'][section.type], section);
                        sectionData.type = section.type;
                        sectionDataList.push(sectionData);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                result[key] = sectionDataList;
            }
            else {
                result[key] = values[key];
            }
        }
        return result;
        var e_2, _c;
    };
    PagesComponent.prototype.validatePageFieldsValues = function (params, values) {
        for (var key in params) {
            if (params[key].type !== 'composite') {
                if (params[key].required === 1 && !values[key]) {
                    return false;
                }
            }
            else {
                try {
                    for (var _a = __values(values[key]), _b = _a.next(); !_b.done; _b = _a.next()) {
                        var section = _b.value;
                        if (!this.validatePageFieldsValues(params[key]['availableInstances'][section.type], section)) {
                            return false;
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
        }
        return true;
        var e_3, _c;
    };
    PagesComponent.prototype.save = function () {
        if (!this.validatePageFieldsValues(this.selectedPageFields.params, this.selectedPageFields.values)) {
            this.notificationService.error("Невозможно сохранить страницу, заполните обязательные поля");
            return;
        }
        this.copyOtherParamsChanges();
        this.pageService.savePage(this.currentPage, this.language).subscribe();
        this.pageService.savePageFields(this.selectedPageId, this.getPageFieldsValues(this.selectedPageFields.params, this.selectedPageFields.values), this.language)
            .subscribe();
    };
    PagesComponent.prototype.copyOtherParamsChanges = function () {
        for (var key in this.selectedPageFieldsOther.values) {
            this.selectedPageFields.values[key] = this.selectedPageFieldsOther.values[key];
        }
    };
    PagesComponent.prototype.getSectionTitle = function (sectionNumber) {
        var sectionValues = this.selectedPageFieldsSections.values[sectionNumber];
        var name = sectionValues.sectionTypeName;
        if (sectionValues[PagesComponent_1.ADMIN_TITLE_FIELD]) {
            name = name + ' - ' + sectionValues[PagesComponent_1.ADMIN_TITLE_FIELD];
        }
        return name;
    };
    PagesComponent.prototype.deleteWithConfirm = function () {
        this.modalRef = this.modalService.show(this.confirmationDialog);
    };
    PagesComponent.prototype.reorder = function () {
        this.modalRef = this.modalService.show(this.reorderDialog);
    };
    PagesComponent.prototype.delete = function () {
        var _this = this;
        this.pageService.deletePage(this.selectedPageId)
            .subscribe(function () {
            _this.pages = _this.pages.filter(function (p) { return p.id !== _this.selectedPageId; });
            _this.selectItemService.emitEventOfType(_models_select_item_event__WEBPACK_IMPORTED_MODULE_3__["SelectItemEvent"].Type.PageRemove, {
                pageId: _this.selectedPageId
            });
            _this.selectedPageId = null;
            _this.modalRef.hide();
        });
    };
    PagesComponent.prototype.groupPages = function () {
        if (this.domainsLoaded && this.pagesLoaded) {
            try {
                for (var _a = __values(this.pages), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var page = _b.value;
                    if (this.groupedPages[page.domain_id] === undefined) {
                        this.groupedPages[page.domain_id] = [];
                    }
                    this.groupedPages[page.domain_id].push(page);
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_4) throw e_4.error; }
            }
        }
        var e_4, _c;
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
        this.getPages();
        this.getDomains();
        this.groupedPages = [];
    };
    PagesComponent.ADMIN_TITLE_FIELD = 'adminTitle';
    __decorate([
        _storage__WEBPACK_IMPORTED_MODULE_6__["bindToComponentState"],
        __metadata("design:type", Number)
    ], PagesComponent.prototype, "selectedSectionNumber", void 0);
    __decorate([
        _storage__WEBPACK_IMPORTED_MODULE_6__["bindToComponentState"],
        __metadata("design:type", Boolean)
    ], PagesComponent.prototype, "selectOtherParams", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('confirmationDialog'),
        __metadata("design:type", Object)
    ], PagesComponent.prototype, "confirmationDialog", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sectionConfirmationDialog'),
        __metadata("design:type", Object)
    ], PagesComponent.prototype, "sectionConfirmationDialog", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('reorderDialog'),
        __metadata("design:type", Object)
    ], PagesComponent.prototype, "reorderDialog", void 0);
    PagesComponent = PagesComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pages',
            template: __webpack_require__(/*! ./pages.component.html */ "./src/app/pages/pages.component.html"),
            styles: [__webpack_require__(/*! ./pages.component.css */ "./src/app/pages/pages.component.css")],
        }),
        __metadata("design:paramtypes", [_pages_service__WEBPACK_IMPORTED_MODULE_1__["PagesService"],
            _select_item_service__WEBPACK_IMPORTED_MODULE_2__["SelectItemService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]])
    ], PagesComponent);
    return PagesComponent;
    var PagesComponent_1;
}(_models_state__WEBPACK_IMPORTED_MODULE_5__["State"]));



/***/ }),

/***/ "./src/app/room-editor/room-editor.component.css":
/*!*******************************************************!*\
  !*** ./src/app/room-editor/room-editor.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-card {\n  display: inline-block;\n  width: 11.5%;\n  padding-top: 11.5%;\n  position: relative;\n  margin: 0.5%;\n}\n.image-card:hover .short-description {\n  height: initial;\n  white-space: initial;\n  line-height: 22px;\n  padding: 13px;\n  padding-left: 12px;\n}\n.image-card:before {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  bottom: 0;\n  left: 5px;\n  content: \"\";\n  border-radius: 6px;\n  box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.4);\n}\n.image-card .plus {\n  width: 31px;\n  height: 31px;\n  position: relative;\n  background: url(/admin/assets/icons/plus.svg) no-repeat;\n  font-size: 0;\n  margin-top: 11px;\n  display: block;\n}\n.image-card.ticked .image-card-wrapper:after {\n  position: absolute;\n  content: '';\n  width: 100%;\n  height: 100%;\n  border: 4px solid #4a90e2;\n  display: block;\n}\n.image-card .image-card-wrapper {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  background-color: #fff;\n  border-radius: 6px;\n  box-sizing: border-box;\n}\n.image-card:before {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  bottom: 0;\n  left: 5px;\n  content: \"\";\n  border-radius: 6px;\n  box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.4);\n}\n.image-card img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translateY(-50%) translateX(-50%);\n          transform: translateY(-50%) translateX(-50%);\n}\n.image-card img.landscape {\n  height: 100%!important;\n}\n.image-card img.portrait {\n  width: 100%!important;\n}\n.image-card .new-image,\n.image-card .load-more {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #fff;\n  border-radius: 6px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.image-card .short-description {\n  position: absolute;\n  bottom: 0;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 100%;\n  overflow: hidden;\n  padding: 12px;\n  background-color: #fff;\n  box-shadow: 0 -4px 7px rgba(0, 0, 0, 0.3);\n}\n.image-card:not(:hover) .delete {\n  display: none;\n}\n.image-card .delete {\n  cursor: pointer;\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  color: #000;\n}\n.new-image.image-wrapper {\n  margin-bottom: 0!important;\n}\n"

/***/ }),

/***/ "./src/app/room-editor/room-editor.component.html":
/*!********************************************************!*\
  !*** ./src/app/room-editor/room-editor.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"object-editor\" [ngClass]=\"{active: room !== null}\">\n  <div class=\"close\" (click)=\"close()\">\n    <i class=\"fa fa-window-close\" aria-hidden=\"true\"></i>\n  </div>\n  <div *ngIf=\"room !== null\">\n    <div class=\"field name\">\n      <span class=\"label\">Название комнаты</span>\n      <input type=\"text\" [(ngModel)]=\"room.title\">\n    </div>\n\n    <div class=\"field price\">\n      <span class=\"label\">Цена</span>\n      <input type=\"text\" [(ngModel)]=\"room.price_from\">\n    </div>\n\n    <div class=\"field square\">\n      <span class=\"label\">Площадь</span>\n      <input type=\"text\" [(ngModel)]=\"room.square\">\n    </div>\n\n    <div class=\"field description\">\n      <span class=\"label\">Описание комнаты</span>\n      <textarea ngxTrumbowygEditor [(ngModel)]=\"room.text\" [options]=\"editorOptions\"></textarea>\n    </div>\n\n    <div class=\"field images\">\n      <span class=\"label\">Изображения</span>\n\n      <div *ngIf=\"roomImages.length === 0\">\n        <div class=\"image-card\" (click)=\"chooser.showPopup()\">\n          <div class=\"new-image image-wrapper\">\n            Добавить еще<br>\n            <i class=\"plus\"></i><br>\n          </div>\n        </div>\n      </div>\n\n      <ng-template #imageTemplate let-item=\"item\" let-index=\"index\">\n        <div class=\"image-card\" (click)=\"chooser.showPopup()\" *ngIf=\"index === 0\">\n          <div class=\"new-image image-wrapper\">\n            Добавить еще<br>\n            <i class=\"plus\"></i><br>\n          </div>\n        </div>\n        <div class=\"image-card\" (click)=\"chooser.showFastEditor(item.value)\">\n          <div class=\"image-card-wrapper\">\n            <img #imagesList [src]=\"'/' + item.value.filename\" (load)=\"detectOrientation(index)\">\n          </div>\n          <span class=\"delete\" (click)=\"removeImage(item.value)\">\n            <i class=\"fa fa-close\"></i>\n          </span>\n        </div>\n      </ng-template>\n\n      <bs-sortable #sortable\n              [(ngModel)]=\"roomImages\"\n              [itemTemplate]=\"imageTemplate\"\n              itemClass=\"sortable-item-unset\"\n              itemActiveClass=\"sortable-item-active\"\n      ></bs-sortable>\n\n      <app-image-chooser-popup #chooser (selectedImageIds)=\"appendImages($event)\" [multiple]=\"true\"></app-image-chooser-popup>\n    </div>\n\n    <div class=\"field alias\">\n      <span class=\"label\">Путь URL</span>\n      <input type=\"text\" [(ngModel)]=\"room.alias\">\n    </div>\n\n    <div class=\"field published\">\n      <span class=\"label\">Опубликован</span>\n      <mat-checkbox [color]=\"'primary'\" [(ngModel)]=\"room.published\"></mat-checkbox>\n    </div>\n\n    <div class=\"buttons\">\n      <button type=\"button\" class=\"ripple module-control-button-element default\" (click)=\"save()\">Сохранить</button>\n      <button type=\"button\" class=\"ripple module-control-button-element delete\" (click)=\"openModal(confirmDelete)\">Удалить</button>\n    </div>\n  </div>\n</div>\n<ng-template #imageChoose>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Выберите изображение</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <app-image-chooser (selectedImageId)=\"selectImage($event)\"></app-image-chooser>\n    <button class=\"btn btn-primary\">выбор</button>\n    <button class=\"btn btn-danger\" (click)=\"modalRef.hide()\">отмена</button>\n  </div>\n</ng-template>\n<ng-template #confirmDelete>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Вы точно хотите удалить этот номер?</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"buttons\">\n      <button class=\"ripple module-control-button-element cancel\" (click)=\"modalRef.hide()\">отмена</button>\n      <button class=\"ripple module-control-button-element delete\" (click)=\"delete()\">да, удалить</button>\n    </div>\n  </div>\n</ng-template>"

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
/* harmony import */ var _models_cms_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/cms-image */ "./src/app/models/cms-image.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
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
        this.editorOptions = _app_module__WEBPACK_IMPORTED_MODULE_7__["AppModule"].editorOptions;
        this.roomImages = [];
        this.reloadInProgress = false;
        selectItemService.event$.subscribe(function (event) {
            if (event.itemType === _models_select_item_event__WEBPACK_IMPORTED_MODULE_1__["SelectItemEvent"].Type.RoomSelect) {
                _this.room = event.payload.room;
                _this.reloadImages();
                if (!event.payload.initial) {
                    _this.selectItemService.emitCloseAll('room');
                }
            }
        });
        this.editorOptions.btns = [
            ['strong', 'em', 'del'],
            ['link'],
            ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
            ['unorderedList', 'orderedList'],
        ];
    }
    RoomEditorComponent.prototype.removeImage = function (image) {
        this.roomImages = this.roomImages.filter(function (i) { return i.id != image.id; });
        this.sortableComponent.writeValue(this.roomImages);
    };
    RoomEditorComponent.prototype.appendImages = function (images) {
        var _this = this;
        this.roomImages = this.roomImages.concat(images.filter(function (i) { return !_this.roomImages.find(function (img) { return img.id === i.id; }); }));
        this.sortableComponent.writeValue(this.roomImages);
    };
    RoomEditorComponent.prototype.detectOrientation = function (i) {
        var image = jquery__WEBPACK_IMPORTED_MODULE_6__('.image-card img').eq(i);
        console.log(image.get(0));
        if (image.width() > image.height()) {
            image.addClass('landscape');
        }
        else if (image.width() < image.height()) {
            image.addClass('portrait');
        }
    };
    RoomEditorComponent.prototype.reloadImages = function () {
        var _this = this;
        this.roomImages = [];
        var observable = this.modelService.getRoomImages(this.room);
        if (observable !== null && !this.reloadInProgress) {
            this.reloadInProgress = true;
            observable.subscribe(function (images) {
                images.forEach(function (i) {
                    _this.roomImages.push(_models_cms_image__WEBPACK_IMPORTED_MODULE_5__["CmsImage"].fromRaw(i));
                });
                _this.sortableComponent.writeValue(_this.roomImages);
                _this.reloadInProgress = false;
            }, function (error) {
                _this.reloadInProgress = false;
            });
        }
    };
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
        this.room.setImages(this.roomImages);
        this.modelService.saveRoom(this.room);
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
    RoomEditorComponent.prototype.ngOnInit = function () {
        this.room = null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('imagesList'),
        __metadata("design:type", Object)
    ], RoomEditorComponent.prototype, "imageList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sortable'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["SortableComponent"])
    ], RoomEditorComponent.prototype, "sortableComponent", void 0);
    RoomEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'room-editor',
            template: __webpack_require__(/*! ./room-editor.component.html */ "./src/app/room-editor/room-editor.component.html"),
            styles: [__webpack_require__(/*! ../common/object-editor.component.css */ "./src/app/common/object-editor.component.css"), __webpack_require__(/*! ./room-editor.component.css */ "./src/app/room-editor/room-editor.component.css")],
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

module.exports = "<div class=\"content\">\n    <div class=\"module-list\">\n        <ul class=\"object-list-element\" *ngIf=\"rooms !== null\" [ngClass]=\"{active: selectedRoom !== null}\" #trainersList>\n            <li class=\"object-item\" *ngFor=\"let room of rooms\" (click)=\"loadRoom(room)\" [ngClass]=\"{active: this.selectedRoom && room.id == selectedRoom.id}\">\n                <h2 class=\"object-name\">\n                    {{room.title | wordCountLimit: 2 }}\n                    <a *ngIf=\"getRoomPageUrl(room) !== null\" [href]=\"getRoomPageUrl(room)\" target=\"_blank\"><i class=\"fa fa-external-link\" aria-hidden=\"true\"></i></a>\n                </h2>\n            </li>\n        </ul>\n        <div class=\"toolbar-element\">\n            <div (click)=\"openModal(createRoom)\"><i class=\"fa fa-plus\"></i></div>\n            <div (click)=\"openModal(reorderRooms)\"><i class=\"fa fa-bars\"></i></div>\n        </div>\n    </div>\n    <div class=\"module-editor module-editor-visible\" [ngClass]=\"{'visible': selectedRoom != null}\">\n        <room-editor></room-editor>\n    </div>\n</div>\n<ng-template #createRoom>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Создать нового номера</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <label>\n            Название:\n        </label>\n        <div>\n            <input type=\"text\" #newRoomName>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"buttons\">\n            <button type=\"button\" class=\"ripple module-control-button-element default\" (click)=\"createNewRoom(newRoomName.value)\">Создать</button>\n            <button type=\"button\" class=\"ripple module-control-button-element delete\" (click)=\"closeModal()\">Отмена</button>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #reorderRooms>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Поменять местами</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <bs-sortable *ngIf=\"rooms\"\n                     [(ngModel)]=\"rooms\"\n                     itemClass=\"sortable-item\"\n                     itemActiveClass=\"sortable-item-active\"\n                     placeholderItem=\"Drag here\"\n                     placeholderClass=\"placeholderStyle\"\n                     wrapperClass=\"sortable-wrapper\"\n                     fieldName=\"title\"\n        ></bs-sortable>\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"buttons\">\n            <button type=\"button\" class=\"ripple module-control-button-element save\" (click)=\"reorderApply();modalRef.hide();\">Да</button>\n            <button type=\"button\" class=\"ripple module-control-button-element cancel\" (click)=\"modalRef.hide()\">Отмена</button>\n        </div>\n    </div>\n</ng-template>"

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
/* harmony import */ var _pages_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages.service */ "./src/app/pages.service.ts");
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
    function RoomsComponent(modelService, selectItemService, modalService, pagesService) {
        var _this = _super.call(this) || this;
        _this.modelService = modelService;
        _this.selectItemService = selectItemService;
        _this.modalService = modalService;
        _this.pagesService = pagesService;
        _this.detailPage = null;
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
    RoomsComponent_1 = RoomsComponent;
    RoomsComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    RoomsComponent.prototype.closeModal = function () {
        this.modalRef.hide();
    };
    RoomsComponent.prototype.processLoadedState = function () {
        var _this = this;
        var state = this.getState();
        for (var key in state) {
            this[key] = state[key];
        }
        if (this.selectedRoom !== null && this.rooms) {
            this.loadRoom(this.rooms.find(function (r) { return r.id == _this.selectedRoom.id; }), true);
        }
    };
    RoomsComponent.prototype.reorderApply = function () {
        this.modelService.reorderApply('room', this.rooms);
    };
    RoomsComponent.prototype.loadRooms = function (force) {
        var _this = this;
        if (force === void 0) { force = false; }
        this.modelService.getRooms().subscribe(function (rooms) {
            rooms.sort(function (a, b) {
                return a.n - b.n;
            });
            _this.rooms = rooms.map(function (room) { return _models_room__WEBPACK_IMPORTED_MODULE_2__["Room"].fromRaw(room); });
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
    RoomsComponent.prototype.getRoomPageUrl = function (room) {
        if (!room.alias || !room.alias.trim()) {
            return null;
        }
        if (this.detailPage !== null) {
            var aliasRegex = /<alias:(.*)>/gi;
            return this.detailPage.url.replace(aliasRegex, room.alias);
        }
        return null;
    };
    RoomsComponent.prototype.loadDetailPage = function () {
        var _this = this;
        this.pagesService.getPage(RoomsComponent_1.DETAIL_ROOM_PAGE_ID).subscribe(function (page) {
            _this.detailPage = page;
        });
    };
    RoomsComponent.prototype.ngOnInit = function () {
        this.loadRooms();
        this.loadDetailPage();
    };
    RoomsComponent.DETAIL_ROOM_PAGE_ID = 28;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('roomsList'),
        __metadata("design:type", Object)
    ], RoomsComponent.prototype, "roomsContainer", void 0);
    __decorate([
        _storage__WEBPACK_IMPORTED_MODULE_7__["bindToComponentState"],
        __metadata("design:type", _models_room__WEBPACK_IMPORTED_MODULE_2__["Room"])
    ], RoomsComponent.prototype, "selectedRoom", void 0);
    RoomsComponent = RoomsComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'rooms',
            template: __webpack_require__(/*! ./rooms.component.html */ "./src/app/rooms/rooms.component.html"),
            styles: [__webpack_require__(/*! ../common/object-list.component.css */ "./src/app/common/object-list.component.css")],
        }),
        __metadata("design:paramtypes", [_model_service__WEBPACK_IMPORTED_MODULE_1__["ModelService"],
            _select_item_service__WEBPACK_IMPORTED_MODULE_4__["SelectItemService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsModalService"],
            _pages_service__WEBPACK_IMPORTED_MODULE_8__["PagesService"]])
    ], RoomsComponent);
    return RoomsComponent;
    var RoomsComponent_1;
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
    SelectItemService.prototype.emitEventOfType = function (type, options) {
        if (options === void 0) { options = {}; }
        this.emit(new _models_select_item_event__WEBPACK_IMPORTED_MODULE_2__["SelectItemEvent"](type, options));
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

module.exports = "<select [(ngModel)]=\"selectedDomain\" class=\"form-control form-control-lg\" *ngIf=\"domains !== null\">\n  <option *ngFor='let domain of domains' [value]=\"domain.id\">{{domain.title}}</option>\n</select>\n<div *ngIf=\"groupedSettings !== null && groupedSettings[selectedDomain]\">\n  <div *ngFor='let groupTitle in groupedSettings[selectedDomain]' class='navbar-selector-item' (click)=\"loadGroup(groupTitle)\"\n       [ngClass]=\"{'active':groupTitle==selectedGroupTitle}\"> {{groupTitle}} </div>\n</div>"

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
var __values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};





var SettingsListComponent = /** @class */ (function () {
    function SettingsListComponent(pageService, selectItemService, settingsService) {
        this.pageService = pageService;
        this.selectItemService = selectItemService;
        this.settingsService = settingsService;
        this.groupedSettings = null;
        this.domains = null;
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
        try {
            for (var _a = __values(this.domains), _b = _a.next(); !_b.done; _b = _a.next()) {
                var domain = _b.value;
                this.getSettings(domain.id);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var e_1, _c;
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

module.exports = ".settings-container {\n  overflow: hidden;\n}\n.settings-sub-group {\n  margin: 10px;\n}\n.settings-sub-group header {\n  background: #f8efc0;\n}\n"

/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"settings-container\" *ngIf=\"groupSettings\">\n    <accordion [closeOthers]=\"true\" class=\"settings-sub-group\">\n        <accordion-group heading=\"{{subGroupTitle}}\" *ngFor=\"let subGroupTitle in groupSettings\">\n            <section class=\"settings-list\">\n                <div *ngFor=\"let item of groupSettings[subGroupTitle]\">\n                    <app-page-editor-field-extended *ngIf=\"isExtended(item)\" [title]=\"item.header\" [params]=\"item\" [valueSet]=\"item\" [valueKey]=\"'value'\"></app-page-editor-field-extended>\n                    <app-page-editor-field *ngIf=\"!isExtended(item)\" [title]=\"item.header\" [params]=\"item\" [valueSet]=\"item\" [valueKey]=\"'value'\"></app-page-editor-field>\n                </div>\n            </section>\n            <button (click)=\"save()\"class=\"ripple module-control-button-element default\">Сохранить</button>\n        </accordion-group>\n    </accordion>\n</div>"

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
var __values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
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
                    try {
                        for (var _a = __values(_this.groupSettings[subGroupTitle]), _b = _a.next(); !_b.done; _b = _a.next()) {
                            var item = _b.value;
                            _this.initialValues[item.id] = item.value;
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                //console.log('ivaules:');
                //console.log(this.initialValues);
            }
            var e_1, _c;
        });
    }
    SettingsComponent.prototype.save = function () {
        for (var subGroupTitle in this.groupSettings) {
            try {
                for (var _a = __values(this.groupSettings[subGroupTitle]), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var item = _b.value;
                    if (this.initialValues[item.id] !== item.value) {
                        this.settinsService.save(item);
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        var e_2, _c;
    };
    SettingsComponent.prototype.isExtended = function (item) {
        return item.type &&
            (item.type == 'simple_json_list' ||
                item.type == 'simple_json');
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

/***/ "./src/app/sub-menu/images/images.component.css":
/*!******************************************************!*\
  !*** ./src/app/sub-menu/images/images.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bordered-section {\n  border: 1px solid #444;\n  margin: 5px;\n}\n.shadowed {\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);\n}\n.put-right {\n  position: absolute;\n  right: 11px;\n  left: 350px;\n  top: 17px;\n  max-height: 100%;\n  overflow-y: auto;\n}\n:host > div:not(.inline) {\n  width: 100%;\n  display: block;\n  position: relative;\n  text-align: left;\n  padding: 10px;\n}\n:host .inline {\n  display: inline-block;\n}\n:host .inline .selected-tags-list {\n  margin-top: 0!important;\n}\n:host .inline .filter-group {\n  display: inline-block;\n  vertical-align: top;\n  height: 40px;\n  padding: 10px;\n}\n:host .inline .filter-group .field-wrapper {\n  display: block;\n}\n:host .inline .filter-group .selected-tags-list,\n:host .inline .filter-group .field-wrapper :not(.tag),\n:host .inline .filter-group .selected-tags-list * {\n  display: inline-block;\n}\n:host .inline .filter-group .tags-list-box {\n  top: 30px;\n}\n.input-wrapper {\n  position: relative;\n}\n.input-wrapper input {\n  width: 100%;\n  border-color: #ced4da;\n}\n.input-wrapper .tags-list-box {\n  position: absolute;\n  z-index: 99;\n  left: 0;\n  width: 100%;\n  margin-top: 5px;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);\n  background-color: #fff;\n}\n.input-wrapper .tags-list-box .tag {\n  padding: 5px;\n  padding-left: 10px;\n}\n.input-wrapper .tags-list-box .tag.selected {\n  background-color: #e1e1e1;\n}\n.selected-tags-list {\n  margin-top: 10px;\n}\n.selected-tags-list .tag {\n  border-radius: 18px;\n  background-color: #f8efc0;\n  color: #000;\n  padding: 5px;\n  margin: 0 4px;\n  padding-left: 10px;\n  padding-right: 20px;\n  display: inline-block;\n  position: relative;\n  margin-bottom: 8px;\n}\n.selected-tags-list .tag .close {\n  top: 11px;\n  right: 6px;\n  font-size: 0.7em;\n  position: absolute;\n}\n.filter-group:not(:last-child) {\n  margin-bottom: 15px;\n}\n"

/***/ }),

/***/ "./src/app/sub-menu/images/images.component.html":
/*!*******************************************************!*\
  !*** ./src/app/sub-menu/images/images.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"imageFilters !== null\" (click)=\"blurProcessing($event)\" [class.inline]=\"inline\">\n    <div class=\"filter-group\">\n        Тип фото:\n        <select *ngIf=\"fixedImageTypeId === null\" [(ngModel)]=\"selectedTypeId\" class=\"form-control form-control-lg field-wrapper\" (ngModelChange)=\"applyFilter()\">\n            <option selected [value]=\"0\">Любой</option>\n            <option *ngFor='let type of imageFilters.types' [value]=\"type.id\">{{type.name}}</option>\n        </select>\n        <div *ngIf=\"fixedImageTypeId !== null\">{{fixedTypeName}}</div>\n    </div>\n    <div class=\"filter-group\">\n        Теги:\n        <div class=\"field-wrapper\">\n            <div class=\"input-wrapper\">\n                <input class=\"form-control form-control-lg\" (click)=\"showAvailableTags()\" [(ngModel)]=\"tagsFilter\"\n                       (keydown.arrowup)=\"decreaseSelectedTagIndex()\"\n                       (keydown.arrowdown)=\"increaseSelectedTagIndex()\"\n                       (keyup.enter)=\"selectTag()\"\n                       [focus]=\"focusEventEmitter\" id=\"tags-input\"\n                >\n                <div class=\"tags-list-box\" id=\"tags-list-box\" *ngIf=\"showTagsBox\">\n                    <div class=\"tag\" [class.selected]=\"i === selectedTagIndex\" *ngFor=\"let tag of getFilteredTags; let i = index;\" (mouseup)=\"selectTag(tag)\" (mouseenter)=\"setSelectedTagIndex(i)\">\n                        {{ tag }}\n                    </div>\n                </div>\n            </div>\n            <div class=\"selected-tags-list\">\n                <div class=\"tag\" *ngFor=\"let tag of filter.selectedTags\">\n                    {{ tag }}\n                    <i class=\"fa fa-close close\" (click)=\"unselectTag(tag)\"></i>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"filter-group\" *ngIf=\"showShowTitles\">\n        Показывать подписи<mat-checkbox [color]=\"'primary'\" [(ngModel)]=\"filter.showDescriptions\" (ngModelChange)=\"applyFilter()\"></mat-checkbox>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sub-menu/images/images.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/sub-menu/images/images.component.ts ***!
  \*****************************************************/
/*! exports provided: SubMenuImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubMenuImagesComponent", function() { return SubMenuImagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sub_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sub-menu.component */ "./src/app/sub-menu/sub-menu.component.ts");
/* harmony import */ var _model_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model.service */ "./src/app/model.service.ts");
/* harmony import */ var _select_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../select-item.service */ "./src/app/select-item.service.ts");
/* harmony import */ var _models_select_item_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/select-item-event */ "./src/app/models/select-item-event.ts");
/* harmony import */ var _models_image_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/image-filter */ "./src/app/models/image-filter.ts");
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






var SubMenuImagesComponent = /** @class */ (function (_super) {
    __extends(SubMenuImagesComponent, _super);
    function SubMenuImagesComponent(modelService, selectItemService) {
        var _this = _super.call(this) || this;
        _this.modelService = modelService;
        _this.selectItemService = selectItemService;
        _this.tagsFilter = '';
        _this.showTagsBox = false;
        _this.selectedTagIndex = 0;
        _this.focusEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.inline = false;
        _this.showShowTitles = true;
        _this.fixedImageTypeId = null;
        _this.fixedTypeName = null;
        _this.selectedTypeId = 0;
        _this.imageFilters = null;
        _this.filter = new _models_image_filter__WEBPACK_IMPORTED_MODULE_5__["ImageFilter"]();
        _this.filter.selectedTags = [];
        _this.filter.selectedType = null;
        _this.selectItemService.event$.subscribe(function (event) {
            if (event.itemType === _models_select_item_event__WEBPACK_IMPORTED_MODULE_4__["SelectItemEvent"].Type.NewTag) {
                var tag_1 = event.payload.tag;
                if (_this.imageFilters.tags.find(function (t) { return t === tag_1; }) === undefined) {
                    _this.imageFilters.tags.push(tag_1);
                }
            }
            if (event.itemType === _models_select_item_event__WEBPACK_IMPORTED_MODULE_4__["SelectItemEvent"].Type.RefreshTags) {
                _this.loadImageFilters();
            }
            if (event.itemType === _models_select_item_event__WEBPACK_IMPORTED_MODULE_4__["SelectItemEvent"].Type.AvailableTags) {
                _this.loadImageFilters(event.payload.availableTags);
            }
        });
        return _this;
    }
    SubMenuImagesComponent.prototype.isTagSelected = function (tag) {
        return !!this.filter.selectedTags.find(function (t) { return t === tag; });
    };
    SubMenuImagesComponent.prototype.setSelectedTagIndex = function (index) {
        this.selectedTagIndex = index;
    };
    SubMenuImagesComponent.prototype.increaseSelectedTagIndex = function () {
        this.selectedTagIndex++;
        if (this.selectedTagIndex >= this.getFilteredTags.length) {
            this.selectedTagIndex = 0;
        }
    };
    SubMenuImagesComponent.prototype.blurProcessing = function ($event) {
        if ($event.srcElement.id !== 'tags-input' && $event.srcElement.id !== 'tags-list-box') {
            console.log('hide');
            this.showAvailableTags(false);
            this.focusEventEmitter.emit(false);
        }
    };
    SubMenuImagesComponent.prototype.decreaseSelectedTagIndex = function () {
        this.selectedTagIndex--;
        if (this.selectedTagIndex < 0) {
            this.selectedTagIndex = this.getFilteredTags.length - 1;
        }
    };
    SubMenuImagesComponent.prototype.showAvailableTags = function (show) {
        if (show === void 0) { show = true; }
        if (show) {
            this.selectedTagIndex = 0;
        }
        this.showTagsBox = show;
    };
    SubMenuImagesComponent.prototype.applyFilter = function () {
        var _this = this;
        if (this.fixedImageTypeId !== null) {
            this.filter.selectedType = this.imageFilters.types.find(function (t) { return t.id == _this.fixedImageTypeId; });
        }
        else {
            console.log(this.selectedTypeId);
            this.filter.selectedType = (this.selectedTypeId ? this.imageFilters.types.find(function (t) { return t.id == _this.selectedTypeId; }) : null);
        }
        console.log(this.filter);
        this.selectItemService.emitEventOfType(_models_select_item_event__WEBPACK_IMPORTED_MODULE_4__["SelectItemEvent"].Type.ApplyFilter, {
            'filter': this.filter
        });
    };
    SubMenuImagesComponent.prototype.unselectTag = function (tag) {
        this.filter.selectedTags = this.filter.selectedTags.filter(function (t) { return t !== tag; });
        this.applyFilter();
    };
    SubMenuImagesComponent.prototype.processBlur = function ($event) {
        console.log($event);
    };
    SubMenuImagesComponent.prototype.selectTag = function (tag) {
        if (tag === void 0) { tag = null; }
        if (tag === null) {
            tag = this.getFilteredTags[this.selectedTagIndex];
        }
        if (!this.filter.selectedTags.find(function (t) { return t === tag; })) {
            this.filter.selectedTags.push(tag);
            this.tagsFilter = '';
            this.showAvailableTags(false);
            this.focusEventEmitter.emit(false);
            this.applyFilter();
        }
    };
    Object.defineProperty(SubMenuImagesComponent.prototype, "getFilteredTags", {
        get: function () {
            var _this = this;
            var result = [];
            if (!this.tagsFilter) {
                result = this.imageFilters.tags.filter(function (tag) {
                    return !_this.isTagSelected(tag);
                });
            }
            else {
                result = this.imageFilters.tags.filter(function (tag) {
                    return tag.startsWith(_this.tagsFilter) && !_this.isTagSelected(tag);
                });
            }
            return result.sort(function (a, b) {
                a = a.toLowerCase();
                b = b.toLowerCase();
                return a < b ? -1 : (a > b ? 1 : 0);
            });
        },
        enumerable: true,
        configurable: true
    });
    SubMenuImagesComponent.prototype.loadImageFilters = function (availableTags) {
        var _this = this;
        this.modelService.getImageFilters().subscribe(function (filters) {
            _this.imageFilters = filters;
            if (availableTags) {
                _this.imageFilters.tags = _this.imageFilters.tags.filter(function (t) { return availableTags.find(t) !== undefined; });
            }
            if (_this.fixedImageTypeId !== null) {
                var fixedType = _this.imageFilters.types.find(function (t) { return t.id == _this.fixedImageTypeId; });
                _this.fixedTypeName = fixedType.name;
            }
            if (_this.filter.selectedTags.length) {
                var oldSelectedTags = Object.assign({}, _this.filter.selectedTags);
                _this.filter.selectedTags = _this.filter.selectedTags.filter(function (tag) {
                    return !!_this.imageFilters.tags.find(function (t) { return t === tag; });
                });
                if (oldSelectedTags !== _this.filter.selectedTags) {
                    _this.applyFilter();
                }
            }
        });
    };
    SubMenuImagesComponent.prototype.ngOnInit = function () {
        this.loadImageFilters();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SubMenuImagesComponent.prototype, "inline", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SubMenuImagesComponent.prototype, "showShowTitles", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SubMenuImagesComponent.prototype, "fixedImageTypeId", void 0);
    SubMenuImagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sub-menu-images',
            template: __webpack_require__(/*! ./images.component.html */ "./src/app/sub-menu/images/images.component.html"),
            styles: [__webpack_require__(/*! ./images.component.css */ "./src/app/sub-menu/images/images.component.css")],
        }),
        __metadata("design:paramtypes", [_model_service__WEBPACK_IMPORTED_MODULE_2__["ModelService"],
            _select_item_service__WEBPACK_IMPORTED_MODULE_3__["SelectItemService"]])
    ], SubMenuImagesComponent);
    return SubMenuImagesComponent;
}(_sub_menu_component__WEBPACK_IMPORTED_MODULE_1__["SubMenuComponent"]));



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

module.exports = "<div class=\"sub-menu\">\n  <div class=\"triangle top\" *ngIf=\"subMenu !== null &&\n  (subMenu.getType() === 'pages' ||\n   subMenu.getType() === 'settings' ||\n   subMenu.getType() === 'images')\">\n  </div>\n  <sub-menu-pages *ngIf=\"subMenu !== null && subMenu.getType() === 'pages'\"></sub-menu-pages>\n  <sub-menu-settings *ngIf=\"subMenu !== null && subMenu.getType() === 'settings'\"></sub-menu-settings>\n  <sub-menu-images *ngIf=\"subMenu !== null && subMenu.getType() === 'images'\"></sub-menu-images>\n</div>"

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

module.exports = "<div class=\"object-editor\" [ngClass]=\"{active: trainer !== null}\">\n  <div class=\"close\" (click)=\"close()\">\n    <i class=\"fa fa-window-close\" aria-hidden=\"true\"></i>\n  </div>\n  <div *ngIf=\"trainer !== null\">\n    <div class=\"field name\">\n      <span class=\"label\">Имя тренера</span>\n      <input type=\"text\" [(ngModel)]=\"trainer.name\">\n    </div>\n\n    <div class=\"field vk\">\n      <span class=\"label\"><mat-checkbox [color]=\"'primary'\" [checked]=\"trainer.has_vk\" (change)=\"trainer.has_vk = 1 - trainer.has_vk\"></mat-checkbox> <a target=\"_blank\" href=\"{{trainer.vk_link}}\">VK</a></span>\n      <input type=\"text\" [(ngModel)]=\"trainer.vk_link\" [disabled]=\"!trainer.has_vk\">\n    </div>\n    <div class=\"field fb\">\n      <span class=\"label\"><mat-checkbox [color]=\"'primary'\" [checked]=\"trainer.has_fb\" (change)=\"trainer.has_fb = 1 - trainer.has_fb\"></mat-checkbox> <a target=\"_blank\" href=\"{{trainer.fb_link}}\">FB</a></span>\n      <input type=\"text\" [(ngModel)]=\"trainer.fb_link\" [disabled]=\"!trainer.has_fb\">\n    </div>\n    <div class=\"field inst\">\n      <span class=\"label\"><mat-checkbox [color]=\"'primary'\" [checked]=\"trainer.has_inst\" (change)=\"trainer.has_inst = 1 - trainer.has_inst\"></mat-checkbox> <a target=\"_blank\" href=\"{{trainer.inst_link}}\">Insta</a></span>\n      <input type=\"text\" [(ngModel)]=\"trainer.inst_link\" [disabled]=\"!trainer.has_inst\">\n    </div>\n\n\n    <div class=\"field\">\n      <span class=\"label\">Изображение</span>\n      <img width=\"200px\" *ngIf=\"trainer.img_src\" (click)=\"chooser.showPopup()\" src=\"{{trainer.img_src}}\">\n      <button *ngIf=\"!trainer.img_src\" (click)=\"chooser.showPopup()\">Browse</button>\n      <app-image-chooser-popup #chooser (selectedImageId)=\"selectImage($event)\" [multiple]=\"false\" [fixedImageTypeId]=\"1\"></app-image-chooser-popup>\n    </div>\n\n    <div class=\"field\">\n      <span class=\"label\">Должность</span>\n      <input type=\"text\" [(ngModel)]=\"trainer.position\">\n    </div>\n\n    <div class=\"field\">\n      <span class=\"label\">В 2 строки</span>\n      <span [ngSwitch]=\"language\">\n        <mat-checkbox [color]=\"'primary'\" *ngSwitchCase=\"1\" [(ngModel)]=\"trainer.two_lines_position\"></mat-checkbox>\n        <mat-checkbox [color]=\"'primary'\" *ngSwitchCase=\"2\" [(ngModel)]=\"trainer.two_lines_position_en\"></mat-checkbox>\n      </span>\n    </div>\n\n    <div class=\"field\">\n      <span class=\"label\">Описание</span>\n      <textarea ngxTrumbowygEditor [(ngModel)]=\"trainer.description\"></textarea>\n    </div>\n\n    <div class=\"field\">\n      <span class=\"label\">Путь URL</span>\n      <input type=\"text\" [(ngModel)]=\"trainer.alias\">\n    </div>\n\n    <div class=\"field published\">\n      <span class=\"label\">Опубликован</span>\n      <mat-checkbox [color]=\"'primary'\" [(ngModel)]=\"trainer.published\"></mat-checkbox>\n    </div>\n\n    <div class=\"buttons\">\n      <button class=\"ripple module-control-button-element default\" (click)=\"save()\">Сохранить</button>\n      <button class=\"ripple module-control-button-element delete\" (click)=\"openModal(confirmDelete)\">Удалить</button>\n    </div>\n  </div>\n</div>\n<ng-template #confirmDelete>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Вы точно хотите удалить этого тренера?</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"buttons\">\n      <button class=\"ripple module-control-button-element cancel\" (click)=\"modalRef.hide()\">отмена</button>\n      <button class=\"ripple module-control-button-element delete\" (click)=\"delete()\">да, удалить</button>\n    </div>\n  </div>\n</ng-template>"

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
            _this.selectItemService.emit(new _models_select_item_event__WEBPACK_IMPORTED_MODULE_1__["SelectItemEvent"](_models_select_item_event__WEBPACK_IMPORTED_MODULE_1__["SelectItemEvent"].Type.TrainerRemove, {
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
        //console.log(event);
    };
    TrainerEditorComponent.prototype.fileLeave = function (event) {
        //console.log(event);
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

module.exports = "<div class=\"content\">\n    <div class=\"module-list\">\n        <ul class=\"object-list-element\" *ngIf=\"trainers !== null\" [ngClass]=\"{active: selectedTrainer !== null}\" #trainersList>\n            <li class=\"object-item\" *ngFor=\"let trainer of trainers\" (click)=\"loadTrainer(trainer)\" [ngClass]=\"{active: this.selectedTrainer && trainer.id == selectedTrainer.id}\">\n                <h2 class=\"object-name\">\n                    {{trainer.name | wordCountLimit: 2 }}\n                    <a *ngIf=\"detailPage !== null && getTrainerPageUrl(trainer) !== null\" [href]=\"getTrainerPageUrl(trainer)\" target=\"_blank\"><i class=\"fa fa-external-link\" aria-hidden=\"true\"></i></a>\n                </h2>\n            </li>\n        </ul>\n        <div class=\"toolbar-element\">\n            <div (click)=\"openModal(createTrainer)\"><i class=\"fa fa-plus\"></i></div>\n            <div (click)=\"openModal(reorderTrainers)\"><i class=\"fa fa-bars\"></i></div>\n        </div>\n    </div>\n    <div class=\"module-editor module-editor-visible\" [ngClass]=\"{'visible': selectedTrainer != null}\">\n        <trainer-editor></trainer-editor>\n    </div>\n</div>\n<ng-template #reorderTrainers>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Поменять местами</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <bs-sortable *ngIf=\"trainers\"\n                     [(ngModel)]=\"trainers\"\n                     itemClass=\"sortable-item\"\n                     itemActiveClass=\"sortable-item-active\"\n                     placeholderItem=\"Drag here\"\n                     placeholderClass=\"placeholderStyle\"\n                     wrapperClass=\"sortable-wrapper\"\n                     fieldName=\"name\"\n        ></bs-sortable>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"save ripple module-control-button-element default\" (click)=\"reorderApply();modalRef.hide();\">Да</button>\n        <button type=\"button\" class=\"ripple module-control-button-element cancel\" (click)=\"modalRef.hide()\">Отмена</button>\n    </div>\n</ng-template>\n\n<ng-template #createTrainer>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Создать нового тренера</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <label>\n            Имя:\n        </label>\n        <div>\n            <input type=\"text\" #newTrainerName>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"buttons\">\n            <button type=\"button\" class=\"ripple module-control-button-element default\" (click)=\"createNewTrainer(newTrainerName.value)\">Создать</button>\n            <button type=\"button\" class=\"ripple module-control-button-element cancel\" (click)=\"modalRef.hide()\">Отмена</button>\n        </div>\n    </div>\n</ng-template>"

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
/* harmony import */ var _pages_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages.service */ "./src/app/pages.service.ts");
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
    function TrainersComponent(modelService, pagesService, selectItemService, modalService) {
        var _this = _super.call(this) || this;
        _this.modelService = modelService;
        _this.pagesService = pagesService;
        _this.selectItemService = selectItemService;
        _this.modalService = modalService;
        _this.detailPage = null;
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
    TrainersComponent_1 = TrainersComponent;
    TrainersComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    TrainersComponent.prototype.processLoadedState = function () {
        var _this = this;
        var state = this.getState();
        for (var key in state) {
            this[key] = state[key];
        }
        if (this.selectedTrainer !== null && this.trainers) {
            this.loadTrainer(this.trainers.find(function (t) { return t.id == _this.selectedTrainer.id; }), true);
        }
    };
    TrainersComponent.prototype.getTrainerPageUrl = function (trainer) {
        if (!trainer.alias || !trainer.alias.trim()) {
            return null;
        }
        if (this.detailPage !== null) {
            var aliasRegex = /<alias:(.*)>/gi;
            return this.detailPage.url.replace(aliasRegex, trainer.alias);
        }
        return null;
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
    TrainersComponent.prototype.loadDetailPage = function () {
        var _this = this;
        this.pagesService.getPage(TrainersComponent_1.DETAIL_TRAINER_PAGE_ID).subscribe(function (page) {
            _this.detailPage = page;
        });
    };
    TrainersComponent.prototype.ngOnInit = function () {
        this.loadTrainers();
        this.loadDetailPage();
    };
    TrainersComponent.DETAIL_TRAINER_PAGE_ID = 29;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('trainersList'),
        __metadata("design:type", Object)
    ], TrainersComponent.prototype, "trainersContainer", void 0);
    __decorate([
        _storage__WEBPACK_IMPORTED_MODULE_7__["bindToComponentState"],
        __metadata("design:type", _models_trainer__WEBPACK_IMPORTED_MODULE_2__["Trainer"])
    ], TrainersComponent.prototype, "selectedTrainer", void 0);
    TrainersComponent = TrainersComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'trainers',
            template: __webpack_require__(/*! ./trainers.component.html */ "./src/app/trainers/trainers.component.html"),
            styles: [__webpack_require__(/*! ../common/object-list.component.css */ "./src/app/common/object-list.component.css")],
        }),
        __metadata("design:paramtypes", [_model_service__WEBPACK_IMPORTED_MODULE_1__["ModelService"],
            _pages_service__WEBPACK_IMPORTED_MODULE_8__["PagesService"],
            _select_item_service__WEBPACK_IMPORTED_MODULE_4__["SelectItemService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsModalService"]])
    ], TrainersComponent);
    return TrainersComponent;
    var TrainersComponent_1;
}(_models_state__WEBPACK_IMPORTED_MODULE_6__["State"]));



/***/ }),

/***/ "./src/app/trainings-editor/trainings-editor.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/trainings-editor/trainings-editor.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-card {\n  display: inline-block;\n  width: 11.5%;\n  padding-top: 11.5%;\n  position: relative;\n  margin: 0.5%;\n}\n.image-card:hover .short-description {\n  height: initial;\n  white-space: initial;\n  line-height: 22px;\n  padding: 13px;\n  padding-left: 12px;\n}\n.image-card:before {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  bottom: 0;\n  left: 5px;\n  content: \"\";\n  border-radius: 6px;\n  box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.4);\n}\n.image-card .plus {\n  width: 31px;\n  height: 31px;\n  position: relative;\n  background: url(/admin/assets/icons/plus.svg) no-repeat;\n  font-size: 0;\n  margin-top: 11px;\n  display: block;\n}\n.image-card.ticked .image-card-wrapper:after {\n  position: absolute;\n  content: '';\n  width: 100%;\n  height: 100%;\n  border: 4px solid #4a90e2;\n  display: block;\n}\n.image-card .image-card-wrapper {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  background-color: #fff;\n  border-radius: 6px;\n  box-sizing: border-box;\n}\n.image-card:before {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  bottom: 0;\n  left: 5px;\n  content: \"\";\n  border-radius: 6px;\n  box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.4);\n}\n.image-card img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translateY(-50%) translateX(-50%);\n          transform: translateY(-50%) translateX(-50%);\n}\n.image-card img.landscape {\n  height: 100%!important;\n}\n.image-card img.portrait {\n  width: 100%!important;\n}\n.image-card .new-image,\n.image-card .load-more {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #fff;\n  border-radius: 6px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.image-card .short-description {\n  position: absolute;\n  bottom: 0;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 100%;\n  overflow: hidden;\n  padding: 12px;\n  background-color: #fff;\n  box-shadow: 0 -4px 7px rgba(0, 0, 0, 0.3);\n}\n@font-face {\n  font-family: 'Acrom-Regular';\n  src: url('/admin/assets/fonts/Acrom-Regular.eot?#iefix') format('embedded-opentype'), url('/admin/assets/fonts/Acrom-Regular.otf') format('opentype'), url('/admin/assets/fonts/Acrom-Regular.woff') format('woff'), url('/admin/assets/fonts/Acrom-Regular.ttf') format('truetype'), url('/admin/assets/fonts/Acrom-Regular.svg#Acrom-Regular') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'Acrom-Medium';\n  src: url('/admin/assets/fonts/Acrom-Medium.eot?#iefix') format('embedded-opentype'), url('/admin/assets/fonts/Acrom-Medium.otf') format('opentype'), url('/admin/assets/fonts/Acrom-Medium.woff') format('woff'), url('/admin/assets/fonts/Acrom-Medium.ttf') format('truetype'), url('/admin/assets/fonts/Acrom-Medium.svg#Acrom-Medium') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'Acrom-Bold';\n  src: url('/admin/assets/fonts/Acrom-Bold/Acrom-Bold.eot?#iefix') format('embedded-opentype'), url('/admin/assets/fonts/Acrom-Bold/Acrom-Bold.otf') format('opentype'), url('/admin/assets/fonts/Acrom-Bold/Acrom-Bold.woff') format('woff'), url('/admin/assets/fonts/Acrom-Bold/Acrom-Bold.ttf') format('truetype'), url('/admin/assets/fonts/Acrom-Bold/Acrom-Bold.svg#Acrom-Bold') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'Acrom-Light';\n  src: url('/admin/assets/fonts/Acrom-Light/Acrom-Light.eot?#iefix') format('embedded-opentype'), url('/admin/assets/fonts/Acrom-Light/Acrom-Light.otf') format('opentype'), url('/admin/assets/fonts/Acrom-Light/Acrom-Light.woff') format('woff'), url('/admin/assets/fonts/Acrom-Light/Acrom-Light.ttf') format('truetype'), url('/admin/assets/fonts/Acrom-Light/Acrom-Light.svg#Acrom-Light') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n.training-card {\n  margin: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n  background-color: #fff;\n  padding: 10px;\n  position: relative;\n}\n.training-card.settings h2 {\n  font-family: \"Acrom-Bold\", sans-serif;\n}\n.training-card.settings .field {\n  margin-bottom: 10px;\n  position: relative;\n}\n.training-card.settings .field label {\n  padding-top: 2px;\n  float: left;\n}\n.training-card.settings .field .input {\n  padding-left: 150px;\n}\n.training-card h2 {\n  font-family: \"Acrom-Light\", sans-serif;\n}\n.training-card:not(:hover) .close {\n  display: none;\n}\n.training-card .close {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 20px;\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/trainings-editor/trainings-editor.component.html":
/*!******************************************************************!*\
  !*** ./src/app/trainings-editor/trainings-editor.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isReady()\">\n    <div class=\"settings training-card\" *ngIf=\"activityType !== null\">\n        <h2>Настройки</h2>\n        <div class=\"field\">\n            <label>Заголовок</label>\n            <div class=\"input\">\n                <input [(ngModel)]=\"activityType.title\">\n            </div>\n        </div>\n        <div class=\"field\">\n            <label>Краткий заголовок</label>\n            <div class=\"input\">\n                <input [(ngModel)]=\"activityType.short_title\">\n            </div>\n        </div>\n        <div class=\"field\">\n            <label>Описание</label>\n            <div class=\"input\">\n                <textarea ngxTrumbowygEditor  [options]=\"editorOptions\" [(ngModel)]=\"activityType.description\"></textarea>\n            </div>\n        </div>\n        <div class=\"field\">\n            <label>Цвет</label>\n            <div class=\"input\">\n                <input class=\"color\"(colorPickerChange)=\"setColor($event)\" [colorPicker]=\"activityType.color\" [style.background]=\"activityType.color\" [cpOutputFormat]=\"hex\">\n            </div>\n        </div>\n        <div class=\"actions\">\n            <button (click)=\"save()\" class=\"save ripple module-control-button-element default\">Сохранить</button>\n            <button (click)=\"deleteWithConfirm()\" class=\"ripple module-control-button-element delete\">Удалить</button>\n        </div>\n    </div>\n    <div *ngFor=\"let activity of activities\" [class]=\"'training-card activity-' + activity.id\" (dblclick)=\"initEditingCard(activity)\">\n        <div [ngSwitch]=\"isEditing(activity) && !isCreatingNew()\">\n            <div *ngSwitchCase=\"false\">\n                <div class=\"contents\">\n                    <h2>{{activity.title}}</h2>\n                    {{activity.description}}\n                </div>\n                <span class=\"close\" (click)=\"removeActivity(activity)\">\n                    <i class=\"fa fa-close\"></i>\n                </span>\n            </div>\n            <div *ngSwitchCase=\"true\">\n                <div class=\"contents\">\n                    <h2><input placeholder=\"Заголовок вида тренировок\" [focus]=\"autofocus\" [(ngModel)]=\"activity.title\" (blur)=\"leaveField('title', activity)\"></h2>\n                    <textarea placeholder=\"Описание\" [(ngModel)]=\"activity.description\" (blur)=\"leaveField('description', activity)\"></textarea>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"isCreatingNew()\" class=\"training-card\">\n        <div class=\"contents\">\n            <h2><input placeholder=\"Заголовок вида тренировок\" [focus]=\"autofocus\" [(ngModel)]=\"newActivity.title\"></h2>\n            <textarea placeholder=\"Описание\" [(ngModel)]=\"newActivity.description\"></textarea>\n            <button (click)=\"createNew()\">добавить</button>\n        </div>\n        <span class=\"close\" (click)=\"closeNewActivity()\">\n            <i class=\"fa fa-close\"></i>\n        </span>\n    </div>\n    <div class=\"training-card\" (click)=\"createEditingCard()\">\n        <div class=\"toolbar-element\">\n            <div><i class=\"fa fa-plus\"></i></div>\n        </div>\n    </div>\n</div>\n\n<ng-template #confirmDelete>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Вы точно хотите удалить тип тренировок?</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"closePopup()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"buttons\">\n            <button type=\"button\" class=\"ripple module-control-button-element delete\" (click)=\"delete()\">Удалить</button>\n            <button type=\"button\" class=\"ripple module-control-button-element cancel\" (click)=\"closePopup()\">Отмена</button>\n        </div>\n    </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/trainings-editor/trainings-editor.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/trainings-editor/trainings-editor.component.ts ***!
  \****************************************************************/
/*! exports provided: TrainingsEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingsEditorComponent", function() { return TrainingsEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _select_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../select-item.service */ "./src/app/select-item.service.ts");
/* harmony import */ var _model_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model.service */ "./src/app/model.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _models_training_activity_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/training-activity-type */ "./src/app/models/training-activity-type.ts");
/* harmony import */ var _models_training_activity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/training-activity */ "./src/app/models/training-activity.ts");
/* harmony import */ var _models_select_item_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/select-item-event */ "./src/app/models/select-item-event.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TrainingsEditorComponent = /** @class */ (function () {
    function TrainingsEditorComponent(selectItemService, modelService, modalService) {
        var _this = this;
        this.selectItemService = selectItemService;
        this.modelService = modelService;
        this.modalService = modalService;
        this.activityType = null;
        this.currentEditingId = 0;
        this.activities = null;
        this.newActivity = null;
        this.autofocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.editorOptions = _app_module__WEBPACK_IMPORTED_MODULE_8__["AppModule"].editorOptions;
        this.autofocus.emit(true);
        this.selectItemService.event$.subscribe(function (event) {
            if (event.itemType === _models_select_item_event__WEBPACK_IMPORTED_MODULE_6__["SelectItemEvent"].Type.LanguageChange) {
                _this.reloadComponentState();
            }
        });
        this.editorOptions.btns = [
            ['strong', 'em', 'del'],
            ['link'],
            ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
            ['unorderedList', 'orderedList'],
        ];
    }
    TrainingsEditorComponent.prototype.deleteWithConfirm = function () {
        this.showPopup(this.confirmDelete);
    };
    TrainingsEditorComponent.prototype.delete = function () {
        var _this = this;
        this.modelService.deleteTrainingActivityType(this.activityType)
            .subscribe(function () {
            _this.selectItemService.emitEventOfType(_models_select_item_event__WEBPACK_IMPORTED_MODULE_6__["SelectItemEvent"].Type.TrainingItemTypeRemove, {
                activityTypeId: _this.activityType.id
            });
            _this.closePopup();
        });
    };
    TrainingsEditorComponent.prototype.save = function () {
        this.modelService.updateTrainingActivityType(this.activityType)
            .subscribe();
    };
    TrainingsEditorComponent.prototype.setColor = function (color) {
        if (this.activityType) {
            this.activityType.color = color;
        }
    };
    TrainingsEditorComponent.prototype.leaveField = function (fieldName, activity) {
        if (activity === void 0) { activity = null; }
        this.checkFields(activity);
    };
    TrainingsEditorComponent.prototype.createEditingCard = function () {
        this.newActivity = new _models_training_activity__WEBPACK_IMPORTED_MODULE_5__["TrainingActivity"]();
        this.newActivity.type_id = this.activityType.id;
        this.makeAutofocus();
    };
    TrainingsEditorComponent.prototype.showPopup = function (target) {
        this.modalRef = this.modalService.show(target);
    };
    TrainingsEditorComponent.prototype.closePopup = function () {
        this.modalRef.hide();
    };
    TrainingsEditorComponent.prototype.isReady = function () {
        return this.activities !== null;
    };
    TrainingsEditorComponent.prototype.ngOnChanges = function () {
        this.reloadComponentState();
    };
    TrainingsEditorComponent.prototype.closeNewActivity = function () {
        this.newActivity = null;
    };
    TrainingsEditorComponent.prototype.closeEditor = function () {
        this.currentEditingId = 0;
    };
    TrainingsEditorComponent.prototype.isEditing = function (activity) {
        return this.currentEditingId === activity.id;
    };
    TrainingsEditorComponent.prototype.initEditingCard = function (activity) {
        this.currentEditingId = activity.id;
        this.closeNewActivity();
        this.makeAutofocus();
    };
    TrainingsEditorComponent.prototype.removeActivity = function (activity) {
        var _this = this;
        this.modelService
            .deleteTrainingActivity(activity)
            .subscribe(function () {
            _this.activities = _this.activities.filter(function (a) { return a.id !== activity.id; });
        });
    };
    TrainingsEditorComponent.prototype.isCreatingNew = function () {
        return this.newActivity !== null;
    };
    TrainingsEditorComponent.prototype.createNew = function () {
        var _this = this;
        this.modelService.createTrainingActivity(this.newActivity)
            .subscribe(function (activity) {
            _this.activities.push(activity);
            _this.closeNewActivity();
        });
    };
    TrainingsEditorComponent.prototype.reloadComponentState = function () {
        if (this.activityType !== null) {
            this.initActivitiesList();
        }
    };
    TrainingsEditorComponent.prototype.makeAutofocus = function () {
        var _this = this;
        setTimeout(function () {
            _this.autofocus.emit(true);
        }, 10);
    };
    TrainingsEditorComponent.prototype.checkFields = function (activity) {
        var _this = this;
        setTimeout(function () {
            var count = jquery__WEBPACK_IMPORTED_MODULE_7__('[class*=activity-' + activity.id + '] input:focus').length +
                jquery__WEBPACK_IMPORTED_MODULE_7__('[class*=activity-' + activity.id + '] textarea:focus').length;
            if (count === 0) {
                _this.applyEditingCard(activity);
            }
        }, 20);
    };
    TrainingsEditorComponent.prototype.applyEditingCard = function (activity) {
        var _this = this;
        if (activity.title && activity.description) {
            this.modelService.updateTrainingActivity(activity)
                .subscribe(function (activity) {
                _this.closeEditor();
            });
        }
        else {
            this.closeEditor();
        }
    };
    TrainingsEditorComponent.prototype.initActivitiesList = function () {
        var _this = this;
        var activityTypeId = this.activityType.id;
        this.modelService
            .getTrainingActivitiesByType(activityTypeId)
            .subscribe(function (activities) {
            _this.activities = activities.map(function (a) { return _models_training_activity__WEBPACK_IMPORTED_MODULE_5__["TrainingActivity"].fromRaw(a); });
        }, function (error) {
            console.log('Error loading activities of type ' + activityTypeId);
            _this.activities = null;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_training_activity_type__WEBPACK_IMPORTED_MODULE_4__["TrainingActivityType"])
    ], TrainingsEditorComponent.prototype, "activityType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('confirmDelete'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], TrainingsEditorComponent.prototype, "confirmDelete", void 0);
    TrainingsEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'trainings-editor',
            template: __webpack_require__(/*! ./trainings-editor.component.html */ "./src/app/trainings-editor/trainings-editor.component.html"),
            styles: [__webpack_require__(/*! ../common/object-editor.component.css */ "./src/app/common/object-editor.component.css"), __webpack_require__(/*! ./trainings-editor.component.css */ "./src/app/trainings-editor/trainings-editor.component.css")],
        }),
        __metadata("design:paramtypes", [_select_item_service__WEBPACK_IMPORTED_MODULE_1__["SelectItemService"],
            _model_service__WEBPACK_IMPORTED_MODULE_2__["ModelService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]])
    ], TrainingsEditorComponent);
    return TrainingsEditorComponent;
}());



/***/ }),

/***/ "./src/app/trainings/trainings.component.css":
/*!***************************************************!*\
  !*** ./src/app/trainings/trainings.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".module-editor.nobg {\n  background: none!important;\n}\n"

/***/ }),

/***/ "./src/app/trainings/trainings.component.html":
/*!****************************************************!*\
  !*** ./src/app/trainings/trainings.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"module-list\">\n    <ul class=\"object-list-element\" *ngIf=\"activityTypes !== null\" [class.active]=\"selectedActivityType !== null\" #trainingsList>\n      <li class=\"object-item\" *ngFor=\"let activityType of activityTypes\" (click)=\"loadActivityType(activityType)\" [ngClass]=\"{active: this.selectedActivityType && activityType.id == selectedActivityType.id}\">\n        <h2 class=\"object-name\">\n          {{activityType.title | wordCountLimit: 2 }}\n          </h2>\n      </li>\n    </ul>\n    <div class=\"toolbar-element\">\n      <div (click)=\"openModal(createActivityType)\"><i class=\"fa fa-plus\"></i></div>\n      <div (click)=\"openModal(reorderActivityTypes)\"><i class=\"fa fa-bars\"></i></div>\n    </div>\n  </div>\n  <div class=\"module-editor module-editor-visible nobg\" [ngClass]=\"{'visible': selectedActivityType != null}\">\n    <trainings-editor [activityType]=\"selectedActivityType\"></trainings-editor>\n  </div>\n</div>\n<ng-template #reorderActivityTypes>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Поменять местами</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <bs-sortable *ngIf=\"activityTypes\"\n                 [(ngModel)]=\"activityTypes\"\n                 itemClass=\"sortable-item\"\n                 itemActiveClass=\"sortable-item-active\"\n                 placeholderItem=\"Drag here\"\n                 placeholderClass=\"placeholderStyle\"\n                 wrapperClass=\"sortable-wrapper\"\n                 fieldName=\"title\"\n    ></bs-sortable>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"save ripple module-control-button-element default\" (click)=\"reorderApply();modalRef.hide();\">Да</button>\n    <button type=\"button\" class=\"ripple module-control-button-element cancel\" (click)=\"modalRef.hide()\">Отмена</button>\n  </div>\n</ng-template>\n\n<ng-template #createActivityType>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Создать новый тип тренировок</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <label>\n      Заголовок:\n    </label>\n    <div>\n      <input type=\"text\" #newActivityTypeName>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <div class=\"buttons\">\n      <button type=\"button\" class=\"ripple module-control-button-element default\" (click)=\"createNewActivityType(newActivityTypeName.value)\">Создать</button>\n      <button type=\"button\" class=\"ripple module-control-button-element cancel\" (click)=\"modalRef.hide()\">Отмена</button>\n    </div>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/trainings/trainings.component.ts":
/*!**************************************************!*\
  !*** ./src/app/trainings/trainings.component.ts ***!
  \**************************************************/
/*! exports provided: TrainingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingsComponent", function() { return TrainingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model.service */ "./src/app/model.service.ts");
/* harmony import */ var _models_training_activity_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/training-activity-type */ "./src/app/models/training-activity-type.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _select_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../select-item.service */ "./src/app/select-item.service.ts");
/* harmony import */ var _models_select_item_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/select-item-event */ "./src/app/models/select-item-event.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TrainingsComponent = /** @class */ (function () {
    function TrainingsComponent(modelService, modalService, selectItemService) {
        var _this = this;
        this.modelService = modelService;
        this.modalService = modalService;
        this.selectItemService = selectItemService;
        this.activityTypes = null;
        this.selectedActivityType = null;
        this.selectItemService.event$.subscribe(function (e) {
            if (e.itemType === _models_select_item_event__WEBPACK_IMPORTED_MODULE_5__["SelectItemEvent"].Type.TrainingItemTypeRemove) {
                _this.selectedActivityType = null;
                _this.activityTypes = _this.activityTypes.filter(function (a) { return a.id !== e.payload.activityTypeId; });
            }
            else if (e.itemType === _models_select_item_event__WEBPACK_IMPORTED_MODULE_5__["SelectItemEvent"].Type.LanguageChange) {
                _this.loadActivities(true);
            }
        });
    }
    TrainingsComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    TrainingsComponent.prototype.loadActivities = function (force) {
        var _this = this;
        if (force === void 0) { force = false; }
        this.modelService.getTrainingActivityTypes().subscribe(function (activityTypes) {
            activityTypes.sort(function (a, b) {
                return a.n - b.n;
            });
            _this.activityTypes = activityTypes.map(function (a) { return _models_training_activity_type__WEBPACK_IMPORTED_MODULE_2__["TrainingActivityType"].fromRaw(a); });
            if (force) {
                if (_this.selectedActivityType !== null) {
                    var loadActivityTypeId_1 = _this.selectedActivityType.id;
                    _this.selectedActivityType = _this.activityTypes.find(function (t) { return t.id == loadActivityTypeId_1; });
                    _this.loadActivityType(_this.selectedActivityType);
                }
            }
        });
    };
    TrainingsComponent.prototype.ngOnInit = function () {
        this.loadActivities();
    };
    TrainingsComponent.prototype.reorderApply = function () {
        this.modelService.reorderApply('trainingActivityType', this.activityTypes);
    };
    TrainingsComponent.prototype.createNewActivityType = function (name) {
        var _this = this;
        var newActivityType = new _models_training_activity_type__WEBPACK_IMPORTED_MODULE_2__["TrainingActivityType"]();
        newActivityType.short_title = name;
        this.modelService.createTrainingActivityType(newActivityType).subscribe(function (activityType) {
            console.log(activityType);
            _this.activityTypes.push(activityType);
        });
    };
    TrainingsComponent.prototype.loadActivityType = function (activityType) {
        this.selectedActivityType = activityType;
    };
    TrainingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'trainings',
            template: __webpack_require__(/*! ./trainings.component.html */ "./src/app/trainings/trainings.component.html"),
            styles: [__webpack_require__(/*! ../common/object-list.component.css */ "./src/app/common/object-list.component.css"), __webpack_require__(/*! ./trainings.component.css */ "./src/app/trainings/trainings.component.css")],
        }),
        __metadata("design:paramtypes", [_model_service__WEBPACK_IMPORTED_MODULE_1__["ModelService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _select_item_service__WEBPACK_IMPORTED_MODULE_4__["SelectItemService"]])
    ], TrainingsComponent);
    return TrainingsComponent;
}());



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