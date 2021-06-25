// Your function must use sort method

// Create a function that takes an array of numbers arr, a string str
// and return an array of numbers as per the following rules:
// - "Asc" returns a sorted array in ascending order.
// - "Desc" returns a sorted array in descending order.

sortBy([4, 3, 2, 1], "Asc"); // [1, 2, 3, 4]
sortBy([7, 8, 11, 66]); // [7, 8, 11, 66]
sortBy([7, 8, 11, 66], "Desc"); // [66, 11, 8, 7]

function sortBy(...args) {
  let arr = args[0];

  if (args[1] === undefined) {
    return arr;
  }

  let str = args[1];

  if (str === "Asc") {
    arr.sort(function compareNumbers(a, b) {
      return a - b;
    });
  } else if (str === "Desc") {
    arr.sort(function compareNumbers(a, b) {
      return b - a;
    });
  }
  return args;
}

console.log(sortBy([4, 3, 2, 1], "Asc"));
console.log(sortBy([7, 8, 11, 66]));
console.log(sortBy([7, 8, 11, 66], "Desc"));
