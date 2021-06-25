// Implement following function

const getWeekOfMonth = (date) => {
  let result = 1;
  let weeks = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let endDay = date.getDate();
  let month = date.getMonth();
  let newDate = new Date(date.getFullYear(), month, 1);
  let startDay = newDate.getDay();

  for (let i = startDay; i < endDay + startDay; i++) {
    if (weeks[i] === "Sunday") {
      result++;
    }
    if (weeks[i] === "Saturday") {
      i = -1;
      endDay = endDay - 7;
    }
  }

  return result;
};
const result = getWeekOfMonth(new Date(2017, 10, 9));
// => 2
console.log(result);
