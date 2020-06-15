import { AuthState, initialAuthState } from "./auth.state";
import { ReferralState, initialReferralState } from "./referral.state";

export interface AppState {
  authState: AuthState;
  referralState: ReferralState;
}

export const initialAppState: AppState = {
  authState: initialAuthState,
  referralState: initialReferralState
};
