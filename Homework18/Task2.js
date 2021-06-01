function recursiveFunc(arr, index = 0, min = -1) {
  return index < arr.length
    ? recursiveFunc(
        arr,
        index + 1,
        (arr[index] < min || min === -1) && arr[index] >= 0 ? arr[index] : min
      )
    : min;
}

console.log(recursiveFunc([-5, 6, -100, 100, 50, 3, -60]));
