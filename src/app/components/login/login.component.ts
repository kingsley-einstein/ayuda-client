import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../services";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginGroup: FormGroup;

  email: FormControl = new FormControl("", Validators.required);
  password: FormControl = new FormControl("", Validators.required);

  isLoading = false;

  constructor(
    fb: FormBuilder,
    private _authService: AuthService,
    private _message: MessageService,
    private _router: Router
    ) {
    this.loginGroup = fb.group({
      email: this.email,
      password: this.password
    });
  }

  ngOnInit() {
    console.log("[Login]");
  }

  submit($event: any) {
    this.isLoading = true;
    $event.preventDefault();
    this._authService.logUserIn(this.loginGroup.value).subscribe((res) => {
      const { token, id } = res.response;
      localStorage.setItem("token", token);
      localStorage.setItem("_id", id);
    },
    (err) => {
      this._message.add({
        severity: "error",
        summary: "Could not login",
        detail: err.error.response || err.message
      });
    },
    () => {
      this._router.navigateByUrl("/user-area");
    });
  }
}
