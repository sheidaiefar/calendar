import { Injectable } from '@angular/core';
import { TaskModel } from '../models/planner.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}
  getTaskList(): any {
    //localStorage['tasks'].clear;
    const value = localStorage.getItem('tasks');
    if (value) {
      var tasks = JSON.parse(value);
    }
    return tasks ?? [];
  }

  addTask(task: TaskModel) {
    return this.addTaskIntoLocalStorage(task) ? of(true) : of(false);
  }

  addTaskIntoLocalStorage(task: TaskModel) {
    debugger
    let taskList: any[] = this.getTaskList();
    if (!taskList) {
      taskList = [];
    }

    if (taskList.length != 0 && !taskList.includes(task)) {
      // this.ValidationChecks(taskList, task); todo

      taskList.push(task);
      localStorage.setItem('tasks', JSON.stringify(taskList));
      debugger
      return true;
    } else {
      return false;
    }
  }
}
