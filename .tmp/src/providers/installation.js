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
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { AppConfig } from '../app/app.config';
var Installation = (function () {
    function Installation(http) {
        this.http = http;
    }
    Installation.prototype.save = function (id, data) {
        var headers = new HttpHeaders().set('X-Parse-Application-Id', AppConfig.APP_ID);
        var bodyString = JSON.stringify(data);
        var url = AppConfig.SERVER_URL + "/installations/" + id;
        return this.http.put(url, bodyString, { headers: headers })
            .catch(function (error) { return Observable.throw(error || 'Server error'); });
    };
    Installation = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], Installation);
    return Installation;
}());
export { Installation };
//# sourceMappingURL=installation.js.map