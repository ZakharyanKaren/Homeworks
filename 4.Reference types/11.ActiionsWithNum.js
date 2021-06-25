// Given a number n ( n >= 0 ) . Print n Fibonacci number. (Fibonacci th series: 0, 1, 1, 2, 3, 5, 8 ..., ak = ak-1 + ak-2)

let n = 20;
let arr = [0, 1];
let val = 0;

for (let i = 2; i <= n; i++) {
  arr.push(arr[i - 2] + arr[i - 1]);
}

console.log(arr[arr.length - 1]);
