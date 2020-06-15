import { NgModule } from "@angular/core";
import { CardModule } from "primeng/card";
import { SidebarModule } from "primeng/sidebar";
import { ToolbarModule } from "primeng/toolbar";
import { ToastModule } from "primeng/toast";
// import { CardModule } from "primeng/card";

@NgModule({
  imports: [CardModule, SidebarModule, ToolbarModule, ToastModule],
  exports: [CardModule, SidebarModule, ToolbarModule, ToastModule]
})
export class PrimeModule {}
