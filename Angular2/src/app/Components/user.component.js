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
var json_service_1 = require("../Service/json.service");
var UserComponent = (function () {
    function UserComponent(postsService) {
        var _this = this;
        this.postsService = postsService;
        this.email = 'raju.user@gmail.com';
        this.name = 'Somu';
        this.address = {
            street: '178',
            city: 'Piscataway',
            state: 'NJ'
        };
        this.hobbies = ['Dance', 'Singing'];
        this.showhobbies = false;
        this.postsService.getposts().subscribe(function (posts) {
            _this.posts = posts;
        });
    }
    UserComponent.prototype.toggle = function () {
        if (this.showhobbies == true) {
            this.showhobbies = false;
        }
        else {
            this.showhobbies = true;
        }
    };
    UserComponent.prototype.Add = function (value) {
        this.hobbies.push(value);
    };
    UserComponent.prototype.Del = function (i) {
        this.hobbies.splice(i, 1);
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'user',
        templateUrl: "user.html",
        providers: [json_service_1.Service]
    }),
    __metadata("design:paramtypes", [json_service_1.Service])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map