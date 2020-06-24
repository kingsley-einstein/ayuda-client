import { Action } from "@ngrx/store";
import { PaymentModel } from "../states/payment.state";

export enum PaymentActions {
  GET_PAYMENT = "[Payment] Get Payment Details",
  GET_PAYMENT_SUCCESS = "[Payment] Successfully Retrieved Payment Details",
  GET_PAYMENT_FAILED = "[Payment] Could Not Retrieve Payment Details"
}
