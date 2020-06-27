import { PaymentState, initialPaymentState } from "../states/payment.state";
import { PaymentActions, PaymentActionType } from "../actions/payment.action";

export default (state: PaymentState = initialPaymentState, action: PaymentActionType): PaymentState => {
  switch(action.type) {
    case PaymentActions.GET_PAYMENT_SUCCESS:
      return {
        ...state,
        payment: action.payload
      };
    case PaymentActions.GET_PAYMENT_FAILED:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};
