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
import { Events } from 'ionic-angular';
import { LocalStorage } from '../../providers/local-storage';
import { BasePage } from '../base-page/base-page';
import { Preference } from '../../providers/preference';
var SettingsPage = (function (_super) {
    __extends(SettingsPage, _super);
    function SettingsPage(injector, preference, localStorage, events) {
        var _this = _super.call(this, injector) || this;
        _this.preference = preference;
        _this.settings = {};
        _this.storage = localStorage;
        _this.events = events;
        _this.storage.unit.then(function (unit) { return _this.settings.unit = unit; }).catch(function (e) { return console.log(e); });
        _this.storage.mapStyle.then(function (mapStyle) { return _this.settings.mapStyle = mapStyle; }).catch(function (e) { return console.log(e); });
        _this.storage.lang.then(function (lang) { return _this.settings.lang = lang; }).catch(function (e) { return console.log(e); });
        return _this;
    }
    SettingsPage.prototype.enableMenuSwipe = function () {
        return true;
    };
    SettingsPage.prototype.ionViewDidLoad = function () {
    };
    SettingsPage.prototype.onChangeUnit = function () {
        this.storage.unit = this.settings.unit;
        this.preference.unit = this.settings.unit;
    };
    SettingsPage.prototype.onChangeMapStyle = function () {
        this.storage.mapStyle = this.settings.mapStyle;
        this.preference.mapStyle = this.settings.unit;
    };
    SettingsPage.prototype.onChangeLang = function () {
        if (this.settings.lang) {
            this.storage.lang = this.settings.lang;
            this.translate.use(this.settings.lang);
            this.preference.lang = this.settings.lang;
            this.events.publish('lang:change');
        }
    };
    SettingsPage.prototype.goToWalkthrough = function () {
        this.navigateTo('WalkthroughPage');
    };
    SettingsPage = __decorate([
        Component({
            selector: 'page-settings-page',template:/*ion-inline-start:"/Users/andersonouriques/Development/personal/seekinterest-ui/src/pages/settings-page/settings-page.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ \'SETTINGS\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list no-lines radio-group (ionChange)="onChangeUnit()" [(ngModel)]="settings.unit">\n    <ion-list-header>\n      <p ion-text class="bold" color="primary">{{ \'DISTANCE_UNIT\' | translate }}</p>\n    </ion-list-header>\n    <ion-item color="light" no-lines>\n      <ion-label class="text-medium bold">Mi</ion-label>\n      <ion-radio value="mi"></ion-radio>\n    </ion-item>\n    <ion-item color="light" no-lines>\n      <ion-label class="text-medium bold">Km</ion-label>\n      <ion-radio value="km"></ion-radio>\n    </ion-item>\n  </ion-list>\n\n  <ion-list no-lines radio-group (ionChange)="onChangeLang()" [(ngModel)]="settings.lang">\n    <ion-list-header>\n      <p ion-text class="bold" color="primary">{{ \'LANGUAGE\' | translate }}</p>\n    </ion-list-header>\n    <ion-item color="light" no-lines>\n      <ion-label class="text-medium bold">{{ \'ENGLISH\' | translate }}</ion-label>\n      <ion-radio value="en"></ion-radio>\n    </ion-item>\n    <ion-item color="light" no-lines>\n      <ion-label class="text-medium bold">{{ \'SPANISH\' | translate }}</ion-label>\n      <ion-radio value="es"></ion-radio>\n    </ion-item>\n  </ion-list>\n\n  <div text-center>\n    <button ion-button round color="primary" (click)="goToWalkthrough()">\n      {{ \'OPEN_WALKTHROUGH\' | translate }}\n    </button>\n  </div>\n    \n</ion-content>\n'/*ion-inline-end:"/Users/andersonouriques/Development/personal/seekinterest-ui/src/pages/settings-page/settings-page.html"*/
        }),
        __metadata("design:paramtypes", [Injector,
            Preference,
            LocalStorage,
            Events])
    ], SettingsPage);
    return SettingsPage;
}(BasePage));
export { SettingsPage };
//# sourceMappingURL=settings-page.js.map