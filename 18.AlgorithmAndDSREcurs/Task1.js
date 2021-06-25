function recursiveFunc(number) {
  if (number % 2 !== 0) {
    return recursiveFunc(Math.floor(number / 10));
  } else if (number === 0) {
    return true;
  }

  return false;
}

console.log(recursiveFunc(13579));
console.log(recursiveFunc(4211133));
console.log(recursiveFunc(7791));
console.log(recursiveFunc(5));
