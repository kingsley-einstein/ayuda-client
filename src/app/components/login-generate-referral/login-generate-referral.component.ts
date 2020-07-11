import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-login-generate-referral",
  templateUrl: "./login-generate-referral.component.html",
  styleUrls: ["./login-generate-referral.component.css"]
})
export class LoginGenerateReferralComponent implements OnInit {
  
  constructor() {}
  
  ngOnInit() {
    console.log("[Login To Generate Referral]");
  }
}
