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
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BasePage } from '../base-page/base-page';
import { User } from '../../providers/user-service';
import swal from 'sweetalert';
var ForgotPasswordPage = (function (_super) {
    __extends(ForgotPasswordPage, _super);
    function ForgotPasswordPage(injector, viewCtrl, userService) {
        var _this = _super.call(this, injector) || this;
        _this.viewCtrl = viewCtrl;
        _this.userService = userService;
        _this.form = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
        });
        return _this;
    }
    ForgotPasswordPage.prototype.enableMenuSwipe = function () {
        return false;
    };
    ForgotPasswordPage.prototype.onDismiss = function () {
        this.viewCtrl.dismiss();
    };
    ForgotPasswordPage.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var message, email, trans, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.form.invalid) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getTrans('INVALID_FORM')];
                    case 1:
                        message = _a.sent();
                        return [2 /*return*/, this.showToast(message)];
                    case 2:
                        _a.trys.push([2, 6, , 7]);
                        return [4 /*yield*/, this.showLoadingView()];
                    case 3:
                        _a.sent();
                        email = this.form.value.email;
                        return [4 /*yield*/, this.userService.recoverPassword(email)];
                    case 4:
                        _a.sent();
                        this.showContentView();
                        return [4 /*yield*/, this.getTrans(['GOOD_JOB', 'FORGOT_PASSWORD_SUCCESS'])];
                    case 5:
                        trans = _a.sent();
                        swal(trans.GOOD_JOB, trans.FORGOT_PASSWORD_SUCCESS, 'success');
                        this.onDismiss();
                        return [3 /*break*/, 7];
                    case 6:
                        err_1 = _a.sent();
                        if (err_1.code === 205) {
                            this.translate.get('EMAIL_NOT_FOUND').subscribe(function (str) { return _this.showToast(str); });
                        }
                        else {
                            this.translate.get('ERROR_NETWORK').subscribe(function (str) { return _this.showToast(str); });
                        }
                        this.showContentView();
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    ForgotPasswordPage = __decorate([
        Component({
            selector: 'page-forgot-password',template:/*ion-inline-start:"/Users/andersonouriques/Development/personal/seekinterest-ui/src/pages/forgot-password/forgot-password.html"*/'<ion-header no-border>\n  <ion-toolbar class="transparent" color="primary">\n    <ion-buttons left>\n      <button ion-button (click)="onDismiss()">\n        <span showWhen="ios,core">{{ \'CLOSE\' | translate }}</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{ \'FORGOT_PASSWORD\' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content text-center>\n\n  <p ion-text color="light">{{ \'FORGOT_PASSWORD_HELP\' | translate }}<p>\n\n  <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate>\n\n    <ion-item class="transparent">\n      <ion-label stacked color="light">{{ \'EMAIL\' | translate }}</ion-label>\n      <ion-input type="email" formControlName="email"></ion-input>\n    </ion-item>\n\n    <div padding>\n      <button type="submit" round ion-button block color="light">\n        {{ \'SUBMIT\' | translate }}\n      </button>\n    </div>\n\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/andersonouriques/Development/personal/seekinterest-ui/src/pages/forgot-password/forgot-password.html"*/,
        }),
        __metadata("design:paramtypes", [Injector,
            ViewController,
            User])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}(BasePage));
export { ForgotPasswordPage };
//# sourceMappingURL=forgot-password.js.map