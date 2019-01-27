var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Component, Injector, Renderer } from '@angular/core';
import { Events } from 'ionic-angular';
import { BasePage } from '../base-page/base-page';
import Parse from 'parse';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { BrowserTab } from '@ionic-native/browser-tab';
import { Place } from '../../providers/place-service';
import { Geolocation } from '@ionic-native/geolocation';
var HomePage = (function (_super) {
    __extends(HomePage, _super);
    function HomePage(injector, events, geolocation, placeService, inAppBrowser, browserTab, renderer) {
        var _this = _super.call(this, injector) || this;
        _this.events = events;
        _this.geolocation = geolocation;
        _this.placeService = placeService;
        _this.inAppBrowser = inAppBrowser;
        _this.browserTab = browserTab;
        _this.renderer = renderer;
        _this.slides = [];
        _this.featuredPlaces = [];
        _this.newPlaces = [];
        _this.randomPlaces = [];
        _this.nearbyPlaces = [];
        _this.categories = [];
        _this.randomParams = {};
        return _this;
    }
    HomePage.prototype.enableMenuSwipe = function () {
        return true;
    };
    HomePage.prototype.ionViewDidLoad = function () {
        this.showLoadingView();
        this.loadData();
        this.loadNearbyPlaces();
    };
    HomePage.prototype.onImageLoad = function (imgLoader) {
        this.renderer.setElementClass(imgLoader.element, 'fade-in', true);
    };
    HomePage.prototype.onReload = function (refresher) {
        if (refresher === void 0) { refresher = null; }
        this.refresher = refresher;
        this.loadData();
        this.loadNearbyPlaces();
    };
    HomePage.prototype.loadData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Parse.Cloud.run('getHomePageData')];
                    case 1:
                        data = _a.sent();
                        this.randomPlaces = data.randomPlaces;
                        this.newPlaces = data.newPlaces;
                        this.featuredPlaces = data.featuredPlaces;
                        this.categories = data.categories;
                        this.slides = data.slides;
                        this.onRefreshComplete();
                        this.showContentView();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.showErrorView();
                        this.onRefreshComplete();
                        this.translate.get('ERROR_NETWORK')
                            .subscribe(function (str) { return _this.showToast(str); });
                        if (error_1.code === 209) {
                            this.events.publish('user:logout');
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.loadMoreRandomPlaces = function () {
        var _this = this;
        Parse.Cloud.run('getRandomPlaces').then(function (places) {
            for (var _i = 0, places_1 = places; _i < places_1.length; _i++) {
                var place = places_1[_i];
                _this.randomPlaces.push(place);
            }
            _this.onRefreshComplete();
        }, function () {
            _this.onRefreshComplete();
            _this.translate.get('ERROR_NETWORK').subscribe(function (str) { return _this.showToast(str); });
        });
    };
    HomePage.prototype.loadNearbyPlaces = function () {
        return __awaiter(this, void 0, void 0, function () {
            var options, pos, _a, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        options = {
                            enableHighAccuracy: true,
                            timeout: 20000,
                            maximumAge: 60000
                        };
                        return [4 /*yield*/, this.geolocation.getCurrentPosition(options)];
                    case 1:
                        pos = _b.sent();
                        this.location = pos.coords;
                        _a = this;
                        return [4 /*yield*/, this.placeService.load({
                                location: this.location,
                                limit: 10
                            })];
                    case 2:
                        _a.nearbyPlaces = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _b.sent();
                        console.warn(err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.onLoadMore = function (infiniteScroll) {
        this.infiniteScroll = infiniteScroll;
        this.randomParams.page++;
        this.loadMoreRandomPlaces();
    };
    HomePage.prototype.onSlideTouched = function (slide) {
        if (slide.url) {
            this.openUrl(slide.url);
        }
        else if (slide.place) {
            this.navigateTo('PlaceDetailPage', { place: slide.place });
        }
        else {
            // no match...
        }
    };
    HomePage.prototype.openUrl = function (link) {
        var _this = this;
        this.browserTab.isAvailable().then(function (isAvailable) {
            if (isAvailable) {
                _this.browserTab.openUrl(link);
            }
            else {
                _this.inAppBrowser.create(link, '_system');
            }
        }).catch(function (e) { return console.log(e); });
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home-page',template:/*ion-inline-start:"/Users/andersonouriques/Development/personal/seekinterest-ui/src/pages/home-page/home-page.html"*/'<ion-header no-border>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <div text-center>\n        <img height="36" src="./assets/img/logo-1.png" />\n      </div>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button clear icon-only (click)="navigateTo(\'PostListPage\')">\n        <ion-icon name="notifications"></ion-icon>\n      </button>\n      <button ion-button clear icon-only (click)="navigateTo(\'SearchPage\')">\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content #container>\n\n  <empty-view *ngIf="isErrorViewVisible" icon="alert" [text]="\'ERROR_NETWORK\' | translate">\n  </empty-view>\n\n  <section *ngIf="isContentViewVisible">\n\n    <!-- Top Slide List -->\n\n    <ion-slides *ngIf="slides.length" pager autoplay="4000">\n      <ion-slide *ngFor="let slide of slides" (click)="onSlideTouched(slide)">\n        <div>\n          <img-loader useImg (load)="onImageLoad($event)"\n            fallback="assets/img/placeholder-slide.png"\n            [src]="slide.image?.url()">\n          </img-loader>\n        </div>\n      </ion-slide>\n    </ion-slides>\n\n    <!-- Category List -->\n\n    <ion-row padding>\n        <ion-col col-6>\n          <h5 text-start no-margin>\n            {{ \'CATEGORIES\' | translate }}\n          </h5>\n        </ion-col>\n        <ion-col col-6>\n          <h5 ion-text color="primary" no-margin text-end (click)="navigateTo(\'CategoriesPage\')">\n            {{ \'VIEW_ALL\' | translate }}\n          </h5>\n        </ion-col>\n      </ion-row>\n\n    <ion-scroll scrollX="true" direction="x" style="height: 140px">\n      <ion-row nowrap align-items-center margin-horizontal>\n        <ion-col col-auto float-left *ngFor="let category of categories">\n            <ion-card class="card-category" color="light"\n              (click)="navigateTo(\'PlacesPage\', { category: category })">\n              <div class="card-image">\n                <img-loader (load)="onImageLoad($event)"\n                  [src]="category.imageThumb?.url()">\n                </img-loader>\n              </div>\n              <ion-card-content text-center text-nowrap>\n                <p class="text-small bold ellipsis">{{ category.title }}</p>\n              </ion-card-content>\n            </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-scroll>\n\n    <!-- Featured Places -->\n\n    <ion-row padding>\n      <ion-col col-6>\n        <h5 text-start no-margin>\n          {{ \'FEATURED\' | translate }}\n        </h5>\n      </ion-col>\n      <ion-col col-6>\n        <h5 ion-text color="primary" no-margin text-end\n        (click)="navigateTo(\'PlacesPage\', { isFeatured: true })">\n          {{ \'VIEW_ALL\' | translate }}\n        </h5>\n      </ion-col>\n    </ion-row>\n\n    <section class="place-row" *ngIf="featuredPlaces?.length">\n\n      <ion-scroll scrollX="true" direction="x" style="height: 250px">\n        <ion-row nowrap margin-horizontal>\n          <ion-col col-auto float-left *ngFor="let place of featuredPlaces"\n          (click)="navigateTo(\'PlaceDetailPage\', { place: place })">\n\n            <ion-card color="light">\n\n              <div class="image-container">\n                <img-loader useImg (load)="onImageLoad($event)"\n                  [src]="place.imageThumb?.url()">\n                </img-loader>\n              </div>\n\n              <ion-card-content text-nowrap>\n                <p no-margin class="text-medium ellipsis bold">{{ place.title }}</p>\n                <p class="text-medium ellipsis bold" ion-text color="accent">\n                  {{ place.category.title }}\n                </p>\n              </ion-card-content>\n            </ion-card>\n\n          </ion-col>\n        </ion-row>\n      </ion-scroll>\n\n    </section>\n\n    <!-- New Places -->\n\n    <ion-row padding>\n      <ion-col col-6>\n        <h5 text-start no-margin>{{ \'NEW\' | translate }}</h5>\n      </ion-col>\n      <ion-col col-6>\n        <h5 ion-text color="primary" no-margin text-end (click)="navigateTo(\'PlacesPage\')">\n          {{ \'VIEW_ALL\' | translate }}\n        </h5>\n      </ion-col>\n    </ion-row>\n\n    <section class="place-row" *ngIf="newPlaces?.length">\n\n        <ion-scroll scrollX="true" direction="x" style="height: 250px">\n          <ion-row nowrap margin-horizontal>\n            <ion-col col-auto float-left *ngFor="let place of newPlaces"\n            (click)="navigateTo(\'PlaceDetailPage\', { place: place })">\n  \n              <ion-card color="light">\n  \n                <div class="image-container">\n                  <img [src]="place.imageThumb?.url()"\n                    src-fallback="./assets/img/placeholder1.png" />\n                </div>\n  \n                <ion-card-content text-nowrap>\n                  <p no-margin class="text-medium ellipsis bold">{{ place.title }}</p>\n                  <p class="text-medium ellipsis bold" ion-text color="accent">\n                    {{ place.category.title }}\n                  </p>\n                </ion-card-content>\n              </ion-card>\n  \n            </ion-col>\n          </ion-row>\n        </ion-scroll>\n  \n      </section>\n\n    <!-- Nearby Places -->\n\n    <ion-row padding *ngIf="nearbyPlaces?.length">\n      <ion-col col-6>\n        <h5 text-start no-margin>{{ \'NEARBY\' | translate }}</h5>\n      </ion-col>\n      <ion-col col-6>\n        <h5 ion-text color="primary" no-margin text-end\n          (click)="navigateTo(\'PlacesPage\', { location: location })">\n          {{ \'VIEW_ALL\' | translate }}\n        </h5>\n      </ion-col>\n    </ion-row>\n  \n    <section class="place-row" *ngIf="nearbyPlaces?.length">\n\n      <ion-scroll scrollX="true" direction="x" style="height: 250px">\n        <ion-row nowrap margin-horizontal>\n          <ion-col col-auto float-left *ngFor="let place of nearbyPlaces"\n          (click)="navigateTo(\'PlaceDetailPage\', { place: place })">\n\n            <ion-card color="light">\n\n              <div class="image-container">\n                <img [src]="place.imageThumb?.url()"\n                  src-fallback="./assets/img/placeholder1.png" />\n              </div>\n\n              <ion-card-content text-nowrap>\n                <p no-margin class="text-medium ellipsis bold">{{ place.title }}</p>\n                <p class="text-medium ellipsis bold" ion-text color="accent">\n                  {{ place.category.title }}\n                </p>\n              </ion-card-content>\n            </ion-card>\n\n          </ion-col>\n        </ion-row>\n      </ion-scroll>\n\n    </section>\n\n    <ion-row padding>\n      <ion-col col-6>\n        <h5 text-start no-margin>{{ \'MORE_PLACES\' | translate }}</h5>\n      </ion-col>\n      <ion-col col-6>\n        <h5 ion-text color="primary" no-margin text-end (click)="navigateTo(\'PlacesPage\')">\n          {{ \'VIEW_ALL\' | translate }}\n        </h5>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class="place-row">\n      <ion-col col-6 float-left *ngFor="let place of randomPlaces"\n        (click)="navigateTo(\'PlaceDetailPage\', { place: place })">\n\n        <ion-card class="full-width" no-margin color="light">\n\n          <div class="image-container">\n            <img defaultImage="./assets/img/placeholder1.png"\n              [lazyLoad]="place.imageThumb?.url()"\n              [scrollObservable]="container.ionScroll" />\n          </div>\n\n          <ion-card-content text-nowrap>\n            <p no-margin class="text-medium ellipsis bold">{{ place.title }}</p>\n            <p class="text-medium ellipsis bold" ion-text color="accent">\n              {{ place.category.title }}\n            </p>\n          </ion-card-content>\n        </ion-card>\n\n      </ion-col>\n    </ion-row>\n  </section>\n\n  <ion-infinite-scroll (ionInfinite)="onLoadMore($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n'/*ion-inline-end:"/Users/andersonouriques/Development/personal/seekinterest-ui/src/pages/home-page/home-page.html"*/,
        }),
        __metadata("design:paramtypes", [Injector,
            Events,
            Geolocation,
            Place,
            InAppBrowser,
            BrowserTab,
            Renderer])
    ], HomePage);
    return HomePage;
}(BasePage));
export { HomePage };
//# sourceMappingURL=home-page.js.map