import { Holiday } from "./holiday";

export class CroatianHolidays {
  private holidays: Holiday[] = [];
  private currentYear: number;
  private overlappedHolidays: number;

  constructor(currentYear: number) {
    this.currentYear = currentYear;
    this.overlappedHolidays = 0;
    this.initializeHolidays();
  }

  public getHolidays(): Holiday[] {
    return this.holidays;
  }

  public getOverlappedNumber(): number {
    return this.overlappedHolidays;
  }

  private initializeHolidays(): void {
    this.holidays.push(...this.populateHolidays());
    this.sortHolidays();
  }

  private populateHolidays = (): Holiday[] => {
    const holidays: Holiday[] = [
      ...this.getFixedHolidays(),
      ...this.getMovableHolidays(),
    ];
    const uniqueHolidays: Holiday[] = [];

    holidays.forEach((holiday) => {
      const dateMatched = uniqueHolidays.some(
        (uniqueHoliday) =>
          uniqueHoliday.getDate().getTime() === holiday.getDate().getTime()
      );

      if (!dateMatched) {
        const holidaysSameDate = holidays.filter(
          (res) => res.getDate().getTime() === holiday.getDate().getTime()
        );

        if (holidaysSameDate.length > 1) {
          this.overlappedHolidays += holidaysSameDate.length;
          const combinedName = holidaysSameDate
            .map((sameHoliday) => sameHoliday.getName())
            .join(" & ");
          const newHoliday = new Holiday(combinedName, holiday.getDate());
          uniqueHolidays.push(newHoliday);
        } else {
          uniqueHolidays.push(holiday);
        }
      }
    });

    return uniqueHolidays;
  };

  private sortHolidays = () => {
    this.holidays.sort(
      (firstHoliday: Holiday, secondHoliday: Holiday) =>
        firstHoliday.getDate().getTime() - secondHoliday.getDate().getTime()
    );
  };

  private getFixedHolidays(): Holiday[] {
    const fixedHolidays: Holiday[] = [];
    fixedHolidays.push(
      new Holiday("Nova Godina", new Date(this.currentYear, 0, 1))
    );
    fixedHolidays.push(
      new Holiday("Sveta tri kralja", new Date(this.currentYear, 0, 6))
    );
    fixedHolidays.push(
      new Holiday("Praznik rada", new Date(this.currentYear, 4, 1))
    );
    fixedHolidays.push(
      new Holiday("Dan državnosti", new Date(this.currentYear, 4, 30))
    );
    fixedHolidays.push(
      new Holiday("Dan antifašističke borbe", new Date(this.currentYear, 5, 22))
    );
    fixedHolidays.push(
      new Holiday(
        "Dan pobjede i domovinske zahvalnosti",
        new Date(this.currentYear, 7, 5)
      )
    );
    fixedHolidays.push(
      new Holiday("Velika Gospa", new Date(this.currentYear, 7, 15))
    );
    fixedHolidays.push(
      new Holiday("Dan svih svetih", new Date(this.currentYear, 10, 1))
    );
    fixedHolidays.push(
      new Holiday(
        "Dan sjećanja na žrtve Domovinskog rata i Dan sjećanja na žrtvu Vukovara i Škrabnje",
        new Date(this.currentYear, 10, 18)
      )
    );
    fixedHolidays.push(
      new Holiday("Božić", new Date(this.currentYear, 11, 25))
    );
    fixedHolidays.push(
      new Holiday("Sveti Stjepan", new Date(this.currentYear, 11, 26))
    );

    return fixedHolidays;
  }

  private getMovableHolidays(): Holiday[] {
    const movableHolidays: Holiday[] = [];
    movableHolidays.push(...this.easterCalculator());

    return movableHolidays;
  }

  private easterCalculator(): Holiday[] {
    const a = this.currentYear % 19;
    const b = Math.floor(this.currentYear / 100);
    const c = this.currentYear % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);
    const month = Math.floor((h + l - 7 * m + 114) / 31);
    const day = ((h + l - 7 * m + 114) % 31) + 1;

    const easterHolidays: Holiday[] = [];
    const easter = new Date(this.currentYear, month - 1, day);
    const easterMonday = new Date(easter);
    const corpusChristi = new Date(easter);
    corpusChristi.setDate(corpusChristi.getDate() + 60);
    easterMonday.setDate(easterMonday.getDate() + 1);

    easterHolidays.push(new Holiday("Uskrs", easter));
    easterHolidays.push(new Holiday("Uskrsni ponedjeljak", easterMonday));
    easterHolidays.push(new Holiday("Tijelovo", corpusChristi));

    return easterHolidays;
  }
}
