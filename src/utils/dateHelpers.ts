// utils/dateHelpers.ts

export const getInitialMonday = (): Date => {
  const d = new Date();
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  const monday = new Date(d.setDate(diff));
  monday.setHours(0, 0, 0, 0);
  return monday;
};

export const getWeeksDiff = (date1: Date, date2: Date): number => {
  const oneWeek = 7 * 24 * 60 * 60 * 1000;
  return Math.floor((date1.getTime() - date2.getTime()) / oneWeek);
};

export const getWeekRangeString = (baseDate: Date, weeksFromBase: number): string => {
  const start = new Date(baseDate);
  start.setDate(start.getDate() + weeksFromBase * 7);
  const end = new Date(start);
  end.setDate(end.getDate() + 6);

  const format = (d: Date) => `${d.getMonth() + 1}/${d.getDate()}`;
  return `${format(start)} ~ ${format(end)}`;
};
