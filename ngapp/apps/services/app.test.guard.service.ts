import { Injectable } from '@angular/core';
//import { CanActivate } from '@angular/router/src/utils/preactivation';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';


@Injectable()
export class AppGuardService implements CanActivate{
    constructor(private _router:Router){}

canActivate(
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot
): boolean {
    console.log("canActivate");
    alert("You are not allowed ");

    this._router.navigate(["error"]);

    return false;
}

}