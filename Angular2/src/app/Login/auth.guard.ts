
import { Injectable } from "@angular/core"
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from 'rxjs/Rx';
import { authenticationService } from "../Login/authentication.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private _authService: authenticationService, private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

        return this._authService.auth().take(1).do(allowed => {
            console.log("Redirecting");
            if (!allowed) { this.router.navigate(["/home"]) };
        });
    }
}