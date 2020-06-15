import { Action } from "@ngrx/store";
import { AuthModel } from "../states/auth.state";

export enum AuthActions {
  GetAuthenticatedUser = "[User] Authenticate",
  GetAuthenticatedUserSuccess = "[User] User Authenticated",
  GetAuthenticatedUserError = "[User] Cannot Authenticate User"
}

export class GetUser implements Action {
  public readonly type = AuthActions.GetAuthenticatedUser;
}

export class GetUserSuccess implements Action {
  public readonly type = AuthActions.GetAuthenticatedUserSuccess;
  constructor(public payload: AuthModel) {}
}

export class GetUserError implements Action {
  public readonly type = AuthActions.GetAuthenticatedUserError;
  constructor(public error: any) {}
}

export type UserActions = GetUser | GetUserSuccess | GetUserError;
