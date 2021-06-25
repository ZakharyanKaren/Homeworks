// implement every

function myEvery(array, callbackFunc) {
  if (array.length === 0) {
    return true;
  }

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (callbackFunc(element, index, array)) {
      return false;
    }
  }
  return true;
}

function callbackFunc(...args) {
  if (typeof args[0] !== "string") {
    return true;
  }
  return false;
}

const array = ["abra", 5, 0, "kadabra", "focus", "pokus"];

console.log(myEvery(array, callbackFunc)); // is all elements are strings?
