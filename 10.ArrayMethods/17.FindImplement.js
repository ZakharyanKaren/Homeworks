// implement find

function myFind(array) {
  let newArr = [...array];

  for (let index = 0; index < newArr.length; index++) {
    const element = newArr[index];

    if (callbackFunc(element, index, newArr)) {
      return element;
    }
  }
  return undefined;
}

function callbackFunc(el, idx, arr) {
  if (el < 0) {
    return true;
  }
  return false;
}

console.log(myFind([1, 2, 3, -4, 5, 6], callbackFunc)); // find first element which < 0
