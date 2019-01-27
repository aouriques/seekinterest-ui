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
import { Component, Injector, ViewChild, ElementRef, ComponentFactoryResolver } from '@angular/core';
import { Place } from '../../providers/place-service';
import { MapStyle } from '../../providers/map-style';
import { BasePage } from '../base-page/base-page';
import { LocalStorage } from '../../providers/local-storage';
import { Geolocation } from '@ionic-native/geolocation';
import { AppConfig } from '../../app/app.config';
import { InfoWindowComponent } from '../../components/info-window/info-window';
var MapPage = (function (_super) {
    __extends(MapPage, _super);
    function MapPage(injector, resolver, storage, placeService, geolocation) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.resolver = resolver;
        _this.storage = storage;
        _this.placeService = placeService;
        _this.geolocation = geolocation;
        _this.params = {};
        _this.markers = [];
        _this.mapInitialised = false;
        _this.zoomToFit = true;
        return _this;
    }
    MapPage.prototype.enableMenuSwipe = function () {
        return false;
    };
    MapPage.prototype.ionViewDidLoad = function () {
        if (typeof google == 'undefined' || typeof google.maps == 'undefined') {
            this.loadGoogleMaps();
        }
        else {
            this.initMap();
        }
    };
    MapPage.prototype.ionViewDidEnter = function () { };
    MapPage.prototype.ionViewDidLeave = function () { };
    MapPage.prototype.loadGoogleMaps = function () {
        var _this = this;
        this.showLoadingView();
        window['mapInit'] = function () {
            _this.showContentView();
            _this.initMap();
        };
        var apiKey = AppConfig.GOOGLE_MAPS_API_KEY;
        var script = document.createElement('script');
        script.id = 'googleMaps';
        script.src = "https://maps.google.com/maps/api/js?key=" + apiKey + "&callback=mapInit";
        document.body.appendChild(script);
    };
    MapPage.prototype.initMap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var mapOptions, options, pos, _a, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.snazzyInfoWindow = require('snazzy-info-window');
                        this.geocoder = new google.maps.Geocoder();
                        this.mapInitialised = true;
                        mapOptions = {
                            styles: MapStyle.light(),
                            zoom: 2,
                            center: { lat: 0, lng: 0 },
                            mapTypeId: google.maps.MapTypeId.ROADMAP
                        };
                        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        options = {
                            enableHighAccuracy: true,
                            timeout: 20000,
                            maximumAge: 60000
                        };
                        return [4 /*yield*/, this.geolocation.getCurrentPosition(options)];
                    case 2:
                        pos = _b.sent();
                        this.params.location = pos.coords;
                        this.location = pos.coords;
                        _a = this.params;
                        return [4 /*yield*/, this.storage.unit];
                    case 3:
                        _a.unit = _b.sent();
                        this.loadData();
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _b.sent();
                        console.warn(err_1);
                        this.translate.get('ERROR_LOCATION_UNAVAILABLE').subscribe(function (str) { return _this.showToast(str); });
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    MapPage.prototype.setMapOnAll = function (map) {
        this.markers.forEach(function (marker) {
            marker.setMap(map);
        });
    };
    MapPage.prototype.goToPlace = function (place) {
        this.navigateTo('PlaceDetailPage', { place: place });
    };
    MapPage.prototype.onSearchAddress = function (event) {
        var _this = this;
        if (!this.mapInitialised)
            return;
        var query = event.target.value;
        this.geocoder.geocode({ address: query }, function (results, status) {
            if (status === 'OK') {
                var target = results[0].geometry.location;
                _this.map.panTo(target);
                _this.params.location = {
                    latitude: target.lat(),
                    longitude: target.lng()
                };
                _this.zoomToFit = false;
                _this.showLoadingView();
                _this.onReload();
            }
        });
    };
    MapPage.prototype.loadData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var places, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.placeService.load(this.params)];
                    case 1:
                        places = _a.sent();
                        this.onPlacesLoaded(places);
                        this.showContentView();
                        if (!places.length) {
                            this.translate.get('EMPTY_PLACES').subscribe(function (str) { return _this.showToast(str); });
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        console.log(err_2);
                        this.translate.get('ERROR_NETWORK').subscribe(function (str) { return _this.showToast(str); });
                        this.showContentView();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MapPage.prototype.onPlacesLoaded = function (places) {
        var bounds = new google.maps.LatLngBounds();
        var points = [];
        for (var _i = 0, places_1 = places; _i < places_1.length; _i++) {
            var place = places_1[_i];
            var position = new google.maps.LatLng(place.location.latitude, place.location.longitude);
            bounds.extend(position);
            var marker = new google.maps.Marker({
                icon: {
                    url: place.category.icon ? place.category.icon.url() : './assets/img/pin.png',
                    scaledSize: new google.maps.Size(32, 32),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(0, 0)
                },
                position: position,
                map: this.map,
            });
            this.markers.push(marker);
            var factory = this.resolver.resolveComponentFactory(InfoWindowComponent);
            var component = factory.create(this.injector);
            component.instance.place = place;
            component.instance.location = this.params.location;
            component.changeDetectorRef.detectChanges();
            new this.snazzyInfoWindow({
                marker: marker,
                content: component.location.nativeElement,
                backgroundColor: '#fff',
                fontColor: '#444',
                fontSize: '12px',
                padding: '8px',
                wrapperClass: 'info-window-wrapper',
                showCloseButton: false,
                panOnOpen: true,
                closeWhenOthersOpen: true,
                offset: {
                    top: '-4px',
                    left: '16px'
                }
            });
            points.push(position);
        }
        if (points.length && this.zoomToFit) {
            this.map.fitBounds(bounds);
        }
    };
    MapPage.prototype.onReload = function () {
        this.setMapOnAll(null);
        this.markers = [];
        this.loadData();
    };
    MapPage.prototype.onSearchButtonTapped = function () {
        if (!this.mapInitialised)
            return;
        var bounds = this.map.getBounds();
        this.params.location = [{
                latitude: bounds.getSouthWest().lat(),
                longitude: bounds.getSouthWest().lng(),
            }, {
                latitude: bounds.getNorthEast().lat(),
                longitude: bounds.getNorthEast().lng()
            }];
        this.zoomToFit = false;
        this.showLoadingView();
        this.onReload();
    };
    __decorate([
        ViewChild('map'),
        __metadata("design:type", ElementRef)
    ], MapPage.prototype, "mapElement", void 0);
    MapPage = __decorate([
        Component({
            selector: 'page-map-page',template:/*ion-inline-start:"/Users/andersonouriques/Development/personal/seekinterest-ui/src/pages/map-page/map-page.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ "MAP" | translate }}</ion-title>\n  </ion-navbar>\n  <ion-toolbar color="primary">\n    <ion-searchbar color="light" mode="ios"\n      placeholder="{{ \'ENTER_ADDRESS\' | translate }}"\n      (keyup.enter)="onSearchAddress($event)"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div #map class="map" id="map"></div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="secondary" text-center>\n    <button ion-button outline round color="light" (click)="onSearchButtonTapped()">\n      {{ "SEARCH_THIS_AREA" | translate }}\n    </button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/andersonouriques/Development/personal/seekinterest-ui/src/pages/map-page/map-page.html"*/
        }),
        __metadata("design:paramtypes", [Injector,
            ComponentFactoryResolver,
            LocalStorage,
            Place,
            Geolocation])
    ], MapPage);
    return MapPage;
}(BasePage));
export { MapPage };
//# sourceMappingURL=map-page.js.map