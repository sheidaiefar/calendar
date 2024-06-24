import { Injectable } from '@angular/core';
import { TaskModel } from '../models/planner.model';
import { of } from 'rxjs';
import { PlannerService } from './planner.service';
import moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getTaskList() {
    //localStorage['tasks'].clear;
    let tasks;
    const value = localStorage.getItem('tasks');
    if (value) {
      tasks = JSON.parse(value);
    }
    return of(tasks) ?? of([]);
  }

  addTask(task: TaskModel) {
    task.date = moment(task.date).format('ddd MM/DD').toString();
    let taskList: TaskModel[] = [];
    
    this.getTaskList().subscribe((x) => {
      x ? (taskList = x) : (taskList = []);
      if (!taskList.includes(task)) {
        // this.ValidationChecks(taskList, task); todo

        taskList.push(task);
        localStorage.setItem('tasks', JSON.stringify(taskList));
      }
    });
    return of(taskList);
  }

  deleteTasks() {
    localStorage.clear();
    localStorage.setItem('tasks', JSON.stringify([]));
    //this.plannerService.setTaskListSubject([]);
  }
}
