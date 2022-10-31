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
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"] },
    { path: 'profile', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__["UserProfileComponent"] },
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <div class=\"container-fluid mt-5 pb-4\">\n    <a class=\"navbar-brand\" routerLink=\"home\" style=\"background-color: #fff;color:#000\">DEMO APP</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse justify-content-center\" id=\"navbarNav\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" aria-current=\"page\" routerLink=\"home\" routerLinkActive=\"active\">HOME</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\">ABOUT US</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\">JOBS</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\">CLIENTS</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\">EMPLOYERS</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\">CONTACT US</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"profile\" routerLinkActive=\"active\">USER PROFILE</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>\n\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__["HomePageComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_7__["UserProfileComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".email_search,.email_search_icon {\r\n    border: 1px solid #00FFFF;\r\n    color: #fff;\r\n}\r\n.email_search::-webkit-input-placeholder {\r\n    color: #fff;\r\n}\r\n.email_search::-moz-placeholder {\r\n    color: #fff;\r\n}\r\n.email_search::-ms-input-placeholder {\r\n    color: #fff;\r\n}\r\n.email_search::placeholder {\r\n    color: #fff;\r\n}\r\n.email_search_icon i{\r\n    padding: 1px;\r\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contianer bg-dark mt-5 overflow-hidden\" > \n  <!-- style=\"position:absolute;bottom: 0px;\" -->\n  <div class=\"row mt-5\">\n    <div class=\"col-12 text-white d-flex justify-content-center\">\n      <p>Subscribe to our JOb Seeker Mailing List</p>\n    </div>\n  </div>\n  <div class=\"row mb-5\">\n    <div class=\"col-12 d-flex justify-content-center\">\n      <div class=\"input-group mail_search\" style=\"width: 300px;\">\n        <input class=\"form-control bg-dark email_search\" type=\"email\" placeholder=\"Enter Your Email Address\" aria-label=\"Search\">\n        <!-- <div class=\"input-group-append\"> -->\n          <span class=\"input-group-text bg-dark email_search_icon\" id=\"basic-text1\"><i class=\"fas fa-envelope bg-light text-dark\"\n          aria-hidden=\"true\"></i></span>\n        <!-- </div> -->\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-page/home-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* popup btn */\r\n.register_btn {\r\n    border-bottom: 4px solid #004B4B;\r\n}\r\n.btn-close {\r\n    background-color: white;\r\n    border-radius: 50%;\r\n}\r\n/* profile below text text */\r\n.card-text {\r\n    width: 100px;\r\n    font-size: x-small;\r\n}\r\n#upld_photo {\r\n    cursor: pointer;\r\n}\r\n/* popup right side */\r\n.right_column,input,select {\r\n    width: 300px;\r\n    margin-top: 30px;\r\n}\r\n.inpt_box {\r\n    width: 150px;\r\n}\r\ninput[type=\"range\"] {\r\n    color: darkgray;\r\n}\r\n.age_value {\r\n    position: relative;\r\n    top: 15px;\r\n    font-size:x-small;\r\n}\r\n/* slider image */\r\n.slider_img {\r\n    opacity: 0.6;\r\n}"

/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-bs-ride=\"carousel\">\n  <div class=\"carousel-indicators\">\n    <button type=\"button\" data-bs-target=\"#carouselExampleIndicators\" data-bs-slide-to=\"0\" class=\"active\" aria-current=\"true\" aria-label=\"Slide 1\"></button>\n    <button type=\"button\" data-bs-target=\"#carouselExampleIndicators\" data-bs-slide-to=\"1\" aria-label=\"Slide 2\"></button>\n  </div>\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img src=\"..//./../assets/img1_slider.jpg\" class=\"d-block w-100 slider_img\" alt=\"img1\">\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"..//./../assets/img2_slider.jpg\" class=\"d-block w-100 slider_img\" alt=\"img2\">\n    </div>\n  </div>\n  <button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#carouselExampleIndicators\" data-bs-slide=\"prev\">\n    <span class=\"visually-hidden\">Previous</span>\n  </button>\n  <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#carouselExampleIndicators\" data-bs-slide=\"next\">\n    <span class=\"visually-hidden\">Next</span>\n  </button>\n</div>\n\n\n\n\n\n\n<div class=\"container\" style=\"position:absolute; top: 300px; left: 200px ;opacity: 100;z-index:1\">\n\n  <div class=\"row d-flex justify-content-left\">\n    <input type=\"search\" placeholder=\"Enter a Job Description\">\n    <button class=\"btn btn-primary register_btn mx-3 mt-4\" style=\"width: 100px;height:40px\">Search</button>\n  </div>\n  <!-- Button trigger modal -->\n<button class=\"btn btn-primary register_btn mt-5\" data-bs-toggle=\"modal\" data-bs-target=\"#exampleModal\" style=\"position:absolute;left: 100px\">Register</button>\n\n</div>\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header  bg-primary\">\n        <h5 class=\"modal-title text-white\" id=\"exampleModalLabel\" >Register</h5>\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\" (click)=\"formCancel()\"></button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row\">\n        <form [formGroup]=\"registerForm\">\n            <div class=\"col-3\">\n              <!-- style=\"width: 18rem;\" -->\n              <div class=\"card\">\n                <img [src]=\"profileDP\" class=\"card-img-top\" alt=\"profile image\">\n                <input hidden type=\"file\" accept=\"image/*\" #profileUpload (change)=\"ImageUpload($event.target.files)\" formControlName=\"photo\">\n                <div class=\"card-body\">\n                   <p class=\"card-text text-primary\" id=\"upld_photo\" (click)=\"profileUpload.click()\">Upload your photo</p>\n                   <p class=\"text-danger\"></p>\n                   <p class=\"text-danger\"></p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-9 d-flex flex-column right_column\" style=\"width: 400px; margin-left: 150px; margin-top: -120px;\">\n              <div class=\"form-group d-flex\">\n                <input type=\"text\" class=\"form-control inpt_box me-2\" id=\"exampleFormControlInput1\" placeholder=\"First Name\" formControlName=\"firstName\"\n                [ngClass]=\"{'is-valid':firstName.valid}\"\n                >\n                <div *ngIf=\"firstName.invalid && firstName.touched\" style=\" font-size:x-small \">\n                  <small class=\"text-danger\" *ngIf=\"firstName.errors?.required\">firstName is required</small>\n                <small class=\"text-danger\" *ngIf=\"firstName.errors?.maxlength\">name contain many character enter upto 20 character </small>\n                <small class=\"text-danger\" *ngIf=\"firstName.errors?.pattern\">please correct name</small>\n              </div>\n\n                <input type=\"text\" class=\"form-control inpt_box\" id=\"exampleFormControlInput1\" placeholder=\"Last Name\" formControlName=\"lastName\"\n                [ngClass]=\"{'is-valid':lastName.valid}\"\n                >\n                <small class=\"text-danger\" *ngIf=\"lastName.invalid && lastName.touched && lastName.errors?.required\">LastName is required</small>\n                <small class=\"text-danger\" *ngIf=\"firstName.errors?.pattern\">please correct name</small>\n                \n              </div>\n        \n              <div class=\"form-group\">\n                <input type=\"email\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"Email\" formControlName=\"email\"\n                [ngClass]=\"{'is-valid':email.valid}\"\n                >\n                <small class=\"text-danger\" *ngIf=\"email.invalid && email.touched && email.errors?.required\">email is required</small>\n              </div>\n        \n              <div class=\"form-group\">\n                <input type=\"number\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"(+91)9346799634\" formControlName=\"mobile\"\n                [ngClass]=\"{'is-valid':mobile.valid}\"\n                > \n                <div *ngIf=\"mobile.invalid && mobile.touched\">\n                <small class=\"text-danger\" *ngIf=\"mobile.errors?.required\">mobile number is required</small>\n                <small class=\"text-danger\" *ngIf=\"mobile.errors?.minlength\">please enter correct mobile number </small>\n                <small class=\"text-danger\" *ngIf=\"mobile.errors?.maxlength\">please enter correct mobile number </small>\n                </div>\n\n              </div>\n        \n              <div class=\"form-group\">\n                <label for=\"customRange3\" class=\"form-label\">Age</label>\n                <label class=\"age_value\" style=\"position: relative; left:10px;\">20</label>\n                <input type=\"range\" class=\"form-range\" min=\"20\" max=\"60\" step=\"1\" id=\"customRange3\" style=\"width: 260px;margin-left: -5px; padding-top: 20px;\" formControlName=\"age\">\n                <label class=\"age_value\" style=\"position: relative; left:-5px;\">60</label>\n              </div>\n        \n              <div class=\"form-group\">\n                <select class=\"form-select\" aria-label=\"Disabled select example\" formControlName=\"country\">\n                  <option disabled selected>Country</option>\n                  <option value=\"India\">India</option>\n                  <option value=\"Afghanistan\">Afghanistan</option>\n                </select>\n                \n              </div>\n        \n              <div class=\"form-group\">\n                <select class=\"form-select\" aria-label=\"Disabled select example\" formControlName=\"state\">\n                  <option selected disabled>State</option>\n                  <option value=\"Maharashtra\">Maharashtra</option>\n                  <option value=\"Kabul \">Kabul </option>\n                </select>\n        \n              </div>\n        \n              <div class=\"form-group\">\n                <select class=\"form-select\" aria-label=\"Disabled select example\" formControlName=\"address\">\n                  <option selected disabled>Address</option>\n                  <option value=\"home\">Home</option>\n                  <option value=\"company\">Company</option>\n                </select>\n              </div>\n\n              <div class=\"form-group\">\n                 <select class=\"form-select\" aria-label=\"Disabled select example\" formControlName=\"tags\">\n                   <option selected disabled>tags</option>\n                    <option value=\"cricket\">cricket</option>\n                    <option value=\"football\">football</option>\n                    <option value=\"hockey\">hockey</option>\n                </select>\n              </div>\n        \n        \n              <div class=\"form-group\" style=\"margin-top: 10px;\">\n                <div class=\"form-check\">\n                  <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"flexCheckDefault\" style=\"width: 15px; margin-top: 5px; background-color:darkgray;\" formControlName=\"subscribe\">\n                  <label class=\"form-check-label\" for=\"flexCheckDefault\">\n                    subscribe to newsletter\n                  </label>\n                </div>\n              </div>\n        \n              <div class=\"form-group d-flex justify-content-center\" style=\"margin-top: 20px;\">\n                <button class=\"btn border border-dark me-4\" data-bs-dismiss=\"modal\" aria-label=\"Close\" (click)=\"formCancel()\">Cancel</button>\n                <button class=\"btn btn-primary\" [disabled]=\"this.registerForm.invalid\" (click)=\"formValue()\">Submit</button>\n              </div>\n        \n            </div>\n        \n          \n        </form>\n        </div>\n      </div>\n      \n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- Button trigger modal -->\n<!-- <button type=\"button\" class=\"btn btn-primary\" data-bs-toggle=\"modal\" data-bs-target=\"#exampleModal\">\n  Launch demo modal\n</button> -->\n\n\n<!-- popup register model -->\n<!-- <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Modal title</h5>\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n      </div>\n      \n      <div class=\"modal-body\">\n        <div class=\"container-fluid\">\n          ...\n        </div>\n      </div>\n\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div> -->"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_profile_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/profile-service.service */ "./src/app/service/profile-service.service.ts");
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




var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(httpService, router) {
        this.httpService = httpService;
        this.router = router;
        this.users = [];
        this.submitted = false;
        // submit_btn_text: string = "Submit";
        this.profileDP = '../../assets/default_img.png';
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    }
    Object.defineProperty(HomePageComponent.prototype, "photo", {
        get: function () {
            return this.registerForm.get('photo');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomePageComponent.prototype, "firstName", {
        get: function () {
            return this.registerForm.get('firstName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomePageComponent.prototype, "lastName", {
        get: function () {
            return this.registerForm.get('lastName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomePageComponent.prototype, "email", {
        get: function () {
            return this.registerForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomePageComponent.prototype, "mobile", {
        get: function () {
            return this.registerForm.get('mobile');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomePageComponent.prototype, "age", {
        get: function () {
            return this.registerForm.get('age');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomePageComponent.prototype, "state", {
        get: function () {
            return this.registerForm.get('state');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomePageComponent.prototype, "country", {
        get: function () {
            return this.registerForm.get('country');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomePageComponent.prototype, "address", {
        get: function () {
            return this.registerForm.get('address');
        },
        enumerable: true,
        configurable: true
    });
    HomePageComponent.prototype.ngOnInit = function () {
        this.httpService.getAllProfile();
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            photo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("[a-zA-Z][a-zA-Z ]+")])),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("[a-zA-Z][a-zA-Z ]+")])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.emailPattern)])),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)])),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(20), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(60)])),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            tags: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            subscribe: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    };
    HomePageComponent.prototype.ImageUpload = function (event) {
        this.profileDP = event.target.file;
    };
    HomePageComponent.prototype.formValue = function () {
        var _this = this;
        this.httpService.saveProfileData(this.registerForm.value).subscribe(function (data) {
            // console.log(data);
        });
        alert('register successfull');
        setInterval(function () {
            _this.router.navigate(['/profile']);
        }, 1000);
        console.log(this.registerForm.value);
    };
    //cancel btn
    HomePageComponent.prototype.formCancel = function () {
        this.registerForm.reset();
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [_service_profile_service_service__WEBPACK_IMPORTED_MODULE_2__["ProfileServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/service/profile-service.service.ts":
/*!****************************************************!*\
  !*** ./src/app/service/profile-service.service.ts ***!
  \****************************************************/
/*! exports provided: ProfileServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileServiceService", function() { return ProfileServiceService; });
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


var ProfileServiceService = /** @class */ (function () {
    function ProfileServiceService(http) {
        this.http = http;
        this.url = "http://localhost:3000/profiles";
    }
    //get all data from api
    ProfileServiceService.prototype.getAllProfile = function () {
        return this.http.get(this.url);
    };
    //post data to api
    ProfileServiceService.prototype.saveProfileData = function (data) {
        return this.http.post(this.url, data);
    };
    //update data
    ProfileServiceService.prototype.updateProfileData = function (data) {
        return this.http.put(this.url + "/" + data.id, data);
    };
    ProfileServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProfileServiceService);
    return ProfileServiceService;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".edit_btn {\r\n    border-bottom: 4px solid #FF8200;\r\n}\r\n.agree_btn {\r\n    border-bottom: 4px solid #154734;\r\n}\r\n/* model css */\r\n.btn-close {\r\n    background-color: white;\r\n    border-radius: 50%;\r\n}\r\n/* profile below text text */\r\n.card-text {\r\n    width: 100px;\r\n    font-size: x-small;\r\n}\r\n#upld_photo {\r\n    cursor: pointer;\r\n}\r\n/* popup right side */\r\n.right_column,input,select {\r\n    width: 300px;\r\n    margin-top: 30px;\r\n}\r\n.inpt_box {\r\n    width: 150px;\r\n}\r\ninput[type=\"range\"] {\r\n    color: darkgray;\r\n}\r\n.age_value {\r\n    position: relative;\r\n    top: 15px;\r\n    font-size:x-small;\r\n}\r\n"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\n  <div class=\"row\">\n      <div class=\"col-12\">\n        <h3 class=\"text-primary\">Profile</h3>\n      </div>\n  </div>\n  <div class=\"row mt-3\" *ngFor=\"let userdata of apiData\">\n      <div class=\"col-6\">\n        <div>\n          <img src=\"{{userdata.photo}}\" width=\"310\" height=\"325\" alt=\"user profile\">\n        </div>\n        <div class=\"mt-2\">\n          <button class=\"btn bg-warning me-5 edit_btn\">Edit Photo</button>\n          <button class=\"btn bg-warning mx-5 edit_btn\">Edit Profile</button>\n        </div>\n      </div>\n      <div class=\"col-6\">\n        <div>\n          I'm {{userdata.firstName}} {{userdata.lastName}} and i am above {{userdata.age}} years and you can send your emails to <a href=\"{{userdata.email}}\" style=\"text-decoration: none;\">{{userdata.email}}.</a> I live in the state of {{userdata.country}}. I like to play {{userdata.tags}}. And please send me newsletters. Please reach out me on my phone number.\n        </div>\n        <div>\n          <button class=\"btn bg-success text-white mt-4 agree_btn\">I Agree</button>\n        </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_profile_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/profile-service.service */ "./src/app/service/profile-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(httpService) {
        this.httpService = httpService;
        this.apiData = [];
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getAllProfile().subscribe(function (res) {
            _this.apiData = res;
            console.log(res);
        });
    };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_service_profile_service_service__WEBPACK_IMPORTED_MODULE_1__["ProfileServiceService"]])
    ], UserProfileComponent);
    return UserProfileComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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

module.exports = __webpack_require__(/*! E:\nimap_Infotech_Task\demoApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map