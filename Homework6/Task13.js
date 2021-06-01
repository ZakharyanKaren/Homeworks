// Write a JavaScript function to get all possible subsets of length 3 of the given array. Assume that all
// elements in the array are unique.

let array = [5, 9, 23, 0, -2, -1];

function allSubsetsOfLength3(arr) {
  let newArr = [];

  if (arr.length === 1) {
    newArr.push(arr[0]);
  } else if (arr.length === 2) {
    newArr.push(arr[0], arr[1]);
  } else if (arr.length === 3) {
    newArr.push(arr[0], arr[1], arr[2]);
  } else {
    for (let i = 0; i < arr.length; i++) {
      const element = array[i];

      while (newArr[i].length < 3) {
        newArr[i].push(arr[i]);
      }
    }
  }

  return newArr;
}

console.log(allSubsetsOfLength3(array));
