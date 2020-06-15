import { environment } from "../../../environments/environment";

export class Config {
  static MAIN_URL = environment.api;

  // Services
  static AUTH_SERVICE = "/auth-service";
  static REFERRAL_SERVICE = "/referral-service";
  static PAYMENT_SERVICE = "/payment-service";

  // Prefix

  static V = "/api/v1"

  // Auth Service Routes
  static REGISTER = "/auth/create";
  static SIGN_IN = "/auth/signin";
  static AUTHENTICATE = "/auth/getloggeduser";
  static BY_ID = "/auth/byId";
  static SIGN_OUT = "/auth/signout";
  static UPDATE = "/auth/update";

  // Referral Service Routes
  static CREATE_REFERRAL = "/create";
  static GET_OWNED = "/owned";
  static GET_REFERRED_BY = "/referred";
  static COUNT_REFERRED_BY = "/referred/count";

  // Payment Service Routes
  static CREATE_PAYMENT = "/payment/create";
  static INITIALIZE_PAYMENT = "/payment/initialize";
  static CREATE_TRANSFER_RECIPIENT = "/transfer/recipient";
  static INITIALIZE_TRANSFER = "/transfer/initialize";
  static FIND_PAYMENT = "/payment/find";
  static VERIFY_PAYMENT = "/payment/verify";
  static RETRIEVE_TRANSFER = "/transfer/retrieve";
  static DELETE_PAYMENT = "/payment/delete";
}
