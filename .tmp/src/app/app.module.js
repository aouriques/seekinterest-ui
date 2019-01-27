var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Category } from '../providers/categories';
import { Place } from '../providers/place-service';
import { Review } from '../providers/review-service';
import { ParseFile } from '../providers/parse-file-service';
import { User } from '../providers/user-service';
import { Slide } from '../providers/slide';
import { Post } from '../providers/post';
import { LocalStorage } from '../providers/local-storage';
import { Preference } from '../providers/preference';
import { MapStyle } from '../providers/map-style';
import { Installation } from '../providers/installation';
import { WindowRef } from '../providers/window-ref';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { File } from '@ionic-native/file';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { CallNumber } from '@ionic-native/call-number';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SocialSharing } from '@ionic-native/social-sharing';
import { GoogleMaps } from '@ionic-native/google-maps';
import { AppVersion } from '@ionic-native/app-version';
import { HeaderColor } from '@ionic-native/header-color';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { AdMobFree } from '@ionic-native/admob-free';
import { BrowserTab } from '@ionic-native/browser-tab';
import { Facebook } from '@ionic-native/facebook';
import { IonicStorageModule } from '@ionic/storage';
import { ImgFallbackModule } from 'ngx-img-fallback';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { IonicImageLoader } from 'ionic-image-loader';
import { StarRatingModule } from 'angular-star-rating';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
export function HttpLoaderFactory(http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp
            ],
            imports: [
                BrowserModule,
                BrowserAnimationsModule,
                IonicModule.forRoot(MyApp, {}, {
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
                IonicStorageModule.forRoot(),
                ImgFallbackModule,
                LazyLoadImageModule,
                HttpClientModule,
                StarRatingModule.forRoot(),
                IonicImageLoader.forRoot(),
                TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [HttpClient]
                    }
                })
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                MyApp,
            ],
            providers: [
                Category,
                Place,
                ParseFile,
                Review,
                LocalStorage,
                User,
                Slide,
                Post,
                Installation,
                WindowRef,
                StatusBar,
                SplashScreen,
                Geolocation,
                LaunchNavigator,
                CallNumber,
                InAppBrowser,
                SocialSharing,
                GoogleMaps,
                Camera,
                GoogleAnalytics,
                AdMobFree,
                AppVersion,
                HeaderColor,
                BrowserTab,
                Facebook,
                File,
                Preference, MapStyle, { provide: ErrorHandler, useClass: IonicErrorHandler }
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map