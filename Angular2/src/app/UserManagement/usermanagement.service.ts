import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class userManagementService {
    private _http: Http = null;
    private _header: Headers = null;
    private _ops : RequestOptions = null;
    constructor(http: Http) {
        this._http = http;
        this._header = new Headers({ "Content-Type": "application/json"});
        this._ops = new RequestOptions({ "headers": this._header });
    }

    getUsers(UserName: string) {
        console.log("UserManagement Get Service Started");
       
        if ((UserName != null) || (UserName != undefined)){
            return this._http.get("http://localhost:55879/api/Account/UserManagement?userName=" + UserName, this._ops).map(res => res.json());
        }
        else {
            return this._http.get("http://localhost:55879/api/Account/UserManagement", this._ops).map(res => res.json());
        }
        
    }

    createUser(new_obj: any) {
        console.log("UserManagement Create Service Started");
        return this._http.post("http://localhost:55879/api/Account/UserManagement", new_obj, this._ops);
    }

    editUser(obj: any) {
        console.log("UserManagement Update Service Started");
        return this._http.put("http://localhost:55879/api/Account/UserManagement?userName=" + obj.UserName, obj, this._ops);
    }

    deleteUser(UserName: string) {
        console.log("UserManagement Delete Service Started");
        return this._http.delete("http://localhost:55879/api/Account/UserManagement?userName=" + UserName, this._ops);

    }
    
}