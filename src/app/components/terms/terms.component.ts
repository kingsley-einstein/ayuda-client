import { Component, OnInit } from "@angular/core";
import TermsAndCondition from "../../../assets/_important_/terms";

@Component({
  selector: "app-terms",
  templateUrl: "./terms.component.html",
  styleUrls: ["./terms.component.css"]
})
export class TermsComponent implements OnInit {
  termsAndCondition = TermsAndCondition;
  ngOnInit() {
    console.log("[Terms]");
  }
}
