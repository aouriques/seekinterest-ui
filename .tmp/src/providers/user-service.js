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
import { Injectable } from '@angular/core';
import Parse from 'parse';
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
        return Parse.User.current();
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
            Parse.User.logOut().then(function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    User.prototype.recoverPassword = function (email) {
        return new Promise(function (resolve, reject) {
            Parse.User.requestPasswordReset(email).then(function (success) {
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
        return Parse.FacebookUtils.isLinked(Parse.User.current());
    };
    User.prototype.linkFacebook = function (authData) {
        return new Promise(function (resolve, reject) {
            Parse.FacebookUtils.link(Parse.User.current(), authData, {
                success: function (res) { return resolve(res); }, error: function (err) { return reject(err); }
            });
        });
    };
    User.prototype.unlinkFacebook = function () {
        return new Promise(function (resolve, reject) {
            Parse.FacebookUtils.unlink(Parse.User.current(), {
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
        Injectable(),
        __metadata("design:paramtypes", [])
    ], User);
    return User;
    var User_1;
}(Parse.User));
export { User };
Parse.Object.registerSubclass('_User', User);
//# sourceMappingURL=user-service.js.map