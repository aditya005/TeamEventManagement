import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import 'rxjs/Rx';

@Injectable()
export class logoutService {
    constructor( private _router: Router) {
    }


    logout() {
        console.log("Logout Started");
       
                    localStorage.removeItem("access_token");
                    localStorage.removeItem("userName");
                    this._router.navigate(["./home"]);
    }
}