import {Component, Input} from '@angular/core';
import {TaskModel} from "../../models/planner.model";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent {
  @Input() task !:TaskModel;
}
