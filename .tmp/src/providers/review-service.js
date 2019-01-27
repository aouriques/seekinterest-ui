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
var Review = (function (_super) {
    __extends(Review, _super);
    function Review() {
        return _super.call(this, 'Review') || this;
    }
    Review_1 = Review;
    Review.prototype.create = function (data) {
        return new Promise(function (resolve, reject) {
            var review = new Review_1();
            review.save(data).then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    Review.prototype.load = function (params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        return new Promise(function (resolve, reject) {
            var query = new Parse.Query(_this);
            if (params.place) {
                query.equalTo('place', params.place);
            }
            if (params.user) {
                query.equalTo('user', params.user);
            }
            query.equalTo('isInappropriate', false);
            query.descending('createdAt');
            query.include(['user', 'place']);
            query.doesNotExist('deletedAt');
            var limit = params.limit || 100;
            var page = params.page || 0;
            query.skip(page * limit);
            query.limit(limit);
            query.find().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    Object.defineProperty(Review.prototype, "rating", {
        get: function () {
            return this.get('rating');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Review.prototype, "comment", {
        get: function () {
            return this.get('comment');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Review.prototype, "place", {
        get: function () {
            return this.get('place');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Review.prototype, "user", {
        get: function () {
            return this.get('user');
        },
        enumerable: true,
        configurable: true
    });
    Review = Review_1 = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], Review);
    return Review;
    var Review_1;
}(Parse.Object));
export { Review };
Parse.Object.registerSubclass('Review', Review);
//# sourceMappingURL=review-service.js.map