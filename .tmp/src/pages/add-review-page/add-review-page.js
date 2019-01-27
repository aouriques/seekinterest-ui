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
import { Component, Injector } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Review } from '../../providers/review-service';
import { BasePage } from '../base-page/base-page';
import swal from 'sweetalert';
var AddReviewPage = (function (_super) {
    __extends(AddReviewPage, _super);
    function AddReviewPage(injector, reviewService, viewCtrl) {
        var _this = _super.call(this, injector) || this;
        _this.reviewService = reviewService;
        _this.viewCtrl = viewCtrl;
        _this.review = {
            rating: 3,
            comment: ''
        };
        _this.review.place = _this.navParams.get('place');
        return _this;
    }
    AddReviewPage.prototype.enableMenuSwipe = function () {
        return false;
    };
    AddReviewPage.prototype.ionViewDidLoad = function () {
    };
    AddReviewPage.prototype.onRatingChange = function (event) {
        this.review.rating = event.rating;
    };
    AddReviewPage.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var message, trans, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.review.rating) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getTrans('PLEASE_SELECT_A_RATING')];
                    case 1:
                        message = _a.sent();
                        this.showToast(message);
                        return [2 /*return*/];
                    case 2:
                        _a.trys.push([2, 6, , 7]);
                        return [4 /*yield*/, this.showLoadingView()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.reviewService.create(this.review)];
                    case 4:
                        _a.sent();
                        this.showContentView();
                        this.onDismiss();
                        return [4 /*yield*/, this.getTrans(['GOOD_JOB', 'REVIEW_ADDED'])];
                    case 5:
                        trans = _a.sent();
                        swal(trans.GOOD_JOB, trans.REVIEW_ADDED, 'success');
                        return [3 /*break*/, 7];
                    case 6:
                        err_1 = _a.sent();
                        this.showContentView();
                        if (err_1.code === 5000) {
                            this.translate.get('REVIEW_ALREADY_EXISTS').subscribe(function (str) { return _this.showToast(str); });
                        }
                        else {
                            this.translate.get('ERROR_NETWORK').subscribe(function (str) { return _this.showToast(str); });
                        }
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    AddReviewPage.prototype.onDismiss = function () {
        this.viewCtrl.dismiss();
    };
    AddReviewPage = __decorate([
        Component({
            selector: 'page-add-review-page',template:/*ion-inline-start:"/Users/andersonouriques/Development/personal/seekinterest-ui/src/pages/add-review-page/add-review-page.html"*/'<ion-header no-border>\n  <ion-toolbar class="transparent" color="primary">\n    <ion-buttons start>\n      <button ion-button clear (click)="onDismiss()">\n        <span showWhen="ios,core">{{ \'CLOSE\' | translate }}</span>\n        <ion-icon name="md-close" showWhen="android"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      {{ \'ADD_REVIEW\' | translate }}\n    </ion-title>\n </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list text-center>\n    <star-rating\n      space="around"\n      (ratingChange)="onRatingChange($event)"\n      [starType]="\'svg\'"\n      [size]="\'large\'"\n      [readOnly]="false"\n      [showHalfStars]="false"\n      [rating]="review.rating">\n    </star-rating>\n    <ion-item margin-bottom class="radius" color="light">\n      <ion-textarea [(ngModel)]="review.comment" rows="8" [placeholder]="\'COMMENT\' | translate"></ion-textarea>\n    </ion-item>\n    <div padding>\n      <button ion-button block round color="light" (click)="onSubmit()">\n        {{ \'SUBMIT\' | translate }}\n      </button>\n    </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/andersonouriques/Development/personal/seekinterest-ui/src/pages/add-review-page/add-review-page.html"*/
        }),
        __metadata("design:paramtypes", [Injector,
            Review,
            ViewController])
    ], AddReviewPage);
    return AddReviewPage;
}(BasePage));
export { AddReviewPage };
//# sourceMappingURL=add-review-page.js.map