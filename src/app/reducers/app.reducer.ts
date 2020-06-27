import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "../states/app.state";
import authReducer from "./auth.reducer";
import referralReducer from "./referral.reducer";
import paymentReducer from "./payment.reducer";

export const appReducers: ActionReducerMap<AppState, any> = {
  authState: authReducer,
  referralState: referralReducer,
  paymentState: paymentReducer
};
