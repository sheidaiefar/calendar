import { Injectable } from '@angular/core';
import { TaskModel } from '../models/planner.model';
import { of } from 'rxjs';
import {PlannerService} from "./planner.service";

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private plannerService:PlannerService) {}

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
    debugger
    let taskList:any[]=[];
    this.getTaskList().subscribe(x=>{
      taskList =x;
      if (!taskList.includes(task)) {
        // this.ValidationChecks(taskList, task); todo

        taskList.push(task);
        localStorage.setItem('tasks', JSON.stringify(taskList));
        debugger
        }
    });

      this.plannerService.setTaskListSubject(taskList);
    return of(taskList)
  }
}
