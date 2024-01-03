import { weekDay } from "../types/weekDay";
import getWeekDay from "../utils/getWeekDay";

export class Holiday {
  private name: string;
  private date: Date;

  constructor(name: string, date: Date) {
    this.name = name;
    this.date = date;
  }

  public getName(): string {
    return this.name;
  }

  public getDate(): Date {
    return this.date;
  }

  public getShortDate(): string {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(this.date);
  }

  public setName(name: string) {
    this.name = name;
  }

  public getWeekDay(dayIndex: number): weekDay | undefined {
    return getWeekDay(dayIndex)
  }
}
