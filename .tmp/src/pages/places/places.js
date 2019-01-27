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
import { BasePage } from '../base-page/base-page';
import { AppConfig } from '../../app/app.config';
import { Place } from '../../providers/place-service';
import { Preference } from '../../providers/preference';
import { AdMobFree } from '@ionic-native/admob-free';
import { trigger, style, animate, transition, query, stagger } from '@angular/animations';
var PlacesPage = (function (_super) {
    __extends(PlacesPage, _super);
    function PlacesPage(injector, renderer, admobFree, placeService, preference) {
        var _this = _super.call(this, injector) || this;
        _this.renderer = renderer;
        _this.admobFree = admobFree;
        _this.placeService = placeService;
        _this.preference = preference;
        _this.params = {};
        _this.places = [];
        _this.params.category = _this.navParams.get('category');
        _this.params.isFeatured = _this.navParams.get('isFeatured');
        _this.params.location = _this.navParams.get('location');
        _this.params.unit = _this.preference.unit;
        _this.params.limit = 20;
        _this.params.page = 0;
        _this.showLoadingView();
        _this.onReload();
        _this.prepareAd();
        return _this;
    }
    PlacesPage.prototype.enableMenuSwipe = function () {
        return false;
    };
    PlacesPage.prototype.onImageLoad = function (imgLoader) {
        this.renderer.setElementClass(imgLoader.element, 'fade-in', true);
    };
    PlacesPage.prototype.prepareAd = function () {
        return __awaiter(this, void 0, void 0, function () {
            var bannerConfig;
            return __generator(this, function (_a) {
                try {
                    if (AppConfig.BANNER_ID) {
                        bannerConfig = {
                            id: AppConfig.BANNER_ID,
                            isTesting: false,
                            autoShow: true
                        };
                        this.admobFree.banner.config(bannerConfig);
                        this.admobFree.banner.prepare();
                    }
                }
                catch (err) {
                    console.warn(err);
                }
                return [2 /*return*/];
            });
        });
    };
    PlacesPage.prototype.goToPlace = function (place) {
        this.navigateTo('PlaceDetailPage', { place: place });
    };
    PlacesPage.prototype.loadData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var places, _i, places_1, place, err_1, message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.placeService.load(this.params)];
                    case 1:
                        places = _a.sent();
                        for (_i = 0, places_1 = places; _i < places_1.length; _i++) {
                            place = places_1[_i];
                            this.places.push(place);
                        }
                        this.onRefreshComplete(places);
                        if (this.places.length) {
                            this.showContentView();
                        }
                        else {
                            this.showEmptyView();
                        }
                        return [3 /*break*/, 4];
                    case 2:
                        err_1 = _a.sent();
                        this.onRefreshComplete();
                        return [4 /*yield*/, this.getTrans('ERROR_NETWORK')];
                    case 3:
                        message = _a.sent();
                        this.showToast(message);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PlacesPage.prototype.onLoadMore = function (infiniteScroll) {
        this.infiniteScroll = infiniteScroll;
        this.params.page++;
        this.loadData();
    };
    PlacesPage.prototype.onReload = function (refresher) {
        if (refresher === void 0) { refresher = null; }
        this.refresher = refresher;
        this.places = [];
        this.params.page = 0;
        this.loadData();
    };
    PlacesPage = __decorate([
        Component({
            selector: 'page-places',template:/*ion-inline-start:"/Users/andersonouriques/Development/personal/seekinterest-ui/src/pages/places/places.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      <span *ngIf="params.isFeatured">{{ \'FEATURED\' | translate }}</span>\n      <span *ngIf="params.location">{{ \'NEARBY\' | translate }}</span>\n      <span *ngIf="!params.category &&!params.isFeatured && !params.location">\n        {{ \'NEW\' | translate }}\n      </span>\n      <span *ngIf="params.category">{{ params.category.title }}</span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="onReload($event)">\n    <ion-refresher-content pullingText="{{ \'PULL_TO_REFRESH\' | translate }}" refreshingText="{{ \'REFRESHING\' | translate }}">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <empty-view *ngIf="isErrorViewVisible" icon="alert" [text]="\'ERROR_NETWORK\' | translate">\n  </empty-view>\n\n  <empty-view *ngIf="isEmptyViewVisible" icon="map" [text]="\'EMPTY_PLACES\' | translate">\n  </empty-view>\n\n  <div [@staggerIn]="places.length">\n    <ion-card class="shadow" no-margin margin-bottom color="light" *ngFor="let place of places" (click)="goToPlace(place)">\n      <div class="card-img">\n        <img-loader [src]="place.image?.url()" (load)="onImageLoad($event)"></img-loader>\n      </div>\n      <ion-card-content>\n        <ion-row no-padding>\n          <ion-col col-8>\n            <p class="bold">{{ place.title }}</p>\n            <star-rating *ngIf="place.rating"\n              [starType]="\'svg\'"\n              [size]="\'medium\'"\n              [readOnly]="true"\n              [showHalfStars]="false"\n              [rating]="place.rating">\n            </star-rating>\n            <span class="bold text-small" ion-text color="accent">{{ place.category?.title }}</span>\n          </ion-col>\n          <ion-col col-4 text-end align-self-end>\n            <span class="bold text-small" ion-text color="primary">\n              {{ place.distance(params.location, params.unit) }}\n            </span>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <ion-infinite-scroll (ionInfinite)="onLoadMore($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n'/*ion-inline-end:"/Users/andersonouriques/Development/personal/seekinterest-ui/src/pages/places/places.html"*/,
            animations: [
                trigger('staggerIn', [
                    transition('* => *', [
                        query(':enter', style({ opacity: 0, transform: "translate3d(0,10px,0)" }), { optional: true }),
                        query(':enter', stagger('100ms', [animate('300ms', style({ opacity: 1, transform: "translate3d(0,0,0)" }))]), { optional: true })
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [Injector,
            Renderer,
            AdMobFree,
            Place,
            Preference])
    ], PlacesPage);
    return PlacesPage;
}(BasePage));
export { PlacesPage };
//# sourceMappingURL=places.js.map