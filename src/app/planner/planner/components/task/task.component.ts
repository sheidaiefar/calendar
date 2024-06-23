import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { provideNativeDateAdapter } from '@angular/material/core';
import { TaskModel } from '../../models/planner.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNativeDateAdapter()],
})
export class TaskComponent {
  taskForm: FormGroup;
  task: TaskModel = new TaskModel();
  constructor(
    private taskService:TaskService,
    public dialogRef: MatDialogRef<TaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string },
    private formBuilder: FormBuilder
  ) {
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      fromTime: ['', Validators.required],
      toTime: ['', Validators.required],
    });
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onSubmit() {
    if (this.taskForm.valid) {
      console.log(this.taskForm.value);
      this.taskService.addTask(this.task).subscribe(res=>{
        debugger
      })
      // Perform any necessary actions with the form data
    }
  }
}
