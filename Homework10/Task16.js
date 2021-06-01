// findIndex

function myFindIndex(array) {
  let newArr = [...array];

  for (let index = 0; index < newArr.length; index++) {
    const element = newArr[index];

    if (callbackFunc(element, index, newArr)) {
      return index;
    }
  }
  return -1;
}

function callbackFunc(el, idx, arr) {
  if (typeof el === "string") {
    return true;
  }
  return false;
}

let array = [1, 2, 3, 4, 5, 6, 7, "8", 9, "10"];

console.log(myFindIndex(array, callbackFunc)); // find index of string
