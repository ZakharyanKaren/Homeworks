// Given an array of numbers. Write a function to separate odd and even numbers in different arrays.

let arr = [45, 12, 3, 6, 17, 0];

function separateEvenAndOddNumbers(arr) {
  let evenArr = [],
    oddArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 || arr[i] === 0) {
      evenArr.push(arr[i]);
    } else {
      oddArr.push(arr[i]);
    }
  }

  return [evenArr, oddArr];
}

console.log(separateEvenAndOddNumbers(arr));
