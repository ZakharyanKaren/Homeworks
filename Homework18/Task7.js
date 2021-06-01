const recursiveFunc = (num) =>
  num > 9 ? recursiveFunc(Math.floor(num / 10) + (num % 10)) : num;

console.log(recursiveFunc(666));
