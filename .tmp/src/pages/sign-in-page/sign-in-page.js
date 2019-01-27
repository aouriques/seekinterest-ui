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
import { ViewController, Events } from 'ionic-angular';
import { BasePage } from '../base-page/base-page';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../providers/user-service';
import { Facebook } from '@ionic-native/facebook';
var SignInPage = (function (_super) {
    __extends(SignInPage, _super);
    function SignInPage(injector, events, userService, fb, viewCtrl) {
        var _this = _super.call(this, injector) || this;
        _this.events = events;
        _this.userService = userService;
        _this.fb = fb;
        _this.viewCtrl = viewCtrl;
        _this.form = new FormGroup({
            username: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
        _this.events.subscribe('user:login', function () {
            _this.onCancel();
        });
        return _this;
    }
    SignInPage.prototype.enableMenuSwipe = function () {
        return false;
    };
    SignInPage.prototype.ionViewDidLoad = function () {
    };
    SignInPage.prototype.onCancel = function () {
        this.viewCtrl.dismiss();
    };
    SignInPage.prototype.onFacebookButtonTouched = function () {
        var _this = this;
        this.fb.login(['public_profile', 'user_friends', 'email'])
            .then(function (res) { return _this.loggedIntoFacebook(res); })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
    };
    SignInPage.prototype.loggedIntoFacebook = function (res) {
        var _this = this;
        console.log('Logged into Facebook', res);
        var expirationDate = new Date();
        expirationDate.setSeconds(expirationDate.getSeconds() + res.authResponse.expiresIn);
        var expirationDateFormatted = expirationDate.toISOString();
        var facebookAuthData = {
            id: res.authResponse.userID,
            access_token: res.authResponse.accessToken,
            expiration_date: expirationDateFormatted
        };
        this.showLoadingView().then(function () {
            _this.userService.loginWithFacebook({ authData: facebookAuthData })
                .then(function (user) { return _this.loggedViaFacebook(user); })
                .catch(function (e) { return _this.loginViaFacebookFailure(e); });
        });
    };
    SignInPage.prototype.loginViaFacebookFailure = function (error) {
        var _this = this;
        console.log('Error logging into Facebook', error);
        this.translate.get('ERROR_UNKNOWN').subscribe(function (str) { return _this.showToast(str); });
        this.showContentView();
    };
    SignInPage.prototype.loggedViaFacebook = function (user) {
        var _this = this;
        this.showContentView();
        var transParams = { username: user.name };
        this.translate.get('LOGGED_IN_AS', transParams)
            .subscribe(function (str) { return _this.showToast(str); });
        this.events.publish('user:login', user);
    };
    SignInPage.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var message, user, transParams, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        if (!this.form.invalid) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getTrans('INVALID_FORM')];
                    case 1:
                        message = _a.sent();
                        return [2 /*return*/, this.showToast(message)];
                    case 2: return [4 /*yield*/, this.showLoadingView()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.userService.signIn(this.form.value)];
                    case 4:
                        user = _a.sent();
                        this.showContentView();
                        transParams = { username: user.username };
                        this.translate.get('LOGGED_IN_AS', transParams)
                            .subscribe(function (str) { return _this.showToast(str); });
                        this.events.publish('user:login', user);
                        return [3 /*break*/, 6];
                    case 5:
                        err_1 = _a.sent();
                        if (err_1.code === 101) {
                            this.translate.get('INVALID_CREDENTIALS')
                                .subscribe(function (str) { return _this.showToast(str); });
                        }
                        else {
                            this.translate.get('ERROR_NETWORK')
                                .subscribe(function (str) { return _this.showToast(str); });
                        }
                        this.showContentView();
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    SignInPage.prototype.goToSignUp = function () {
        this.navigateTo('SignUpPage');
    };
    SignInPage = __decorate([
        Component({
            selector: 'page-sign-in-page',template:/*ion-inline-start:"/Users/andersonouriques/Development/personal/seekinterest-ui/src/pages/sign-in-page/sign-in-page.html"*/'<ion-header no-border>\n  <ion-navbar class="transparent" color="primary">\n    <ion-title>{{ \'LOGIN\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding text-center>\n  \n  <img margin class="logo" src="./assets/img/logo-1.png" width="120">\n\n  <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate>\n \n    <ion-item class="transparent">\n      <ion-label stacked color="light">{{ "USERNAME" | translate }}</ion-label>\n      <ion-input type="text" formControlName="username"></ion-input>\n    </ion-item>\n\n    <ion-item class="transparent">\n      <ion-label stacked color="light">{{ "PASSWORD" | translate }}</ion-label>\n      <ion-input type="password" formControlName="password"></ion-input>\n    </ion-item>\n\n    <div padding>\n      <button type="submit" color="light" ion-button block outline round>\n        {{ "LOGIN" | translate }}\n      </button>\n    </div>\n\n    <div padding>\n      <button type="button" color="light" ion-button icon-start block round\n        (click)="onFacebookButtonTouched()">\n        <ion-icon name="logo-facebook" color="fb"></ion-icon>\n        {{ "FACEBOOK" | translate }}\n      </button>\n    </div>\n\n    <div padding>\n      <button type="button" class="bold" ion-button block clear color="light" (click)="goToSignUp()">\n        {{ "NO_ACCOUNT_YET_CREATE_ONE" | translate }}\n      </button>\n\n      <button type="button" class="bold" ion-button block clear color="light"\n        (click)="navigateTo(\'ForgotPasswordPage\')">\n        {{ "FORGOT_PASSWORD" | translate }}\n      </button>\n    </div>\n\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/andersonouriques/Development/personal/seekinterest-ui/src/pages/sign-in-page/sign-in-page.html"*/
        }),
        __metadata("design:paramtypes", [Injector,
            Events,
            User,
            Facebook,
            ViewController])
    ], SignInPage);
    return SignInPage;
}(BasePage));
export { SignInPage };
//# sourceMappingURL=sign-in-page.js.map