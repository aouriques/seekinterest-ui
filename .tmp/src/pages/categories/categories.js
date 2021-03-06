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
import { Category } from '../../providers/categories';
import { BasePage } from '../base-page/base-page';
import { User } from '../../providers/user-service';
import { trigger, style, animate, transition, query, stagger } from '@angular/animations';
var CategoriesPage = (function (_super) {
    __extends(CategoriesPage, _super);
    function CategoriesPage(injector, events, renderer, categoryService) {
        var _this = _super.call(this, injector) || this;
        _this.events = events;
        _this.renderer = renderer;
        _this.categoryService = categoryService;
        _this.categories = [];
        return _this;
    }
    CategoriesPage.prototype.enableMenuSwipe = function () {
        return true;
    };
    CategoriesPage.prototype.ionViewDidLoad = function () {
        this.showLoadingView();
        this.loadData();
    };
    CategoriesPage.prototype.goToPlaces = function (category) {
        this.navigateTo('PlacesPage', { category: category });
    };
    CategoriesPage.prototype.onImageLoad = function (imgLoader) {
        this.renderer.setElementClass(imgLoader.element, 'fade-in', true);
    };
    CategoriesPage.prototype.loadData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.categoryService.load()];
                    case 1:
                        _a.categories = _b.sent();
                        if (this.categories.length) {
                            this.showContentView();
                        }
                        else {
                            this.showEmptyView();
                        }
                        this.onRefreshComplete();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        if (error_1.code === 209) {
                            User.logOut().then(function () { return _this.events.publish('user:logout'); }),
                                function (err) { return console.log(err); };
                        }
                        this.showErrorView();
                        this.onRefreshComplete();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CategoriesPage.prototype.onReload = function (refresher) {
        this.refresher = refresher;
        this.loadData();
    };
    CategoriesPage = __decorate([
        Component({
            selector: 'page-categories',template:/*ion-inline-start:"/Users/andersonouriques/Development/personal/seekinterest-ui/src/pages/categories/categories.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ \'CATEGORIES\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content #container>\n\n  <empty-view *ngIf="isErrorViewVisible" icon="alert"\n    [text]="\'ERROR_NETWORK\' | translate">\n  </empty-view>\n\n  <empty-view *ngIf="isEmptyViewVisible" icon="bookmark"\n    [text]="\'EMPTY_CATEGORIES\' | translate">\n  </empty-view>\n\n  <ion-refresher (ionRefresh)="onReload($event)">\n    <ion-refresher-content\n      pullingText="{{ \'PULL_TO_REFRESH\' | translate }}"\n      refreshingText="{{ \'REFRESHING\' | translate }}">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <div [@staggerIn]="categories.length">\n    <div class="card-img" *ngFor="let category of categories" (click)="goToPlaces(category)">\n      <img-loader [src]="category.image.url()" (load)="onImageLoad($event)"></img-loader>\n      <div>\n        <h5 class="bold" ion-text color="light">{{ category.title }}</h5>\n        <span class="gradient-bg bold" ion-text color="light">\n          {{ category.placeCount }} {{ \'PLACES\' | translate }}\n        </span>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/andersonouriques/Development/personal/seekinterest-ui/src/pages/categories/categories.html"*/,
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
            Events,
            Renderer,
            Category])
    ], CategoriesPage);
    return CategoriesPage;
}(BasePage));
export { CategoriesPage };
//# sourceMappingURL=categories.js.map