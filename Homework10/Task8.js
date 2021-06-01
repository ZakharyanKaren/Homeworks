// FILTER
// Your functions must use filter method
// Given an array, return a new array that only includes the numbers.

const arr = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN];

function onlyNumbers(array) {
  return array.filter((e) => parseInt(e));
}

console.log(onlyNumbers(arr));

// [1, 2, 55, 166]
