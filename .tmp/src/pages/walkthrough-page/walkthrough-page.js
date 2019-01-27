var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { LocalStorage } from '../../providers/local-storage';
var WalkthroughPage = (function () {
    function WalkthroughPage(navCtrl, storage, menu) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.menu = menu;
        this.menu.swipeEnable(false);
        this.storage.skipIntroPage.then(function (skipIntroPage) { return _this.skipIntroPage = skipIntroPage; });
    }
    WalkthroughPage.prototype.ionViewDidLoad = function () {
    };
    WalkthroughPage.prototype.goToHome = function () {
        this.skipIntroPage = true;
        this.storage.skipIntroPage = this.skipIntroPage;
        this.navCtrl.setRoot('HomePage');
    };
    WalkthroughPage = __decorate([
        Component({
            selector: 'page-walkthrough-page',template:/*ion-inline-start:"/Users/andersonouriques/Development/personal/seekinterest-ui/src/pages/walkthrough-page/walkthrough-page.html"*/'<ion-content>\n  <ion-slides pager>\n\n    <ion-slide class="slide-1">\n      <div class="img-wrapper">\n        <img src="assets/img/slide-1.png" class="slide-image" />\n      </div>\n      <div class="caption">\n        <h2 class="slide-title bold" ion-text color="light">\n          {{ \'SLIDE_ONE\' | translate }}\n        </h2>\n      </div>\n    </ion-slide>\n\n    <ion-slide class="slide-2">\n      <div class="img-wrapper">\n        <img src="assets/img/slide-2.png" class="slide-image" />\n      </div>\n      <div class="caption">\n        <h2 class="slide-title bold" ion-text color="light">\n          {{ \'SLIDE_TWO\' | translate }}\n        </h2>\n      </div>\n    </ion-slide>\n\n    <ion-slide class="slide-3">\n      <div class="img-wrapper">\n        <img src="assets/img/slide-3.png" class="slide-image" />\n      </div>\n      <div class="caption">\n        <h2 class="slide-title bold" ion-text color="light">\n          {{ \'SLIDE_THREE\' | translate }}\n        </h2>\n      </div>\n    </ion-slide>\n\n    <ion-slide class="slide-4">\n      <div class="caption">\n        <h2 ion-text color="light">{{ \'SLIDE_FOUR\' | translate }}</h2>\n      </div>\n      <button ion-button large icon-right round color="light" (click)="goToHome()">\n        {{ "GET_STARTED" | translate }}\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n  </ion-slides>\n  <button class="skip-button bold" ion-button clear block color="light" (click)="goToHome()">\n    {{ "SKIP" | translate }}\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/andersonouriques/Development/personal/seekinterest-ui/src/pages/walkthrough-page/walkthrough-page.html"*/
        }),
        __metadata("design:paramtypes", [NavController,
            LocalStorage,
            MenuController])
    ], WalkthroughPage);
    return WalkthroughPage;
}());
export { WalkthroughPage };
//# sourceMappingURL=walkthrough-page.js.map