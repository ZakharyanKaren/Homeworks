// implement some

function mySome(array, callbackFunc) {
  if (array.length === 0) {
    return false;
  }

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (callbackFunc(element, index, array)) {
      return true;
    }
  }
  return false;
}

function callbackFunc(...args) {
  if (typeof args[0] === "string") {
    return true;
  }
  return false;
}

const array = ["abra", 5, 0, "kadabra", "focus", "pokus"];

console.log(mySome(array, callbackFunc)); // is just 1 element are string?
