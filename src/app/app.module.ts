import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from "./app.component";

import {
  MainComponent,
  LandingComponent,
  HomeComponent,
  TermsComponent,
  RegistrationFormComponent,
  RegistrationComponent,
  PaymentComponent,
  FooterComponent,
  SidebarComponent,
  DashboardComponent,
  UserAreaComponent,
  MobileBottomSheetComponent,
  PayoutFormComponent,
  LoginComponent,
  VerifyPaymentComponent,
  LoginGenerateReferralComponent,
  LoginGeneratePaymentComponent,
  PaymentPageComponent,
  LoginWithReferralComponent,
  ChangePasswordComponent
} from "./components";

import { Interceptor, AuthGuard, PaymentGuard, PaymentGuardToolClass } from "./config";

import { RoutingModule, MdModule, PrimeModule, FormModule } from "./modules";

import { AuthService, ReferralService, PaymentService } from "./services";

import { ChartsModule } from "ng2-charts";

import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { MessageService } from "primeng/api";

import { AuthEffects } from "./effects/auth.effect";
import { ReferralEffects } from "./effects/referral.effect";
import { PaymentEffects } from "./effects/payment.effect";

import { appReducers } from "./reducers/app.reducer";
import { environment } from "../environments/environment";

import { AdsenseModule } from "ng2-adsense";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LandingComponent,
    HomeComponent,
    TermsComponent,
    RegistrationFormComponent,
    RegistrationComponent,
    PaymentComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    UserAreaComponent,
    MobileBottomSheetComponent,
    PayoutFormComponent,
    LoginComponent,
    VerifyPaymentComponent,
    LoginGenerateReferralComponent,
    LoginGeneratePaymentComponent,
    PaymentPageComponent,
    LoginWithReferralComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    HttpClientModule,
    PrimeModule,
    MdModule,
    FormModule,
    ChartsModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([AuthEffects, ReferralEffects, PaymentEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AdsenseModule.forRoot({
     adClient: "ca-p­ub-8730616366224473",
     adSlot: "792254­8475"
    })
  ],
  providers: [
    AuthService,
    ReferralService,
    PaymentService,
    MessageService,
    MobileBottomSheetComponent,
    PayoutFormComponent,
    AuthGuard,
    PaymentGuard,
    PaymentGuardToolClass,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
