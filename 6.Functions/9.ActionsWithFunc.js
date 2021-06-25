// Write a function which receives an array and a number as arguments and returns a new array from the
// elements of the given array which are largerthan the given number.

let array = [10, 25, 16, -5, 30, 15, 24];
let number = 16;

function largerThanNumber(array, number) {
  let newArr = [];
  let err = "Such values do not exist.";

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (element > number) {
      newArr.push(element);
    }
  }

  if (newArr.length === 0) {
    return err;
  } else return newArr;
}

console.log(largerThanNumber(array, number));
