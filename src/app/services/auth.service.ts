import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Config } from "../api/config";
import { ResponseModel } from "../api/models";

const ROOT = Config.MAIN_URL + Config.AUTH_SERVICE + Config.V;

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  registerUser(body: any) {
    return this.http.post<ResponseModel>(ROOT + Config.REGISTER, body);
  }

  logUserIn(body: any) {
    return this.http.post<ResponseModel>(ROOT + Config.SIGN_IN, body);
  }

  logUserOut() {
    return this.http.get<ResponseModel>(ROOT + Config.SIGN_OUT);
  }

  updateUser(body: any) {
    return this.http.patch<ResponseModel>(ROOT + Config.UPDATE, body);
  }

  getLoggedUser() {
    return this.http.get<ResponseModel>(ROOT + Config.AUTHENTICATE);
  }

  getUserById(id: string) {
    return this.http.get<ResponseModel>(ROOT + Config.BY_ID + "/" + id);
  }
}
