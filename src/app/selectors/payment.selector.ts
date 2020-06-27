import { AppState } from "../states/app.state";

export const selectPayment = (state: AppState) => state.paymentState;
