function recursiveFunc(arr, i = 0, arr2 = []) {
  if (i === arr.length - 1 || arr.length === 0) {
    return arr2;
  }
  arr2.push(arr[i + 1]);
  return recursiveFunc(arr, i + 1, arr2);
}

console.log(recursiveFunc([6, 78, "n", 0, 1]));
