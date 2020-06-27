import { Action } from "@ngrx/store";
import { PaymentModel } from "../states/payment.state";

export enum PaymentActions {
  GET_PAYMENT = "[Payment] Get Payment Details",
  GET_PAYMENT_SUCCESS = "[Payment] Successfully Retrieved Payment Details",
  GET_PAYMENT_FAILED = "[Payment] Could Not Retrieve Payment Details"
}

export class GetPayment implements Action {
  public readonly type = PaymentActions.GET_PAYMENT;
}

export class GetPaymentSuccess implements Action {
  public readonly type = PaymentActions.GET_PAYMENT_SUCCESS;
  constructor(public payload: PaymentModel) {}
}

export class GetPaymentFailure implements Action  {
  public readonly type = PaymentActions.GET_PAYMENT_FAILED;
  constructor(public error: any) {}
}

export type PaymentActionType = GetPayment | GetPaymentSuccess | GetPaymentFailure;
