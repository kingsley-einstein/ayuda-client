import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { GetUser, AuthActions, GetUserSuccess, GetUserError } from "../actions/auth.action";
import { AuthService } from "../services";
import { switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class AuthEffects {

  constructor(private _actions: Actions, private _service: AuthService) {}

  @Effect()
  getAuthenticatedUser$ = this._actions.pipe(
    ofType<GetUser>(AuthActions.GetAuthenticatedUser),
    switchMap(() => this._service.getLoggedUser()),
    switchMap((http) => of(new GetUserSuccess(http.response))),
    catchError((err) => of(new GetUserError(err.error.response)))
  );
}
