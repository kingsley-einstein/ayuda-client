import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Store, select } from "@ngrx/store";
import { PayoutFormComponent } from "../payout-form/payout-form.component";
import { AppState } from "../../states/app.state";
import { selectReferral } from "../../selectors/referral.selector";
import { GetReferral } from "../../actions/referral.action";

@Component({
  selector: "app-mobile-bottom-sheet",
  templateUrl: "./mobile-bottom-sheet.component.html",
  styleUrls: ["./mobile-bottom-sheet.component.css"]
})
export class MobileBottomSheetComponent implements OnInit {

  constructor(private _dialog: MatDialog, private _store: Store<AppState>) {}

  referralState = this._store.pipe(select(selectReferral));

  ngOnInit() {
    console.log("[Mobile Bottom Sheet]");
  }

  showPayoutDialog() {
    this._dialog.open(PayoutFormComponent, {
      closeOnNavigation: true
    });
  }

  copyReferralLink($code: any) {
    const link$ = window.location.host + "/registration/" + $code;
    navigator.clipboard.writeText(link$).then(() => {
      console.log("Copied referral link.");
    });
  }

  copyReferralCode($code: any) {
    navigator.clipboard.writeText($code).then(() => {
      console.log("Copied referral code.");
    });
  }

  getReferral() {
    this._store.dispatch(new GetReferral());
  }
}
