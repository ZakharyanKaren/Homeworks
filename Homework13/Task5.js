//  Write a function that, given a date (in the format MM/DD/YYYY),returns the day of the week as a string.
//  Each day name must be one of the following strings: "Sunday", "Monday", "Tuesday", "Wednesday",
// "Thursday", "Friday", or "Saturday".

// To illustrate, the day of the week for "12/07/2016" is "Wednesday".

let date = "12/07/2016";

function getDayName(givenDate, locale) {
  let date = new Date(givenDate);

  return date.toLocaleDateString(locale, { weekday: "long" });
}

console.log(getDayName(date, "en-US"));
