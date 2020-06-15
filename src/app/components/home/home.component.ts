import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

  classes: string[] = ["bg-1", "bg-2"];
  selectedClass = "bg-1";
  currentClassNumber = 0;

  text = "Work less and earn like a boss. The ideal platfrom for the lazy bone.";
  smallText = "Refer as much as 10 people and get 8 times the amount you pay."

  ngOnInit() {
    console.log("[Home]");
    this.switchClasses();
  }

  switchClasses() {
    setInterval(() => {
      if (this.currentClassNumber >= this.classes.length) {
        this.currentClassNumber = 0;
      }
      this.selectedClass = this.classes[this.currentClassNumber];
      this.currentClassNumber ++;
    }, 60 * 1000);
  }
}
