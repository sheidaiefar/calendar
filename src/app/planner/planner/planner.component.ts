import {Component, signal} from '@angular/core';

@Component({
    selector: 'app-planner',

  templateUrl: './planner.component.html',
  styleUrl: './planner.component.css'
})
export class PlannerComponent {

  protected readonly signal = signal;
  protected readonly Date = Date;
}
