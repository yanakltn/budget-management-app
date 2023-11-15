export enum WeekDay {
  Monday = "M",
  Tuesday = "T",
  Wednesday = "W",
  Thursday = "T",
  Friday = "F",
  Saturday = "S",
  Sunday = "S",
}

export type CalendarDate = {
  weekDay: WeekDay;
  date: Date;
  hasExpenses: boolean;
};
