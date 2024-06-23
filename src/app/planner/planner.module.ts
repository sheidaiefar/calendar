import { ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlannerComponent } from './planner/planner.component';
import { HeaderComponent } from './planner/components/header/header.component';
import { FormsModule } from '@angular/forms';
import { SchedulerComponent } from './planner/components/scheduler/scheduler.component';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
} from '@angular/material/table';
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
} from '@angular/material/form-field';
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle,
} from '@angular/material/datepicker';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { MatButtonModule, MatFabButton } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { TaskComponent } from './planner/components/task/task.component';

@NgModule({
  declarations: [
    PlannerComponent,
    HeaderComponent,
    SchedulerComponent,
    TaskComponent,
  ],
  exports: [PlannerComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatLabel,
    MatFormField,
    MatDatepicker,
    MatInput,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatIcon,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    CdkDrag,
    MatFabButton,
    MatDialogModule,
    MatButtonModule,
  ],
})
export class PlannerModule {}
