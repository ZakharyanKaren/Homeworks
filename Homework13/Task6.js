// Implement following function

const formatDate = (date) => {
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

  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();

  let result = `${day} ${allMonths[month]} ${year}`;

  return result;
};

console.log("Actual output: ", formatDate(new Date("2020-05-14")));
console.log("Expected output", "14 May 2020");
