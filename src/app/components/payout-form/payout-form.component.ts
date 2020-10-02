import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { PaymentService } from "../../services";

@Component({
  selector: "app-payout",
  templateUrl: "./payout-form.component.html",
  styleUrls: ["./payout-form.component.css"]
})
export class PayoutFormComponent implements OnInit {
  supportedBanks: { name: string; value: string; }[] = [
    { name: "Access Bank", value: "access_bank" },
    { name: "Citibank Nigeria", value: "citibank_nigeria" },
    { name: "Diamond Bank", value: "diamond_bank" },
    { name: "Ecobank Nigeria", value: "ecobank_nigeria" },
    { name: "Enterprise Bank", value: "enterprise_bank" },
    { name: "Fidelity Bank", value: "fidelity_bank" },
    { name: "First Bank Of Nigeria", value: "first_bank_of_nigeria" },
    { name: "First City Monument Bank", value: "first_city_monument_bank" },
    { name: "Guaranty Trust Bank", value: "guaranty_trust_bank" },
    { name: "Heritage Bank", value: "heritage_bank" },
    { name: "Keystone Bank", value: "keystone_bank" },
    { name: "Mainstreet Bank", value: "mainstreet_bank" },
    { name: "Skye Bank", value: "skye_bank" },
    { name: "Union Bank", value: "union_bank" }
  ];
  selectedBank = "first_bank_of_nigeria";

  amountType: { name: string, value: number }[] = [
    { name: "5h for 4k", value: 500 },
    { name: "1k for 8k", value: 1000 },
    { name: "2k for 16k", value: 2000 },
    { name: "5k for 40k", value: 5000 },
    { name: "10k for 80k", value: 10000 },
    { name: "20k for 160k", value: 20000 },
    { name: "100k for 800k", value: 100000 }
  ];

  selectedAmountType = 500;

  fg: FormGroup;

  name: FormControl = new FormControl("", Validators.required);
  accountNumber: FormControl = new FormControl("", Validators.required);

  isLoading = false;

  constructor(fb: FormBuilder, private _service: PaymentService, private toast: MatSnackBar, private router: Router) {
    this.fg = fb.group({
      name: this.name,
      accountNumber: this.accountNumber
    });
  }

  ngOnInit() {
    console.log("[Payout Form]");
  }

  submit($event: Event) {
    $event.preventDefault();
    this.isLoading = false;
    const body = this.fg.value;
    body.bankName = this.selectedBank;
    this._service.createTransferRecipient(body).subscribe((res1) => {
      console.log("____", res1);
      this._service.initializetransfer({
        recipientCode: res1.response.recipient.data.recipient_code,
        amountType: this.selectedAmountType
      }).subscribe((res2) => {
        console.log("_____", res2.response);
      },
      (err) => {
        this.isLoading = false;
        this.openToast(err.error.response || err.message);
      },
      () => {
        this.isLoading = false;
        this.openToast("Transfer successfully initialized");
        localStorage.clear();
        this.router.navigateByUrl("/login");
      });
    },
    (err) => {
      this.isLoading = false;
      this.openToast(err.error.response || err.message);
    },
    () => {
      this.openToast("Transfer recipient created.");
    });
  }

  openToast(message: string) {
    this.toast.open(message, "Ok", {
      duration: 4 * 1000
    });
  }
}
