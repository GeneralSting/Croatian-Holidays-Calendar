/**
 * leap years are divisible by 4
 * years divisible by 100 are not leap years, unless they are also divisible by 400
 */
const isLeapYear = (year: number): boolean => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

export default isLeapYear;
