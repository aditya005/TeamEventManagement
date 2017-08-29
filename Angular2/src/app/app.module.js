"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var auth_guard_1 = require("./Login/auth.guard");
var app_component_1 = require("./app.component");
var login_component_1 = require("./Login/login.component");
var Forget_1 = require("./Forget/Forget");
var error_component_1 = require("./Error/error.component");
var usermanagement_component_1 = require("./UserManagement/usermanagement.component");
var authentication_service_1 = require("./Login/authentication.service");
var login_service_1 = require("./Login/login.service");
var logout_service_1 = require("./Login/logout.service");
var usermanagement_service_1 = require("./UserManagement/usermanagement.service");
//Route Table
var appRoute = [
    { path: "home", component: login_component_1.loginComponent },
    { path: "forgotpassword", component: Forget_1.Forgetclass, canActivate: [auth_guard_1.AuthGuard] },
    { path: "usermanagement", component: usermanagement_component_1.userManagementComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "**", component: error_component_1.errorComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(appRoute, { useHash: true })],
        declarations: [app_component_1.AppComponent, login_component_1.loginComponent, Forget_1.Forgetclass, error_component_1.errorComponent, usermanagement_component_1.userManagementComponent],
        providers: [login_service_1.loginService, logout_service_1.logoutService, usermanagement_service_1.userManagementService, authentication_service_1.authenticationService, auth_guard_1.AuthGuard],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map