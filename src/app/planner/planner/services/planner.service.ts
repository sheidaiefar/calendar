import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { now } from 'moment/moment';
import { TaskModel } from '../models/planner.model';
import { TaskService } from './task.service';

@Injectable({
  providedIn: 'root',
})
export class PlannerService {
  today: Date = new Date(now());
  private selectedDateSubject = new BehaviorSubject<Date | null>(this.today);
  private TaskListSubject = new BehaviorSubject<TaskModel[] | null>([]);

  constructor(private taskService: TaskService) {}
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
    this.taskService.getTaskList().subscribe((res) => {
      this.TaskListSubject.next(res);
    });
    return this.TaskListSubject.asObservable();
  }
}
