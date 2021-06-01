function recursiveFunc(arr) {
  const flatArr = [];

  arr.forEach((item) => {
    if (Array.isArray(item)) {
      flatArr.push(...recursiveFunc(item));
    } else {
      flatArr.push(item);
    }
  });

  return flatArr;
}

console.log(recursiveFunc([1, [3, 4, [1, 2]], 10]));
