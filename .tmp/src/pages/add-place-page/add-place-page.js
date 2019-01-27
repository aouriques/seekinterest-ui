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
import { Component, Injector, ElementRef, ViewChild } from '@angular/core';
import { ActionSheetController } from 'ionic-angular';
import { BasePage } from '../base-page/base-page';
import { Place } from '../../providers/place-service';
import { MapStyle } from '../../providers/map-style';
import { ParseFile } from '../../providers/parse-file-service';
import { Category } from '../../providers/categories';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { AppConfig } from '../../app/app.config';
import swal from 'sweetalert';
var AddPlacePage = (function (_super) {
    __extends(AddPlacePage, _super);
    function AddPlacePage(injector, camera, geolocation, categoryService, actionSheetCtrl) {
        var _this = _super.call(this, injector) || this;
        _this.camera = camera;
        _this.geolocation = geolocation;
        _this.categoryService = categoryService;
        _this.actionSheetCtrl = actionSheetCtrl;
        _this.categories = [];
        _this.location = {};
        _this.mapInitialised = false;
        _this.form = new FormGroup({
            name: new FormControl('', Validators.required),
            category: new FormControl(null, Validators.required),
            description: new FormControl('', Validators.required),
            address: new FormControl(''),
            phone: new FormControl(''),
            website: new FormControl('')
        });
        return _this;
    }
    AddPlacePage.prototype.enableMenuSwipe = function () {
        return true;
    };
    AddPlacePage.prototype.ionViewDidLoad = function () {
        if (typeof google == 'undefined' || typeof google.maps == 'undefined') {
            this.loadGoogleMaps();
        }
        else {
            this.initMap();
        }
    };
    AddPlacePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.categoryService.load().then(function (categories) {
            _this.categories = categories;
        }).catch(function (err) { return console.warn(err.message); });
    };
    AddPlacePage.prototype.loadGoogleMaps = function () {
        var _this = this;
        window['mapInit'] = function () {
            _this.initMap();
        };
        var apiKey = AppConfig.GOOGLE_MAPS_API_KEY;
        var script = document.createElement('script');
        script.id = 'googleMaps';
        script.src = "https://maps.google.com/maps/api/js?key=" + apiKey + "&callback=mapInit";
        document.body.appendChild(script);
    };
    AddPlacePage.prototype.initMap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var mapOptions, options, pos, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.geocoder = new google.maps.Geocoder();
                        this.mapInitialised = true;
                        mapOptions = {
                            styles: MapStyle.light(),
                            zoom: 2,
                            center: { lat: 0, lng: 0 },
                            mapTypeId: google.maps.MapTypeId.ROADMAP
                        };
                        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        options = {
                            enableHighAccuracy: true,
                            timeout: 20000,
                            maximumAge: 60000
                        };
                        return [4 /*yield*/, this.geolocation.getCurrentPosition(options)];
                    case 2:
                        pos = _a.sent();
                        this.location.lat = pos.coords.latitude;
                        this.location.lng = pos.coords.longitude;
                        this.marker = new google.maps.Marker({
                            icon: {
                                url: './assets/img/pin.png',
                                scaledSize: new google.maps.Size(32, 32),
                                origin: new google.maps.Point(0, 0),
                                anchor: new google.maps.Point(0, 0)
                            },
                            position: {
                                lat: pos.coords.latitude,
                                lng: pos.coords.longitude
                            },
                            map: this.map,
                        });
                        this.map.panTo(this.location);
                        this.map.setZoom(15);
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.warn(err_1.message);
                        this.translate.get('ERROR_LOCATION_UNAVAILABLE').subscribe(function (str) { return _this.showToast(str); });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AddPlacePage.prototype.onSearchAddress = function (event) {
        var _this = this;
        if (!this.mapInitialised)
            return;
        var query = event.target.value;
        this.geocoder.geocode({ address: query }, function (results, status) {
            if (status === 'OK') {
                var target = results[0].geometry.location;
                _this.map.panTo(target);
                _this.map.setZoom(15);
                _this.marker.setPosition(target);
                _this.location.lat = target.lat();
                _this.location.lng = target.lng();
            }
        });
    };
    AddPlacePage.prototype.chooseImage = function (sourceType) {
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
                        _a.image = _b.sent();
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
    AddPlacePage.prototype.onUpload = function () {
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
    AddPlacePage.prototype.preparePlaceData = function () {
        var place = new Place;
        place.title = this.form.value.name;
        place.category = this.form.value.category;
        place.description = this.form.value.description;
        place.address = this.form.value.address;
        place.website = this.form.value.website;
        place.phone = this.form.value.phone;
        place.image = this.image;
        if (this.location) {
            var position = {
                lat: this.location.lat,
                lng: this.location.lng
            };
            place.location = position;
        }
        return place;
    };
    AddPlacePage.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var trans, trans, trans, place, trans, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.form.invalid) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getTrans('INVALID_FORM')];
                    case 1:
                        trans = _a.sent();
                        return [2 /*return*/, this.showToast(trans)];
                    case 2:
                        if (!!this.location) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.getTrans('INVALID_LOCATION')];
                    case 3:
                        trans = _a.sent();
                        return [2 /*return*/, this.showToast(trans)];
                    case 4:
                        if (!!this.image) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.getTrans('INVALID_PHOTO')];
                    case 5:
                        trans = _a.sent();
                        return [2 /*return*/, this.showToast(trans)];
                    case 6:
                        _a.trys.push([6, 10, , 11]);
                        return [4 /*yield*/, this.showLoadingView()];
                    case 7:
                        _a.sent();
                        place = this.preparePlaceData();
                        return [4 /*yield*/, place.save()];
                    case 8:
                        _a.sent();
                        this.form.reset();
                        return [4 /*yield*/, this.getTrans(['GOOD_JOB', 'PLACE_ADDED'])];
                    case 9:
                        trans = _a.sent();
                        swal(trans.GOOD_JOB, trans.PLACE_ADDED, 'success');
                        this.showContentView();
                        return [3 /*break*/, 11];
                    case 10:
                        err_2 = _a.sent();
                        console.warn(err_2);
                        this.showContentView();
                        this.translate.get('ERROR_NETWORK').subscribe(function (str) { return _this.showToast(str); });
                        return [3 /*break*/, 11];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        ViewChild('map'),
        __metadata("design:type", ElementRef)
    ], AddPlacePage.prototype, "mapElement", void 0);
    AddPlacePage = __decorate([
        Component({
            selector: 'page-add-place-page',template:/*ion-inline-start:"/Users/andersonouriques/Development/personal/seekinterest-ui/src/pages/add-place-page/add-place-page.html"*/'<ion-header no-border>\n  <ion-navbar class="transparent" color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ "ADD_PLACE" | translate }}</ion-title>\n  </ion-navbar>\n  <ion-toolbar color="primary">\n    <ion-searchbar color="light" mode="ios"\n      [placeholder]="\'ENTER_ADDRESS\' | translate"\n      (keyup.enter)="onSearchAddress($event)">\n    </ion-searchbar>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div #map class="map" id="map"></div>\n\n  <ion-list>\n\n    <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate>\n\n      <ion-item class="transparent">\n        <ion-label stacked color="light">{{ "NAME" | translate }} *</ion-label>\n        <ion-input type="text" formControlName="name"></ion-input>\n      </ion-item>\n\n      <ion-item class="transparent">\n        <ion-label stacked color="light">{{ "CATEGORY" | translate }} *</ion-label>\n        <ion-select formControlName="category">\n          <ion-option *ngFor="let category of categories" [value]="category">\n            {{ category.title }}\n          </ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item class="transparent">\n        <ion-label stacked color="light">{{ "DESCRIPTION" | translate }} *</ion-label>\n        <ion-textarea rows="4" formControlName="description"></ion-textarea>\n      </ion-item>\n\n      <ion-item class="transparent">\n        <ion-label stacked color="light">{{ "WEBSITE" | translate }}</ion-label>\n        <ion-input type="url" formControlName="website"></ion-input>\n      </ion-item>\n\n      <ion-item class="transparent">\n        <ion-label stacked color="light">{{ "ADDRESS" | translate }}</ion-label>\n        <ion-input type="text" formControlName="address">\n        </ion-input>\n      </ion-item>\n\n      <ion-item class="transparent">\n        <ion-label stacked color="light">{{ "PHONE" | translate }}</ion-label>\n        <ion-input type="text" formControlName="phone"></ion-input>\n      </ion-item>\n\n      <ion-item class="transparent">\n        <ion-label class="text-small" color="light">\n          {{ "UPLOAD_PICTURE" | translate }}\n        </ion-label>\n        <button type="button" ion-button clear item-end icon-only (click)="onUpload()">\n          <ion-icon name="camera" item-start color="light"></ion-icon>\n        </button>\n      </ion-item>\n\n      <div padding>\n        <button type="submit" ion-button block round color="light">\n          {{ "SUBMIT" | translate }}\n        </button>\n      </div>\n\n    </form>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/andersonouriques/Development/personal/seekinterest-ui/src/pages/add-place-page/add-place-page.html"*/
        }),
        __metadata("design:paramtypes", [Injector,
            Camera,
            Geolocation,
            Category,
            ActionSheetController])
    ], AddPlacePage);
    return AddPlacePage;
}(BasePage));
export { AddPlacePage };
//# sourceMappingURL=add-place-page.js.map