// implement map

function myMap(array, callbackFunc) {
  let mapArr = [];

  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    mapArr.push(callbackFunc(element, index, array));
  }
  return mapArr;
}

function callbackFunc(...args) {
  return args[0].length;
}

const array = ["abra", "kadabra", "focus", "pokus"];

const newArr = myMap(array, callbackFunc); // return lengths of elements of array;

console.log(newArr);
