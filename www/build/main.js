webpackJsonp([19],{

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
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


var User = (function (_super) {
    __extends(User, _super);
    function User() {
        return _super.call(this, '_User') || this;
    }
    User_1 = User;
    User.getInstance = function () {
        return this;
    };
    User.getCurrentUser = function () {
        return __WEBPACK_IMPORTED_MODULE_1_parse___default.a.User.current();
    };
    User.prototype.isLoggedInViaFacebook = function () {
        return this.authData;
    };
    User.prototype.create = function (data) {
        if (data === void 0) { data = {}; }
        return new Promise(function (resolve, reject) {
            var user = new User_1();
            user.signUp(data).then(function (user) { return resolve(user); }, function (error) { return reject(error); });
        });
    };
    User.prototype.signIn = function (data) {
        if (data === void 0) { data = {}; }
        return new Promise(function (resolve, reject) {
            var user = new User_1;
            user.username = data.username;
            user.password = data.password;
            user.logIn().then(function (user) { return resolve(user); }, function (error) { return reject(error); });
        });
    };
    User.prototype.logout = function () {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_parse___default.a.User.logOut().then(function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    User.prototype.recoverPassword = function (email) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_parse___default.a.User.requestPasswordReset(email).then(function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    User.prototype.loginWithFacebook = function (authData) {
        return new Promise(function (resolve, reject) {
            var user = new User_1;
            user._linkWith('facebook', authData)
                .then(function (user) { return resolve(user); }, function (error) { return reject(error); });
        });
    };
    User.prototype.isFacebookLinked = function () {
        return __WEBPACK_IMPORTED_MODULE_1_parse___default.a.FacebookUtils.isLinked(__WEBPACK_IMPORTED_MODULE_1_parse___default.a.User.current());
    };
    User.prototype.linkFacebook = function (authData) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_parse___default.a.FacebookUtils.link(__WEBPACK_IMPORTED_MODULE_1_parse___default.a.User.current(), authData, {
                success: function (res) { return resolve(res); }, error: function (err) { return reject(err); }
            });
        });
    };
    User.prototype.unlinkFacebook = function () {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_parse___default.a.FacebookUtils.unlink(__WEBPACK_IMPORTED_MODULE_1_parse___default.a.User.current(), {
                success: function (res) { return resolve(res); }, error: function (err) { return reject(err); }
            });
        });
    };
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this.get('name');
        },
        set: function (val) {
            this.set('name', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "email", {
        get: function () {
            return this.get('email');
        },
        set: function (val) {
            this.set('email', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "username", {
        get: function () {
            return this.get('username');
        },
        set: function (val) {
            this.set('username', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "password", {
        get: function () {
            return this.get('password');
        },
        set: function (val) {
            this.set('password', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "photo", {
        get: function () {
            return this.get('photo');
        },
        set: function (val) {
            this.set('photo', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "authData", {
        get: function () {
            return this.get('authData');
        },
        set: function (val) {
            this.set('authData', val);
        },
        enumerable: true,
        configurable: true
    });
    User = User_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], User);
    return User;
    var User_1;
}(__WEBPACK_IMPORTED_MODULE_1_parse___default.a.User));

__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object.registerSubclass('_User', User);
//# sourceMappingURL=user-service.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
var AppConfig = (function () {
    function AppConfig() {
    }
    Object.defineProperty(AppConfig, "SERVER_URL", {
        /* Parse Server URL */
        get: function () {
            return 'https://nearmev4.quanlabs.com/parse';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig, "APP_ID", {
        /* Parse App ID  */
        get: function () {
            return 'myAppId';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig, "GOOGLE_MAPS_API_KEY", {
        /* Google Maps API Key */
        get: function () {
            return 'AIzaSyCyl-AkaRDB5oKekmKn87p_27evrotVEQw';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig, "BANNER_ID", {
        /* AdMob Banner ID  */
        get: function () {
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig, "TRACKING_ID", {
        /* Google Analytics Tracking ID  */
        get: function () {
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig, "HEADER_COLOR", {
        /* Header color (only Android Multitask view)  */
        get: function () {
            return '#FF7676';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig, "DEFAULT_UNIT", {
        /* Unit: km or mi  */
        get: function () {
            return 'mi';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig, "DEFAULT_LANG", {
        get: function () {
            return 'en';
        },
        enumerable: true,
        configurable: true
    });
    return AppConfig;
}());

//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(305);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], LocalStorage);
    return LocalStorage;
}());

//# sourceMappingURL=local-storage.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Preference; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], Preference);
    return Preference;
}());

//# sourceMappingURL=preference.js.map

/***/ }),

/***/ 218:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 218;

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-place-page/add-place-page.module": [
		578,
		2
	],
	"../pages/add-review-page/add-review-page.module": [
		579,
		1
	],
	"../pages/categories/categories.module": [
		580,
		17
	],
	"../pages/change-password/change-password.module": [
		581,
		16
	],
	"../pages/edit-profile-page/edit-profile-page.module": [
		582,
		15
	],
	"../pages/favorites-page/favorites-page.module": [
		584,
		14
	],
	"../pages/forgot-password/forgot-password.module": [
		583,
		0
	],
	"../pages/home-page/home-page.module": [
		585,
		13
	],
	"../pages/map-page/map-page.module": [
		586,
		3
	],
	"../pages/place-detail-page/place-detail-page.module": [
		587,
		12
	],
	"../pages/places/places.module": [
		588,
		11
	],
	"../pages/post-list-page/post-list-page.module": [
		589,
		10
	],
	"../pages/profile-page/profile-page.module": [
		590,
		9
	],
	"../pages/reviews-page/reviews-page.module": [
		591,
		8
	],
	"../pages/search/search.module": [
		592,
		7
	],
	"../pages/settings-page/settings-page.module": [
		593,
		6
	],
	"../pages/sign-in-page/sign-in-page.module": [
		594,
		5
	],
	"../pages/sign-up-page/sign-up-page.module": [
		595,
		4
	],
	"../pages/walkthrough-page/walkthrough-page.module": [
		596,
		18
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 260;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowRef; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WindowRef = (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            return window;
        },
        enumerable: true,
        configurable: true
    });
    WindowRef = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], WindowRef);
    return WindowRef;
}());

//# sourceMappingURL=window-ref.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Installation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_config__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Installation = (function () {
    function Installation(http) {
        this.http = http;
    }
    Installation.prototype.save = function (id, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('X-Parse-Application-Id', __WEBPACK_IMPORTED_MODULE_5__app_app_config__["a" /* AppConfig */].APP_ID);
        var bodyString = JSON.stringify(data);
        var url = __WEBPACK_IMPORTED_MODULE_5__app_app_config__["a" /* AppConfig */].SERVER_URL + "/installations/" + id;
        return this.http.put(url, bodyString, { headers: headers })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error || 'Server error'); });
    };
    Installation = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], Installation);
    return Installation;
}());

//# sourceMappingURL=installation.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Place; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
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


var Place = (function (_super) {
    __extends(Place, _super);
    function Place() {
        return _super.call(this, 'Place') || this;
    }
    Place.prototype.distance = function (location, unit) {
        if (unit === void 0) { unit = 'km'; }
        if (!location)
            return null;
        var geoPoint = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.GeoPoint({
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
            __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Cloud.run('likePlace', { placeId: place.id }).then(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    Place.prototype.isLiked = function (place) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Cloud.run('isPlaceLiked', { placeId: place.id }).then(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    Place.prototype.isStarred = function (place) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Cloud.run('isPlaceStarred', { placeId: place.id }).then(function (data) {
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
            var query = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Query(_this);
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
                    var southwest = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.GeoPoint(params.location[0].latitude, params.location[0].longitude);
                    var northeast = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.GeoPoint(params.location[1].latitude, params.location[1].longitude);
                    query.withinGeoBox('location', southwest, northeast);
                }
                else {
                    var point = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.GeoPoint({
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
            var query = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Query(_this);
            query.equalTo('status', 'Approved');
            query.equalTo('likes', __WEBPACK_IMPORTED_MODULE_1_parse___default.a.User.current());
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
            var geoPoint = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.GeoPoint({
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Place);
    return Place;
}(__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object));

__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object.registerSubclass('Place', Place);
//# sourceMappingURL=place-service.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Review; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
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
            var query = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Query(_this);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Review);
    return Review;
    var Review_1;
}(__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object));

__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object.registerSubclass('Review', Review);
//# sourceMappingURL=review-service.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapStyle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MapStyle = (function () {
    function MapStyle() {
    }
    // See more styles on https://snazzymaps.com/
    MapStyle.light = function () {
        return [
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e9e9e9"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dedede"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#333333"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            }
        ];
    };
    MapStyle = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], MapStyle);
    return MapStyle;
}());

//# sourceMappingURL=map-style.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParseFile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParseFile = (function () {
    function ParseFile() {
    }
    ParseFile.upload = function (base64) {
        return new Promise(function (resolve, reject) {
            var parseFile = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.File('image.jpg', { base64: base64 });
            parseFile.save().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    ParseFile = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ParseFile);
    return ParseFile;
}());

//# sourceMappingURL=parse-file-service.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Category; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
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


var Category = (function (_super) {
    __extends(Category, _super);
    function Category() {
        return _super.call(this, 'Category') || this;
    }
    Category.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Query(_this);
            query.ascending('sort');
            query.doesNotExist('deletedAt');
            query.find().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    Object.defineProperty(Category.prototype, "title", {
        get: function () {
            return this.get('title');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Category.prototype, "icon", {
        get: function () {
            return this.get('icon');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Category.prototype, "image", {
        get: function () {
            return this.get('image');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Category.prototype, "imageThumb", {
        get: function () {
            return this.get('imageThumb');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Category.prototype, "placeCount", {
        get: function () {
            return this.get('placeCount');
        },
        enumerable: true,
        configurable: true
    });
    Category = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Category);
    return Category;
}(__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object));

__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object.registerSubclass('Category', Category);
//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
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


var Post = (function (_super) {
    __extends(Post, _super);
    function Post() {
        return _super.call(this, 'Post') || this;
    }
    Post_1 = Post;
    Post.prototype.load = function (params) {
        if (params === void 0) { params = {}; }
        return new Promise(function (resolve, reject) {
            var page = params.page || 0;
            var limit = params.limit || 100;
            var query = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Query(Post_1);
            query.skip(page * limit);
            query.limit(limit);
            query.include('place');
            query.descending('createdAt');
            query.find().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    Object.defineProperty(Post.prototype, "title", {
        get: function () {
            return this.get('title');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "body", {
        get: function () {
            return this.get('body');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "image", {
        get: function () {
            return this.get('image');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "place", {
        get: function () {
            return this.get('place');
        },
        enumerable: true,
        configurable: true
    });
    Post.prototype.toString = function () {
        return this.title;
    };
    Post = Post_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Post);
    return Post;
    var Post_1;
}(__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object));

__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object.registerSubclass('Post', Post);
//# sourceMappingURL=post.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(381);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_categories__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_place_service__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_review_service__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_parse_file_service__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_user_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_slide__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_post__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_local_storage__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_preference__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_map_style__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_installation__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_window_ref__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_camera__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_geolocation__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_file__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_launch_navigator__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_call_number__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_in_app_browser__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_social_sharing__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_google_maps__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_app_version__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_header_color__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_google_analytics__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_admob_free__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_browser_tab__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_facebook__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_storage__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_ngx_img_fallback__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_ng_lazyload_image__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_ng_lazyload_image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_35_ng_lazyload_image__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_ionic_image_loader__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_angular_star_rating__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ngx_translate_core__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ngx_translate_http_loader__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__angular_common_http__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









































function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_39__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-place-page/add-place-page.module#AddPlacePageModule', name: 'AddPlacePage', segment: 'add-place-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-review-page/add-review-page.module#AddReviewPageModule', name: 'AddReviewPage', segment: 'add-review-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/categories/categories.module#CategoriesPageModule', name: 'CategoriesPage', segment: 'categories', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/change-password/change-password.module#ChangePasswordPageModule', name: 'ChangePasswordPage', segment: 'change-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-profile-page/edit-profile-page.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot-password/forgot-password.module#ForgotPasswordPageModule', name: 'ForgotPasswordPage', segment: 'forgot-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favorites-page/favorites-page.module#FavoritesPageModule', name: 'FavoritesPage', segment: 'favorites-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-page/home-page.module#HomePageModule', name: 'HomePage', segment: 'home-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map-page/map-page.module#MapPageModule', name: 'MapPage', segment: 'map-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/place-detail-page/place-detail-page.module#PlaceDetailPageModule', name: 'PlaceDetailPage', segment: 'place-detail-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/places/places.module#PlacesPageModule', name: 'PlacesPage', segment: 'places', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/post-list-page/post-list-page.module#PostListPageModule', name: 'PostListPage', segment: 'post-list-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile-page/profile-page.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reviews-page/reviews-page.module#ReviewsPageModule', name: 'ReviewsPage', segment: 'reviews-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings-page/settings-page.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-in-page/sign-in-page.module#SignInPageModule', name: 'SignInPage', segment: 'sign-in-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up-page/sign-up-page.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/walkthrough-page/walkthrough-page.module#WalkthroughPageModule', name: 'WalkthroughPage', segment: 'walkthrough-page', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_33__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_34_ngx_img_fallback__["a" /* ImgFallbackModule */],
                __WEBPACK_IMPORTED_MODULE_35_ng_lazyload_image__["LazyLoadImageModule"],
                __WEBPACK_IMPORTED_MODULE_40__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_37_angular_star_rating__["a" /* StarRatingModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_36_ionic_image_loader__["b" /* IonicImageLoader */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_38__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_38__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_40__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__providers_categories__["a" /* Category */],
                __WEBPACK_IMPORTED_MODULE_6__providers_place_service__["a" /* Place */],
                __WEBPACK_IMPORTED_MODULE_8__providers_parse_file_service__["a" /* ParseFile */],
                __WEBPACK_IMPORTED_MODULE_7__providers_review_service__["a" /* Review */],
                __WEBPACK_IMPORTED_MODULE_12__providers_local_storage__["a" /* LocalStorage */],
                __WEBPACK_IMPORTED_MODULE_9__providers_user_service__["a" /* User */],
                __WEBPACK_IMPORTED_MODULE_10__providers_slide__["a" /* Slide */],
                __WEBPACK_IMPORTED_MODULE_11__providers_post__["a" /* Post */],
                __WEBPACK_IMPORTED_MODULE_15__providers_installation__["a" /* Installation */],
                __WEBPACK_IMPORTED_MODULE_16__providers_window_ref__["a" /* WindowRef */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_admob_free__["a" /* AdMobFree */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_app_version__["a" /* AppVersion */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_header_color__["a" /* HeaderColor */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_browser_tab__["a" /* BrowserTab */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_13__providers_preference__["a" /* Preference */], __WEBPACK_IMPORTED_MODULE_14__providers_map_style__["a" /* MapStyle */], { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_analytics__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_header_color__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_parse__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_parse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_config__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_user_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_local_storage__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_preference__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_window_ref__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_installation__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ionic_image_loader__ = __webpack_require__(199);
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















var MyApp = (function () {
    function MyApp(platform, renderer, events, storage, translate, toastCtrl, preference, statusBar, splashScreen, googleAnalytics, windowRef, installationService, imageLoaderConfig, alertCtrl, userService, headerColor) {
        this.platform = platform;
        this.renderer = renderer;
        this.events = events;
        this.storage = storage;
        this.translate = translate;
        this.toastCtrl = toastCtrl;
        this.preference = preference;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.googleAnalytics = googleAnalytics;
        this.windowRef = windowRef;
        this.installationService = installationService;
        this.imageLoaderConfig = imageLoaderConfig;
        this.alertCtrl = alertCtrl;
        this.userService = userService;
        this.headerColor = headerColor;
        this.rootPage = 'HomePage';
        this.initializeApp();
    }
    MyApp.prototype.onMenuOpened = function () {
        this.events.publish('onMenuOpened');
    };
    MyApp.prototype.onMenuClosed = function () {
        this.events.publish('onMenuClosed');
    };
    MyApp.prototype.buildMenu = function () {
        var _this = this;
        var trans = ['HOME', 'POSTS', 'CATEGORIES', 'MAP', 'ADD_PLACE', 'MY_FAVORITES',
            'SETTINGS', 'LOGIN', 'LOGOUT', 'LOGGED_OUT', 'PROFILE'];
        this.translate.get(trans).subscribe(function (values) {
            _this.trans = values;
            _this.pages = [
                { title: values.HOME, icon: 'home', component: 'HomePage' },
                { title: values.CATEGORIES, icon: 'pricetag', component: 'CategoriesPage' },
                { title: values.MAP, icon: 'map', component: 'MapPage' },
                { title: values.ADD_PLACE, icon: 'create', component: 'AddPlacePage' },
                { title: values.POSTS, icon: 'notifications', component: 'PostListPage' },
                { title: values.MY_FAVORITES, icon: 'heart', component: 'FavoritesPage' },
                { title: values.SETTINGS, icon: 'settings', component: 'SettingsPage' },
            ];
            if (__WEBPACK_IMPORTED_MODULE_9__providers_user_service__["a" /* User */].getCurrentUser()) {
                _this.pages.push({ title: values.PROFILE, icon: 'contact', component: 'ProfilePage' });
                _this.pages.push({ title: values.LOGOUT, icon: 'exit', component: null });
            }
            else {
                _this.pages.push({ title: values.LOGIN, icon: 'log-in', component: 'SignInPage' });
            }
        });
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.setupLocalStorage();
        this.setupParse();
        this.setupEvents();
        this.setupImageLoader();
        this.user = __WEBPACK_IMPORTED_MODULE_9__providers_user_service__["a" /* User */].getCurrentUser();
        this.fetchUser();
        this.platform.ready().then(function () {
            _this.setupStatusBar();
            _this.setupGoogleAnalytics();
            _this.setupPush();
            _this.setupAndroidHeaderColor();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.fetchUser = function () {
        this.user = __WEBPACK_IMPORTED_MODULE_9__providers_user_service__["a" /* User */].getCurrentUser();
        if (this.user)
            this.user.fetch();
    };
    MyApp.prototype.setupImageLoader = function () {
        this.imageLoaderConfig.enableSpinner(false);
        this.imageLoaderConfig.setFallbackUrl('assets/img/placeholder1.png');
        this.imageLoaderConfig.enableFallbackAsPlaceholder(true);
        this.imageLoaderConfig.setBackgroundSize('cover');
        this.imageLoaderConfig.setConcurrency(20);
    };
    MyApp.prototype.onImageLoad = function (imgLoader) {
        this.renderer.setElementClass(imgLoader.element, 'fade-in', true);
    };
    MyApp.prototype.setupLocalStorage = function () {
        var _this = this;
        this.translate.setDefaultLang(__WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* AppConfig */].DEFAULT_LANG);
        this.storage.lang.then(function (val) {
            var lang = val || __WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* AppConfig */].DEFAULT_LANG;
            _this.translate.use(lang);
            _this.storage.lang = lang;
            _this.preference.lang = lang;
            _this.storage.skipIntroPage.then(function (skipIntroPage) {
                if (!skipIntroPage)
                    _this.rootPage = 'WalkthroughPage';
            }).catch(function (e) { return console.log(e); });
            _this.buildMenu();
        }).catch(function (e) { return console.log(e); });
        this.storage.unit.then(function (val) {
            var unit = val || __WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* AppConfig */].DEFAULT_UNIT;
            _this.storage.unit = unit;
            _this.preference.unit = unit;
        }).catch(function (e) { return console.log(e); });
    };
    MyApp.prototype.setupEvents = function () {
        var _this = this;
        this.events.subscribe('user:login', function (user) {
            _this.user = user;
            _this.buildMenu();
            _this.fetchUser();
            _this.updateInstallation();
        });
        this.events.subscribe('user:logout', function () {
            _this.onLogOut();
        });
        this.events.subscribe('lang:change', function () {
            _this.buildMenu();
        });
    };
    MyApp.prototype.setupParse = function () {
        __WEBPACK_IMPORTED_MODULE_6_parse___default.a.serverURL = __WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* AppConfig */].SERVER_URL;
        __WEBPACK_IMPORTED_MODULE_6_parse___default.a.initialize(__WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* AppConfig */].APP_ID);
        __WEBPACK_IMPORTED_MODULE_9__providers_user_service__["a" /* User */].getInstance();
    };
    MyApp.prototype.setupStatusBar = function () {
        if (this.platform.is('ios')) {
            this.statusBar.overlaysWebView(true);
            this.statusBar.styleDefault();
        }
        else {
            this.statusBar.backgroundColorByHexString(__WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* AppConfig */].HEADER_COLOR);
        }
    };
    MyApp.prototype.setupAndroidHeaderColor = function () {
        if (__WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* AppConfig */].HEADER_COLOR && this.platform.is('android')) {
            this.headerColor.tint(__WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* AppConfig */].HEADER_COLOR);
        }
    };
    MyApp.prototype.setupGoogleAnalytics = function () {
        if (__WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* AppConfig */].TRACKING_ID) {
            this.googleAnalytics.startTrackerWithId(__WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* AppConfig */].TRACKING_ID);
            this.googleAnalytics.trackEvent('', 'App opened');
            this.googleAnalytics.debugMode();
            this.googleAnalytics.enableUncaughtExceptionReporting(true);
        }
    };
    MyApp.prototype.setupPush = function () {
        this.objWindow = this.windowRef.nativeWindow;
        if (this.objWindow.ParsePushPlugin) {
            this.objWindow.ParsePushPlugin.on('receivePN', function (pn) {
                console.log('[receivePn] Push notification:' + JSON.stringify(pn));
            });
            this.objWindow.ParsePushPlugin.on('openPN', function (pn) {
                console.log('Notification:' + JSON.stringify(pn));
            });
            this.updateInstallation();
        }
    };
    MyApp.prototype.updateInstallation = function () {
        var _this = this;
        if (this.objWindow.ParsePushPlugin) {
            var user_1 = null;
            if (this.user) {
                user_1 = {
                    __type: 'Pointer',
                    className: '_User',
                    objectId: this.user.id
                };
            }
            this.objWindow.ParsePushPlugin.getInstallationObjectId(function (id) {
                _this.installationService.save(id, { user: user_1 }).subscribe(function (data) {
                    console.log('Installation updated', data);
                }, function (err) { return console.warn(err); });
            });
        }
    };
    MyApp.prototype.showNotification = function (notification) {
        var _this = this;
        this.translate.get(['NOTIFICATION', 'OK']).subscribe(function (str) {
            _this.showAlert(str.NOTIFICATION, notification.alert, str.OK);
        });
    };
    MyApp.prototype.showAlert = function (title, message, okText) {
        if (title === void 0) { title = ''; }
        if (message === void 0) { message = ''; }
        if (okText === void 0) { okText = 'OK'; }
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [okText],
        });
        alert.present();
    };
    MyApp.prototype.openPage = function (page) {
        if ((page.component === 'FavoritesPage' || page.component === 'AddPlacePage' || page.component === 'SignInPage') && !__WEBPACK_IMPORTED_MODULE_9__providers_user_service__["a" /* User */].getCurrentUser()) {
            this.nav.push('SignInPage');
        }
        else if (page.component === null && __WEBPACK_IMPORTED_MODULE_9__providers_user_service__["a" /* User */].getCurrentUser()) {
            this.onLogOut();
        }
        else {
            this.nav.setRoot(page.component);
        }
    };
    MyApp.prototype.showToast = function (message) {
        if (message === void 0) { message = ''; }
        var alert = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        alert.present();
    };
    MyApp.prototype.onLogOut = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userService.logout()];
                    case 1:
                        _a.sent();
                        this.user = null;
                        this.nav.setRoot('HomePage');
                        this.translate.get('LOGGED_OUT').subscribe(function (str) { return _this.showToast(str); });
                        this.buildMenu();
                        this.updateInstallation();
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.log(err_1.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/andersonouriques/Development/personal/seekinterest-ui/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar class="menu-toolbar" color="light">\n      <ion-item class="transparent" no-lines *ngIf="user">\n        <ion-avatar item-start>\n          <img-loader useImg (load)="onImageLoad($event)"\n            fallback="assets/img/avatar.png"\n            [src]="user.photo?.url()">\n          </img-loader>\n        </ion-avatar>\n        <span class="text-medium bold" ion-text color="light">{{ user.name }}</span>\n      </ion-item>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button class="bold" color="light" menuClose text-uppercase no-lines ion-item detail-none\n        *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon [name]="p.icon" item-start color="primary"></ion-icon>\n        <p ion-text color="primary">\n          {{ p.title }}\n        </p>\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content></ion-nav>\n'/*ion-inline-end:"/Users/andersonouriques/Development/personal/seekinterest-ui/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_10__providers_local_storage__["a" /* LocalStorage */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_11__providers_preference__["a" /* Preference */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
            __WEBPACK_IMPORTED_MODULE_12__providers_window_ref__["a" /* WindowRef */],
            __WEBPACK_IMPORTED_MODULE_13__providers_installation__["a" /* Installation */],
            __WEBPACK_IMPORTED_MODULE_14_ionic_image_loader__["a" /* ImageLoaderConfig */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_9__providers_user_service__["a" /* User */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_header_color__["a" /* HeaderColor */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Slide; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
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


var Slide = (function (_super) {
    __extends(Slide, _super);
    function Slide() {
        return _super.call(this, 'SliderImage') || this;
    }
    Slide_1 = Slide;
    Slide.prototype.load = function () {
        return new Promise(function (resolve, reject) {
            var query = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Query(Slide_1);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Slide);
    return Slide;
    var Slide_1;
}(__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object));

__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object.registerSubclass('SliderImage', Slide);
//# sourceMappingURL=slide.js.map

/***/ })

},[369]);
//# sourceMappingURL=main.js.map