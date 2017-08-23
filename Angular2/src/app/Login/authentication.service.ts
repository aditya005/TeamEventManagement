import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class authenticationService {
    private _http: Http = null;
    constructor(http: Http) {
        this._http = http;
    }



    auth() {
        console.log("Service Started");
        var token = localStorage.getItem("access_token");
            let header = new Headers({ "Authorization": "Bearer " + token });
            let ops = new RequestOptions({ headers: header })
            return this._http.get("http://localhost:55879/api/Account/Auth", ops).map(res => res.json());
    }
}