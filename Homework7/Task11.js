// Given an array of integers, find the pair of adjacent elements that has the largest product and return that
// product.

let array = [1, 20, 14, 6, 52, 20, 11, 4, 9, 41, 22];

function largestProductOfAdjacentElem(array) {
  if (array.length < 3) {
    return "I need minimum 3 elements in array :(";
  }
  if (array.length === 3) {
    return array[0] * array[2];
  }

  let product = 0;

  for (let i = 1; i < array.length - 1; i++) {
    const leftElem = array[i - 1];
    const rightElem = array[i + 1];

    if (leftElem * rightElem > product) {
      product = leftElem * rightElem;
    }
  }

  return product;
}

console.log(largestProductOfAdjacentElem(array));
