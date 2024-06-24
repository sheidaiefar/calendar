import { Injectable } from '@angular/core';
import { TaskModel } from '../models/planner.model';
import { of } from 'rxjs';
import { PlannerService } from './planner.service';

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
    let date=task.date.getDate;
    console.log(date);
    
    debugger;
    let taskList: TaskModel[] = [];
    this.getTaskList().subscribe((x) => {
      x ? (taskList = x) : (taskList = []);
      if (!taskList.includes(task)) {
        // this.ValidationChecks(taskList, task); todo

        taskList.push(task);
        localStorage.setItem('tasks', JSON.stringify(taskList));
        //  this.plannerService.setTaskListSubject(taskList);
      }
    });
    return of(taskList);
  }

  deleteTasks() {
    localStorage['tasks'].clear();
    //this.plannerService.setTaskListSubject([]);
  }
}
