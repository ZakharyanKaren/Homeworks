// Write a function that calculates sum, difference, multiplication and division between given array elements
// depending on passed operation symbol. Write appropriate function for each operation.

let arr = [5, 9, 11, 25, 4, 1];
let str = "/"; // prompt('Enter a symbol');

function calcFunc(arr, symbol) {
  switch (symbol) {
    case "+":
      return sum();
    case "-":
      return diff();
    case "*":
      return multiple();
    case "/":
      return div();
    default:
      return "Enter valid symbol";
  }

  function sum() {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  function diff() {
    let diff = 0;
    for (let i = 0; i < arr.length; i++) {
      diff -= arr[i];
    }
    return diff;
  }
  function multiple() {
    if (arr.includes(0)) {
      return 0;
    }
    let multi = arr[0];
    for (let i = 1; i < arr.length; i++) {
      multi *= arr[i];
    }
    return multi;
  }
  function div() {
    if (arr.includes(0)) {
      return 0;
    }
    let div = arr[0];
    for (let i = 1; i < arr.length; i++) {
      div /= arr[i];
    }
    return div;
  }
}

console.log(calcFunc(arr, str));
