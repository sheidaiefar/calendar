import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlannerComponent } from './planner/planner.component';
import {HeaderComponent} from "./planner/header/header.component";
import { FormsModule } from '@angular/forms';
import { SchedulerComponent } from './planner/scheduler/scheduler.component';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable,
} from "@angular/material/table";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatDatepicker} from "@angular/material/datepicker";



@NgModule({
  declarations: [PlannerComponent, HeaderComponent,SchedulerComponent],
  exports: [
    PlannerComponent
  ],
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
  ]
})
export class PlannerModule { }
