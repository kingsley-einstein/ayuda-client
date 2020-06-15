import { AuthState, initialAuthState } from "../states/auth.state";
import { UserActions, AuthActions } from "../actions/auth.action";

export default (state: AuthState = initialAuthState, action: UserActions): AuthState => {
  switch(action.type) {
    case AuthActions.GetAuthenticatedUserSuccess: {
      return {
        data: action.payload
      };
    }
    case AuthActions.GetAuthenticatedUserError: {
      return {
        ...state,
        error: action.error
      };
    }
    default:
      return state;
  }
};
