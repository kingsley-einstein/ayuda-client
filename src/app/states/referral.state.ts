export interface ReferralModel {
  id: string;
  referredBy: string;
  amountType: number;
  owner: string;
}

export interface ReferralState {
  referral: ReferralModel;
  referrals: ReferralModel[];
  referralCount: number;
  error?: any;
}

export const initialReferralState: ReferralState = {
  referral: null,
  referrals: [],
  referralCount: 0,
  error: null
};
