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
var logout_service_1 = require("../Login/logout.service");
var Forgetclass = (function () {
    function Forgetclass(_logout) {
        this._logout = _logout;
        this.data = "";
    }
    Forgetclass.prototype.Logout = function () {
        this._logout.logout();
    };
    return Forgetclass;
}());
Forgetclass = __decorate([
    core_1.Component({
        selector: "forgot-component",
        templateUrl: "././app/Forget/Forget.html"
    }),
    __metadata("design:paramtypes", [logout_service_1.logoutService])
], Forgetclass);
exports.Forgetclass = Forgetclass;
//# sourceMappingURL=Forget.js.map