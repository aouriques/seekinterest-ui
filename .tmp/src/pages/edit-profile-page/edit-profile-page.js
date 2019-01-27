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
import { BasePage } from '../base-page/base-page';
import { User } from '../../providers/user-service';
import { Camera } from '@ionic-native/camera';
import { ParseFile } from '../../providers/parse-file-service';
import { ViewController, ActionSheetController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
var EditProfilePage = (function (_super) {
    __extends(EditProfilePage, _super);
    function EditProfilePage(injector, actionSheetCtrl, camera, viewCtrl) {
        var _this = _super.call(this, injector) || this;
        _this.actionSheetCtrl = actionSheetCtrl;
        _this.camera = camera;
        _this.viewCtrl = viewCtrl;
        var user = User.getCurrentUser();
        _this.form = new FormGroup({
            name: new FormControl(user.name, Validators.required),
            username: new FormControl(user.username, Validators.required),
            email: new FormControl(user.email)
        });
        return _this;
    }
    EditProfilePage.prototype.enableMenuSwipe = function () {
        return true;
    };
    EditProfilePage.prototype.ionViewDidLoad = function () { };
    EditProfilePage.prototype.onDismiss = function () {
        this.viewCtrl.dismiss();
    };
    EditProfilePage.prototype.chooseImage = function (sourceType) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var options, imageData, _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 4, , 5]);
                        options = {
                            sourceType: sourceType,
                            destinationType: this.camera.DestinationType.DATA_URL,
                            targetWidth: 1000,
                            targetHeight: 1000,
                            quality: 80,
                        };
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 1:
                        imageData = _b.sent();
                        return [4 /*yield*/, this.showLoadingView()];
                    case 2:
                        _b.sent();
                        _a = this;
                        return [4 /*yield*/, ParseFile.upload(imageData)];
                    case 3:
                        _a.photo = _b.sent();
                        this.showContentView();
                        this.translate.get('FILE_UPLOADED').subscribe(function (str) { return _this.showToast(str); });
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _b.sent();
                        this.showContentView();
                        this.translate.get('ERROR_NETWORK').subscribe(function (str) { return _this.showToast(str); });
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    EditProfilePage.prototype.onUpload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var trans, actionSheet, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.getTrans([
                                'PHOTO_LIBRARY',
                                'CAMERA',
                                'CANCEL',
                                'CHOOSE_AN_OPTION'
                            ])];
                    case 1:
                        trans = _a.sent();
                        actionSheet = this.actionSheetCtrl.create({
                            title: trans.CHOOSE_AN_OPTION,
                            buttons: [{
                                    text: trans.PHOTO_LIBRARY,
                                    handler: function () {
                                        _this.chooseImage(_this.camera.PictureSourceType.PHOTOLIBRARY);
                                    }
                                }, {
                                    text: trans.CAMERA,
                                    handler: function () {
                                        _this.chooseImage(_this.camera.PictureSourceType.CAMERA);
                                    }
                                }, {
                                    text: trans.CANCEL,
                                    role: 'cancel'
                                }]
                        });
                        actionSheet.present();
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.warn(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EditProfilePage.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var formData, user, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.showLoadingView();
                        formData = this.form.value;
                        formData.photo = this.photo;
                        user = User.getCurrentUser();
                        return [4 /*yield*/, user.save(formData)];
                    case 1:
                        _a.sent();
                        this.showContentView();
                        this.translate.get('SAVED').subscribe(function (str) { return _this.showToast(str); });
                        this.onDismiss();
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        if (error_3.code === 202) {
                            this.translate.get('USERNAME_TAKEN').subscribe(function (str) { return _this.showToast(str); });
                        }
                        else if (error_3.code === 203) {
                            this.translate.get('EMAIL_TAKEN').subscribe(function (str) { return _this.showToast(str); });
                        }
                        else if (error_3.code === 125) {
                            this.translate.get('EMAIL_INVALID').subscribe(function (str) { return _this.showToast(str); });
                        }
                        else {
                            this.translate.get('ERROR_NETWORK').subscribe(function (str) { return _this.showToast(str); });
                        }
                        this.showContentView();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EditProfilePage = __decorate([
        Component({
            selector: 'page-edit-profile',template:/*ion-inline-start:"/Users/andersonouriques/Development/personal/seekinterest-ui/src/pages/edit-profile-page/edit-profile-page.html"*/'<ion-header no-border>\n  <ion-toolbar class="transparent" color="primary">\n    <ion-buttons start>\n      <button ion-button clear (click)="onDismiss()">\n        <span showWhen="ios,core">{{ "CLOSE" | translate }}</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{ \'EDIT_PROFILE\' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n\n    <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate>\n\n      <ion-item class="transparent">\n        <ion-label stacked color="light">{{ \'NAME\' | translate }}</ion-label>\n        <ion-input type="text" formControlName="name"></ion-input>\n      </ion-item>\n\n      <ion-item class="transparent">\n        <ion-label stacked color="light">{{ \'USERNAME\' | translate }}</ion-label>\n        <ion-input type="text" formControlName="username"></ion-input>\n      </ion-item>\n\n      <ion-item class="transparent">\n        <ion-label stacked color="light">{{ \'EMAIL\' | translate }}</ion-label>\n        <ion-input type="email" formControlName="email"></ion-input>\n      </ion-item>\n\n      <ion-item class="transparent">\n        <ion-label stacked color="light">\n          {{ \'UPLOAD_PICTURE\' | translate }}\n        </ion-label>\n        <button type="button" ion-button clear item-end icon-only (click)="onUpload()">\n          <ion-icon name="camera" item-start color="light"></ion-icon>\n        </button>\n      </ion-item>\n\n      <div padding>\n        <button type="submit" ion-button block round color="light" [disabled]="!form.valid">\n          {{ \'SUBMIT\' | translate }}\n        </button>\n      </div>\n\n    </form>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/andersonouriques/Development/personal/seekinterest-ui/src/pages/edit-profile-page/edit-profile-page.html"*/
        }),
        __metadata("design:paramtypes", [Injector,
            ActionSheetController,
            Camera,
            ViewController])
    ], EditProfilePage);
    return EditProfilePage;
}(BasePage));
export { EditProfilePage };
//# sourceMappingURL=edit-profile-page.js.map