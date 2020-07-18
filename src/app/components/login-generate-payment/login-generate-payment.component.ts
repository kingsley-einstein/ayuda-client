import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services";

@Component({
 selector: "app-login-generate-payment",
 templateUrl: "./login-generate-payment.component.html",
 styleUrls: ["./login-generate-payment.component.css"]
})
export class LoginGeneratePaymentComponent implements OnInit {
 
 constructor(private _auth: AuthService) {}

 ngOnInit() {}

 submit($event: any) {
  $event.preventDefault();
  this._auth.logUserIn({}).subscribe((res) => {
   console.log({ ...res });
  });
 }
}
