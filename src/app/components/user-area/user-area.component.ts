import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-area",
  templateUrl: "./user-area.component.html",
  styleUrls: ["./user-area.component.css"]
})
export class UserAreaComponent implements OnInit {

  sidebarVisible = false;

  ngOnInit() {
    console.log("[User Area]");
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  hidden($event: any) {
    // console.log($event);
    this.sidebarVisible = !$event;
  }
}
