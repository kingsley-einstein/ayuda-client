import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Config } from "../api/config";
import { ResponseModel } from "../api/models";

const ROOT = Config.MAIN_URL + Config.REFERRAL_SERVICE + Config.V;

@Injectable()
export class ReferralService {
  constructor(private http: HttpClient) {}

  create(body: any) {
    return this.http.post<ResponseModel>(ROOT + Config.CREATE_REFERRAL, body);
  }

  getOwned() {
    return this.http.get<ResponseModel>(ROOT + Config.GET_OWNED);
  }

  getAllReferredBy(id: string, page: number) {
    return this.http.get<ResponseModel>(ROOT + Config.GET_REFERRED_BY + "/" + id + "/" + page);
  }

  countAllReferred(id: string) {
    return this.http.get<ResponseModel>(ROOT + Config.COUNT_REFERRED_BY + "/" + id);
  }
}
