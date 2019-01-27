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
import { Injectable } from '@angular/core';
import Parse from 'parse';
var Slide = (function (_super) {
    __extends(Slide, _super);
    function Slide() {
        return _super.call(this, 'SliderImage') || this;
    }
    Slide_1 = Slide;
    Slide.prototype.load = function () {
        return new Promise(function (resolve, reject) {
            var query = new Parse.Query(Slide_1);
            query.equalTo('isActive', true);
            query.ascending('sort');
            query.include('place.category');
            query.find().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    Object.defineProperty(Slide.prototype, "image", {
        get: function () {
            return this.get('image');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slide.prototype, "sort", {
        get: function () {
            return this.get('sort');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slide.prototype, "url", {
        get: function () {
            return this.get('url');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slide.prototype, "place", {
        get: function () {
            return this.get('place');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slide.prototype, "isActive", {
        get: function () {
            return this.get('isActive');
        },
        enumerable: true,
        configurable: true
    });
    Slide.prototype.toString = function () {
        return this.image.url();
    };
    Slide = Slide_1 = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], Slide);
    return Slide;
    var Slide_1;
}(Parse.Object));
export { Slide };
Parse.Object.registerSubclass('SliderImage', Slide);
//# sourceMappingURL=slide.js.map