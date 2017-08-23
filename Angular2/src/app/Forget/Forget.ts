import { Component } from "@angular/core";
import { authenticationService } from "../login/authentication.service"

@Component({
    selector: "forgot-component",
    templateUrl: `././app/Forget/Forget.html`,
    providers: [authenticationService]
})

export class Forgetclass {
    data: string = ""
    constructor(private _auth: authenticationService) {
        this._auth.auth().subscribe(function (res) {
            console.log(res);

        }, function (err) {
            console.log(err);
            window.location.href = "/home";
        })


    }
    Logout() {
        
    }
    
}