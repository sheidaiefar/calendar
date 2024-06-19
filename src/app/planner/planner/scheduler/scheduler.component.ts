import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Time } from '@angular/common';
import { MatDatepicker } from '@angular/material/datepicker';
import { PlannerService } from '../services/planner.service';

export interface TaskModel {
  title: string;
  location: string;
  from: number;
  to: number;
  heightPx: number;
  topPx: number;
}

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrl: './scheduler.component.scss',
})
export class SchedulerComponent {
  @Input() SelectedDate: any;
  // @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date> | undefined;

  displayedColumns: string[] = ['time'];

  data: any[] = [];

  readonly hours: number[] = [];
  // satTaskList: TaskModel[] = [
  //     {
  //         title: 'مدیریت فرآیندها',
  //         to: 1,
  //         from: 3,
  //         location: 'tehran',
  //         heightPx: 100,
  //         topPx: 300
  //     }, {
  //         title: 'فیزیک',
  //         to: 1,
  //         from: 3,
  //         location: 'ساختمان 2',
  //         heightPx: 150,
  //         topPx: 1000
  //     },
  // ];
  constructor(private plannerService: PlannerService) {
    for (let t = 0; t < 24; t++) {
      this.hours.push(t);
      this.data.push({ time: t });
    }
    console.log(this.data);

    this.SelectedDate = this.plannerService.getSelectedDate().subscribe((x) => {
      console.log(x);
      debugger;
    });

    console.log(this.SelectedDate);
    debugger;
  }
}
