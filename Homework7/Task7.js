// Given an array. Determine whether it consists only from uniques or not.

let array = [1, 2, 3, "a", "b", "ab"];
let isUnique = true;

function ifUnique(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    const element = arr[i];
    if (arr.indexOf(arr[i], i + 1) !== -1) {
      isUnique = !isUnique;
    }
  }

  if (isUnique) {
    return "Unique";
  } else return "Is not unique";
}

console.log(ifUnique(array));
