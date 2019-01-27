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
import { Component, Injector } from '@angular/core';
import { Review } from '../../providers/review-service';
import { BasePage } from '../base-page/base-page';
var ReviewsPage = (function (_super) {
    __extends(ReviewsPage, _super);
    function ReviewsPage(injector, reviewService) {
        var _this = _super.call(this, injector) || this;
        _this.reviewService = reviewService;
        _this.params = {};
        _this.params.place = _this.navParams.data;
        return _this;
    }
    ReviewsPage.prototype.enableMenuSwipe = function () {
        return false;
    };
    ReviewsPage.prototype.ionViewDidLoad = function () {
        this.showLoadingView();
        this.onReload();
    };
    ReviewsPage.prototype.loadData = function () {
        var _this = this;
        this.reviewService.load(this.params).then(function (reviews) {
            for (var _i = 0, reviews_1 = reviews; _i < reviews_1.length; _i++) {
                var review = reviews_1[_i];
                _this.reviews.push(review);
            }
            _this.onRefreshComplete(reviews);
            if (_this.reviews.length) {
                _this.showContentView();
            }
            else {
                _this.showEmptyView();
            }
        }, function () {
            _this.showErrorView();
            _this.onRefreshComplete();
        });
    };
    ReviewsPage.prototype.onLoadMore = function (infiniteScroll) {
        this.infiniteScroll = infiniteScroll;
        this.params.page++;
        this.loadData();
    };
    ReviewsPage.prototype.onReload = function (refresher) {
        if (refresher === void 0) { refresher = null; }
        this.refresher = refresher;
        this.reviews = [];
        this.params.page = 0;
        this.loadData();
    };
    ReviewsPage = __decorate([
        Component({
            selector: 'page-reviews-page',template:/*ion-inline-start:"/Users/andersonouriques/Development/personal/seekinterest-ui/src/pages/reviews-page/reviews-page.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ "REVIEWS" | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content #container padding>\n\n  <ion-refresher (ionRefresh)="onReload($event)">\n    <ion-refresher-content pullingText="{{ \'PULL_TO_REFRESH\' | translate }}" refreshingText="{{ \'REFRESHING\' | translate }}">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <empty-view *ngIf="isErrorViewVisible" icon="alert" [text]="\'ERROR_REVIEWS\' | translate">\n  </empty-view>\n\n  <empty-view *ngIf="isEmptyViewVisible" icon="star" [text]="\'EMPTY_REVIEWS\' | translate">\n  </empty-view>\n\n  <ion-list no-lines>\n    <div margin-bottom padding class="radius light-bg border" *ngFor="let review of reviews">\n      <ion-item no-padding color="light">\n        <ion-avatar item-start>\n          <img defaultImage="./assets/img/avatar.png"\n            [lazyLoad]="review.user?.photo?.url()"\n            [scrollObservable]="container.ionScroll" />\n        </ion-avatar>\n        <h2 class="bold no-margin">{{ review.user?.name }}</h2>\n        <star-rating\n          [starType]="\'svg\'"\n          [size]="\'medium\'"\n          [readOnly]="true"\n          [showHalfStars]="false"\n          [rating]="review.rating">\n        </star-rating>\n        <p class="text-small no-margin" ion-text color="accent">\n          {{ review.createdAt | date:\'mediumDate\' }}\n        </p>\n      </ion-item>\n      <ion-row>\n        <ion-col no-padding col-12>\n          <p class="text-medium bold no-margin" ion-text color="dark">{{ review.comment }}</p>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="onLoadMore($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n'/*ion-inline-end:"/Users/andersonouriques/Development/personal/seekinterest-ui/src/pages/reviews-page/reviews-page.html"*/
        }),
        __metadata("design:paramtypes", [Injector, Review])
    ], ReviewsPage);
    return ReviewsPage;
}(BasePage));
export { ReviewsPage };
//# sourceMappingURL=reviews-page.js.map