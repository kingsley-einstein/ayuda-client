import { TestBed, ComponentFixture } from "@angular/core/testing";
import { LandingComponent } from "../../components/landing/landing.component";
import { MatMenuModule } from "@angular/material/menu";

describe("Landing", () => {

  let fixture: ComponentFixture<LandingComponent>;
  let component: LandingComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingComponent],
      imports: [MatMenuModule]
    });

    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
  });

  it("should be defined", () => {
    expect(component).toBeDefined();
  });
});
