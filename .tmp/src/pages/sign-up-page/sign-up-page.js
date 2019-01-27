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
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BasePage } from '../base-page/base-page';
import { User } from '../../providers/user-service';
var SignUpPage = (function (_super) {
    __extends(SignUpPage, _super);
    function SignUpPage(injector, events, userService, viewCtrl) {
        var _this = _super.call(this, injector) || this;
        _this.events = events;
        _this.userService = userService;
        _this.viewCtrl = viewCtrl;
        _this.form = new FormGroup({
            name: new FormControl('', Validators.required),
            username: new FormControl('', [Validators.required, Validators.minLength(3)]),
            email: new FormControl('', Validators.pattern('[^ @]*@[^ @]*')),
            password: new FormControl('', [Validators.required, Validators.minLength(6)]),
            confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
        });
        return _this;
    }
    SignUpPage.prototype.enableMenuSwipe = function () {
        return false;
    };
    SignUpPage.prototype.ionViewDidLoad = function () {
    };
    SignUpPage.prototype.onCancel = function () {
        this.viewCtrl.dismiss();
    };
    SignUpPage.prototype.isFieldValid = function (formControl) {
        return formControl.valid;
    };
    SignUpPage.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var message, formData, message, user, transParams, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.form.invalid) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getTrans('INVALID_FORM')];
                    case 1:
                        message = _a.sent();
                        return [2 /*return*/, this.showToast(message)];
                    case 2:
                        formData = Object.assign({}, this.form.value);
                        if (!(formData.password !== formData.confirmPassword)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.getTrans('PASSWORD_DOES_NOT_MATCH')];
                    case 3:
                        message = _a.sent();
                        return [2 /*return*/, this.showToast(message)];
                    case 4:
                        if (formData.email === '') {
                            delete formData.email;
                        }
                        delete formData.confirmPassword;
                        _a.label = 5;
                    case 5:
                        _a.trys.push([5, 8, , 9]);
                        return [4 /*yield*/, this.showLoadingView()];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.userService.create(formData)];
                    case 7:
                        user = _a.sent();
                        this.showContentView();
                        transParams = { username: user.username };
                        this.translate.get('LOGGED_IN_AS', transParams).subscribe(function (str) { return _this.showToast(str); });
                        this.events.publish('user:login', user);
                        this.onCancel();
                        return [3 /*break*/, 9];
                    case 8:
                        err_1 = _a.sent();
                        this.showContentView();
                        if (err_1.code === 202) {
                            this.translate.get('USERNAME_TAKEN').subscribe(function (str) { return _this.showToast(str); });
                        }
                        else if (err_1.code === 203) {
                            this.translate.get('EMAIL_TAKEN').subscribe(function (str) { return _this.showToast(str); });
                        }
                        else if (err_1.code === 125) {
                            this.translate.get('EMAIL_INVALID').subscribe(function (str) { return _this.showToast(str); });
                        }
                        else {
                            this.translate.get('ERROR_NETWORK').subscribe(function (str) { return _this.showToast(str); });
                        }
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    SignUpPage = __decorate([
        Component({
            selector: 'page-sign-up-page',template:/*ion-inline-start:"/Users/andersonouriques/Development/personal/seekinterest-ui/src/pages/sign-up-page/sign-up-page.html"*/'<ion-header no-border>\n  <ion-toolbar class="transparent" color="primary">\n    <ion-buttons left>\n      <button ion-button (click)="onCancel()">\n        <span showWhen="ios,core">{{ "CLOSE" | translate }}</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n </ion-toolbar>\n</ion-header>\n\n<ion-content padding text-center>\n  \n  <img margin class="logo" src="./assets/img/logo-1.png" width="120">\n\n  <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate>\n \n    <ion-item class="transparent">\n      <ion-icon [name]="isFieldValid(form.controls.name) ? \'checkmark-circle\' : \'close-circle\'"\n        color="light" item-start>\n      </ion-icon>\n      <ion-label stacked color="light">{{ "NAME" | translate }}</ion-label>\n      <ion-input type="text" formControlName="name"></ion-input>\n    </ion-item>\n\n    <ion-item class="transparent">\n      <ion-icon [name]="isFieldValid(form.controls.username) ? \'checkmark-circle\' : \'close-circle\'"\n        color="light" item-start>\n      </ion-icon>\n      <ion-label stacked color="light">{{ "USERNAME" | translate }}</ion-label>\n      <ion-input type="text" formControlName="username"></ion-input>\n    </ion-item>\n\n    <ion-item class="transparent">\n      <ion-icon [name]="isFieldValid(form.controls.email) ? \'checkmark-circle\' : \'close-circle\'"\n        color="light" item-start>\n      </ion-icon>\n      <ion-label stacked color="light">{{ "EMAIL" | translate }}</ion-label>\n      <ion-input type="email" formControlName="email"\n        [placeholder]="\'EMAIL_VALIDATION_HELP\' | translate">\n      </ion-input>\n    </ion-item>\n\n    <ion-item class="transparent">\n      <ion-icon [name]="isFieldValid(form.controls.password) ? \'checkmark-circle\' : \'close-circle\'"\n        color="light" item-start>\n      </ion-icon>\n      <ion-label stacked color="light">{{ "PASSWORD" | translate }}</ion-label>\n      <ion-input type="password" formControlName="password"\n        [placeholder]="\'PASSWORD_VALIDATION_HELP\' | translate">\n      </ion-input>\n    </ion-item>\n\n    <ion-item class="transparent">\n      <ion-icon [name]="isFieldValid(form.controls.confirmPassword) ? \'checkmark-circle\' : \'close-circle\'"\n        color="light" item-start>\n      </ion-icon>\n      <ion-label stacked color="light">{{ "CONFIRM_PASSWORD" | translate }}</ion-label>\n      <ion-input type="password" formControlName="confirmPassword"></ion-input>\n    </ion-item>\n  \n    <div padding>\n      <button type="submit" color="light" ion-button block round>\n        {{ "SIGNUP" | translate }}\n      </button>\n    </div>\n\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/andersonouriques/Development/personal/seekinterest-ui/src/pages/sign-up-page/sign-up-page.html"*/
        }),
        __metadata("design:paramtypes", [Injector,
            Events,
            User,
            ViewController])
    ], SignUpPage);
    return SignUpPage;
}(BasePage));
export { SignUpPage };
//# sourceMappingURL=sign-up-page.js.map