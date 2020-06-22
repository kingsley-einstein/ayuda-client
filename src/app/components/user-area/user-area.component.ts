import { Component, OnInit } from "@angular/core";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { MatDialog } from "@angular/material/dialog";
import { MobileBottomSheetComponent } from "../mobile-bottom-sheet/mobile-bottom-sheet.component";
import { PayoutFormComponent } from "../payout-form/payout-form.component";

@Component({
  selector: "app-user-area",
  templateUrl: "./user-area.component.html",
  styleUrls: ["./user-area.component.css"]
})
export class UserAreaComponent implements OnInit {

  sidebarVisible = false;
  // payoutDialogVisible = false;

  constructor(private _sheet: MatBottomSheet, private _dialog: MatDialog) {}

  ngOnInit() {
    console.log("[User Area]");
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
}
