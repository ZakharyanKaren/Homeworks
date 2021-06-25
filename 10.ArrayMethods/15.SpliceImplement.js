// implement splice

function mySplice(array, start, deleteCount, ...args) {
  let removedElementsArr = [];
  let changedArr = [];
  let alreadyAdded = false;

  if (start < 0) {
    start = array.length + start;
  }

  if (start > array.length) {
    start = array.length;
  }

  if (deleteCount > array.length - start) {
    deleteCount = array.length - start;
  }

  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (index >= start && index < start + deleteCount) {
      removedElementsArr.push(element);

      if (!alreadyAdded) {
        changedArr.push(...args);
        alreadyAdded = !alreadyAdded;
      }
    } else {
      changedArr.push(element);
    }
  }

  arr = changedArr;
  return removedElementsArr;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(mySplice(arr, 2, 3, 77, 88, 99, 111));
console.log(arr);
