function recursiveFunc(arr, i = 0) {
  if (i === arr.length - 1) {
    return -1;
  }
  return arr[i] < arr[i + 1] ? recursiveFunc(arr, i + 1) : i + 1;
}

console.log(recursiveFunc([-100, -5, 6, 100, 50, 101, 102]));
