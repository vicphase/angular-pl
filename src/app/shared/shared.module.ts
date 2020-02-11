import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
import { MatToolbarModule } from '@angular/material/toolbar';

import { VirtualScrollComponent } from './components/virtual-scroll/virtual-scroll.component';
import { ArrayToStringPipe } from './pipes/array-to-string.pipe';
import { LoadingComponent } from './components/loading/loading.component';

const MATERIAL_MODULES = [
  // Form controls
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
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
  // CDK
  ScrollingModule
];

const COMPONENTS = [LoadingComponent, VirtualScrollComponent];

const PIPES = [ArrayToStringPipe];

@NgModule({
  imports: [CommonModule, MATERIAL_MODULES],
  exports: [MATERIAL_MODULES, COMPONENTS, PIPES],
  declarations: [COMPONENTS, PIPES]
})
export class SharedModule {}