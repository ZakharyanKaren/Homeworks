// Write a recursive function
// 1.1 - to find the sum of a given array.

const recursiveFunc = (num, i = 0, sum = 0) =>
  i < num.length ? recursiveFunc(num, i + 1, (sum += num[i])) : sum;

console.log(recursiveFunc([1, 2, 3, 4, 5, 6]));

//////////////////////////////////////////////////////////////////////

// 1.2 - to find the factorial of a given natural N.

// const recursiveFunc = (num, multi = 1) =>
//   num > 1 ? recursiveFunc(num - 1, (multi *= num)) : multi;

// console.log(recursiveFunc(10));
