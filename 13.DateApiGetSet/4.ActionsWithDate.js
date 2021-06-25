// Each year has 365 or 366 days. Given a string date representing a Gregorian calendar date formatted as
// month/day/year,return the day-number of the year. All input strings in the tests are valid dates.

function dayOfYear(recieveString) {
  let recieveDate = new Date(recieveString);
  let start = new Date(recieveDate.getFullYear(), 0, 0);
  let difference = recieveDate - start;
  let oneDay = 1000 * 60 * 60 * 24;
  let dayCount = Math.floor(difference / oneDay);

  return dayCount;
}

console.log(dayOfYear("12/13/2020")); // 348
console.log(dayOfYear("12/17/2020")); // 352
console.log(dayOfYear("11/16/2020")); // 321
console.log(dayOfYear("1/9/2019")); // 9
console.log(dayOfYear("3/1/2004")); // 61
console.log(dayOfYear("12/31/2000")); // 366
