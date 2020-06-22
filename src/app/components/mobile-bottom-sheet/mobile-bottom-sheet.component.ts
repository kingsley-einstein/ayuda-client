import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { PayoutFormComponent } from "../payout-form/payout-form.component";

@Component({
  selector: "app-mobile-bottom-sheet",
  templateUrl: "./mobile-bottom-sheet.component.html",
  styleUrls: ["./mobile-bottom-sheet.component.css"]
})
export class MobileBottomSheetComponent implements OnInit {

  constructor(private _dialog: MatDialog) {}

  ngOnInit() {
    console.log("[Mobile Bottom Sheet]");
  }

  showPayoutDialog() {
    this._dialog.open(PayoutFormComponent, {
      closeOnNavigation: true
    });
  }
}
