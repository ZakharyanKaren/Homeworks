function recursiveFunc(arr, num) {
  if (arr.length === 0 || num === 0) {
    return arr;
  }
  if (num > 0) {
    arr.push(arr.shift());
  } else {
    arr.unshift(arr.pop());
  }
  return num > 0 ? recursiveFunc(arr, num - 1) : recursiveFunc(arr, num + 1);
}

console.log(recursiveFunc(["a", "b", "c", "d", "e", "f", "g", "h"], 3));
