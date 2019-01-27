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
import { Place } from '../../providers/place-service';
var SearchPage = (function (_super) {
    __extends(SearchPage, _super);
    function SearchPage(injector, renderer, placeService) {
        var _this = _super.call(this, injector) || this;
        _this.renderer = renderer;
        _this.placeService = placeService;
        _this.params = {
            limit: 100
        };
        _this.places = [];
        return _this;
    }
    SearchPage.prototype.enableMenuSwipe = function () {
        return false;
    };
    SearchPage.prototype.ionViewDidLoad = function () {
    };
    SearchPage.prototype.onImageLoad = function (imgLoader) {
        this.renderer.setElementClass(imgLoader.element, 'fade-in', true);
    };
    SearchPage.prototype.loadData = function (refresher) {
        if (refresher === void 0) { refresher = null; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var places, _i, places_1, place, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.refresher = refresher;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.placeService.load(this.params)];
                    case 2:
                        places = _a.sent();
                        for (_i = 0, places_1 = places; _i < places_1.length; _i++) {
                            place = places_1[_i];
                            this.places.push(place);
                        }
                        if (this.places.length) {
                            this.showContentView();
                        }
                        else {
                            this.showEmptyView();
                        }
                        this.onRefreshComplete(this.places);
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        this.translate.get('ERROR_NETWORK').subscribe(function (str) { return _this.showToast(str); });
                        this.showContentView();
                        this.onRefreshComplete();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SearchPage.prototype.onSearch = function (e) {
        this.params.canonical = e.target.value;
        if (this.params.canonical && this.params.canonical.trim() !== '') {
            this.params.canonical = this.params.canonical.toLowerCase();
            this.showLoadingView();
            this.loadData();
        }
    };
    SearchPage.prototype.goToItemPage = function (place) {
        this.navigateTo('PlaceDetailPage', {
            place: place
        });
    };
    SearchPage = __decorate([
        Component({
            selector: 'page-search',template:/*ion-inline-start:"/Users/andersonouriques/Development/personal/seekinterest-ui/src/pages/search/search.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ \'SEARCH\' | translate }}</ion-title>\n  </ion-navbar>\n  <ion-toolbar>\n    <ion-searchbar mode="ios"\n      (keyup.enter)="onSearch($event)"\n      [placeholder]="\'SEARCH\' | translate">\n    </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="loadData($event)">\n    <ion-refresher-content pullingText="{{ \'PULL_TO_REFRESH\' | translate }}" refreshingText="{{ \'REFRESHING\' | translate }}">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <empty-view *ngIf="isErrorViewVisible" icon="alert" [text]="\'ERROR_NETWORK\' | translate">\n  </empty-view>\n\n  <empty-view *ngIf="isEmptyViewVisible" icon="alert" [text]="\'EMPTY_DATA\' | translate">\n  </empty-view>\n\n  <ion-row>\n    <ion-col col-6 float-left *ngFor="let place of places"\n      (click)="navigateTo(\'PlaceDetailPage\', { place: place })">\n      <ion-card class="shadow" color="light">\n\n        <div class="image-container">\n          <img-loader useImg (load)="onImageLoad($event)" [src]="place.imageThumb?.url()">\n          </img-loader>\n        </div>\n\n        <ion-card-content no-padding padding text-nowrap>\n          <p class="text-medium ellipsis bold">{{ place.title }}</p>\n          <p class="text-medium ellipsis bold" ion-text color="accent">\n            {{ place.category.title }}\n          </p>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/Users/andersonouriques/Development/personal/seekinterest-ui/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [Injector,
            Renderer,
            Place])
    ], SearchPage);
    return SearchPage;
}(BasePage));
export { SearchPage };
//# sourceMappingURL=search.js.map