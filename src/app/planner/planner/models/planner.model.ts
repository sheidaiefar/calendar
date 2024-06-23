import moment, {now} from "moment";

export class TaskModel {
  title: string='task';
  date: Date=new Date(now());
  fromTime: number=0;
  toTime: number=1;
}
