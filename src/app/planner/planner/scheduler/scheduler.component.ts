import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { formatDate, Time } from '@angular/common';
import { MatDatepicker } from '@angular/material/datepicker';
import { PlannerService } from '../services/planner.service';
import moment from 'moment';

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
  data: any[] = [];
  currentDate: any;
  week?: Date[] = [];
  weekCol:string[]=[];
  displayedColumns: string[] = []



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
      this.currentDate = x;
      this.weekDaysCalculate(this.currentDate);
      const nextDate = moment(this.currentDate).add(1, 'day').toDate();
      console.log(nextDate);
      });
  }

  weekDaysCalculate(currentDate: Date) {
    for (let i = -3; i < 4; i++) {
      let day = moment(currentDate).add(i, 'days').toDate();
      this.week?.push(day);
    }

    this.displayedColumns.push('time');
    this.week?.forEach(date=> this.weekCol.push( moment(date).format('ddd') + ' ' + moment(date).format('MM/DD')));
    this.weekCol.forEach(col=>this.displayedColumns.push(col));


    console.log(this.week);
    console.log(this.weekCol);
    console.log(this.displayedColumns);
  }
}
