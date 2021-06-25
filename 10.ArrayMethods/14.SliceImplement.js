// implement slice

function mySlice(array, begin = 0, end = array.length) {
  let newArr = [];

  if (begin > array.length) {
    return newArr;
  }

  if (end > array.length) {
    end = array.length;
  }

  if (begin < 0) {
    begin = array.length + begin;
  }

  if (end < 0) {
    end = array.length + end;
  }

  for (let index = begin; index < end; index++) {
    const element = array[index];
    newArr.push(element);
  }

  return newArr;
}

console.log(mySlice([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], -6, 100));
