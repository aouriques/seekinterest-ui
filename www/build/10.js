webpackJsonp([10],{

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListPageModule", function() { return PostListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_list_page__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module__ = __webpack_require__(600);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PostListPageModule = (function () {
    function PostListPageModule() {
    }
    PostListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__post_list_page__["a" /* PostListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__post_list_page__["a" /* PostListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__post_list_page__["a" /* PostListPage */]
            ]
        })
    ], PostListPageModule);
    return PostListPageModule;
}());

//# sourceMappingURL=post-list-page.module.js.map

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic2_rating_module__ = __webpack_require__(603);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ionic2_rating_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic2_rating__ = __webpack_require__(598);
/* unused harmony reexport Ionic2Rating */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RATING_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ionic2Rating; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(23);


var noop = function () {
};
var RATING_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return Ionic2Rating; }),
    multi: true
};
var Ionic2Rating = (function () {
    function Ionic2Rating() {
        this._max = 5;
        this._readOnly = false;
        this._emptyStarIconName = 'star-outline';
        this._halfStarIconName = 'star-half';
        this._starIconName = 'star';
        this._nullable = false;
        this.onChangeCallback = noop;
    }
    Object.defineProperty(Ionic2Rating.prototype, "max", {
        get: function () {
            return this._max;
        },
        set: function (val) {
            this._max = this.getNumberPropertyValue(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "readOnly", {
        get: function () {
            return this._readOnly;
        },
        set: function (val) {
            this._readOnly = this.isTrueProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "emptyStarIconName", {
        get: function () {
            return this._emptyStarIconName;
        },
        set: function (val) {
            this._emptyStarIconName = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "halfStarIconName", {
        get: function () {
            return this._halfStarIconName;
        },
        set: function (val) {
            this._halfStarIconName = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "starIconName", {
        get: function () {
            return this._starIconName;
        },
        set: function (val) {
            this._starIconName = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "nullable", {
        get: function () {
            return this._nullable;
        },
        set: function (val) {
            this._nullable = this.isTrueProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Ionic2Rating.prototype.ngOnInit = function () {
        // ngFor needs an array
        this.starIndexes = Array(this.max).fill(1).map(function (x, i) { return i; });
    };
    Ionic2Rating.prototype.getStarIconName = function (starIndex) {
        if (this.value === undefined) {
            return this.emptyStarIconName;
        }
        if (this.value > starIndex) {
            if (this.value < starIndex + 1) {
                return this.halfStarIconName;
            }
            else {
                return this.starIconName;
            }
        }
        else {
            return this.emptyStarIconName;
        }
    };
    Object.defineProperty(Ionic2Rating.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (value) {
            if (value !== this.innerValue) {
                this.innerValue = value;
                this.onChangeCallback(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Ionic2Rating.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    Ionic2Rating.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    Ionic2Rating.prototype.registerOnTouched = function (fn) {
    };
    Ionic2Rating.prototype.onKeyDown = function (event) {
        if (/(37|38|39|40)/.test(event.which)) {
            event.preventDefault();
            event.stopPropagation();
            var newValue = this.value + ((event.which == 38 || event.which == 39) ? 1 : -1);
            return this.rate(newValue);
        }
    };
    Ionic2Rating.prototype.rate = function (value) {
        if (this.readOnly || value < 0 || value > this.max) {
            return;
        }
        if (value === this.value && this.nullable) {
            value = null;
        }
        this.value = value;
    };
    Ionic2Rating.prototype.isTrueProperty = function (val) {
        if (typeof val === 'string') {
            val = val.toLowerCase().trim();
            return (val === 'true' || val === 'on');
        }
        return !!val;
    };
    Ionic2Rating.prototype.getNumberPropertyValue = function (val) {
        if (typeof val === 'string') {
            return parseInt(val.trim());
        }
        return val;
    };
    Ionic2Rating.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'rating',
                    styles: ["\n    ul.rating li {\n      display: inline;\n      border: 0px;\n      background: none;\n      padding: 5px 10px;\n    }\n    ul.rating li i {\n      font-size: 30px;\n    }\n  "],
                    template: "\n    <ul class=\"rating\" (keydown)=\"onKeyDown($event)\">\n      <li *ngFor=\"let starIndex of starIndexes\" tappable (click)=\"rate(starIndex + 1)\">\n        <ion-icon [name]=\"getStarIconName(starIndex)\">\n        </ion-icon>\n      </li>\n    </ul>",
                    providers: [RATING_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    Ionic2Rating.ctorParameters = [];
    Ionic2Rating.propDecorators = {
        'max': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'readOnly': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'emptyStarIconName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'halfStarIconName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'starIconName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'nullable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return Ionic2Rating;
}());
//# sourceMappingURL=ionic2-rating.js.map

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoWindowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_place_service__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InfoWindowComponent = (function () {
    function InfoWindowComponent(renderer, navCtrl) {
        this.renderer = renderer;
        this.navCtrl = navCtrl;
    }
    InfoWindowComponent.prototype.onImageLoad = function (imgLoader) {
        this.renderer.setElementClass(imgLoader.element, 'fade-in', true);
    };
    InfoWindowComponent.prototype.goToPlace = function () {
        this.navCtrl.push('PlaceDetailPage', { place: this.place });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__providers_place_service__["a" /* Place */])
    ], InfoWindowComponent.prototype, "place", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], InfoWindowComponent.prototype, "location", void 0);
    InfoWindowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'info-window',template:/*ion-inline-start:"/Users/andersonouriques/Development/personal/seekinterest-ui/src/components/info-window/info-window.html"*/'<ion-item no-lines class="transparent">\n  <ion-thumbnail item-start>\n      <img-loader useImg\n      [spinner]="false"\n      [src]="place.imageThumb?.url()"\n      fallback="./assets/img/placeholder1.png"\n      (load)="onImageLoad($event)">\n    </img-loader>\n  </ion-thumbnail>\n  <h2 class="text-medium bold no-margin ellipsis" ion-text color="darker">{{ place.title }}</h2>\n  <p class="text-small bold no-margin" ion-text color="dark">{{ place.category.title }}</p>\n  <star-rating *ngIf="place.rating"\n    [starType]="\'svg\'"\n    [size]="\'small\'"\n    [readOnly]="true"\n    [showHalfStars]="false"\n    [rating]="place.rating">\n  </star-rating>\n  <div item-end *ngIf="location">\n    <span class="text-small bold" ion-text color="primary">\n      {{ place.distance(location) }}\n    </span>\n  </div>\n</ion-item>\n<ion-row>\n  <ion-col col-12>\n    <button ion-button block small round color="primary" (click)="goToPlace()">\n      {{ \'DISCOVER_THIS_PLACE\' | translate }}\n    </button>\n  </ion-col>\n</ion-row>\n'/*ion-inline-end:"/Users/andersonouriques/Development/personal/seekinterest-ui/src/components/info-window/info-window.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */]])
    ], InfoWindowComponent);
    return InfoWindowComponent;
}());

//# sourceMappingURL=info-window.js.map

/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_empty_view_empty_view_module__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_img_fallback__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_lazyload_image__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_lazyload_image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng_lazyload_image__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic2_rating__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_image_loader__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_components_module__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular_star_rating__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_3__components_empty_view_empty_view_module__["a" /* EmptyViewModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_img_fallback__["a" /* ImgFallbackModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng_lazyload_image__["LazyLoadImageModule"],
                __WEBPACK_IMPORTED_MODULE_6_ionic2_rating__["a" /* Ionic2RatingModule */],
                __WEBPACK_IMPORTED_MODULE_7_ionic_image_loader__["b" /* IonicImageLoader */],
                __WEBPACK_IMPORTED_MODULE_8__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_9_angular_star_rating__["a" /* StarRatingModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_3__components_empty_view_empty_view_module__["a" /* EmptyViewModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_img_fallback__["a" /* ImgFallbackModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng_lazyload_image__["LazyLoadImageModule"],
                __WEBPACK_IMPORTED_MODULE_6_ionic2_rating__["a" /* Ionic2RatingModule */],
                __WEBPACK_IMPORTED_MODULE_7_ionic_image_loader__["b" /* IonicImageLoader */],
                __WEBPACK_IMPORTED_MODULE_8__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_9_angular_star_rating__["a" /* StarRatingModule */],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptyViewModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__empty_view__ = __webpack_require__(602);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EmptyViewModule = (function () {
    function EmptyViewModule() {
    }
    EmptyViewModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__empty_view__["a" /* EmptyView */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__empty_view__["a" /* EmptyView */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__empty_view__["a" /* EmptyView */]
            ]
        })
    ], EmptyViewModule);
    return EmptyViewModule;
}());

//# sourceMappingURL=empty-view.module.js.map

/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptyView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmptyView = (function () {
    function EmptyView() {
        this.text = '';
        this.icon = 'alert';
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], EmptyView.prototype, "text", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], EmptyView.prototype, "icon", void 0);
    EmptyView = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'empty-view',template:/*ion-inline-start:"/Users/andersonouriques/Development/personal/seekinterest-ui/src/components/empty-view/empty-view.html"*/'<div class="container">\n  <ion-icon [name]="icon"></ion-icon>\n  <p ion-item no-lines>{{ text }}</p>\n</div>\n'/*ion-inline-end:"/Users/andersonouriques/Development/personal/seekinterest-ui/src/components/empty-view/empty-view.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], EmptyView);
    return EmptyView;
}());

//# sourceMappingURL=empty-view.js.map

/***/ }),

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ionic2RatingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic2_rating__ = __webpack_require__(598);




var Ionic2RatingModule = (function () {
    function Ionic2RatingModule() {
    }
    Ionic2RatingModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [
                        __WEBPACK_IMPORTED_MODULE_3__ionic2_rating__["a" /* Ionic2Rating */]
                    ],
                    exports: [
                        __WEBPACK_IMPORTED_MODULE_3__ionic2_rating__["a" /* Ionic2Rating */]
                    ],
                    imports: [
                        __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */]
                    ],
                    schemas: [
                        __WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]
                    ]
                },] },
    ];
    /** @nocollapse */
    Ionic2RatingModule.ctorParameters = [];
    return Ionic2RatingModule;
}());
//# sourceMappingURL=ionic2-rating.module.js.map

/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_window_info_window__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic2_rating__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_image_loader__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_star_rating__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__info_window_info_window__["a" /* InfoWindowComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__info_window_info_window__["a" /* InfoWindowComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__info_window_info_window__["a" /* InfoWindowComponent */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic2_rating__["a" /* Ionic2RatingModule */],
                __WEBPACK_IMPORTED_MODULE_5_ionic_image_loader__["b" /* IonicImageLoader */],
                __WEBPACK_IMPORTED_MODULE_6_angular_star_rating__["a" /* StarRatingModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__info_window_info_window__["a" /* InfoWindowComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(69);


var BasePage = (function () {
    function BasePage(injector) {
        this.loadingCtrl = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]);
        this.toastCtrl = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]);
        this.navCtrl = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]);
        this.alertCtrl = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]);
        this.navParams = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]);
        this.translate = injector.get(__WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["c" /* TranslateService */]);
        var menu = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]);
        menu.swipeEnable(this.enableMenuSwipe());
    }
    BasePage.prototype.showLoadingView = function () {
        var _this = this;
        this.isErrorViewVisible = false;
        this.isEmptyViewVisible = false;
        this.isContentViewVisible = false;
        this.isLoadingViewVisible = true;
        return new Promise(function (resolve) {
            _this.translate.get('LOADING').subscribe(function (loadingText) {
                _this.loader = _this.loadingCtrl.create({
                    content: "<p class=\"bold\">" + loadingText + "</p>"
                });
                _this.loader.present();
                resolve();
            });
        });
    };
    BasePage.prototype.dismissLoadingView = function () {
        if (this.loader) {
            this.loader.dismiss().catch(function (e) { return console.log('ERROR CATCH: LoadingController dismiss', e); });
        }
    };
    BasePage.prototype.showContentView = function () {
        this.isErrorViewVisible = false;
        this.isEmptyViewVisible = false;
        this.isLoadingViewVisible = false;
        this.isContentViewVisible = true;
        this.dismissLoadingView();
    };
    BasePage.prototype.showEmptyView = function () {
        this.isErrorViewVisible = false;
        this.isLoadingViewVisible = false;
        this.isContentViewVisible = false;
        this.isEmptyViewVisible = true;
        this.dismissLoadingView();
    };
    BasePage.prototype.showErrorView = function () {
        this.isLoadingViewVisible = false;
        this.isContentViewVisible = false;
        this.isEmptyViewVisible = false;
        this.isErrorViewVisible = true;
        this.dismissLoadingView();
    };
    BasePage.prototype.onRefreshComplete = function (data) {
        if (data === void 0) { data = null; }
        if (this.refresher) {
            this.refresher.complete();
        }
        if (this.infiniteScroll) {
            this.infiniteScroll.complete();
            if (data && data.length === 0) {
                this.infiniteScroll.enable(false);
            }
            else {
                this.infiniteScroll.enable(true);
            }
        }
    };
    BasePage.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    BasePage.prototype.showConfirm = function (message) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.translate.get(['OK', 'CANCEL']).subscribe(function (values) {
                var confirm = _this.alertCtrl.create({
                    title: '',
                    message: message,
                    buttons: [{
                            text: values.CANCEL,
                            handler: function () {
                                reject();
                            }
                        }, {
                            text: values.OK,
                            handler: function () {
                                resolve(true);
                            }
                        }]
                });
                confirm.present();
            });
        });
    };
    BasePage.prototype.navigateTo = function (page, params) {
        if (params === void 0) { params = {}; }
        this.navCtrl.push(page, params);
    };
    BasePage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    BasePage.prototype.getTrans = function (key) {
        return this.translate.get(key).toPromise();
    };
    return BasePage;
}());

//# sourceMappingURL=base-page.js.map

/***/ }),

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_page_base_page__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_post__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__(201);
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




var PostListPage = (function (_super) {
    __extends(PostListPage, _super);
    function PostListPage(injector, renderer, postService) {
        var _this = _super.call(this, injector) || this;
        _this.renderer = renderer;
        _this.postService = postService;
        _this.posts = [];
        _this.params = {};
        _this.params.limit = 20;
        _this.params.page = 0;
        return _this;
    }
    PostListPage.prototype.enableMenuSwipe = function () {
        return false;
    };
    PostListPage.prototype.ionViewDidLoad = function () {
        this.showLoadingView();
        this.loadData();
    };
    PostListPage.prototype.onImageLoad = function (imgLoader) {
        this.renderer.setElementClass(imgLoader.element, 'fade-in', true);
    };
    PostListPage.prototype.loadData = function (refresher) {
        if (refresher === void 0) { refresher = null; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var posts, _i, posts_1, post, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.refresher = refresher;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.postService.load(this.params)];
                    case 2:
                        posts = _a.sent();
                        for (_i = 0, posts_1 = posts; _i < posts_1.length; _i++) {
                            post = posts_1[_i];
                            this.posts.push(post);
                        }
                        if (this.posts.length) {
                            this.showContentView();
                        }
                        else {
                            this.showEmptyView();
                        }
                        this.onRefreshComplete(posts);
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        this.translate.get('ERROR_NETWORK').subscribe(function (str) { return _this.showToast(str); });
                        this.showContentView();
                        this.onRefreshComplete();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PostListPage.prototype.onLoadMore = function (infiniteScroll) {
        this.infiniteScroll = infiniteScroll;
        this.params.page++;
        this.loadData();
    };
    PostListPage.prototype.goToPlace = function (place) {
        this.navigateTo('PlaceDetailPage', {
            place: place
        });
    };
    PostListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-post-list-page',template:/*ion-inline-start:"/Users/andersonouriques/Development/personal/seekinterest-ui/src/pages/post-list-page/post-list-page.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ \'POSTS\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="loadData($event)">\n    <ion-refresher-content pullingText="{{ \'PULL_TO_REFRESH\' | translate }}" refreshingText="{{ \'REFRESHING\' | translate }}">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <empty-view *ngIf="isErrorViewVisible" icon="alert" [text]="\'ERROR_NETWORK\' | translate">\n  </empty-view>\n\n  <empty-view *ngIf="isEmptyViewVisible" icon="list-box" [text]="\'EMPTY_DATA\' | translate">\n  </empty-view>\n\n  <section [@staggerIn]="posts.length">\n    <ion-card class="shadow" *ngFor="let post of posts" color="light">\n\n      <div class="card-image">\n        <img-loader (load)="onImageLoad($event)" [src]="post.image?.url()">\n        </img-loader>\n      </div>\n\n      <ion-card-content>\n        <h2 class="bold">{{ post.title }}</h2>\n        <p>{{ post.body }}</p>\n      </ion-card-content>\n\n      <ion-row>\n        <ion-col>\n          <button ion-button *ngIf="post.place" small color="primary" (click)="goToPlace(post.place)">\n            {{ \'VIEW_PLACE\' | translate }}\n          </button>\n        </ion-col>\n        <ion-col>\n        </ion-col>\n        <ion-col align-self-end text-center>\n          <ion-note>\n            {{ post.createdAt | date:\'dd/MM/yyyy H:mm\' }}\n          </ion-note>\n        </ion-col>\n      </ion-row>\n\n    </ion-card>\n  </section>\n\n  <ion-infinite-scroll (ionInfinite)="onLoadMore($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/andersonouriques/Development/personal/seekinterest-ui/src/pages/post-list-page/post-list-page.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* trigger */])('staggerIn', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* transition */])('* => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["f" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* style */])({ opacity: 0, transform: "translate3d(0,10px,0)" }), { optional: true }),
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["f" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* stagger */])('100ms', [Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('300ms', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* style */])({ opacity: 1, transform: "translate3d(0,0,0)" }))]), { optional: true })
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_2__providers_post__["a" /* Post */]])
    ], PostListPage);
    return PostListPage;
}(__WEBPACK_IMPORTED_MODULE_1__base_page_base_page__["a" /* BasePage */]));

//# sourceMappingURL=post-list-page.js.map

/***/ })

});
//# sourceMappingURL=10.js.map