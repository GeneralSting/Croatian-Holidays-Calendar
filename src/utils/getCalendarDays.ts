function getCalendarDays(year: number): Date[] {
  const calendarDays: Date[] = [];
  const months = 12;

  for (let month = 0; month < months; month++) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let day = 1; day <= daysInMonth; day++) {
      calendarDays.push(new Date(year, month, day));
    }
  }

  return calendarDays;
}

export default getCalendarDays;
