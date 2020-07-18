import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { MatStepper } from "@angular/material/stepper";
import { MessageService } from "primeng/api";
import { AuthService, ReferralService } from "../../services";

@Component({
  selector: "app-login-generate-referral",
  templateUrl: "./login-generate-referral.component.html",
  styleUrls: ["./login-generate-referral.component.css"]
})
export class LoginGenerateReferralComponent implements OnInit {

  loginGroup: FormGroup;

  email: FormControl = new FormControl("", [
   Validators.required, Validators.email
  ]);

  password: FormControl = new FormControl("", Validators.required);

  amountType: { name: string, value: number }[] = [
    { name: "#500 - #4000", value: 500 },
    { name: "#1000 - #8000", value: 1000 },
    { name: "#2000 - #16000", value: 2000 },
    { name: "#5000 - #40000", value: 5000 },
    { name: "#10000 - #80000", value: 10000 },
    { name: "#20000 - #160000", value: 20000 },
    { name: "#100000 - #800000", value: 100000 }
  ];

  selectedAmountType = 500;

  messageType = "";

  progressText = "";

  isLoading = false;

  @ViewChild("stepper")
  stepper: MatStepper;
  
  constructor(
   private _message: MessageService, 
   private _auth: AuthService, 
   private _referral: ReferralService,
   fb: FormBuilder
  ) {
   this.loginGroup = fb.group({
    email: this.email,
    password: this.password
   });
  }
  
  ngOnInit() {
    console.log("[Login To Generate Referral]");
  }

  submit($event: any) {
    $event.preventDefault();
    this.isLoading = true;
    const { email, password } = this.loginGroup.value;
    const authRequestBody = { email, password };
    const referralRequestBody = {
      amountType: this.selectedAmountType
    };
    this.progressText = "Logging in."
    this._auth.logUserIn(authRequestBody).subscribe((res1) => {
      localStorage.setItem("token", res1.response.token);
      this.progressText = "Successfully logged in. Generating referral Code."
      this._referral.create(referralRequestBody).subscribe((res2) => {
        console.log("____", res2.response);
      },
      (err) => {
       this.progressText = "";
        this._message.add({
          severity: "error",
          summary: "Error",
          detail: err.error.response || err.message
        });
      },
      () => {
       this.progressText = "";
        this._message.add({
          severity: "success",
          summary: "Success",
          detail: "Successfully generated referral code."
        });
        setTimeout(() => this.stepper.next(), 500);
      });
    },
    (err) => {
     this.progressText = "";
     this._message.add({
      severity: "error",
      summary: "Error",
      detail: err.error.response || err.message
     });
    },
    () => {
     this._message.add({
      severity: "success",
      summary: "Success",
      detail: "Successfully signed in."
     });
    });
  }

  result($event: any) {
    this.messageType = $event;
    // if ($event === "login_referral_complete") {
    //   setTimeout(() => this.stepper.next(), 500);
    // }
  }

  message($event: any) {
    this._message.add({
      severity: this.messageType === "complete" ? "success" : "error",
      detail: $event,
      summary: this.messageType === "complete" ? "Success": "Error"
    });
  }
}
