import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { MatStepper } from "@angular/material/stepper";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-login-generate-referral",
  templateUrl: "./login-generate-referral.component.html",
  styleUrls: ["./login-generate-referral.component.css"]
})
export class LoginGenerateReferralComponent implements OnInit {

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

  @ViewChild("stepper")
  stepper: MatStepper;
  
  constructor(private _message: MessageService) {}
  
  ngOnInit() {
    console.log("[Login To Generate Referral]");
  }

  submit($event: any) {
    $event.preventDefault();
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
