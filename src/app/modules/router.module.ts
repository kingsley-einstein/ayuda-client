import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
  MainComponent,
  LandingComponent,
  HomeComponent,
  RegistrationComponent,
  DashboardComponent,
  UserAreaComponent
} from "../components";

const routes: Routes = [
  { path: "", component: MainComponent, children: [
    { path: "", component: LandingComponent, children: [
      { path: "", component: HomeComponent },
      { path: "registration", component: RegistrationComponent },
      { path: "registration/:referralCode", component: RegistrationComponent },
      { path: "home", redirectTo: "", pathMatch: "full" }
    ] },
    { path: "landing", redirectTo: "", pathMatch: "full" },
    { path: "user-area", component: UserAreaComponent, children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "", redirectTo: "dashboard", pathMatch: "full" }
    ] }
  ] },
  { path: "main", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
