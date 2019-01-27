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
var ParseFile = (function () {
    function ParseFile() {
    }
    ParseFile.upload = function (base64) {
        return new Promise(function (resolve, reject) {
            var parseFile = new Parse.File('image.jpg', { base64: base64 });
            parseFile.save().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    ParseFile = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], ParseFile);
    return ParseFile;
}());
export { ParseFile };
//# sourceMappingURL=parse-file-service.js.map