// Given an array of numbers. Find the sum of numbersʼ quadratic which are even.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 13, 14];

function sumOfEvenQuadraticNum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === 0) {
      continue;
    }
    if (element % 2 === 0) {
      sum += Math.pow(element, 2);
    }
  }
  return sum;
}

console.log(sumOfEvenQuadraticNum(array));
