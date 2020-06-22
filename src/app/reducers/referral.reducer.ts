import { ReferralState, initialReferralState } from "../states/referral.state";
import { ReferralActionsType, ReferralActions } from "../actions/referral.action";

export default (state: ReferralState = initialReferralState, action: ReferralActionsType): ReferralState => {
  switch(action.type) {
    case ReferralActions.GetReferralSuccess: {
      return {
        ...state,
        referral: action.payload
      };
    }
    case ReferralActions.GetReferralError: {
      return {
        ...state,
        error: action.error
      };
    }
    case ReferralActions.GetReferralsSuccess: {
      return {
        ...state,
        referrals: action.payload
      };
    }
    case ReferralActions.GetReferralsError: {
      return {
        ...state,
        error: action.error
      };
    }
    case ReferralActions.CountReferralsSuccess: {
      return {
        ...state,
        referralCount: action.payload
      };
    }
    case ReferralActions.CountReferralsError: {
      return {
        ...state,
        error: action.error
      };
    }
    default:
      return state;
  }
};
