import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MatStepper } from "@angular/material/stepper";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent implements OnInit {

  referralCode = null;

  type = "";

  termsCompleted$ = false;

  registrationCompleted$ = false;

  @ViewChild("stepper")
  stepper: MatStepper;

  constructor(_route: ActivatedRoute, private _message: MessageService) {
    _route.params.subscribe((params) => {
      this.referralCode = params.referralCode;
    });
    // console.log(this.referralCode);
  }

  ngOnInit() {
    console.log("[Registration]");
  }

  result($event: any) {
    this.type = $event;
    if ($event === "registration_finished") {
      this.registrationCompleted$ = true;
      setTimeout(() => this.stepper.next(), 500);
    }
  }

  message($event: any) {
    this._message.add({
      severity: this.type === "complete" ? "success" : "error",
      summary: this.type === "complete" ? "Success" : "Error",
      detail: $event
    });
  }

  completeTerms() {
    this.termsCompleted$ = true;
    setTimeout(() => this.stepper.next(), 500);
  }
}
