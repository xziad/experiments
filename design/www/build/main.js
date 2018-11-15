webpackJsonp([7],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FifthYearPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FifthYearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FifthYearPage = /** @class */ (function () {
    function FifthYearPage(navCtrl, navParams, alerCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alerCtrl = alerCtrl;
    }
    FifthYearPage.prototype.goTo = function (pageIndex) {
        var _this = this;
        var confirm = this.alerCtrl.create({
            title: 'تنبيه تنزيل مقاطع الفيديو!',
            message: 'سوف يتم التأكد من مقاطع الفيديو وتحميل ماينقص منها مما قد يستهلك حجم بيانات مرتفع هل انت موافق؟',
            buttons: [
                {
                    text: 'لا,غير موافق',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'موافق',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.navCtrl.push('GradePage', { 'grade': pageIndex });
                    }
                }
            ]
        });
        confirm.present();
    };
    FifthYearPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fifth-year',template:/*ion-inline-start:"/home/othman/Desktop/des/design/src/pages/fifth-year/fifth-year.html"*/'<!--\n  Generated template for the FifthYearPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>الصف الخامس الإبتدائي</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bg5-color">\n  <div text-center>\n  <div padding>\n      <ion-chip>\n          <ion-icon name="heart" color="fifth"></ion-icon>\n          <ion-label>  الصف الخامس الإبتدائي\n          </ion-label>\n        </ion-chip>\n  </div>\n <p>\n   <button ion-button color="fifth"  (click)="goTo(8)" full round>الفصل الدراسي الأول</button>\n  </p>\n      <p>\n    <button ion-button color="fifth"  (click)="goTo(9)" full round> الفصل الدراسي الثاني</button>\n  </p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/othman/Desktop/des/design/src/pages/fifth-year/fifth-year.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], FifthYearPage);
    return FifthYearPage;
}());

//# sourceMappingURL=fifth-year.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstYearPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FirstYearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FirstYearPage = /** @class */ (function () {
    function FirstYearPage(navCtrl, navParams, alerCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alerCtrl = alerCtrl;
    }
    FirstYearPage.prototype.goTo = function (pageIndex) {
        var _this = this;
        var confirm = this.alerCtrl.create({
            title: 'تنبيه تنزيل مقاطع الفيديو!',
            message: 'سوف يتم التأكد من مقاطع الفيديو وتحميل ماينقص منها مما قد يستهلك حجم بيانات مرتفع هل انت موافق؟',
            buttons: [
                {
                    text: 'لا,غير موافق',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'موافق',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.navCtrl.push('GradePage', { 'grade': pageIndex });
                    }
                }
            ]
        });
        confirm.present();
    };
    FirstYearPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-first-year',template:/*ion-inline-start:"/home/othman/Desktop/des/design/src/pages/first-year/first-year.html"*/'<!--\n  Generated template for the FirstYearPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>الصف الأول الإبتدائي</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bg1-color">\n  <div text-center>\n  <div padding>\n      <ion-chip>\n          <ion-icon name="heart" color="primary"></ion-icon>\n          <ion-label>  الصف الأول الإبتدائي\n          </ion-label>\n        </ion-chip>\n  </div>\n<p>\n    <button ion-button color="primary"  (click)="goTo(0)" full round> الفصل الدراسي الأول</button>\n  </p>\n<p>\n    <button ion-button color="primary"  (click)="goTo(1)" full round> الفصل الدراسي الثاني</button>\n    </p>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/othman/Desktop/des/design/src/pages/first-year/first-year.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], FirstYearPage);
    return FirstYearPage;
}());

//# sourceMappingURL=first-year.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FourthYearPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FourthYearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FourthYearPage = /** @class */ (function () {
    function FourthYearPage(navCtrl, navParams, alerCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alerCtrl = alerCtrl;
    }
    FourthYearPage.prototype.goTo = function (pageIndex) {
        var _this = this;
        var confirm = this.alerCtrl.create({
            title: 'تنبيه تنزيل مقاطع الفيديو!',
            message: 'سوف يتم التأكد من مقاطع الفيديو وتحميل ماينقص منها مما قد يستهلك حجم بيانات مرتفع هل انت موافق؟',
            buttons: [
                {
                    text: 'لا,غير موافق',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'موافق',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.navCtrl.push('GradePage', { 'grade': pageIndex });
                    }
                }
            ]
        });
        confirm.present();
    };
    FourthYearPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fourth-year',template:/*ion-inline-start:"/home/othman/Desktop/des/design/src/pages/fourth-year/fourth-year.html"*/'<!--\n  Generated template for the FourthYearPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>الصف الرابع الإبتدائي</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bg4-color">\n  <div text-center>\n  <div padding>\n      <ion-chip>\n          <ion-icon name="heart" color="forth"></ion-icon>\n          <ion-label>  الصف الرابع الﻹبتدائي\n          </ion-label>\n        </ion-chip>\n  </div>\n    <p>\n    <button ion-button color="forth"  (click)="goTo(6)" full round> الفصل الدراسي الأول</button>\n    </p>\n    <p>\n    <button ion-button color="forth"  (click)="goTo(7)" full round> الفصل الدراسي الثاني</button>\n    </p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/othman/Desktop/des/design/src/pages/fourth-year/fourth-year.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], FourthYearPage);
    return FourthYearPage;
}());

//# sourceMappingURL=fourth-year.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecondYearPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SecondYearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SecondYearPage = /** @class */ (function () {
    function SecondYearPage(navCtrl, navParams, alerCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alerCtrl = alerCtrl;
    }
    SecondYearPage.prototype.goTo = function (pageIndex) {
        var _this = this;
        var confirm = this.alerCtrl.create({
            title: 'تنبيه تنزيل مقاطع الفيديو!',
            message: 'سوف يتم التأكد من مقاطع الفيديو وتحميل ماينقص منها مما قد يستهلك حجم بيانات مرتفع هل انت موافق؟',
            buttons: [
                {
                    text: 'لا,غير موافق',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'موافق',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.navCtrl.push('GradePage', { 'grade': pageIndex });
                    }
                }
            ]
        });
        confirm.present();
    };
    SecondYearPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-second-year',template:/*ion-inline-start:"/home/othman/Desktop/des/design/src/pages/second-year/second-year.html"*/'<!--\n  Generated template for the SecondYearPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>الصف الثاني الإبتدائي</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bg2-color">\n  <div text-center>\n  <div padding>\n      <ion-chip>\n          <ion-icon name="heart" color="second"></ion-icon>\n          <ion-label>  الصف الثاني الإبتدائي          </ion-label>\n        </ion-chip>\n  </div>\n<p>\n    <button ion-button color="second"  (click)="goTo(2)" full round> الفصل الدراسي الأول</button>\n  </p>\n<p>\n    <button ion-button color="second"  (click)="goTo(3)" full round> الفصل الدراسي الثاني</button>\n    </p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/othman/Desktop/des/design/src/pages/second-year/second-year.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SecondYearPage);
    return SecondYearPage;
}());

//# sourceMappingURL=second-year.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SixthYearPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SixthYearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SixthYearPage = /** @class */ (function () {
    function SixthYearPage(navCtrl, navParams, alerCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alerCtrl = alerCtrl;
    }
    SixthYearPage.prototype.goTo = function (pageIndex) {
        var _this = this;
        var confirm = this.alerCtrl.create({
            title: 'تنبيه تنزيل مقاطع الفيديو!',
            message: 'سوف يتم التأكد من مقاطع الفيديو وتحميل ماينقص منها مما قد يستهلك حجم بيانات مرتفع هل انت موافق؟',
            buttons: [
                {
                    text: 'لا,غير موافق',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'موافق',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.navCtrl.push('GradePage', { 'grade': pageIndex });
                    }
                }
            ]
        });
        confirm.present();
    };
    SixthYearPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sixth-year',template:/*ion-inline-start:"/home/othman/Desktop/des/design/src/pages/sixth-year/sixth-year.html"*/'<!--\n  Generated template for the SixthYearPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>الصف السادس الإبتدائي</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bg6-color">\n  <div text-center>\n  <div padding>\n      <ion-chip>\n          <ion-icon name="heart" color="sixth"></ion-icon>\n          <ion-label>الصف السادس الإبتدائي\n          </ion-label>\n        </ion-chip>\n  </div>\n\n  <p>\n    <button ion-button color="sixth"  (click)="goTo(10)"  full round> الفصل الدراسي الأول</button>\n  </p>\n    <p>\n    <button ion-button color="sixth"  (click)="goTo(11)" full round> الفصل الدراسي الثاني</button>\n    </p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/othman/Desktop/des/design/src/pages/sixth-year/sixth-year.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SixthYearPage);
    return SixthYearPage;
}());

//# sourceMappingURL=sixth-year.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThirdYearPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ThirdYearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ThirdYearPage = /** @class */ (function () {
    function ThirdYearPage(navCtrl, navParams, alerCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alerCtrl = alerCtrl;
    }
    ThirdYearPage.prototype.goTo = function (pageIndex) {
        var _this = this;
        var confirm = this.alerCtrl.create({
            title: 'تنبيه تنزيل مقاطع الفيديو!',
            message: 'سوف يتم التأكد من مقاطع الفيديو وتحميل ماينقص منها مما قد يستهلك حجم بيانات مرتفع هل انت موافق؟',
            buttons: [
                {
                    text: 'لا,غير موافق',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'موافق',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.navCtrl.push('GradePage', { 'grade': pageIndex });
                    }
                }
            ]
        });
        confirm.present();
    };
    ThirdYearPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-third-year',template:/*ion-inline-start:"/home/othman/Desktop/des/design/src/pages/third-year/third-year.html"*/'<!--\n  Generated template for the ThirdYearPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>الصف الثالث الإبتدائي</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bg3-color">\n  <div text-center>\n  <div padding>\n      <ion-chip>\n          <ion-icon name="heart" color="third"></ion-icon>\n          <ion-label> الصف الثالث الإبتدائي\n          </ion-label>\n        </ion-chip>\n  </div>\n\n    <ion-row>\n    <button ion-button color="third"  (click)="goTo(4)" full round> الفصل الدراسي الأول</button>\n      </ion-row>\n      <ion-row>\n       <button ion-button color="third"  (click)="goTo(5)" full round> الفصل الدراسي الثاني</button>\n       </ion-row>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/othman/Desktop/des/design/src/pages/third-year/third-year.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ThirdYearPage);
    return ThirdYearPage;
}());

//# sourceMappingURL=third-year.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/fifth-year/fifth-year.module": [
		274,
		6
	],
	"../pages/first-year/first-year.module": [
		275,
		5
	],
	"../pages/fourth-year/fourth-year.module": [
		276,
		4
	],
	"../pages/grade/grade.module": [
		277,
		0
	],
	"../pages/second-year/second-year.module": [
		278,
		3
	],
	"../pages/sixth-year/sixth-year.module": [
		279,
		2
	],
	"../pages/third-year/third-year.module": [
		280,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__first_year_first_year__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__second_year_second_year__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__third_year_third_year__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fourth_year_fourth_year__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fifth_year_fifth_year__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sixth_year_sixth_year__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    HomePage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'عن التطبيق',
            subTitle: "تنفيذ الاستاذ أحمد موسى الفيفي والاستاذ عبدالله علي الفيفي. تطوير التطبيق زياد محمد العتيبي ziyad.alotaibe@gmail.com ",
            buttons: ['حسنا']
        });
        alert.present();
    };
    HomePage.prototype.GoToFirst = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__first_year_first_year__["a" /* FirstYearPage */]);
    };
    HomePage.prototype.GoToSecond = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__second_year_second_year__["a" /* SecondYearPage */]);
    };
    HomePage.prototype.GoToThird = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__third_year_third_year__["a" /* ThirdYearPage */]);
    };
    HomePage.prototype.GoToFourth = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__fourth_year_fourth_year__["a" /* FourthYearPage */]);
    };
    HomePage.prototype.GoToFifth = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__fifth_year_fifth_year__["a" /* FifthYearPage */]);
    };
    HomePage.prototype.GoToSixth = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__sixth_year_sixth_year__["a" /* SixthYearPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/othman/Desktop/des/design/src/pages/home/home.html"*/'<ion-header class="">\n  <ion-toolbar>\n\n  <ion-title>مختبري My laboratory</ion-title>\n  <ion-buttons end>\n    <button ion-button icon-only color="royal" (click)="showAlert()">\n      <ion-icon name="information-circle"></ion-icon>\n    </button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class="bg-color card-background-page" >\n <p>\n  <ion-card>\n    <img src="../../assets/imgs/home.png"/>\n\n  </ion-card>\n\n</p>\n\n\n\n\n\n  <p>\n    <button ion-button color="primary" full  (click)="GoToFirst()" round> الصف الأول الإبتدائي</button>\n  </p>\n  <p>\n    <button ion-button color="second" full  (click)="GoToSecond()" round>الصف الثاني الإبتدائي</button>\n  </p>\n\n  <p>\n    <button ion-button color="third" full  (click)="GoToThird()" round>الصف الثالث الإبتدائي</button>\n  </p>\n\n  <p>\n    <button ion-button color="forth" full  (click)="GoToFourth()" round>الصف الرابع الإبتدائي</button>\n  </p>\n  <p>\n    <button ion-button color="fifth" full  (click)="GoToFifth()" round>الصف الخامس الإبتدائي</button>\n</p>\n<p>\n  <button ion-button color="sixth" full  (click)="GoToSixth()"  round>الصف السادس الإبتدائي</button>\n</p>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/othman/Desktop/des/design/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_first_year_first_year__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_second_year_second_year__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_third_year_third_year__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_fourth_year_fourth_year__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_fifth_year_fifth_year__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_sixth_year_sixth_year__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_first_year_first_year__["a" /* FirstYearPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_second_year_second_year__["a" /* SecondYearPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_third_year_third_year__["a" /* ThirdYearPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_fourth_year_fourth_year__["a" /* FourthYearPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_fifth_year_fifth_year__["a" /* FifthYearPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_sixth_year_sixth_year__["a" /* SixthYearPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/fifth-year/fifth-year.module#FifthYearPageModule', name: 'FifthYearPage', segment: 'fifth-year', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/first-year/first-year.module#FirstYearPageModule', name: 'FirstYearPage', segment: 'first-year', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fourth-year/fourth-year.module#FourthYearPageModule', name: 'FourthYearPage', segment: 'fourth-year', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/grade/grade.module#GradePageModule', name: 'GradePage', segment: 'grade', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/second-year/second-year.module#SecondYearPageModule', name: 'SecondYearPage', segment: 'second-year', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sixth-year/sixth-year.module#SixthYearPageModule', name: 'SixthYearPage', segment: 'sixth-year', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/third-year/third-year.module#ThirdYearPageModule', name: 'ThirdYearPage', segment: 'third-year', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_first_year_first_year__["a" /* FirstYearPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_second_year_second_year__["a" /* SecondYearPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_third_year_third_year__["a" /* ThirdYearPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_fourth_year_fourth_year__["a" /* FourthYearPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_fifth_year_fifth_year__["a" /* FifthYearPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_sixth_year_sixth_year__["a" /* SixthYearPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/othman/Desktop/des/design/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/othman/Desktop/des/design/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map