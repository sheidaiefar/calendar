import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { now } from 'moment';
import { PlannerService } from '../../services/planner.service';
import { MatDialog } from '@angular/material/dialog';
import { TaskComponent } from '../task/task.component';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  today: Date = new Date(now());
  selectedDate = signal<Date | null>(this.today);
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    if (event.value != null) {
      this.selectedDate.update((value) => event.value);
      this.plannerService.setSelectedDate(this.selectedDate());
    }
  }

  constructor(
    private plannerService: PlannerService,
    private taskService: TaskService,
    private dialog: MatDialog
  ) {
    this.plannerService.setSelectedDate(this.today);
  }

  openDialog() {
    this.dialog
      .open(TaskComponent, {
        width: ' 40%',
        height: ' 40%',
        data: { message: 'This is the dialog content.' },
      })
      .afterClosed()
      .subscribe((result) => {
        console.log('Dialog was closed', result);
      });
  }

  deleteAll() {
    this.taskService.deleteTasks();
    // this.taskService.getTaskList();
    // this.plannerService.getTaskListSubject();
  }
}
