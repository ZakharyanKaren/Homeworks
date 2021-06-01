// implement filter

function myFilter(array, callbackFunc) {
  let mapArr = [];

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (callbackFunc(element, index, array)) {
      mapArr.push(element);
    }
  }
  return mapArr;
}

function callbackFunc(...args) {
  let count = 0;

  for (let index = 0; index < args[0].length; index++) {
    const element = args[0][index];

    if (element === "a") {
      count++;
    }
  }
  if (count >= 2) {
    return true;
  } else return false;
}

const array = ["abra", "kadabra", "focus", "pokus"];

const newArr = myFilter(array, callbackFunc); // return elements which contain more than 2 'a';

console.log(newArr);
