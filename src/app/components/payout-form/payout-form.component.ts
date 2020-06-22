import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-payout",
  templateUrl: "./payout-form.component.html",
  styleUrls: ["./payout-form.component.css"]
})
export class PayoutFormComponent implements OnInit {
  supportedBanks: { name: string; value: string; }[] = [
    { name: "First Bank Of Nigeria", value: "first_bank_of_nigeria" },
    { name: "Guaranty Trust Bank", value: "guaranty_trust_bank" },
    { name: "Union Bank", value: "union_bank" },
    { name: "Access Bank", value: "access_bank" },
    { name: "Citibank Nigeria", value: "citibank_nigeria" },
    { name: "Diamond Bank", value: "diamond_bank" },
    { name: "Ecobank Nigeria", value: "ecobank_nigeria" },
    { name: "Enterprise Bank", value: "enterprise_bank" },
    { name: "Fidelity Bank", value: "fidelity_bank" },
    { name: "First City Monument Bank", value: "first_city_monument_bank" },
    { name: "Heritage Bank", value: "heritage_bank" },
    { name: "Keystone Bank", value: "keystone_bank" },
    { name: "Mainstreet Bank", value: "mainstreet_bank" },
    { name: "Skye Bank", value: "skye_bank" }
  ];
  selectedBank = "first_bank_of_nigeria";
  ngOnInit() {
    console.log("[Payout Form]");
  }
}
