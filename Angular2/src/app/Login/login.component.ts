import { Component, Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { loginService } from "./login.service"

@Component({
    selector: "login-component",
    templateUrl: "./app/Login/Login.html"
})

@Injectable()
export class loginComponent {
    private _loginService :any;
    private _router: any;
    constructor(loginService: loginService, router: Router) {
        this._loginService = loginService;
        this._router = router;
    }


    userName: string = "";
    password: string = "";

    clicked(): void {
        var v = this;
        this._loginService.getToken(this.userName, this.password).subscribe(function (res:any) {
            console.log(res.access_token);
            console.log(res.userName);
            localStorage.setItem("access_token", res.access_token);
            localStorage.setItem("userName", res.userName);
            v._router.navigate(["/forgotpassword"]);

        }, function (err: any) {
            console.log(err);
        });
    }
    

}