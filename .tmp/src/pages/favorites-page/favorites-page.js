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
import { Component, Injector, Renderer } from '@angular/core';
import { Place } from '../../providers/place-service';
import { BasePage } from '../base-page/base-page';
import { trigger, style, animate, transition, query, stagger } from '@angular/animations';
var FavoritesPage = (function (_super) {
    __extends(FavoritesPage, _super);
    function FavoritesPage(injector, renderer, placeService) {
        var _this = _super.call(this, injector) || this;
        _this.renderer = renderer;
        _this.placeService = placeService;
        _this.params = {};
        _this.places = [];
        _this.showLoadingView();
        _this.onReload();
        return _this;
    }
    FavoritesPage.prototype.enableMenuSwipe = function () {
        return true;
    };
    FavoritesPage.prototype.onImageLoad = function (imgLoader) {
        this.renderer.setElementClass(imgLoader.element, 'fade-in', true);
    };
    FavoritesPage.prototype.goToPlace = function (place) {
        this.navigateTo('PlaceDetailPage', { place: place });
    };
    FavoritesPage.prototype.loadData = function () {
        var _this = this;
        this.placeService.loadFavorites(this.params).then(function (places) {
            for (var _i = 0, places_1 = places; _i < places_1.length; _i++) {
                var place = places_1[_i];
                _this.places.push(place);
            }
            _this.onRefreshComplete(places);
            if (_this.places.length) {
                _this.showContentView();
            }
            else {
                _this.showEmptyView();
            }
        }, function () {
            _this.onRefreshComplete();
        });
    };
    FavoritesPage.prototype.onLoadMore = function (infiniteScroll) {
        this.infiniteScroll = infiniteScroll;
        this.params.page++;
        this.loadData();
    };
    FavoritesPage.prototype.onReload = function (refresher) {
        if (refresher === void 0) { refresher = null; }
        this.refresher = refresher;
        this.places = [];
        this.params.page = 0;
        this.loadData();
    };
    FavoritesPage = __decorate([
        Component({
            selector: 'page-favorites-page',template:/*ion-inline-start:"/Users/andersonouriques/Development/personal/seekinterest-ui/src/pages/favorites-page/favorites-page.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ "MY_FAVORITES" | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="onReload($event)">\n    <ion-refresher-content pullingText="{{ \'PULL_TO_REFRESH\' | translate }}" refreshingText="{{ \'REFRESHING\' | translate }}">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <empty-view *ngIf="isErrorViewVisible" icon="alert" [text]="\'ERROR_NETWORK\' | translate">\n  </empty-view>\n\n  <empty-view *ngIf="isEmptyViewVisible" icon="heart" [text]="\'EMPTY_FAVORITES\' | translate">\n  </empty-view>\n\n  <div [@staggerIn]="places.length">\n    <ion-card class="shadow" no-margin margin-bottom color="light" *ngFor="let place of places" (click)="goToPlace(place)">\n      <div class="card-img">\n        <img-loader [src]="place.image?.url()" (load)="onImageLoad($event)"></img-loader>\n      </div>\n      <ion-card-content>\n        <ion-row no-padding>\n          <ion-col col-8>\n            <p class="bold">{{ place.title }}</p>\n            <star-rating *ngIf="place.rating"\n              [starType]="\'svg\'"\n              [size]="\'medium\'"\n              [readOnly]="true"\n              [showHalfStars]="false"\n              [rating]="place.rating">\n            </star-rating>\n            <span class="bold text-small" ion-text color="accent">{{ place.category?.title }}</span>\n          </ion-col>\n          <ion-col col-4 text-end align-self-end>\n            <span class="bold text-small" ion-text color="primary">\n              {{ place.distance(params.location, params.unit) }}\n            </span>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <ion-infinite-scroll (ionInfinite)="onLoadMore($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n'/*ion-inline-end:"/Users/andersonouriques/Development/personal/seekinterest-ui/src/pages/favorites-page/favorites-page.html"*/,
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
            Place])
    ], FavoritesPage);
    return FavoritesPage;
}(BasePage));
export { FavoritesPage };
//# sourceMappingURL=favorites-page.js.map