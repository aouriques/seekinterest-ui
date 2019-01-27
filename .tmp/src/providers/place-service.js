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
var Place = (function (_super) {
    __extends(Place, _super);
    function Place() {
        return _super.call(this, 'Place') || this;
    }
    Place.prototype.distance = function (location, unit) {
        if (unit === void 0) { unit = 'km'; }
        if (!location)
            return null;
        var geoPoint = new Parse.GeoPoint({
            latitude: location.latitude,
            longitude: location.longitude
        });
        if (unit === 'km') {
            return this.location.kilometersTo(geoPoint).toFixed(2) + ' ' + unit;
        }
        else {
            return this.location.milesTo(geoPoint).toFixed(2) + ' ' + unit;
        }
    };
    Place.prototype.like = function (place) {
        return new Promise(function (resolve, reject) {
            Parse.Cloud.run('likePlace', { placeId: place.id }).then(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    Place.prototype.isLiked = function (place) {
        return new Promise(function (resolve, reject) {
            Parse.Cloud.run('isPlaceLiked', { placeId: place.id }).then(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    Place.prototype.isStarred = function (place) {
        return new Promise(function (resolve, reject) {
            Parse.Cloud.run('isPlaceStarred', { placeId: place.id }).then(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    Place.prototype.load = function (params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        return new Promise(function (resolve, reject) {
            var page = params.page || 0;
            var limit = params.limit || 100;
            var distance = params.distance || 100;
            var status = params.status || 'Approved';
            var query = new Parse.Query(_this);
            if (Array.isArray(status)) {
                query.containedIn('status', status);
            }
            else {
                query.equalTo('status', status);
            }
            if (params.category) {
                query.equalTo('category', params.category);
            }
            if (params.isFeatured) {
                query.equalTo('isFeatured', params.isFeatured);
            }
            if (params.user) {
                query.equalTo('user', params.user);
            }
            if (params.canonical && params.canonical !== '') {
                query.startsWith('canonical', params.canonical);
            }
            if (params.location) {
                if (Array.isArray(params.location)) {
                    var southwest = new Parse.GeoPoint(params.location[0].latitude, params.location[0].longitude);
                    var northeast = new Parse.GeoPoint(params.location[1].latitude, params.location[1].longitude);
                    query.withinGeoBox('location', southwest, northeast);
                }
                else {
                    var point = new Parse.GeoPoint({
                        latitude: params.location.latitude,
                        longitude: params.location.longitude
                    });
                    if (params.unit && params.unit === 'km') {
                        query.withinKilometers('location', point, distance);
                    }
                    else {
                        query.withinMiles('location', point, distance);
                    }
                }
            }
            else {
                query.descending('createdAt');
            }
            query.skip(page * limit);
            query.limit(limit);
            query.include('category');
            query.doesNotExist('deletedAt');
            query.find().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    Place.prototype.loadFavorites = function (params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        return new Promise(function (resolve, reject) {
            var page = params.page || 0;
            var limit = params.limit || 100;
            var query = new Parse.Query(_this);
            query.equalTo('status', 'Approved');
            query.equalTo('likes', Parse.User.current());
            query.skip(page * limit);
            query.limit(limit);
            query.doesNotExist('deletedAt');
            query.find().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    Object.defineProperty(Place.prototype, "title", {
        get: function () {
            return this.get('title');
        },
        set: function (val) {
            this.set('title', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "description", {
        get: function () {
            return this.get('description');
        },
        set: function (val) {
            this.set('description', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "phone", {
        get: function () {
            return this.get('phone');
        },
        set: function (val) {
            this.set('phone', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "website", {
        get: function () {
            return this.get('website');
        },
        set: function (val) {
            this.set('website', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "address", {
        get: function () {
            return this.get('address');
        },
        set: function (val) {
            this.set('address', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "category", {
        get: function () {
            return this.get('category');
        },
        set: function (val) {
            this.set('category', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "image", {
        get: function () {
            return this.get('image');
        },
        set: function (val) {
            this.set('image', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "location", {
        get: function () {
            return this.get('location');
        },
        set: function (val) {
            var geoPoint = new Parse.GeoPoint({
                latitude: val.lat,
                longitude: val.lng
            });
            this.set('location', geoPoint);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "imageTwo", {
        get: function () {
            return this.get('imageTwo');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "imageThree", {
        get: function () {
            return this.get('imageThree');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "imageFour", {
        get: function () {
            return this.get('imageFour');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "imageThumb", {
        get: function () {
            return this.get('imageThumb');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "ratingCount", {
        get: function () {
            return this.get('ratingCount');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "ratingTotal", {
        get: function () {
            return this.get('ratingTotal');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "status", {
        get: function () {
            return this.get('status');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "rating", {
        get: function () {
            if (!this.ratingCount && !this.ratingTotal)
                return 0;
            return Math.round(this.ratingTotal / this.ratingCount);
        },
        enumerable: true,
        configurable: true
    });
    Place = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], Place);
    return Place;
}(Parse.Object));
export { Place };
Parse.Object.registerSubclass('Place', Place);
//# sourceMappingURL=place-service.js.map