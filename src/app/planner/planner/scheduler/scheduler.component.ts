import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {Time} from "@angular/common";
import {MatDatepicker} from "@angular/material/datepicker";

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
@Input() date:Date[]=[];
  // @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date> | undefined;

  // displayedColumns: string[] = ['date', 'start', 'end'];
  // scheduleData = [
  //   { date: new Date('2024-06-18T00:00:00.000Z'), start: '09:00', end: '10:00' },
  //   { date: new Date('2024-06-18T00:00:00.000Z'), start: '10:00', end: '11:00' },
  //   // Add more schedule entries here
  // ];



  // ngAfterViewInit() {
  //   this.datepicker?.open();
  // }

  readonly hours: number[] = [];
  satTaskList: TaskModel[] = [
      {
          title: 'مدیریت فرآیندها',
          to: 1,
          from: 3,
          location: 'tehran',
          heightPx: 100,
          topPx: 300
      }, {
          title: 'فیزیک',
          to: 1,
          from: 3,
          location: 'ساختمان 2',
          heightPx: 150,
          topPx: 1000
      },
  ];
  constructor() {
      for (let t = 0; t < 24; t++) {
          this.hours.push(t);
      }
  }






}
