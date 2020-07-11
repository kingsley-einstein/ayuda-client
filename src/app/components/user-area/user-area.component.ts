import { Component, OnInit } from "@angular/core";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { MatDialog } from "@angular/material/dialog";
import { MessageService } from "primeng/api";
import { MobileBottomSheetComponent } from "../mobile-bottom-sheet/mobile-bottom-sheet.component";
import { PayoutFormComponent } from "../payout-form/payout-form.component";
import { Store, select } from "@ngrx/store";
import { AppState } from "../../states/app.state";
import { selectReferral } from "../../selectors";
import { GetReferral } from "src/app/actions/referral.action"

@Component({
  selector: "app-user-area",
  templateUrl: "./user-area.component.html",
  styleUrls: ["./user-area.component.css"]
})
export class UserAreaComponent implements OnInit {

  sidebarVisible = false;
  // payoutDialogVisible = false;

  constructor(private _sheet: MatBottomSheet, private _dialog: MatDialog, private _store: Store<AppState>, private _message: MessageService) {}

  referralState = this._store.pipe(select(selectReferral));

  ngOnInit() {
    console.log("[User Area]");
    this.getReferral();
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  hidden($event: any) {
    // console.log($event);
    this.sidebarVisible = !$event;
  }

  openBottomSheet() {
    this._sheet.open(MobileBottomSheetComponent);
  }

  // onPayoutDialogHide() {
  //   this.payoutDialogVisible = false;
  // }

  showPayoutDialog() {
    // this.payoutDialogVisible = true;
    this._dialog.open(PayoutFormComponent, {
      closeOnNavigation: true,
      direction: "ltr",
      width: "40vw"
    });
  }

  copyReferralCode($code: any) {
    navigator.clipboard.writeText($code).then(() => {
      console.log("Copied Referral Code");
      this._message.add({
        severity: "success",
        summary: "Success",
        detail: "Successfully copied referral code."
      });
    });
  }

  copyReferralLink($code: any) {
    const link$ = window.location.host + "/registration/" + $code;
    navigator.clipboard.writeText(link$).then(() => {
      console.log("Copied Referral Link");
      this._message.add({
        severity: "success",
        summary: "Success",
        detail: "Successfully copied referral code."
      });
    });
  }

  getReferral() {
    this._store.dispatch(new GetReferral());
  }
}
