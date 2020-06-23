import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { PaymentService } from "../services";

@Injectable()
export class PaymentGuardToolClass {

  constructor(private _service: PaymentService) {}

  async paymentHasBeenMade() {
    const res = await this._service.findPayment().toPromise();
    const isPaid: boolean = res.response.paid;
    return isPaid;
  }
}

@Injectable()
export class PaymentGuard implements CanActivate {

  constructor(private _router: Router, private _payment: PaymentGuardToolClass) {}

  async canActivate(): Promise<boolean> {
    const hasPaid = await this._payment.paymentHasBeenMade();
    if (!hasPaid) {
      this._router.navigateByUrl("/payment");
      return false;
    }
    return true;
  }
}
