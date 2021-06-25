// Given an array consisting from the arrays of numbers (like a two-dimensional array). Find sum of each
// row and print them as an array.

let arr = [[8, 35, 2], [8], [5, 6, -5, -6], [1, 3, -9, 0, -1]];
let newArr = [];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i].length === 1) {
    newArr.push(arr[i][0]);
  } else {
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
    newArr.push(sum);
    sum = 0;
  }
}

console.log(newArr);
