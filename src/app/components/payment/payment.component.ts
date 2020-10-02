import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { PaymentService } from "../../services";

@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.css"]
})
export class PaymentComponent implements OnInit {

  isLoading = false;

  paymentFormGroup: FormGroup;

  name: FormControl = new FormControl("", Validators.required);
  email: FormControl = new FormControl("", [
    Validators.required, Validators.email
  ]);

  @Output()
  result: EventEmitter<string> = new EventEmitter<string>(true);

  @Output()
  message: EventEmitter<string> = new EventEmitter<string>(true);

  constructor(fb: FormBuilder, private _service: PaymentService, private router: Router) {
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
    this.isLoading = true;
    this._service.createPayment().subscribe((res1) => {
      console.log("__", res1.response);
      this._service.initializePayment(modifiedBody).subscribe((res2) => {
        console.log("______", res2.response);
        window.open(res2.response.payment.authorization_url, "__blank");
      },
      (err) => {
        this.result.emit("error");
        this.message.emit(err.error.response || err.message);
        console.log(err.error);
        this.isLoading = false;
      },
      () => {
        this.result.emit("complete");
        this.message.emit("Successfully initialized payment");
        this.isLoading = false;
        this.paymentFormGroup.reset();
      });
    },
    (err) => {
      this.result.emit("error");
      this.message.emit(err.error.response || err.message);
      this.isLoading = false;
    },
    () => {
      this.result.emit("complete");
      this.message.emit("Successfully created payment object");
    });
  }

  toVerifyPage() {
    this.router.navigateByUrl("/verify/payment");
  }
}
