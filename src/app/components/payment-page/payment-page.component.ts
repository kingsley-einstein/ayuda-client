import { Component, OnInit } from "@angular/core";
import { ReferralService } from "../../services";

@Component({
  selector: "app-payment-page",
  templateUrl: "./payment-page.component.html",
  styleUrls: ["./payment-page.component.css"]
})
export class PaymentPageComponent implements OnInit {
  // amountType: { name: string, value: number }[] = [
  //   { name: "5h for 4k", value: 500 },
  //   { name: "1k for 8k", value: 1000 },
  //   { name: "2k for 16k", value: 2000 },
  //   { name: "5k for 40k", value: 5000 },
  //   { name: "10k for 80k", value: 10000 },
  //   { name: "20k for 160k", value: 20000 },
  //   { name: "100k for 800k", value: 100000 }
  // ];

  // selectedAmountType = 500;

  // constructor(private service: ReferralService) {}

  ngOnInit() {
    console.log("[Payment Page]");
  }

  // changePlan() {
  //   this.service
  // }
}
