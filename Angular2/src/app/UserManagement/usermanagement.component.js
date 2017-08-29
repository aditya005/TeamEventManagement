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
var usermanagement_service_1 = require("./usermanagement.service");
var userManagementComponent = (function () {
    function userManagementComponent(_urserManagement) {
        this._urserManagement = _urserManagement;
        this.ulist = [];
        this.user = null;
        this.edit = false;
        this.create = false;
        this.editUser = {};
        this.createUser = {};
    }
    userManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._urserManagement.getUsers(null).subscribe(function (res) { return _this.ulist = res; });
    };
    userManagementComponent.prototype.getUser = function (obj) {
        this.user = obj;
        this.editUser.UserName = this.user.UserName;
        this.editUser.FirstName = this.user.FirstName;
        this.editUser.LastName = this.user.LastName;
        this.editUser.Age = this.user.Age;
        this.editUser.Address = this.user.Address;
        this.editUser.Role = this.user.Role;
        this.editUser.Gender = this.user.Gender;
        this.editUser.PhoneNumber = this.user.PhoneNumber;
        this.editUser.Status = this.user.Status;
    };
    userManagementComponent.prototype.Editing = function () {
        this.edit = true;
        this.editUser.UserName = this.user.UserName;
        this.editUser.FirstName = this.user.FirstName;
        this.editUser.LastName = this.user.LastName;
        this.editUser.Age = this.user.Age;
        this.editUser.Address = this.user.Address;
        this.editUser.Role = this.user.Role;
        this.editUser.Gender = this.user.Gender;
        this.editUser.PhoneNumber = this.user.PhoneNumber;
        this.editUser.Status = this.user.Status;
    };
    userManagementComponent.prototype.Canceling = function () {
        this.edit = false;
        this.create = false;
        this.editUser = {};
        this.createUser = {};
    };
    userManagementComponent.prototype.Updating = function () {
        console.log("Updating");
        if (this.editUser.Password != this.editUser.ConfirmPassword) {
            this.Editing();
        }
        else {
            var ur = this.user;
            var lur = this.editUser;
            this._urserManagement.editUser(this.editUser).subscribe(function (res) { alert("Updated Successfully"); lur = ur; console.log(res); }, function (error) { alert(error); });
            this.Canceling();
            this.Hiding();
        }
    };
    userManagementComponent.prototype.Deleting = function () {
        console.log("Deleting");
        this._urserManagement.deleteUser(this.editUser.UserName).subscribe(function (res) { alert("Deleted Successfully"); console.log(res); }, function (error) { alert(error); });
        ;
        this.Canceling();
        this.Hiding();
    };
    userManagementComponent.prototype.Hiding = function () {
        this.user = null;
    };
    userManagementComponent.prototype.Creating = function () {
        this.create = true;
    };
    userManagementComponent.prototype.Submiting = function (obj) {
        var _this = this;
        this.createUser.Email = this.createUser.UserName;
        this._urserManagement.createUser(obj).subscribe(function (res) { console.log(res); _this.create = false; });
    };
    return userManagementComponent;
}());
userManagementComponent = __decorate([
    core_1.Component({
        selector: "um-component",
        templateUrl: "./app/UserManagement/usermanagement.component.html"
    }),
    __metadata("design:paramtypes", [usermanagement_service_1.userManagementService])
], userManagementComponent);
exports.userManagementComponent = userManagementComponent;
//# sourceMappingURL=usermanagement.component.js.map