// Your function must use reduce
// - Given an array, return the sum of numbers that are 18 or over.

const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43];

let filteredArr = arr.filter((e) => e > 18);
let sum = filteredArr.reduce((acc, curr) => acc + curr);

console.log(sum);
// 22 + 55 + 166 + 366 + 205 + 333 + 95 + 62 + 43 = 1347
