import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatStepperModule } from "@angular/material/stepper";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatMenuModule } from "@angular/material/menu";
import { MatDividerModule } from "@angular/material/divider";
import { MatTableModule } from "@angular/material/table";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatListModule } from "@angular/material/list";
import { MatDialogModule } from "@angular/material/dialog";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
  imports: [
    MatButtonModule,
    MatBottomSheetModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatDividerModule,
    MatTableModule,
    MatProgressBarModule,
    MatListModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSnackBarModule
  ],
  exports: [
    MatButtonModule,
    MatBottomSheetModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatDividerModule,
    MatTableModule,
    MatProgressBarModule,
    MatListModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSnackBarModule
  ]
})
export class MdModule {}
