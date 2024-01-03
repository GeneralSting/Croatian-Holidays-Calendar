import { Holiday } from "../classes/holiday";

export type yearDetails = {
  nonWorkingDays: number;
  overlappedHolidays: number;
  yearHolidays?: Holiday[];
};
