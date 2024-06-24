import moment, {now} from "moment";

export class TaskModel {
  title!: string;
  date!: Date;
  fromTime!: number;
  toTime!: number;
}
