import { CroatianHolidays } from "../classes/croatianHolidays";
import { yearDetails } from "../types/yearDetails";
import getCalendarDays from "./getCalendarDays";

const getYearDetails = (year: number, fullDetails: boolean = false): yearDetails => {
  const croatianHolidays = new CroatianHolidays(year);
  const yearHolidays = croatianHolidays.getHolidays();
  const overlappedHolidays = croatianHolidays.getOverlappedNumber();
  let nonWorkingDays = 0;

  const calendarDays = getCalendarDays(year);

  for (const holiday of yearHolidays) {
    // Find the corresponding day in the calendarDays
    const matchingDay = calendarDays.find((calendarDate) => {
      return holiday.getDate().getTime() === calendarDate.getTime();
    });

    if (matchingDay) {
      const dayIndex = matchingDay.getDay();
      if (dayIndex !== 0 && dayIndex !== 6) {
        nonWorkingDays++;
      }
    } else {
      console.log(`${holiday.getName()} is not in the generated calendarDays.`);
    }
  }

  if(fullDetails) {
    return {
      nonWorkingDays,
      overlappedHolidays,
      yearHolidays,
    };
  }
  else {
    return {
      nonWorkingDays,
      overlappedHolidays,
    };
  }
};

export default getYearDetails;
