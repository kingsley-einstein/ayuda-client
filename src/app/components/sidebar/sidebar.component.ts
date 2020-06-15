import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent {

  sidebarVisibleOnWidescreen = true;

  @Input()
  sidebarVisibleOnMobile = false;

  @Output()
  hidden: EventEmitter<boolean> = new EventEmitter<boolean>(true);

  // toggleSidebarOnMobile() {
  //   this.sidebarVisibleOnMobile = !this.sidebarVisibleOnMobile;
  // }

  onHide() {
    this.hidden.emit(true);
  }
}
