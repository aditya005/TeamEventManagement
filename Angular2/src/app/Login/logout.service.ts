import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class logoutService {
    private _http: Http = null;
    constructor(http: Http) {
        this._http = http;
    }



    logout() {
        console.log("Logout Started");
        var token = localStorage.getItem("access_token");
        let header = new Headers({ "Authorization": "Bearer " + token });
        localStorage.removeItem("access_token");
        localStorage.removeItem("userName");
        let ops = new RequestOptions({ headers: header })
        return this._http.post("http://localhost:55879/api/Account/Logout", ops);     
    }
}