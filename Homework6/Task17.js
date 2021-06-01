// Given two objects. Write a function that performs shallow compare.

let a = { a: "7" };
let b = { a: "7" };

function shallowCompare(a, b) {
  for (var key in a) {
    if (!(key in b) || a[key] !== b[key]) {
      return false;
    }
  }
  for (var key in b) {
    if (!(key in a) || a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}

console.log(shallowCompare(a, b));
