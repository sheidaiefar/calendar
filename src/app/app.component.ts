import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {MatIcon} from "@angular/material/icon";
import {PlannerModule} from "./planner/planner.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatIcon, PlannerModule],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calendar';
}
