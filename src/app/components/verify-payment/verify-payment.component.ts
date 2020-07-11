import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PaymentService } from "../../services";

@Component({
  selector: "app-verify-payment",
  templateUrl: "./verify-payment.component.html",
  styleUrls: ["./verify-payment.component.css"]
})
export class VerifyPaymentComponent implements OnInit {
  
  isLoading = false;
  message = "";
  withErrors = false;

  constructor(private _service: PaymentService, private _router: Router) {}

  ngOnInit() {
    console.log("[Verify Payment]");
    this.verifyPayment();
  }

  verifyPayment() {
    this.message = "Verifying payment."
    this._service.verifyPayment().subscribe((res) => {
      console.log("___", res.response);
    },
    (err) => {
      this.withErrors = true;
      this.message = JSON.stringify(err.error.response || err.message);
      this.isLoading = false;
    },
    () => {
      this.withErrors = false;
      this.message = "Successfully verified payment.";
      this.isLoading = false;
      setTimeout(() => this._router.navigateByUrl("/user-area"), 2000);
    });
  }
}
