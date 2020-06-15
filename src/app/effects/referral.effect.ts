import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { ReferralService } from "../services";
import { GetReferral, ReferralActions, GetReferralSuccess, GetReferralError, GetReferrals, GetReferralsSuccess, GetReferralsError } from "../actions/referral.action";
import { switchMap, catchError, map } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class ReferralEffects {
  constructor(private _actions: Actions, private _service: ReferralService) {}

  @Effect()
  getReferral$ = this._actions.pipe(
    ofType<GetReferral>(ReferralActions.GetReferral),
    switchMap(() => this._service.getOwned()),
    switchMap((http) => of(new GetReferralSuccess(http.response))),
    catchError(err => of(new GetReferralError(err.error.response)))
  );

  @Effect()
  getReferrals$ = this._actions.pipe(
    ofType<GetReferrals>(ReferralActions.GetReferrals),
    switchMap((referrals) => of(referrals.page)),
    switchMap(async (page) => {
      const http = await this._service.getOwned().toPromise();
      return of({
        page, http
      });
    }),
    switchMap((obj) => obj),
    switchMap((obj) => this._service.getAllReferredBy(obj.http.response.id, obj.page)),
    switchMap((http) => of(new GetReferralsSuccess(http.response))),
    catchError((err) => of(new GetReferralsError(err.error.response)))
  );
}
