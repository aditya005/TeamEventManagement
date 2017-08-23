"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var authentication_service_1 = require("../login/authentication.service");
var Forgetclass = (function () {
    function Forgetclass(_auth) {
        this._auth = _auth;
        this.data = "";
        this._auth.auth().subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
            window.location.href = "/home";
        });
    }
    Forgetclass.prototype.Logout = function () {
    };
    return Forgetclass;
}());
Forgetclass = __decorate([
    core_1.Component({
        selector: "forgot-component",
        templateUrl: "././app/Forget/Forget.html",
        providers: [authentication_service_1.authenticationService]
    }),
    __metadata("design:paramtypes", [authentication_service_1.authenticationService])
], Forgetclass);
exports.Forgetclass = Forgetclass;
//# sourceMappingURL=Forget.js.map