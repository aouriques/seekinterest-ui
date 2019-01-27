var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPlacePage } from './add-place-page';
import { SharedModule } from '../../shared.module';
var AddPlacePageModule = (function () {
    function AddPlacePageModule() {
    }
    AddPlacePageModule = __decorate([
        NgModule({
            declarations: [
                AddPlacePage,
            ],
            imports: [
                IonicPageModule.forChild(AddPlacePage),
                SharedModule
            ],
            exports: [
                AddPlacePage
            ]
        })
    ], AddPlacePageModule);
    return AddPlacePageModule;
}());
export { AddPlacePageModule };
//# sourceMappingURL=add-place-page.module.js.map