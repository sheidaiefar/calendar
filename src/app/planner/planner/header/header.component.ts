import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {provideNativeDateAdapter} from "@angular/material/core";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {now} from "moment";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  today:Date=new Date(now());
selectedDate=signal<Date|null>(this.today)
  addEvent(type: string,event: MatDatepickerInputEvent<Date>) {

    console.log('today:',this.today);
    if (event.value){
      this.selectedDate.update(value=>event.value)
    }

    console.log(this.selectedDate())

  }

}
