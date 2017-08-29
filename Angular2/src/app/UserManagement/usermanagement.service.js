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
var http_1 = require("@angular/http");
require("rxjs/Rx");
var userManagementService = (function () {
    function userManagementService(http) {
        this._http = null;
        this._header = null;
        this._ops = null;
        this._http = http;
        this._header = new http_1.Headers({ "Content-Type": "application/json" });
        this._ops = new http_1.RequestOptions({ headers: this._header });
    }
    userManagementService.prototype.getUsers = function (UserName) {
        console.log("UserManagement Get Service Started");
        if ((UserName != null) || (UserName != undefined)) {
            return this._http.get("http://localhost:55879/api/Account/UserManagement?userName=" + UserName, this._ops).map(function (res) { return res.json(); });
        }
        else {
            return this._http.get("http://localhost:55879/api/Account/UserManagement", this._ops).map(function (res) { return res.json(); });
        }
    };
    userManagementService.prototype.createUser = function (new_obj) {
        console.log("UserManagement Create Service Started");
        return this._http.post("http://localhost:55879/api/Account/UserManagement", new_obj, this._ops).map(function (res) { return res.json(); });
    };
    userManagementService.prototype.editUser = function (obj) {
        console.log("UserManagement Update Service Started");
        return this._http.put("http://localhost:55879/api/Account/UserManagement?userName=" + obj.UserName, obj, this._ops).map(function (res) { return res.json(); });
    };
    userManagementService.prototype.deleteUser = function (UserName) {
        console.log("UserManagement Delete Service Started");
        return this._http.delete("http://localhost:55879/api/Account/UserManagement?userName=" + UserName, this._ops).map(function (res) { return res.json(); });
    };
    return userManagementService;
}());
userManagementService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], userManagementService);
exports.userManagementService = userManagementService;
//# sourceMappingURL=usermanagement.service.js.map