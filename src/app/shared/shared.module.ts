import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { FormComponent } from './components/form/form.component';
import { LoadingComponent } from './components/loading/loading.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { VirtualScrollComponent } from './components/virtual-scroll/virtual-scroll.component';
import { ArrayToStringPipe } from './pipes/array-to-string.pipe';

const MATERIAL_MODULES = [
  // Form controls
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  // Navigation
  MatMenuModule,
  MatToolbarModule,
  // Layout
  MatCardModule,
  MatDividerModule,
  MatListModule,
  // Buttons & Indicators
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule,
  // Popups & Modals
  MatDialogModule,
  MatSnackBarModule,
  MatTooltipModule,
  // Data table
  MatSortModule,
  // CDK
  ScrollingModule
];

const COMPONENTS = [
  ConfirmDialogComponent,
  LoadingComponent,
  FormComponent,
  SearchBarComponent,
  VirtualScrollComponent
];

const PIPES = [ArrayToStringPipe];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MATERIAL_MODULES],
  exports: [MATERIAL_MODULES, COMPONENTS, PIPES],
  declarations: [COMPONENTS, PIPES],
  entryComponents: [ConfirmDialogComponent]
})
export class SharedModule {}
