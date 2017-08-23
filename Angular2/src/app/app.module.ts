import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from "./Login/auth.guard"

import { AppComponent } from './app.component';
import { loginComponent } from "./Login/login.component";
import { Forgetclass } from "./Forget/Forget";
import { errorComponent } from "./Error/error.component";

import { authenticationService } from "./Login/authentication.service";
import { loginService } from "./Login/login.service";
import { logoutService } from "./Login/logout.service";

//Route Table
const appRoute: Routes = [
    { path: "home", component: loginComponent },
    { path: "forgotpassword", component: Forgetclass, canActivate: [AuthGuard] },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "**", component: errorComponent }
]

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoute, { useHash: true })],
    declarations: [AppComponent, loginComponent, Forgetclass, errorComponent],
    providers: [loginService, logoutService, authenticationService, AuthGuard],
    bootstrap: [AppComponent ]
})
export class AppModule { }
 