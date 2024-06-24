import {Component, signal} from '@angular/core';
import {TaskModel} from "./models/planner.model";
import {PlannerService} from "./services/planner.service";

@Component({
    selector: 'app-planner',

  templateUrl: './planner.component.html',
  styleUrl: './planner.component.css'
})
export class PlannerComponent {
  taskList:TaskModel[]=[];
  protected readonly signal = signal;
  protected readonly Date = Date;

  constructor(private plannerService :PlannerService ) {

  }

  getTaskList(){
    this.plannerService.getTaskListSubject().subscribe(x=>{
      if(x){
        this.taskList=x;
      }
    })
    console.log('tasklist of planner by subject:',this.taskList)
    return this.taskList
  }
}
