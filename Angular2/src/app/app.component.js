"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.Name = 'Somu';
        this.users = [
            { name: 'Jilles', age: 21 },
            { name: 'Todd', age: 24 },
            { name: 'Lisa', age: 18 }
        ];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <ul>\n    <li style=\"display:inline\"><a routerLink=\"/\">Home</a></li>\n    <li style=\"display:inline\"><a routerLink=\"/about\">About</a></li>\n  </ul><br/>\n     <about></about>\n  <router-outlet>\n  <a routerLink=\"/\">UserHome</a>\n<a routerLink=\"/about\">UserAbout</a>\n  </router-outlet>",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map