import { AppState } from "../states/app.state";

export const selectAuth = (state: AppState) => state.authState;
