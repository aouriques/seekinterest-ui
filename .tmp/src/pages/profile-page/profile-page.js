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
import { ModalController } from 'ionic-angular';
import { User } from '../../providers/user-service';
import { BasePage } from '../base-page/base-page';
import { Review } from '../../providers/review-service';
import { Place } from '../../providers/place-service';
import { trigger, style, animate, transition, query, stagger } from '@angular/animations';
var ProfilePage = (function (_super) {
    __extends(ProfilePage, _super);
    function ProfilePage(injector, renderer, placeService, reviewService, modalCtrl) {
        var _this = _super.call(this, injector) || this;
        _this.renderer = renderer;
        _this.placeService = placeService;
        _this.reviewService = reviewService;
        _this.modalCtrl = modalCtrl;
        _this.likedPlaces = [];
        _this.places = [];
        _this.reviews = [];
        _this.segment = 'likes';
        _this.user = User.getCurrentUser();
        return _this;
    }
    ProfilePage.prototype.enableMenuSwipe = function () {
        return true;
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        this.loadLikedPlaces();
        this.loadReviews();
        this.loadMyPlaces();
    };
    ProfilePage.prototype.loadLikedPlaces = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.placeService.loadFavorites()];
                    case 1:
                        _a.likedPlaces = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _b.sent();
                        console.warn(err_1.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.loadMyPlaces = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, err_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.placeService.load({
                                user: this.user,
                                status: ['Pending', 'Approved', 'Rejected']
                            })];
                    case 1:
                        _a.places = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _b.sent();
                        console.warn(err_2.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.loadReviews = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, err_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.reviewService.load({ user: this.user })];
                    case 1:
                        _a.reviews = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_3 = _b.sent();
                        console.warn(err_3.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.onImageLoad = function (imgLoader) {
        this.renderer.setElementClass(imgLoader.element, 'fade-in', true);
    };
    ProfilePage.prototype.goToPlace = function (place) {
        this.navigateTo('PlaceDetailPage', { place: place });
    };
    ProfilePage.prototype.onPresentEditModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create('EditProfilePage', { user: this.user });
        modal.onDidDismiss(function () {
            _this.user = User.getCurrentUser();
        });
        modal.present();
    };
    ProfilePage = __decorate([
        Component({
            selector: 'page-profile-page',template:/*ion-inline-start:"/Users/andersonouriques/Development/personal/seekinterest-ui/src/pages/profile-page/profile-page.html"*/'<ion-header no-border>\n  <ion-navbar class="transparent" color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ \'PROFILE\' | translate }}</ion-title>\n    <ion-buttons end>\n      <button ion-button clear\n        *ngIf="!user.isLoggedInViaFacebook()"\n        (click)="onPresentEditModal()">\n        {{ \'EDIT\' | translate }}\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <section class="heading">\n    <ion-avatar>\n      <img-loader useImg (load)="onImageLoad($event)"\n        fallback="assets/img/avatar.png"\n        [src]="user.photo?.url()">\n      </img-loader>\n    </ion-avatar>\n    <h3 ion-text color="light">{{ user?.name }}</h3>\n    <button ion-button small round outline color="light"\n      *ngIf="!user.isLoggedInViaFacebook()"\n      (click)="navigateTo(\'ChangePasswordPage\')">\n      {{ \'CHANGE_PASSWORD\' | translate }}\n    </button>\n  </section>\n  <ion-segment mode="md" class="" [(ngModel)]="segment" color="light">\n    <ion-segment-button value="likes">\n      <span class="bold">{{ \'LIKES\' | translate }}</span>\n    </ion-segment-button>\n    <ion-segment-button value="places">\n      <span class="bold">{{ \'MY_PLACES\' | translate }}</span>\n    </ion-segment-button>\n    <ion-segment-button value="comments">\n      <span class="bold">{{ \'COMMENTS\' | translate }}</span>\n    </ion-segment-button>\n  </ion-segment>\n  <ion-row *ngIf="segment === \'likes\'" [@staggerIn]="likedPlaces.length">\n    <ion-col col-6 float-left *ngFor="let place of likedPlaces">\n      <ion-card class="shadow" no-margin margin-bottom color="light" (click)="goToPlace(place)">\n        <div class="card-img">\n          <img-loader [src]="place.image?.url()" (load)="onImageLoad($event)"></img-loader>\n        </div>\n        <ion-card-content no-padding padding text-nowrap>\n          <p class="text-medium ellipsis bold">{{ place.title }}</p>\n          <p class="text-medium ellipsis bold" ion-text color="accent">\n            {{ place.category.title }}\n          </p>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  <ion-list no-lines padding *ngIf="segment === \'comments\'" [@staggerIn]="reviews.length">\n    <div margin-bottom padding class="radius light-bg border" *ngFor="let review of reviews">\n      <ion-item no-padding color="light" (click)="goToPlace(review.place)">\n        <ion-avatar item-start>\n            <img-loader [src]="review.place?.imageThumb?.url()"\n            fallback="./assets/img/placeholder1.png"\n            (load)="onImageLoad($event)" useImg>\n          </img-loader>\n        </ion-avatar>\n        <h2 class="bold no-margin">{{ review.place.title }}</h2>\n        <star-rating\n          [starType]="\'svg\'"\n          [size]="\'medium\'"\n          [readOnly]="true"\n          [showHalfStars]="false"\n          [rating]="review.rating">\n        </star-rating>\n        <p class="text-small no-margin" ion-text color="accent">\n          {{ review.createdAt | date:\'mediumDate\' }}\n        </p>\n      </ion-item>\n      <ion-row>\n        <ion-col no-padding col-12>\n          <p class="text-medium bold no-margin" ion-text color="dark">{{ review.comment }}</p>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-list>\n  <ion-list no-lines padding *ngIf="segment === \'places\'" [@staggerIn]="places.length">\n    <ion-item color="light" margin-bottom class="light-bg border"\n      *ngFor="let place of places" (click)="goToPlace(place)">\n      <ion-thumbnail item-start>\n        <img-loader [src]="place.imageThumb?.url()"\n        fallback="./assets/img/placeholder1.png" (load)="onImageLoad($event)" useImg>\n      </img-loader>\n      </ion-thumbnail>\n      <h2 class="bold no-margin">{{ place.title }}</h2>\n      <ion-note class="text-small" item-end>\n        <span *ngIf="place.status === \'Pending\'">{{ \'PENDING\' | translate }}</span>\n        <span *ngIf="place.status === \'Rejected\'">{{ \'REJECTED\' | translate }}</span>\n        <span *ngIf="place.status === \'Approved\'">{{ \'APPROVED\' | translate }}</span>\n      </ion-note>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/andersonouriques/Development/personal/seekinterest-ui/src/pages/profile-page/profile-page.html"*/,
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
            Place,
            Review,
            ModalController])
    ], ProfilePage);
    return ProfilePage;
}(BasePage));
export { ProfilePage };
//# sourceMappingURL=profile-page.js.map