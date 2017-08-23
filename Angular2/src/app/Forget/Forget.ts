import { Component } from "@angular/core";
import { logoutService } from "../Login/logout.service";

@Component({
    selector: "forgot-component",
    templateUrl: `././app/Forget/Forget.html`
})

export class Forgetclass {
    data: string = ""
    constructor(private _logout: logoutService) {
    }
    Logout() {
        this._logout.logout();
    }
    
}