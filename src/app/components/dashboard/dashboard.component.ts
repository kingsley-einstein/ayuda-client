import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { AppState } from "../../states/app.state";
import { selectReferral } from "../../selectors/referral.selector";
import { CountReferrals, GetReferrals } from "../../actions/referral.action";
import { AuthService } from "../../services";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  tableData: { name: string; id: string; }[] = [];
  displayColumns = ["name", "id"];

  // radarChartLabels = ["Q1", "Q2", "Q3"];
  // radarChartData = [{
  //   data: [1, 2, 3, 4],
  //   label: "2010"
  // }];
  // radarChartType = "radar";
  constructor(private _store: Store<AppState>, private _authService: AuthService) {}

  referralState = this._store.pipe(select(selectReferral));

  ngOnInit() {
    console.log("[Dashboard]");
    this.watchReferralState();
    this.countReferrals();
    this.displayReferrals();
  }

  watchReferralState() {
    this.referralState.subscribe((state) => {
      // console.log(state);
      if (state.referrals.length > 0) {
        state.referrals.forEach((referral) => {
          this._authService.getUserById(referral.owner).subscribe((res) => {
            const auth = res.response;
            this.tableData.concat({
              name: auth.firstName + " " + auth.lastName,
              id: referral.id
            });
          });
        });
      }
    });
  }

  countReferrals() {
    // this.referralCounts.subscribe((state) => {
    //   console.log(state);
    // });
    this._store.dispatch(new CountReferrals("ppppooo"));
  }

  displayReferrals() {
    this._store.dispatch(new GetReferrals(0));
  }
}
