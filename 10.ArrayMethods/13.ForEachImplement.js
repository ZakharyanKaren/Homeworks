// implement forEach

function myEach(array, callbackFunc) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    callbackFunc(element, index, array);
  }
}

function callbackFunc(el, idx, arr) {
  console.log(el, idx, arr);
}

myEach([1, 2, 3, 4, 5], callbackFunc);
