import { Actions, Effect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { PaymentService } from "../services";
import { GetPayment, PaymentActions, GetPaymentSuccess, GetPaymentFailure } from "../actions/payment.action";
import { switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class PaymentEffects {
  constructor(private _actions: Actions, private _service: PaymentService) {}

  @Effect()
  getPayment$ = this._actions.pipe(
    ofType<GetPayment>(PaymentActions.GET_PAYMENT),
    switchMap(() => this._service.findPayment()),
    switchMap((http) => of(new GetPaymentSuccess(http.response))),
    catchError((err) => of (new GetPaymentFailure(err.statusText || err.error.response)))
  );
}
