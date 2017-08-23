import { Component } from "@angular/core";

import { loginService } from "./login.service"

@Component({
    selector: "login-component",
    templateUrl: "./app/Login/Login.html",
    providers: [loginService]
})
export class loginComponent {
    constructor(private _loginService: loginService) {
    }


    userName: string = "";
    password: string = "";
    clicked(): void {
        this._loginService.getToken(this.userName, this.password).subscribe(function (res) {
            
            console.log(res.access_token);
            console.log(res.userName);
            localStorage.setItem("access_token", res.access_token);
            localStorage.setItem("userName", res.userName);
            
        }, function (err) {
            console.log(err);
        });
    }

}