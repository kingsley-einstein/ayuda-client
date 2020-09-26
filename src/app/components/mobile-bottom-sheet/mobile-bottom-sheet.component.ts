import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { PayoutFormComponent } from "../payout-form/payout-form.component";
import { AppState } from "../../states/app.state";
import { selectReferral } from "../../selectors/referral.selector";
import { GetReferral } from "../../actions/referral.action";
import TelegramLinks from "../../../assets/_important_/telegram";
import { AuthService } from "../../services";

@Component({
  selector: "app-mobile-bottom-sheet",
  templateUrl: "./mobile-bottom-sheet.component.html",
  styleUrls: ["./mobile-bottom-sheet.component.css"]
})
export class MobileBottomSheetComponent implements OnInit {

  telegramLinks = TelegramLinks;

  constructor(
   private _dialog: MatDialog,
   private _store: Store<AppState>,
   private _router: Router,
   private _auth: AuthService
  ) {}

  referralState = this._store.pipe(select(selectReferral));

  ngOnInit() {
    console.log("[Mobile Bottom Sheet]");
    this.getReferral();
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
    const link$ = window.location.host + "/login/with_referral_code/" + $code;
    navigator.clipboard.writeText(link$).then(() => {
      console.log("Copied referral code.");
    });
  }

  logout() {
   this._auth.logUserOut().subscribe((res) => {
    console.log(res);
   },
   (err) => {
    console.log(err);
   },
   () => {
    localStorage.clear();
    this._router.navigateByUrl("/login");
   });
  }

  getReferral() {
    this._store.dispatch(new GetReferral());
  }
}
