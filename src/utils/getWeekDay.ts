import { weekDay } from "../types/weekDay";

const getWeekDay = (dayIndex: number): weekDay | undefined => {
  const weekDays: weekDay[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  if (dayIndex >= 0 && dayIndex < weekDays.length) {
    return weekDays[dayIndex];
  } else {
    return undefined; // Handle invalid dayIndex if needed
  }
};

export default getWeekDay;