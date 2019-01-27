var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
var LocalStorage = (function () {
    function LocalStorage(storage) {
        this.storage = storage;
    }
    Object.defineProperty(LocalStorage.prototype, "skipIntroPage", {
        get: function () {
            return this.storage.get('skipIntroPage');
        },
        set: function (val) {
            this.storage.set('skipIntroPage', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalStorage.prototype, "unit", {
        get: function () {
            return this.storage.get('unit');
        },
        set: function (val) {
            this.storage.set('unit', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalStorage.prototype, "mapStyle", {
        get: function () {
            return this.storage.get('mapStyle');
        },
        set: function (val) {
            this.storage.set('mapStyle', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalStorage.prototype, "lang", {
        get: function () {
            return this.storage.get('lang');
        },
        set: function (val) {
            this.storage.set('lang', val);
        },
        enumerable: true,
        configurable: true
    });
    LocalStorage = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Storage])
    ], LocalStorage);
    return LocalStorage;
}());
export { LocalStorage };
//# sourceMappingURL=local-storage.js.map