// Given mixed array of numbers, strings, booleans, nulls and undefined. Filter array and get all the numbers
// in a separate array. Arrange them such as from the beginning are the odds and from the ending the
// evens.

let arr = [8, 0, 1, "hey", 12, 5, true, "2", null, 7, 3];

let newArr = [];

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
    if (arr[i] % 2 === 0 || arr[i] === 0) {
      newArr.push(arr[i]);
    } else {
      newArr.unshift(arr[i]);
    }
  }
}

console.log(newArr);
