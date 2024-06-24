import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { now } from 'moment/moment';
import {TaskModel} from "../models/planner.model";

@Injectable({
  providedIn: 'root',
})
export class PlannerService {
  today: Date = new Date(now());
  private selectedDateSubject = new BehaviorSubject<Date | null>(this.today);
  private TaskListSubject = new BehaviorSubject<TaskModel[] | null>([]);

  constructor() {}
  setSelectedDate(value: Date | null) {
    this.selectedDateSubject.next(value);
  }

  getSelectedDate() {
    return this.selectedDateSubject.asObservable();
  }

  setTaskListSubject(value: TaskModel[] | null) {
    this.TaskListSubject.next(value);
  }
  getTaskListSubject() {
    return this.TaskListSubject.asObservable();
  }

}
