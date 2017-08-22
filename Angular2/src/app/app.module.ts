import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router"

import { AppComponent } from './app.component';
import { loginComponent } from "./Login/login.component";
import { Forgetclass } from "./Forget/Forget";
import { errorComponent } from "./Error/error.component";


//Route Table
const appRoute: Routes = [
    { path: "home", component: loginComponent },
    { path: "forgotpassword", component: Forgetclass },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "**", component: errorComponent }
]

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoute, { useHash: true })],
    declarations: [AppComponent, loginComponent, Forgetclass, errorComponent],
  bootstrap: [AppComponent ]
})
export class AppModule { }
 