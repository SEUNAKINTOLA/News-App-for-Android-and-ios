webpackJsonp([5],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newsdetails_newsdetails__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(27);
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
 * Generated class for the EventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventPage = (function () {
    function EventPage(modalCtrl, toastCtrl, fetchService, navCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.fetchService = fetchService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lists = [];
        this.active = false;
        this.show = false;
        this.id = 25;
        this.getNews(this.id);
    }
    EventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventPage');
    };
    EventPage.prototype.getNews = function (item) {
        var _this = this;
        this.active = false;
        this.show = false;
        this.fetchService.fetchNewsEvent(item).subscribe(function (res) {
            _this.active = true;
            _this.show = true;
            _this.lists = res;
            console.log(res);
        }, function (err) {
            _this.active = true;
            _this.show = false;
            _this.toastCtrl.create({
                message: 'A network error occurred!',
                duration: 3000
            }).present();
        });
    };
    EventPage.prototype.getFreshNews = function ($event) {
        var _this = this;
        this.id = this.id + 25;
        this.fetchService.fetchNewsEvent(this.id).subscribe(function (res) {
            $event.complete();
            _this.active = true;
            _this.show = true;
            _this.lists = res;
            console.log(res);
        }, function (err) {
            _this.id = _this.id - 25;
            $event.complete();
            _this.active = true;
            _this.show = false;
            _this.toastCtrl.create({
                message: 'A network error occurred!',
                duration: 3000
            }).present();
        });
    };
    EventPage.prototype.showNews = function (id) {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__newsdetails_newsdetails__["a" /* NewsdetailsPage */], { "id": id }).present();
    };
    EventPage.prototype.goToSearch = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__search_search__["a" /* SearchPage */]).present();
    };
    return EventPage;
}());
EventPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-event',template:/*ion-inline-start:"C:\Users\DEV\ionic\mynews\src\pages\event\event.html"*/'<!--\n  Generated template for the EventPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Events This Week</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div style="margin-top:80px" text-center *ngIf="!active && !show">\n        <ion-spinner></ion-spinner>\n      </div>\n      <div style="margin-top:180px"  text-center *ngIf="active && !show">\n        <p>There is no internet connection try again</p>\n        <button ion-button color="fire" (click)="getNews(id)">Reload</button>\n      </div>\n      <ion-list *ngIf="active && show">\n         <ion-refresher (ionRefresh)="getFreshNews($event)">\n            <ion-refresher-content></ion-refresher-content>\n          </ion-refresher>\n        <ion-item *ngFor=\'let item of lists\' tappable (click)="showNews(item.id)" text-wrap>\n          <ion-thumbnail item-start>\n            <img src="{{item._embedded[\'wp:featuredmedia\'][0].source_url}}"/>\n          </ion-thumbnail>\n          <h2 [innerHTML]=\'item.title.rendered\'></h2>\n          <!-- <p [innerHTML] = \'item.excerpt.rendered | slice:0:100\'></p> -->\n          <p>\n            {{item.date | date: \'MMMM dd, yyyy\'}}<span *ngIf = "item._embedded[\'replies\']"> | {{item._embedded[\'replies\'][0].length}} Comment(s) </span> <span *ngIf = "!item._embedded[\'replies\']"> | 0 Comment </span>\n          </p>\n          <!-- <button ion-button clear item-end>View</button> -->\n        </ion-item>\n        <ion-infinite-scroll (ionInfinite)="getFreshNews($event)">\n          <ion-infinite-scroll-content></ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n      </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\DEV\ionic\mynews\src\pages\event\event.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], EventPage);

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newsdetails_newsdetails__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(27);
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
 * Generated class for the FacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FacePage = (function () {
    function FacePage(modalCtrl, toastCtrl, fetchService, navCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.fetchService = fetchService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lists = [];
        this.active = false;
        this.show = false;
        this.id = 25;
        this.getNews(this.id);
    }
    FacePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FacePage');
    };
    FacePage.prototype.getNews = function (item) {
        var _this = this;
        this.active = false;
        this.show = false;
        this.fetchService.fetchNewsFace(item).subscribe(function (res) {
            _this.active = true;
            _this.show = true;
            _this.lists = res;
            console.log(res);
        }, function (err) {
            _this.active = true;
            _this.show = false;
            _this.toastCtrl.create({
                message: 'A network error occurred!',
                duration: 3000
            }).present();
        });
    };
    FacePage.prototype.getFreshNews = function ($event) {
        var _this = this;
        this.id = this.id + 25;
        this.fetchService.fetchNewsFace(this.id).subscribe(function (res) {
            $event.complete();
            _this.active = true;
            _this.show = true;
            _this.lists = res;
            console.log(res);
        }, function (err) {
            _this.id = _this.id - 25;
            $event.complete();
            _this.active = true;
            _this.show = false;
            _this.toastCtrl.create({
                message: 'A network error occurred!',
                duration: 3000
            }).present();
        });
    };
    FacePage.prototype.showNews = function (id) {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__newsdetails_newsdetails__["a" /* NewsdetailsPage */], { "id": id }).present();
    };
    FacePage.prototype.goToSearch = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__search_search__["a" /* SearchPage */]).present();
    };
    return FacePage;
}());
FacePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-face',template:/*ion-inline-start:"C:\Users\DEV\ionic\mynews\src\pages\face\face.html"*/'<!--\n  Generated template for the FacePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>SOS Face Of The Week</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div style="margin-top:80px" text-center *ngIf="!active && !show">\n        <ion-spinner></ion-spinner>\n      </div>\n      <div style="margin-top:180px"  text-center *ngIf="active && !show">\n        <p>There is no internet connection try again</p>\n        <button ion-button color="fire" (click)="getNews(id)">Reload</button>\n      </div>\n      <ion-list *ngIf="active && show">\n         <ion-refresher (ionRefresh)="getFreshNews($event)">\n            <ion-refresher-content></ion-refresher-content>\n          </ion-refresher>\n        <ion-item *ngFor=\'let item of lists\' tappable (click)="showNews(item.id)" text-wrap>\n          <ion-thumbnail item-start>\n            <img src="{{item._embedded[\'wp:featuredmedia\'][0].source_url}}"/>\n          </ion-thumbnail>\n          <h2 [innerHTML]=\'item.title.rendered\'></h2>\n          <!-- <p [innerHTML] = \'item.excerpt.rendered | slice:0:100\'></p> -->\n          <p>\n            {{item.date | date: \'MMMM dd, yyyy\'}}<span *ngIf = "item._embedded[\'replies\']"> | {{item._embedded[\'replies\'][0].length}} Comment(s) </span> <span *ngIf = "!item._embedded[\'replies\']"> | 0 Comment </span>\n          </p>\n          <!-- <button ion-button clear item-end>View</button> -->\n        </ion-item>\n        <ion-infinite-scroll (ionInfinite)="getFreshNews($event)">\n          <ion-infinite-scroll-content></ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\DEV\ionic\mynews\src\pages\face\face.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], FacePage);

//# sourceMappingURL=face.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(22);
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
 * Generated class for the SosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SosPage = (function () {
    function SosPage(toastCtrl, dataService, navCtrl, navParams) {
        this.toastCtrl = toastCtrl;
        this.dataService = dataService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.active = false;
        this.show = false;
        this.item = "";
        this.url = "";
        this.id = "";
        this.getPage();
    }
    SosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SosPage');
    };
    SosPage.prototype.getPage = function () {
        var _this = this;
        this.active = false;
        this.show = false;
        this.dataService.fetchSingleAbout().subscribe(function (res) {
            _this.active = true;
            _this.show = true;
            _this.page = res.content.rendered;
            var d = new Date();
            _this.footer = "&copy; SOSNATION " + d.getFullYear();
            console.log(_this.comment);
        }, function (err) {
            _this.active = true;
            _this.show = false;
            _this.toastCtrl.create({
                message: 'A network error occurred!',
                duration: 3000
            }).present();
        });
    };
    return SosPage;
}());
SosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sos',template:/*ion-inline-start:"C:\Users\DEV\ionic\mynews\src\pages\sos\sos.html"*/'<!--\n  Generated template for the SosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>About SOS Nation</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n  <div style="margin-top:80px" text-center *ngIf="!active && !show">\n    <ion-spinner></ion-spinner>\n  </div>\n  <div style="margin-top:180px"  text-center *ngIf="active && !show">\n      <p>There is no internet connection try again</p>\n      <button ion-button color="fire" (click)="getPage()">Reload</button>\n  </div>\n  <div *ngIf="active && show">\n    <p [innerHTML] = "page"></p>\n    <p class="footer" [innerHTML]="footer"></p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\DEV\ionic\mynews\src\pages\sos\sos.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], SosPage);

//# sourceMappingURL=sos.js.map

/***/ }),

/***/ 117:
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
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/event/event.module": [
		293,
		4
	],
	"../pages/face/face.module": [
		294,
		3
	],
	"../pages/newsdetails/newsdetails.module": [
		295,
		2
	],
	"../pages/search/search.module": [
		296,
		1
	],
	"../pages/sos/sos.module": [
		297,
		0
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
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */];
    }
    TabsPage.prototype.goToSearch = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__search_search__["a" /* SearchPage */]).present();
    };
    TabsPage.prototype.onTabSelect = function (ev) {
        console.log('Tab selected', 'Index: ' + ev.index, 'Unique ID: ' + ev.id);
    };
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\DEV\ionic\mynews\src\pages\tabs\tabs.html"*/'<ion-header no-shadow no-border>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>SOS Nation</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="goToSearch()">\n			  <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons> \n  </ion-navbar>\n</ion-header> \n<ion-content no-bounce>\n  <super-tabs id="mainTabs" selectedTabIndex="0" toolbarColor="light" toolbarBackground="dark" indicatorColor="fire" badgeColor="light" [config]="{ sideMenu: \'left\' }" (tabSelect)="onTabSelect($event)">\n    <super-tab [root]="tab1Root" title="SOS News" id="homeTab"></super-tab>\n    <super-tab [root]="tab2Root" title="Dear Faith" id="locationTab"></super-tab>\n    <super-tab [root]="tab3Root" title="BFS" id="favouritesTab"></super-tab>\n  </super-tabs>\n</ion-content>'/*ion-inline-end:"C:\Users\DEV\ionic\mynews\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newsdetails_newsdetails__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AboutPage = (function () {
    function AboutPage(modalCtrl, toastCtrl, fetchService, navCtrl) {
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.fetchService = fetchService;
        this.navCtrl = navCtrl;
        this.lists = [];
        this.active = false;
        this.show = false;
        this.id = 25;
        this.getNews(this.id);
    }
    AboutPage.prototype.getNews = function (item) {
        var _this = this;
        this.active = false;
        this.show = false;
        this.fetchService.fetchNewsDF(item).subscribe(function (res) {
            _this.active = true;
            _this.show = true;
            _this.lists = res;
            console.log(res);
        }, function (err) {
            _this.active = true;
            _this.show = false;
            _this.toastCtrl.create({
                message: 'A network error occurred!',
                duration: 3000
            }).present();
        });
    };
    AboutPage.prototype.getFreshNews = function ($event) {
        var _this = this;
        this.id = this.id + 25;
        this.fetchService.fetchNewsDF(this.id).subscribe(function (res) {
            $event.complete();
            _this.active = true;
            _this.show = true;
            _this.lists = res;
            console.log(res);
        }, function (err) {
            _this.id = _this.id - 25;
            $event.complete();
            _this.active = true;
            _this.show = false;
            _this.toastCtrl.create({
                message: 'A network error occurred!',
                duration: 3000
            }).present();
        });
    };
    AboutPage.prototype.showNews = function (id) {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__newsdetails_newsdetails__["a" /* NewsdetailsPage */], { "id": id }).present();
    };
    AboutPage.prototype.goToSearch = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__search_search__["a" /* SearchPage */]).present();
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"C:\Users\DEV\ionic\mynews\src\pages\about\about.html"*/'<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content>\n  <div style="margin-top:80px" text-center *ngIf="!active && !show">\n    <ion-spinner></ion-spinner>\n  </div>\n  <div style="margin-top:180px"  text-center *ngIf="active && !show">\n    <p>There is no internet connection try again</p>\n    <button ion-button color="fire" (click)="getNews(id)">Reload</button>\n  </div>\n  <ion-list *ngIf="active && show">\n     <ion-refresher (ionRefresh)="getFreshNews($event)">\n        <ion-refresher-content></ion-refresher-content>\n      </ion-refresher>\n    <ion-item *ngFor=\'let item of lists\' tappable (click)="showNews(item.id)" text-wrap>\n      <ion-thumbnail item-start>\n        <img src="{{item._embedded[\'wp:featuredmedia\'][0].source_url}}"/>\n      </ion-thumbnail>\n      <h2 [innerHTML]=\'item.title.rendered\'></h2>\n      <!-- <p [innerHTML] = \'item.excerpt.rendered | slice:0:100\'></p> -->\n      <p>\n        {{item.date | date: \'MMMM dd, yyyy\'}}<span *ngIf = "item._embedded[\'replies\']"> | {{item._embedded[\'replies\'][0].length}} Comment(s) </span> <span *ngIf = "!item._embedded[\'replies\']"> | 0 Comment </span>\n      </p>\n      <!-- <button ion-button clear item-end>View</button> -->\n    </ion-item>\n    <ion-infinite-scroll (ionInfinite)="getFreshNews($event)">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\DEV\ionic\mynews\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newsdetails_newsdetails__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactPage = (function () {
    function ContactPage(modalCtrl, toastCtrl, fetchService, navCtrl) {
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.fetchService = fetchService;
        this.navCtrl = navCtrl;
        this.lists = [];
        this.active = false;
        this.show = false;
        this.id = 25;
        this.getNews(this.id);
    }
    ContactPage.prototype.getNews = function (item) {
        var _this = this;
        this.active = false;
        this.show = false;
        this.fetchService.fetchNewsBFS(item).subscribe(function (res) {
            _this.active = true;
            _this.show = true;
            _this.lists = res;
            console.log(res);
        }, function (err) {
            _this.active = true;
            _this.show = false;
            _this.toastCtrl.create({
                message: 'A network error occurred!',
                duration: 3000
            }).present();
        });
    };
    ContactPage.prototype.getFreshNews = function ($event) {
        var _this = this;
        this.id = this.id + 25;
        this.fetchService.fetchNewsBFS(this.id).subscribe(function (res) {
            $event.complete();
            _this.active = true;
            _this.show = true;
            _this.lists = res;
            console.log(res);
        }, function (err) {
            _this.id = _this.id - 25;
            $event.complete();
            _this.active = true;
            _this.show = false;
            _this.toastCtrl.create({
                message: 'A network error occurred!',
                duration: 3000
            }).present();
        });
    };
    ContactPage.prototype.showNews = function (id) {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__newsdetails_newsdetails__["a" /* NewsdetailsPage */], { "id": id }).present();
    };
    ContactPage.prototype.goToSearch = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__search_search__["a" /* SearchPage */]).present();
    };
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"C:\Users\DEV\ionic\mynews\src\pages\contact\contact.html"*/'<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content>\n  <div style="margin-top:80px" text-center *ngIf="!active && !show">\n    <ion-spinner></ion-spinner>\n  </div>\n  <div style="margin-top:180px"  text-center *ngIf="active && !show">\n    <p>There is no internet connection try again</p>\n    <button ion-button color="fire" (click)="getNews(id)">Reload</button>\n  </div>\n  <ion-list *ngIf="active && show">\n     <ion-refresher (ionRefresh)="getFreshNews($event)">\n        <ion-refresher-content></ion-refresher-content>\n      </ion-refresher>\n    <ion-item *ngFor=\'let item of lists\' tappable (click)="showNews(item.id)" text-wrap>\n      <ion-thumbnail item-start>\n        <img src="{{item._embedded[\'wp:featuredmedia\'][0].source_url}}"/>\n      </ion-thumbnail>\n      <h2 [innerHTML]=\'item.title.rendered\'></h2>\n      <!-- <p [innerHTML] = \'item.excerpt.rendered | slice:0:100\'></p> -->\n      <p>\n        {{item.date | date: \'MMMM dd, yyyy\'}}<span *ngIf = "item._embedded[\'replies\']"> | {{item._embedded[\'replies\'][0].length}} Comment(s) </span> <span *ngIf = "!item._embedded[\'replies\']"> | 0 Comment </span>\n      </p>\n      <!-- <button ion-button clear item-end>View</button> -->\n    </ion-item>\n    <ion-infinite-scroll (ionInfinite)="getFreshNews($event)">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\DEV\ionic\mynews\src\pages\contact\contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newsdetails_newsdetails__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(modalCtrl, toastCtrl, fetchService, navCtrl) {
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.fetchService = fetchService;
        this.navCtrl = navCtrl;
        this.lists = [];
        this.active = false;
        this.show = false;
        this.id = 25;
        this.comment = 0;
        this.getNews(this.id);
    }
    HomePage.prototype.getNews = function (item) {
        var _this = this;
        this.active = false;
        this.show = false;
        this.fetchService.fetchNews(item).subscribe(function (res) {
            _this.active = true;
            _this.show = true;
            _this.lists = res;
        }, function (err) {
            _this.active = true;
            _this.show = false;
            _this.toastCtrl.create({
                message: 'A network error occurred!',
                duration: 3000
            }).present();
        });
    };
    HomePage.prototype.getFreshNews = function ($event) {
        var _this = this;
        this.id = this.id + 25;
        this.fetchService.fetchNews(this.id).subscribe(function (res) {
            $event.complete();
            _this.active = true;
            _this.show = true;
            _this.lists = res;
        }, function (err) {
            _this.id = _this.id - 25;
            $event.complete();
            _this.active = true;
            _this.show = false;
            _this.toastCtrl.create({
                message: 'A network error occurred!',
                duration: 3000
            }).present();
        });
    };
    HomePage.prototype.showNews = function (id) {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__newsdetails_newsdetails__["a" /* NewsdetailsPage */], { "id": id }).present();
    };
    HomePage.prototype.goToSearch = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__search_search__["a" /* SearchPage */]).present();
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\DEV\ionic\mynews\src\pages\home\home.html"*/' <!-- <ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>  -->\n\n<ion-content>\n\n  <div style="margin-top:80px" text-center *ngIf="!active && !show">\n    <ion-spinner></ion-spinner>\n  </div>\n  <div style="margin-top:180px"  text-center *ngIf="active && !show">\n    <p>There is no internet connection try again</p>\n    <button ion-button color="fire" (click)="getNews(id)">Reload</button>\n  </div>\n  <ion-list *ngIf="active && show">\n     <ion-refresher (ionRefresh)="getFreshNews($event)">\n        <ion-refresher-content></ion-refresher-content>\n      </ion-refresher>\n    <ion-item *ngFor=\'let item of lists\' tappable (click)="showNews(item.id)" text-wrap>\n      <ion-thumbnail item-start>\n        <img src="{{item._embedded[\'wp:featuredmedia\'][0].source_url}}"/>\n      </ion-thumbnail>\n      <h2 [innerHTML]=\'item.title.rendered\'></h2>\n      <!-- <p [innerHTML] = \'item.excerpt.rendered | slice:0:100\'></p> -->\n      <p>\n        {{item.date | date: \'MMMM dd, yyyy\'}}<span *ngIf = "item._embedded[\'replies\']"> | {{item._embedded[\'replies\'][0].length}} Comment(s) </span> <span *ngIf = "!item._embedded[\'replies\']"> | 0 Comment </span>\n      </p>\n      <!-- <button ion-button clear item-end>View</button> -->\n    </ion-item>\n    <ion-infinite-scroll (ionInfinite)="getFreshNews($event)">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\DEV\ionic\mynews\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(233);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DataProvider = (function () {
    function DataProvider(http) {
        this.http = http;
        console.log('Hello DataProvider Provider');
    }
    DataProvider.prototype.fetchNews = function (id) {
        var url = "http://sosnation.com/wp-json/wp/v2/posts?_embed&categories=7&per_page=" + id + "&page=1";
        return this.http.get(url).map(function (res) {
            return res.json();
        });
    };
    DataProvider.prototype.fetchNewsBFS = function (id) {
        var url = "http://sosnation.com/wp-json/wp/v2/posts?_embed&categories=6&per_page=" + id + "&page=1";
        return this.http.get(url).map(function (res) {
            return res.json();
        });
    };
    DataProvider.prototype.fetchNewsFace = function (id) {
        var url = "http://sosnation.com/wp-json/wp/v2/posts?_embed&categories=3&per_page=" + id + "&page=1";
        return this.http.get(url).map(function (res) {
            return res.json();
        });
    };
    DataProvider.prototype.fetchNewsEvent = function (id) {
        var url = "http://sosnation.com/wp-json/wp/v2/posts?_embed&categories=26&per_page=" + id + "&page=1";
        return this.http.get(url).map(function (res) {
            return res.json();
        });
    };
    DataProvider.prototype.fetchNewsSearch = function (search) {
        var url = "http://sosnation.com/wp-json/wp/v2/posts?_embed&search=" + search;
        return this.http.get(url).map(function (res) {
            return res.json();
        });
    };
    DataProvider.prototype.fetchNewsDF = function (id) {
        var url = "http://sosnation.com/wp-json/wp/v2/posts?_embed&categories=4&per_page=" + id + "&page=1";
        return this.http.get(url).map(function (res) {
            return res.json();
        });
    };
    DataProvider.prototype.fetchSingle = function (data) {
        var url = "http://sosnation.com/wp-json/wp/v2/posts/" + data + "?_embed";
        return this.http.get(url).map(function (res) {
            return res.json();
        });
    };
    DataProvider.prototype.fetchSingleAbout = function () {
        var url = "http://sosnation.com/wp-json/wp/v2/pages/96?_embed";
        return this.http.get(url).map(function (res) {
            return res.json();
        });
    };
    return DataProvider;
}());
DataProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], DataProvider);

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(161);
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
 * Generated class for the NewsdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewsdetailsPage = (function () {
    function NewsdetailsPage(share, toastCtrl, dataService, navCtrl, navParams) {
        this.share = share;
        this.toastCtrl = toastCtrl;
        this.dataService = dataService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.active = false;
        this.show = false;
        this.item = "";
        this.url = "";
        this.id = "";
        this.id = this.navParams.get('id');
        this.fetchNews(this.id);
        console.log(this.navParams.get('id'));
    }
    NewsdetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewsdetailsPage');
    };
    NewsdetailsPage.prototype.fetchNews = function (data) {
        var _this = this;
        this.active = false;
        this.show = false;
        this.dataService.fetchSingle(data).subscribe(function (res) {
            _this.active = true;
            _this.show = true;
            _this.page = res.content.rendered;
            _this.src = res._embedded['wp:featuredmedia'][0].source_url;
            _this.comment = (res._embedded['replies']) ? res._embedded['replies'][0].length : 0;
            _this.title = res.title.rendered;
            _this.dater = res.date;
            _this.url = res.link;
            _this.item = res.excerpt.rendered;
            _this.category = res._embedded['wp:term'][0][0].name;
            var d = new Date();
            _this.footer = "&copy; SOSNATION " + d.getFullYear();
            console.log(_this.comment);
        }, function (err) {
            _this.active = true;
            _this.show = false;
            _this.toastCtrl.create({
                message: 'A network error occurred!',
                duration: 3000
            }).present();
        });
    };
    NewsdetailsPage.prototype.shareNews = function () {
        var _this = this;
        this.share.share(this.item, this.title, this.src, this.url).then(function (res) {
        }, function (err) {
            _this.toastCtrl.create({
                message: 'Could not share, try again!',
                duration: 3000
            }).present();
        });
    };
    return NewsdetailsPage;
}());
NewsdetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-newsdetails',template:/*ion-inline-start:"C:\Users\DEV\ionic\mynews\src\pages\newsdetails\newsdetails.html"*/'<!--\n  Generated template for the NewsdetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-shadow no-border>\n\n  <ion-navbar color="dark">\n    <ion-title>News</ion-title>\n    <ion-buttons left>\n      <button ion-button navPop icon-only>\n			  <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons> \n    <ion-buttons right *ngIf="active && show">\n      <button ion-button icon-only (click)="shareNews()">\n			  <ion-icon name="md-share"></ion-icon>\n      </button>\n    </ion-buttons> \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n  <div style="margin-top:80px" text-center *ngIf="!active && !show">\n    <ion-spinner></ion-spinner>\n  </div>\n  <div style="margin-top:180px"  text-center *ngIf="active && !show">\n      <p>There is no internet connection try again</p>\n      <button ion-button color="fire" (click)="getNews(id)">Reload</button>\n  </div>\n  <div *ngIf="active && show">\n    <img src="{{src}}" class="text-img"/>\n    <h3 [innerHTML]="title"></h3>\n    <span style="padding-left:5px;"> {{dater | date: \'MMMM dd, yyyy\'}} | {{comment}} Comment(s)</span> \n    <p class="text-body" [innerHTML]=\'page\'></p>\n    <p text-center>\n      <a href="{{url}}" ion-button outline color="fire" >\n        Post A Comment\n      </a>\n    </p>\n    <p class="footer" [innerHTML]="footer"></p>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\DEV\ionic\mynews\src\pages\newsdetails\newsdetails.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], NewsdetailsPage);

//# sourceMappingURL=newsdetails.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_newsdetails_newsdetails__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_search_search__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_sos_sos__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_event_event__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_face_face__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ionic2_super_tabs__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_data_data__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_social_sharing__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_onesignal__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pipes_highlight_highlight__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_20__pipes_highlight_highlight__["a" /* HighlightPipe */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_newsdetails_newsdetails__["a" /* NewsdetailsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_sos_sos__["a" /* SosPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_event_event__["a" /* EventPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_face_face__["a" /* FacePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_15_ionic2_super_tabs__["a" /* SuperTabsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/event/event.module#EventPageModule', name: 'EventPage', segment: 'event', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/face/face.module#FacePageModule', name: 'FacePage', segment: 'face', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/newsdetails/newsdetails.module#NewsdetailsPageModule', name: 'NewsdetailsPage', segment: 'newsdetails', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/sos/sos.module#SosPageModule', name: 'SosPage', segment: 'sos', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_newsdetails_newsdetails__["a" /* NewsdetailsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_sos_sos__["a" /* SosPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_event_event__["a" /* EventPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_face_face__["a" /* FacePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_onesignal__["a" /* OneSignal */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_16__providers_data_data__["a" /* DataProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newsdetails_newsdetails__ = __webpack_require__(23);
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
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchPage = (function () {
    function SearchPage(modalCtrl, toastCtrl, fetchService, navCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.fetchService = fetchService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lists = [];
        this.active = false;
        this.show = false;
        this.pic = true;
        this.search = "";
        // this.getNews();
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage.prototype.searchItem = function ($search) {
        var _this = this;
        if ($search == "") {
            this.toastCtrl.create({
                message: 'No search parameter found!',
                duration: 3000
            }).present();
        }
        else {
            this.active = false;
            this.show = false;
            this.pic = false;
            this.fetchService.fetchNewsSearch($search).subscribe(function (res) {
                _this.active = true;
                _this.show = true;
                _this.lists = res;
                _this.result = _this.lists.length;
                _this.term = $search;
                console.log(res);
            }, function (err) {
                _this.active = true;
                _this.show = false;
                _this.toastCtrl.create({
                    message: 'A network error occurred!',
                    duration: 3000
                }).present();
            });
        }
    };
    SearchPage.prototype.showNews = function (id) {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__newsdetails_newsdetails__["a" /* NewsdetailsPage */], { "id": id }).present();
    };
    return SearchPage;
}());
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search',template:/*ion-inline-start:"C:\Users\DEV\ionic\mynews\src\pages\search\search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-input type="search" placeholder="Type here..." [(ngModel)]="search" class="searchbox"></ion-input>\n    <ion-buttons left>\n      <button ion-button navPop icon-only>\n			  <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="searchItem(search)">\n			  <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons> \n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <div style="margin-top:80px" text-center *ngIf="pic">\n        <img src="assets/icon.png" width="40"/>\n      </div>\n      <div style="margin-top:80px" text-center *ngIf="!active && !show && !pic">\n        <ion-spinner></ion-spinner>\n      </div>\n      <div style="margin-top:180px"  text-center *ngIf="active && !show && !pic">\n        <p>There is no internet connection try again</p>\n        <!-- <button ion-button color="fire" (click)="getNews()">Reload</button> -->\n      </div>\n      <ion-list *ngIf="active && show && !pic">\n          <ion-list-header>{{result}} result(s) for "<span [innerHTML]=\'(term | highlight: search)\'></span>"</ion-list-header>\n         \n        <ion-item *ngFor=\'let item of lists\' tappable (click)="showNews(item.id)" text-wrap>\n          <ion-thumbnail item-start>\n            <img src="{{item._embedded[\'wp:featuredmedia\'][0].source_url}}"/>\n          </ion-thumbnail>\n          <h2 [innerHTML]=\'item.title.rendered | highlight: search\'></h2>\n          <!-- <p [innerHTML] = \'item.excerpt.rendered | highlight: search | slice:0:100\'></p> -->\n          <p>\n            {{item.date | date: \'MMMM dd, yyyy\'}}<span *ngIf = "item._embedded[\'replies\']"> | {{item._embedded[\'replies\'][0].length}} Comment(s) </span> <span *ngIf = "!item._embedded[\'replies\']"> | 0 Comment </span>\n          </p>\n          <!-- <button ion-button clear item-end>View</button> -->\n        </ion-item>\n      \n      </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\DEV\ionic\mynews\src\pages\search\search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_sos_sos__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_event_event__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_face_face__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_newsdetails_newsdetails__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, signal) {
        var _this = this;
        this.signal = signal;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.oneSignalInit();
        });
        //pages
        this.pages = [
            { 'title': 'Home', 'component': __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */], 'icon': 'home' },
            { 'title': 'SOS Face Of The Week', 'component': __WEBPACK_IMPORTED_MODULE_8__pages_face_face__["a" /* FacePage */], 'icon': 'person' },
            { 'title': 'Events This Week', 'component': __WEBPACK_IMPORTED_MODULE_7__pages_event_event__["a" /* EventPage */], 'icon': 'calendar' },
            { 'title': 'About SOS', 'component': __WEBPACK_IMPORTED_MODULE_6__pages_sos_sos__["a" /* SosPage */], 'icon': 'mail' },
        ];
    }
    MyApp.prototype.openPage = function (com) {
        this.nav.setRoot(com);
    };
    MyApp.prototype.oneSignalInit = function () {
        var _this = this;
        this.signal.startInit('4272e01f-6262-4ab6-a3b9-283dd58e0b9a', '1054577235864');
        this.signal.inFocusDisplaying(this.signal.OSInFocusDisplayOption.InAppAlert);
        this.signal.handleNotificationReceived().subscribe(function () {
            // do something when notification is received
        });
        this.signal.handleNotificationOpened().subscribe(function (jsonData) {
            // do something when a notification is opened
            var addData = jsonData.notification.payload.additionalData;
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_9__pages_newsdetails_newsdetails__["a" /* NewsdetailsPage */], { 'id': addData });
        });
        this.signal.endInit();
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('content'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\DEV\ionic\mynews\src\app\app.html"*/'<ion-menu [content]="content" type="overlay">\n  <ion-header>\n    <ion-toolbar color="dark">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list class="menuList">\n      \n      <button class="sidemenuList" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p.component)">\n        <ion-icon name="{{p.icon}}"></ion-icon> {{p.title}}\n      </button>\n      \n    </ion-list>\n\n    \n\n    <!--<toolbar></toolbar>-->\n  </ion-content>\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\DEV\ionic\mynews\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__["a" /* OneSignal */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the HighlightPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
var HighlightPipe = (function () {
    function HighlightPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    HighlightPipe.prototype.transform = function (text, search) {
        if (search && text) {
            var pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
            pattern = pattern.split(' ').filter(function (t) {
                return t.length > 0;
            }).join('|');
            var regex = new RegExp(pattern, 'gi');
            return text.replace(regex, function (match) { return "<span class=\"search-highlight\">" + match + "</span>"; });
        }
        else {
            return text;
        }
    };
    return HighlightPipe;
}());
HighlightPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'highlight',
    })
], HighlightPipe);

//# sourceMappingURL=highlight.js.map

/***/ })

},[215]);
//# sourceMappingURL=main.js.map