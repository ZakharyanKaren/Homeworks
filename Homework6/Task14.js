// Write a function, which receives an array as an argument which elements arrays of numbers. Find
// product of biggest negative number of each array. If there is not any negative number, ignore that array.
// Check that items of the given array are arrays.

let array = [
  [-1, -1, -5, 6, 1, 2],
  [1, 0, 2, 9, 3, 0],
  [-4, -11, 0],
];

function productOfBiggestNegativeNums(array) {
  let isNotArr = false;
  let noNegatives = true;
  let product = 1;
  let biggestNegativeNumber = 0;
  let negativeNumArr = [];

  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      isNotArr = true;

      break;
    }

    for (let j = 0; j < array[i].length; j++) {
      const element = array[i][j];

      if (element < 0) {
        negativeNumArr.push(element);
        noNegatives = false;
      }
    }
    if (noNegatives) {
      continue;
    }

    if (negativeNumArr.length) {
      biggestNegativeNumber = Math.max(...negativeNumArr);
      negativeNumArr = [];
    }

    product *= biggestNegativeNumber;
    biggestNegativeNumber = 1;
  }

  if (isNotArr) {
    return "Invalid Argument";
  } else if (noNegatives) {
    return "No negatives";
  } else return product;
}

console.log(productOfBiggestNegativeNums(array));
