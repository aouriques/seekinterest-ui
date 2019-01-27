var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var Preference = (function () {
    function Preference() {
    }
    Object.defineProperty(Preference.prototype, "unit", {
        get: function () {
            return this._unit;
        },
        set: function (val) {
            this._unit = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Preference.prototype, "mapStyle", {
        get: function () {
            return this._mapStyle;
        },
        set: function (val) {
            this._mapStyle = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Preference.prototype, "lang", {
        get: function () {
            return this._lang;
        },
        set: function (val) {
            this._lang = val;
        },
        enumerable: true,
        configurable: true
    });
    Preference = __decorate([
        Injectable()
    ], Preference);
    return Preference;
}());
export { Preference };
//# sourceMappingURL=preference.js.map