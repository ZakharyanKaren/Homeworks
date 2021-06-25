// Output the books sorted by the percent in descending order which readStatus is true.

let arrayOfList = [
  { book: "Catcher in the Rye", readStatus: true, percent: 40 },
  { book: "Animal Farm", readStatus: true, percent: 20 },
  { book: "Solaris", readStatus: false, percent: 90 },
  { book: "The Fall", readStatus: true, percent: 50 },
  { book: "White Nights", readStatus: false, percent: 60 },
  { book: "After Dark", readStatus: true, percent: 70 },
];

function sortByPercent(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (element.readStatus) {
      newArr.push(element);
    }
  }

  newArr.sort(function (a, b) {
    if (a.percent < b.percent) {
      return 1;
    }
    if (a.percent > b.percent) {
      return -1;
    }

    return 0;
  });
  return newArr;
}

console.log(sortByPercent(arrayOfList));
