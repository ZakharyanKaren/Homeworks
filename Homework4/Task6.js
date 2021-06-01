// Given three numbers. Sort them by the ascending order.

let arrOfNum = [9800, -9800, 0];

arrOfNum.sort(function (a, b) {
  return a - b;
});

console.log(arrOfNum);
