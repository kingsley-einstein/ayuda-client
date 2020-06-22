import { Action } from "@ngrx/store";
import { ReferralModel } from "../states/referral.state";

export enum ReferralActions {
  GetReferral = "[Referral] Get Referral Details",
  GetReferralSuccess = "[Referral] Gotten Referral Details",
  GetReferralError = "[Referral] Couldn't Get Referral Details",
  GetReferrals = "[Referral] Get Multiple Referrals",
  GetReferralsSuccess = "[Referral] Gotten Multiple Referrals",
  GetReferralsError = "[Referral] Couldn't Get Multiple Referrals",
  CountReferrals = "[Referral] Count Referrals",
  CountReferralsSuccess = "[Referral] Successfully Counted Referrals",
  CountReferralsError = "[Referral] Error Occurred While Counting Referrals"
}

export class GetReferral implements Action {
  public readonly type = ReferralActions.GetReferral;
}

export class GetReferrals implements Action {
  public readonly type = ReferralActions.GetReferrals;
  constructor(public page: number) {}
}

export class GetReferralSuccess implements Action {
  public readonly type = ReferralActions.GetReferralSuccess;
  constructor(public payload: ReferralModel) {}
}

export class GetReferralError implements Action {
  public readonly type = ReferralActions.GetReferralError;
  constructor(public error: any) {}
}

export class GetReferralsSuccess implements Action {
  public readonly type = ReferralActions.GetReferralsSuccess;
  constructor(public payload: ReferralModel[]) {}
}

export class GetReferralsError implements Action {
  public readonly type = ReferralActions.GetReferralsError;
  constructor(public error: any) {}
}

export class CountReferrals implements Action {
  public readonly type = ReferralActions.CountReferrals;
  constructor(public id: string) {}
}

export class CountReferralsSuccess implements Action {
  public readonly type = ReferralActions.CountReferralsSuccess;
  constructor(public payload: number) {}
}

export class CountReferralsError implements Action {
  public readonly type = ReferralActions.CountReferralsError;
  constructor(public error: any) {}
}

export type ReferralActionsType =
GetReferral | GetReferrals | GetReferralSuccess | GetReferralsSuccess | GetReferralError | GetReferralsError
| CountReferrals | CountReferralsSuccess | CountReferralsError;
