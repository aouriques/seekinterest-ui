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
import { Platform } from 'ionic-angular';
import { Component, Injector, Renderer } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { Place } from '../../providers/place-service';
import { Preference } from '../../providers/preference';
import { CallNumber } from '@ionic-native/call-number';
import { Geolocation } from '@ionic-native/geolocation';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { BrowserTab } from '@ionic-native/browser-tab';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { SocialSharing } from '@ionic-native/social-sharing';
import { BasePage } from '../base-page/base-page';
import { User } from '../../providers/user-service';
import { Review } from '../../providers/review-service';
var PlaceDetailPage = (function (_super) {
    __extends(PlaceDetailPage, _super);
    function PlaceDetailPage(injector, renderer, platform, placeService, modalCtrl, preference, callNumber, geolocation, inAppBrowser, browserTab, reviewService, launchNavigator, socialSharing) {
        var _this = _super.call(this, injector) || this;
        _this.renderer = renderer;
        _this.platform = platform;
        _this.placeService = placeService;
        _this.modalCtrl = modalCtrl;
        _this.preference = preference;
        _this.callNumber = callNumber;
        _this.geolocation = geolocation;
        _this.inAppBrowser = inAppBrowser;
        _this.browserTab = browserTab;
        _this.reviewService = reviewService;
        _this.launchNavigator = launchNavigator;
        _this.socialSharing = socialSharing;
        _this.images = [];
        _this.rating = 0;
        _this.isLiked = false;
        _this.isStarred = false;
        _this.reviews = [];
        _this.place = _this.navParams.get('place');
        _this.unit = _this.preference.unit;
        _this.images = [];
        if (_this.place) {
            _this.rating = _this.place.rating;
            _this.loadLocation();
            if (User.getCurrentUser()) {
                _this.checkIfIsLiked();
                _this.checkIfIsStarred();
            }
            _this.loadReviews();
            if (_this.place.image) {
                _this.images.push(_this.place.image);
            }
            if (_this.place.imageTwo) {
                _this.images.push(_this.place.imageTwo);
            }
            if (_this.place.imageThree) {
                _this.images.push(_this.place.imageThree);
            }
            if (_this.place.imageFour) {
                _this.images.push(_this.place.imageFour);
            }
        }
        return _this;
    }
    PlaceDetailPage.prototype.enableMenuSwipe = function () {
        return false;
    };
    PlaceDetailPage.prototype.ionViewDidLoad = function () {
    };
    PlaceDetailPage.prototype.onImageLoad = function (imgLoader) {
        this.renderer.setElementClass(imgLoader.element, 'fade-in', true);
    };
    PlaceDetailPage.prototype.checkIfIsLiked = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isLiked, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.placeService.isLiked(this.place)];
                    case 1:
                        isLiked = _a.sent();
                        this.isLiked = isLiked;
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.warn(err_1.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlaceDetailPage.prototype.checkIfIsStarred = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isStarred, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.placeService.isStarred(this.place)];
                    case 1:
                        isStarred = _a.sent();
                        this.isStarred = isStarred;
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        console.warn(err_2.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlaceDetailPage.prototype.loadLocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var options, pos, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        options = {
                            enableHighAccuracy: true,
                            timeout: 20000,
                            maximumAge: 60000
                        };
                        return [4 /*yield*/, this.geolocation.getCurrentPosition(options)];
                    case 1:
                        pos = _a.sent();
                        this.location = pos.coords;
                        return [3 /*break*/, 3];
                    case 2:
                        err_3 = _a.sent();
                        console.warn(err_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlaceDetailPage.prototype.loadReviews = function () {
        return __awaiter(this, void 0, void 0, function () {
            var reviews, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.reviewService.load({ place: this.place, limit: 5 })];
                    case 1:
                        reviews = _a.sent();
                        this.reviews = reviews;
                        return [3 /*break*/, 3];
                    case 2:
                        err_4 = _a.sent();
                        console.warn(err_4.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlaceDetailPage.prototype.openSignUpModal = function () {
        this.navigateTo('SignInPage');
    };
    PlaceDetailPage.prototype.openAddReviewModal = function () {
        var modal = this.modalCtrl.create('AddReviewPage', { place: this.place });
        modal.present();
    };
    PlaceDetailPage.prototype.onLike = function () {
        if (User.getCurrentUser()) {
            this.isLiked = true;
            this.placeService.like(this.place);
            this.showToast('Liked');
        }
        else {
            this.openSignUpModal();
        }
    };
    PlaceDetailPage.prototype.onRate = function () {
        if (User.getCurrentUser()) {
            this.openAddReviewModal();
        }
        else {
            this.openSignUpModal();
        }
    };
    PlaceDetailPage.prototype.onShare = function () {
        return __awaiter(this, void 0, void 0, function () {
            var err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.socialSharing.share(this.place.title, null, null, this.place.website)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_5 = _a.sent();
                        console.warn(err_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlaceDetailPage.prototype.onCall = function () {
        return __awaiter(this, void 0, void 0, function () {
            var err_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.place.phone)
                            return [2 /*return*/];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.callNumber.callNumber(this.place.phone, true)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_6 = _a.sent();
                        console.warn(err_6);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PlaceDetailPage.prototype.openUrl = function () {
        var _this = this;
        if (!this.place.website)
            return;
        if (this.platform.is('cordova')) {
            this.browserTab.isAvailable().then(function (isAvailable) {
                if (isAvailable) {
                    _this.browserTab.openUrl(_this.place.website);
                }
                else {
                    _this.inAppBrowser.create(_this.place.website, '_system');
                }
            }).catch(function (err) { return console.warn(err); });
        }
        else {
            this.inAppBrowser.create(this.place.website, '_system');
        }
    };
    PlaceDetailPage.prototype.goToMap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var googleMaps, appleMaps, isGoogleMapsAvailable, isAppleMapsAvailable, app, options, destination, err_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        googleMaps = this.launchNavigator.APP.GOOGLE_MAPS;
                        appleMaps = this.launchNavigator.APP.APPLE_MAPS;
                        return [4 /*yield*/, this.launchNavigator.isAppAvailable(googleMaps)];
                    case 1:
                        isGoogleMapsAvailable = _a.sent();
                        return [4 /*yield*/, this.launchNavigator.isAppAvailable(appleMaps)];
                    case 2:
                        isAppleMapsAvailable = _a.sent();
                        app = null;
                        if (isGoogleMapsAvailable) {
                            app = this.launchNavigator.APP.GOOGLE_MAPS;
                        }
                        else if (isAppleMapsAvailable) {
                            app = this.launchNavigator.APP.APPLE_MAPS;
                        }
                        else {
                            app = this.launchNavigator.APP.USER_SELECT;
                        }
                        options = {
                            app: app
                        };
                        destination = [
                            this.place.location.latitude,
                            this.place.location.longitude
                        ];
                        return [4 /*yield*/, this.launchNavigator.navigate(destination, options)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        err_7 = _a.sent();
                        console.warn(err_7);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    PlaceDetailPage.prototype.goToReviews = function () {
        this.navigateTo('ReviewsPage', this.place);
    };
    PlaceDetailPage = __decorate([
        Component({
            selector: 'page-place-detail-page',template:/*ion-inline-start:"/Users/andersonouriques/Development/personal/seekinterest-ui/src/pages/place-detail-page/place-detail-page.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ place?.title }}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="onShare()">\n        <ion-icon name="share"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content #container>\n\n  <ion-slides pager>\n    <ion-slide *ngFor="let image of images">\n      <div class="img-container">\n        <img-loader [src]="image?.url()" (load)="onImageLoad($event)"></img-loader>\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n  <div class="card-container">\n    <ion-fab right top>\n      <button ion-fab (click)="onLike()">\n        <ion-icon [name]="isLiked ? \'heart\' : \'heart-outline\'"></ion-icon>\n      </button>\n    </ion-fab>\n    <ion-card class="shadow radius-top card-top" color="light">\n      <ion-card-content>\n\n        <p [class.hidden]="!location" margin-top float-end>\n          <ion-icon color="dark" name="pin"></ion-icon>\n          <span class="text-small bold" ion-text color="dark">\n            {{ place?.distance(location, unit) }}\n          </span>\n        </p>\n        <h2 class="bold" ion-text color="primary">{{ place?.title }}</h2>\n        <star-rating *ngIf="place.rating" [starType]="\'svg\'" [size]="\'medium\'" [readOnly]="true" [showHalfStars]="false" [rating]="place.rating">\n        </star-rating>\n        <p class="bold" margin-top ion-text color="dark">{{ place?.description }}</p>\n\n        <ion-row>\n          <ion-col col-4 text-center tapabble [class.disabled]="!place?.phone" (click)="onCall()">\n            <div>\n              <ion-icon name="call" color="primary"></ion-icon>\n            </div>\n            <p class="bold" ion-text color="primary">{{ \'CALL\' | translate }}</p>\n          </ion-col>\n          <ion-col col-4 text-center tapabble (click)="goToMap()">\n            <div>\n              <ion-icon name="map" color="primary"></ion-icon>\n            </div>\n            <p class="bold" ion-text color="primary">{{ \'DIRECTIONS\' | translate }}</p>\n          </ion-col>\n          <ion-col col-4 text-center tapabble [class.disabled]="!place?.website" (click)="openUrl()">\n            <div>\n              <ion-icon name="globe" color="primary"></ion-icon>\n            </div>\n            <p class="bold" ion-text color="primary">{{ \'WEBSITE\' | translate }}</p>\n          </ion-col>\n        </ion-row>\n\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <section padding margin-top>\n\n    <ion-row align-items-center>\n      <ion-col col-8>\n        <h5 no-margin>\n          <ion-icon class="text-medium" name="chatbubbles" color="accent"></ion-icon>\n          {{ \'COMMENTS_AND_REACTIONS\' | translate }}\n        </h5>\n      </ion-col>\n      <ion-col col-4 text-end>\n        <button class="bold" ion-button small block round color="primary" (click)="onRate()">\n          {{ \'POST_REVIEW\' | translate }}\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <div *ngIf="!reviews.length" text-center>\n      <p class="text-medium" color="accent">\n        {{ \'EMPTY_REVIEWS\' | translate }}\n      </p>\n    </div>\n\n    <ion-list no-lines>\n      <div margin-bottom padding class="radius light-bg border" *ngFor="let review of reviews">\n        <ion-item no-padding color="light">\n          <ion-avatar item-start>\n            <img defaultImage="./assets/img/avatar.png"\n              [lazyLoad]="review.user?.photo?.url()"\n              [scrollObservable]="container.ionScroll" />\n          </ion-avatar>\n          <h2 class="bold no-margin">{{ review.user?.name }}</h2>\n          <p class="text-small no-margin" ion-text color="accent">\n            {{ review.createdAt | date:\'mediumDate\' }}\n          </p>\n          <star-rating\n            [starType]="\'svg\'"\n            [size]="\'small\'"\n            [readOnly]="true"\n            [showHalfStars]="false"\n            [rating]="review.rating">\n          </star-rating>\n        </ion-item>\n        <ion-row>\n          <ion-col no-padding col-12>\n            <p class="text-medium bold no-margin" ion-text color="dark">{{ review.comment }}</p>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-list>\n    <div text-center *ngIf="reviews.length">\n      <button class="bold" ion-button icon-right clear color="dark" (click)="goToReviews()">\n        {{ \'VIEW_ALL_REVIEWS\' | translate }}\n        <ion-icon name="arrow-round-forward"></ion-icon>\n      </button>\n    </div>\n\n  </section>\n\n</ion-content>\n'/*ion-inline-end:"/Users/andersonouriques/Development/personal/seekinterest-ui/src/pages/place-detail-page/place-detail-page.html"*/
        }),
        __metadata("design:paramtypes", [Injector,
            Renderer,
            Platform,
            Place,
            ModalController,
            Preference,
            CallNumber,
            Geolocation,
            InAppBrowser,
            BrowserTab,
            Review,
            LaunchNavigator,
            SocialSharing])
    ], PlaceDetailPage);
    return PlaceDetailPage;
}(BasePage));
export { PlaceDetailPage };
//# sourceMappingURL=place-detail-page.js.map