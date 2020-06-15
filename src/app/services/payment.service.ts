import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Config } from "../api/config";
import { ResponseModel } from "../api/models";

const ROOT = Config.MAIN_URL + Config.PAYMENT_SERVICE + Config.V;

@Injectable()
export class PaymentService {
  constructor(private http: HttpClient) {}

  createPayment() {
    return this.http.post<ResponseModel>(ROOT + Config.CREATE_PAYMENT, {});
  }

  initializePayment(body: any) {
    return this.http.post<ResponseModel>(ROOT + Config.INITIALIZE_PAYMENT, body);
  }

  verifyPayment() {
    return this.http.get<ResponseModel>(ROOT + Config.VERIFY_PAYMENT);
  }

  deletePayment() {
    return this.http.delete<ResponseModel>(ROOT + Config.DELETE_PAYMENT);
  }

  createTransferRecipient(body: any) {
    return this.http.post<ResponseModel>(ROOT + Config.CREATE_TRANSFER_RECIPIENT, body);
  }

  initializetransfer(body: any) {
    return this.http.post<ResponseModel>(ROOT + Config.INITIALIZE_TRANSFER, body);
  }
}
