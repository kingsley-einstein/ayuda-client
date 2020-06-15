import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  tableData: { name: string; id: string; }[] = [
    { name: "Kane", id: "iiiioopp" }
  ];
  displayColumns = ["name", "id"];

  radarChartLabels = ["Q1", "Q2", "Q3"];
  radarChartDate = [{
    data: [1, 2, 3, 4],
    label: "2010"
  }];
  radarChartType = "radar";
  ngOnInit() {
    console.log("[Dashboard]");
  }
}
