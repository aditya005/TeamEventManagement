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
var router_1 = require("@angular/router");
var login_service_1 = require("./login.service");
var loginComponent = (function () {
    function loginComponent(loginService, router) {
        this.userName = "";
        this.password = "";
        this._loginService = loginService;
        this._router = router;
    }
    loginComponent.prototype.clicked = function () {
        var v = this;
        this._loginService.getToken(this.userName, this.password).subscribe(function (res) {
            debugger;
            console.log(res.access_token);
            console.log(res.userName);
            localStorage.setItem("access_token", res.access_token);
            localStorage.setItem("userName", res.userName);
            v._router.navigate(["/forgotpassword"]);
        }, function (err) {
            console.log(err);
        });
    };
    return loginComponent;
}());
loginComponent = __decorate([
    core_1.Component({
        selector: "login-component",
        templateUrl: "./app/Login/Login.html"
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [login_service_1.loginService, router_1.Router])
], loginComponent);
exports.loginComponent = loginComponent;
//# sourceMappingURL=login.component.js.map