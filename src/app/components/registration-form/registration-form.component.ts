import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService, ReferralService } from "../../services";

@Component({
  selector: "app-registration-form",
  templateUrl: "./registration-form.component.html",
  styleUrls: ["./registration-form.component.css"]
})
export class RegistrationFormComponent implements OnInit {

  progressText = "";
  isLoading = false;

  @Input()
  referrer: string = null;

  // tslint:disable-next-line: no-output-native
  @Output()
  result: EventEmitter<string> = new EventEmitter<string>(true);

  // tslint:disable-next-line: no-output-native
  @Output()
  message: EventEmitter<string> = new EventEmitter<string>(true);

  amountType: { name: string, value: number }[] = [
    { name: "#500 - #4000", value: 500 },
    { name: "#1000 - #8000", value: 1000 },
    { name: "#2000 - #16000", value: 2000 },
    { name: "#5000 - #40000", value: 5000 },
    { name: "#10000 - #80000", value: 10000 },
    { name: "#20000 - #160000", value: 20000 },
    { name: "#100000 - #800000", value: 100000 }
  ];

  selectedAmountType = 500;

  regGroup: FormGroup;

  email: FormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  firstName: FormControl = new FormControl("", Validators.required);

  lastName: FormControl = new FormControl("", Validators.required);

  password: FormControl = new FormControl("", Validators.required);

  referredBy: FormControl = new FormControl("");

  constructor(fb: FormBuilder, private _authService: AuthService, private _referralService: ReferralService) {
    this.regGroup = fb.group({
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      password: this.password,
      referredBy: this.referredBy
    });
  }

  ngOnInit() {
    console.log("[Registration Form]");
    // console.log(this.referrer);
  }

  submit($event: any) {
    $event.preventDefault();
    const { email, firstName, lastName, password } = this.regGroup.value;
    const authRequestBody: any = { email, firstName, lastName, password };
    const referralRequestBody: any = {};
    if (this.referrer) {
      referralRequestBody.referredBy = this.referrer;
    } else {
      referralRequestBody.amountType = this.selectedAmountType;
    }

    this.isLoading = true;
    this.progressText = "Generating authentication details";
    this._authService.registerUser(authRequestBody).subscribe((res) => {
      localStorage.setItem("token", res.response.token);
      // localStorage.setItem("_id", res.response.id);
      this.progressText = "Successfully generated authentication details. Now generating referral code";
      setTimeout(() => {
        this._referralService.create(referralRequestBody).subscribe((res2) => {
        console.log(res2.response);
        this.progressText = "Successfully generated referral code";
        },
        (err) => {
          this.isLoading = false;
          this.result.emit("error");
          this.message.emit(err.error.response || err.message);
          this.progressText = "";
        },
        () => {
          this.isLoading = false;
          this.result.emit("complete");
          this.message.emit("Successfully generated referral code.");
          this.progressText = "";
          this.regGroup.reset();
          this.result.emit("registration_finished");
        });
      }, 2000);
    },
    (err) => {
      this.isLoading = false;
      console.log(err);
      this.result.emit("error");
      this.message.emit(err.error.response || err.message);
      this.progressText = "";
    },
    () => {
      this.result.emit("complete");
      this.message.emit("Successfully registered user.");
      this.result.emit("registration_completed");
      // this.progressText = "";
    });
  }
}
