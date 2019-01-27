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
import { Component, ViewChild, Renderer } from '@angular/core';
import { Nav, Platform, ToastController, Events, AlertController } from 'ionic-angular';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HeaderColor } from '@ionic-native/header-color';
import Parse from 'parse';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from './app.config';
import { User } from '../providers/user-service';
import { LocalStorage } from '../providers/local-storage';
import { Preference } from '../providers/preference';
import { WindowRef } from '../providers/window-ref';
import { Installation } from '../providers/installation';
import { ImageLoaderConfig } from 'ionic-image-loader';
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
            if (User.getCurrentUser()) {
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
        this.user = User.getCurrentUser();
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
        this.user = User.getCurrentUser();
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
        this.translate.setDefaultLang(AppConfig.DEFAULT_LANG);
        this.storage.lang.then(function (val) {
            var lang = val || AppConfig.DEFAULT_LANG;
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
            var unit = val || AppConfig.DEFAULT_UNIT;
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
        Parse.serverURL = AppConfig.SERVER_URL;
        Parse.initialize(AppConfig.APP_ID);
        User.getInstance();
    };
    MyApp.prototype.setupStatusBar = function () {
        if (this.platform.is('ios')) {
            this.statusBar.overlaysWebView(true);
            this.statusBar.styleDefault();
        }
        else {
            this.statusBar.backgroundColorByHexString(AppConfig.HEADER_COLOR);
        }
    };
    MyApp.prototype.setupAndroidHeaderColor = function () {
        if (AppConfig.HEADER_COLOR && this.platform.is('android')) {
            this.headerColor.tint(AppConfig.HEADER_COLOR);
        }
    };
    MyApp.prototype.setupGoogleAnalytics = function () {
        if (AppConfig.TRACKING_ID) {
            this.googleAnalytics.startTrackerWithId(AppConfig.TRACKING_ID);
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
        if ((page.component === 'FavoritesPage' || page.component === 'AddPlacePage' || page.component === 'SignInPage') && !User.getCurrentUser()) {
            this.nav.push('SignInPage');
        }
        else if (page.component === null && User.getCurrentUser()) {
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
        ViewChild(Nav),
        __metadata("design:type", Nav)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Component({template:/*ion-inline-start:"/Users/andersonouriques/Development/personal/seekinterest-ui/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar class="menu-toolbar" color="light">\n      <ion-item class="transparent" no-lines *ngIf="user">\n        <ion-avatar item-start>\n          <img-loader useImg (load)="onImageLoad($event)"\n            fallback="assets/img/avatar.png"\n            [src]="user.photo?.url()">\n          </img-loader>\n        </ion-avatar>\n        <span class="text-medium bold" ion-text color="light">{{ user.name }}</span>\n      </ion-item>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button class="bold" color="light" menuClose text-uppercase no-lines ion-item detail-none\n        *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon [name]="p.icon" item-start color="primary"></ion-icon>\n        <p ion-text color="primary">\n          {{ p.title }}\n        </p>\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content></ion-nav>\n'/*ion-inline-end:"/Users/andersonouriques/Development/personal/seekinterest-ui/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [Platform,
            Renderer,
            Events,
            LocalStorage,
            TranslateService,
            ToastController,
            Preference,
            StatusBar,
            SplashScreen,
            GoogleAnalytics,
            WindowRef,
            Installation,
            ImageLoaderConfig,
            AlertController,
            User,
            HeaderColor])
    ], MyApp);
    return MyApp;
}());
export { MyApp };
//# sourceMappingURL=app.component.js.map