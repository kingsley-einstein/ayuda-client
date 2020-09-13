import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { AppState } from "../../states/app.state";
import { selectReferral } from "../../selectors/referral.selector";
import { selectPayment } from "../../selectors/payment.selector";
import { CountReferrals, GetReferrals } from "../../actions/referral.action";
import { AuthService } from "../../services";
import { GetPayment } from "../../actions/payment.action";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  tableData: { name: string; id: string; }[] = [];
  displayColumns = ["owner", "id", "amount"];
  tableDataPage = 0;

  // radarChartLabels = ["Q1", "Q2", "Q3"];
  // radarChartData = [{
  //   data: [1, 2, 3, 4],
  //   label: "2010"
  // }];
  // radarChartType = "radar";
  constructor(private _store: Store<AppState>, private _authService: AuthService) {}

  referralState = this._store.pipe(select(selectReferral));
  paymentState = this._store.pipe(select(selectPayment));

  ngOnInit() {
    console.log("[Dashboard]");
    this.displayReferrals();
    this.countReferrals();
    this.getPayment();
  }

  // watchReferralState() {
  //   this.referralState.subscribe((state) => {
  //     // localStorage.setItem("_id", state.referral.id);
  //     // console.log(state);
  //     if (state.referrals.length > 0) {
  //       this.tableData = [];
  //       state.referrals.forEach((referral) => {
  //         this._authService.getUserById(referral.owner).subscribe((res) => {
  //           const auth = res.response;
  //           this.tableData.concat({
  //             name: auth.firstName + " " + auth.lastName,
  //             id: referral.id
  //           });
  //         });
  //       });
  //     }
  //   });
  // }

  countReferrals() {
    // this.referralCounts.subscribe((state) => {
    //   console.log(state);
    // });
    setTimeout(() => this._store.dispatch(new CountReferrals(localStorage.getItem("_id"))), 2000);
  }

  displayReferrals() {
    this._store.dispatch(new GetReferrals(this.tableDataPage));
  }

  getPayment() {
    this._store.dispatch(new GetPayment());
    // this.paymentState.subscribe((state) => console.log(state));
  }

  onPageChange($event: any) {
    this.tableDataPage = $event.pageIndex;
    this.displayReferrals();
  }
}
