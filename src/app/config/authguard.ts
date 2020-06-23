import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _router: Router) {}

  canActivate(): boolean {
    if (!localStorage.getItem("token")) {
      this._router.navigateByUrl("/login");
      return false;
    }
    return true;
  }
}
