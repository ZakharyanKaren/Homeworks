// Enter a number. Find the difference between its biggest and smallest digits.

let num = 4593653;
let arr = num.toString().split("");

arr.sort(function (a, b) {
  return a - b;
});

console.log(arr[arr.length - 1] - arr[0]);
