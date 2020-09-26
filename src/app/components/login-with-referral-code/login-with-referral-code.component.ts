import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { MessageService } from "primeng/api";
import { AuthService, ReferralService } from "../../services";

@Component({
  selector: "app-login-with-referral",
  templateUrl: "./login-with-referral-code.component.html",
  styleUrls: ["./login-with-referral-code.component.css"]
})
export class LoginWithReferralComponent implements OnInit {

  fg: FormGroup;
  email: FormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);
  password: FormControl = new FormControl("", Validators.required);

  isLoading = false;
  code = "";

  constructor(
    fb: FormBuilder,
    private _authService: AuthService,
    private _referralService: ReferralService,
    private _router: Router,
    private _message: MessageService,
    _activatedRoute: ActivatedRoute
    ) {
    this.fg = fb.group({
      email: this.email,
      password: this.password
    });
    _activatedRoute.params.subscribe((p) => this.code = p.referralCode);
  }

  ngOnInit() {
    console.log("[Login With Referral Code]");
  }

  submit($event: any) {
    this.isLoading = true;
    $event.preventDefault();
    this._authService.logUserIn(this.fg.value).subscribe((res) => {
      const { token } = res.response;
      localStorage.setItem("token", token);
      this._referralService.referExisting(this.code).subscribe((r) => {
        console.log(r)
      },
      (err) => {
        this.isLoading = false;
        console.log(err);
        this._message.add({
          severity: "error",
          summary: "Could not switch account type.",
          detail: err.error.response || err.message
        });
      },
      () => {
        this._router.navigateByUrl("/payment");
      });
      // localStorage.setItem("_id", id);
    },
    (err) => {
      this.isLoading = false;
      console.log(err);
      this._message.add({
        severity: "error",
        summary: "Could not login.",
        detail: err.error.response || err.message
      });
    },
    () => {
      this.isLoading = false;
    });
  }
}
