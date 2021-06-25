// The function should produce the same output even if dateStart is greater than dateEnd

let january2017 = new Date(2017, 2, 1);
let january2018 = new Date(2018, 5, 1);

function monthsInterval(dateStart, dateEnd) {
  if (dateStart > dateEnd) {
    [dateStart, dateEnd] = [dateEnd, dateStart];
  }

  let startMonth = dateStart.getMonth();
  let endMonth = dateEnd.getMonth();
  let startYear = dateStart.getFullYear();
  let endYear = dateEnd.getFullYear();
  let allMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  resultMonths = [];

  if (startYear === endYear) {
    if (startMonth === endMonth) {
      resultMonths = allMonths[startMonth];
    } else {
      startMonth > endMonth
        ? ([startMonth, endMonth] = [endMonth, startMonth])
        : "";

      for (let i = startMonth; i <= endMonth; i++) {
        resultMonths.push(allMonths[i]);
      }
    }
  } else {
    let countOfYears = endYear - startYear;

    for (let i = startMonth; i <= 11; i++) {
      resultMonths.push(allMonths[i]);
    }

    if (countOfYears - 1 === 0) {
      if (endMonth !== 0) {
        for (let j = 0; j <= endMonth; j++) {
          resultMonths.push(allMonths[j]);
        }
      }
    } else {
      while (countOfYears != 0) {
        for (let j = 0; j <= 11; j++) {
          resultMonths.push(allMonths[j]);
        }
        countOfYears--;
      }

      if (endMonth !== 0) {
        for (let j = 0; j <= endMonth; j++) {
          resultMonths.push(allMonths[j]);
        }
      }
    }
  }

  return resultMonths;
}

console.log(monthsInterval(january2017, january2018));
