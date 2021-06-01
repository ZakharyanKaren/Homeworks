// Write functions that will return head and tail of Array

function getHead(arr) {
  if (!Array.isArray(arr[0])) {
    return [arr[0]];
  } else return arr[0];
}

function getTail(arr) {
  [, ...tail] = arr;
  return tail;
}

console.log(getHead([1, 2, 3])); // => [1]
console.log(getTail([1, 2, 3])); // => [2, 3]
