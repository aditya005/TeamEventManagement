import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class loginService {
    private _http: Http = null;
    constructor(http: Http) {
        this._http = http;
    }

    getToken(userName: string, password: string) {
        console.log("Service Started");
        let header = new Headers({ "Content-Type": "application/x-www-form-urlencoded", })
        let ops = new RequestOptions({ headers: header })
        let login_data = "username=" + userName + "&Password=" + password + "&grant_type=password";
        return this._http.post("http://localhost:55879/Token", login_data, ops).map(res => res.json());

    }



}
