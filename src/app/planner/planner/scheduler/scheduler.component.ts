import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { formatDate, Time } from '@angular/common';
import { MatDatepicker } from '@angular/material/datepicker';
import { PlannerService } from '../services/planner.service';
import moment from 'moment';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrl: './scheduler.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchedulerComponent {
  @Input() SelectedDate: any;
  data: any[] = [];
  currentDate: any;
  week?: Date[] = [];
  weekCol: string[] = [];
  displayedColumns: string[] = [];
  readonly hours: number[] = [];

  taskList?: any[];

  constructor(private plannerService: PlannerService) {
    for (let t = 0; t < 24; t++) {
      this.hours.push(t);
      this.data.push({ time: t });
    }

    this.SelectedDate = this.plannerService.getSelectedDate().subscribe((x) => {
      this.currentDate = x;
      this.weekDaysCalculate(this.currentDate);
    });
  }

  weekDaysCalculate(currentDate: Date) {
    this.week = [];
    this.weekCol = [];
    this.displayedColumns = [];

    for (let i = -3; i < 4; i++) {
      let day = moment(currentDate).add(i, 'days').toDate();
      this.week?.push(day);
    }

    this.displayedColumns.push('time');
    this.week?.forEach((date) =>
      this.weekCol.push(
        moment(date).format('ddd') + ' ' + moment(date).format('MM/DD')
      )
    );
    this.weekCol.forEach((col) => this.displayedColumns.push(col));

    // console.log(this.week);
    // console.log(this.weekCol);
    // console.log(this.displayedColumns);
  }

  onCellClick(time: any, date: any, dataCell: any) {
    console.log('Clicked cell:', time, date, dataCell);
  }
}
