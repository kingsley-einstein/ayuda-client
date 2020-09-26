import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../services";

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

  constructor(private _auth: AuthService, private router: Router) {}

  onHide() {
    this.hidden.emit(true);
  }

  logout() {
    this._auth.logUserOut().subscribe((res) => {
      localStorage.clear();
      console.log(res);
    },
    (err) => {
      console.log(err);
    },
    () => {
      this.router.navigateByUrl("/login");
    });
  }
}
