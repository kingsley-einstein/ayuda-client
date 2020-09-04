import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
  MainComponent,
  LandingComponent,
  HomeComponent,
  RegistrationComponent,
  DashboardComponent,
  UserAreaComponent,
  LoginComponent,
  VerifyPaymentComponent,
  LoginGenerateReferralComponent,
  LoginGeneratePaymentComponent,
  PaymentPageComponent
} from "../components";
import { AuthGuard, PaymentGuard } from "../config";

const routes: Routes = [
  { path: "", component: MainComponent, children: [
    { path: "payment", component: PaymentPageComponent },
    { path: "verify/payment", component: VerifyPaymentComponent },
    { path: "", component: LandingComponent, children: [
      { path: "", component: HomeComponent },
      { path: "registration", component: RegistrationComponent },
      { path: "registration/:referralCode", component: RegistrationComponent },
      { path: "home", redirectTo: "", pathMatch: "full" },
      { path: "login", component: LoginComponent },
      { path: "login/generate_referral", component: LoginGenerateReferralComponent },
      { path: "login/generate_payment", component: LoginGeneratePaymentComponent }
    ] },
    { path: "landing", redirectTo: "", pathMatch: "full" },
    { path: "user-area", component: UserAreaComponent, children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "", redirectTo: "dashboard", pathMatch: "full" }
    ], 
    canActivate: [
      AuthGuard, PaymentGuard
    ]
  }
  ] },
  { path: "main", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
