import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SkeletonModule } from 'primeng/skeleton';
import { MatDialogModule } from '@angular/material/dialog';
import { CarouselModule } from 'primeng/carousel';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatStepperModule } from '@angular/material/stepper';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [],

  imports: [CommonModule],
  exports: [
    MatPaginatorModule,
    MatSliderModule,
    MatFormFieldModule,
    MatSelectModule,
    SkeletonModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatIconModule,
    MatExpansionModule,
    MatDialogModule,
    MatButtonModule,
    CarouselModule,
    MatDividerModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatTableModule,
    MatStepperModule,
    MatBottomSheetModule,
    MatListModule,
  ],
})
export class MaterialModule {}
