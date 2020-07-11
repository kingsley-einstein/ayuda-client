import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.css"]
})
export class LandingComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit() {
    console.log("[Landing]");
    this.navigateToUserArea();
  }

  navigateToUserArea() {
    if (localStorage.getItem("token")) {
      this._router.navigateByUrl("/user-area");
    }
  }
}
