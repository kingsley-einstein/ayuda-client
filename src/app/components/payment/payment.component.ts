import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.css"]
})
export class PaymentComponent implements OnInit {
  
  paymentFormGroup: FormGroup;

  name: FormControl = new FormControl("", Validators.required);
  email: FormControl = new FormControl("", [
    Validators.required, Validators.email
  ]);
  constructor(fb: FormBuilder) {
    this.paymentFormGroup = fb.group({});
  }
  ngOnInit() {
    console.log("[Payment]");
  }
}
