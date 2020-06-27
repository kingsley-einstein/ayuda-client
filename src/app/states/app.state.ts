import { AuthState, initialAuthState } from "./auth.state";
import { ReferralState, initialReferralState } from "./referral.state";
import { PaymentState, initialPaymentState } from "./payment.state";

export interface AppState {
  authState: AuthState;
  referralState: ReferralState;
  paymentState: PaymentState;
}

export const initialAppState: AppState = {
  authState: initialAuthState,
  referralState: initialReferralState,
  paymentState: initialPaymentState
};
