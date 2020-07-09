import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { PaymentService } from "../../services";

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

  @Output()
  result: EventEmitter<string> = new EventEmitter<string>(true);

  @Output()
  message: EventEmitter<string> = new EventEmitter<string>(true);

  constructor(fb: FormBuilder, private _service: PaymentService) {
    this.paymentFormGroup = fb.group({
      name: this.name,
      email: this.email
    });
  }

  ngOnInit() {
    console.log("[Payment]");
  }

  submit($event: any) {
    $event.preventDefault();
    const { name, email } = this.paymentFormGroup.value;
    const modifiedBody = {
      name, email,
      callback_url: window.location.host + "/verify/payment"
    };
    this._service.createPayment().subscribe((res1) => {
      console.log("__", res1.response);
      this._service.initializePayment(modifiedBody).subscribe((res2) => {
        window.open(res2.response.payment.authentication_url, "__blank");
      },
      (err) => {
        this.result.emit("error");
        this.message.emit(err.error.response || err.message);
      },
      () => {
        this.result.emit("complete");
        this.message.emit("Successfully initialized payment");
      });
    },
    (err) => {
      this.result.emit("error");
      this.message.emit(err.error.response || err.message);
    },
    () => {
      this.result.emit("error");
      this.message.emit("Successfully created payment object");
    });
  }
}
