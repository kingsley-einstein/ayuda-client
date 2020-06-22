import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

export class LoginComponent implements OnInit {
  loginGroup: FormGroup;

  email: FormControl = new FormControl("", Validators.required);
  password: FormControl = new FormControl("", Validators.required);

  constructor(fb: FormBuilder) {
    this.loginGroup = fb.group({
      email: this.email,
      password: this.password
    });
  }
  ngOnInit() {
    console.log("[Login]");
  }
}
