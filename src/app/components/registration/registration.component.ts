import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent implements OnInit {

  referralCode = null;

  type = "";

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
  }

  message($event: any) {
    this._message.add({
      severity: this.type === "complete" ? "success" : "error",
      summary: this.type === "complete" ? "Success" : "Error",
      detail: $event
    });
  }
}
