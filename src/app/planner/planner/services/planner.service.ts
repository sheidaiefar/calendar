import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { now } from 'moment/moment';

@Injectable({
  providedIn: 'root',
})
export class PlannerService {
  today: Date = new Date(now());
  private selectedDateSubject = new BehaviorSubject<Date | null>(this.today);

  setSelectedDate(value: Date | null) {
    this.selectedDateSubject.next(value);
  }

  getSelectedDate() {
    return this.selectedDateSubject.asObservable();
  }

  constructor() {}
}
