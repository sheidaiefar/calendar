import {Time} from "@angular/common";

export interface PlannerModel{
  date:Date;
  time:Time;
  event:EventModel;
}

export interface EventModel{
  title:string;
}
