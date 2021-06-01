// ()))

let string = "()()(())))(()()(";
let array = string.split("");

function myFunc(arr) {
  let leftCount = 0;
  let rightCount = 0;
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];

    if (element === "(") {
      leftCount++;
    } else if (element === ")") {
      rightCount++;
    }
  }

  if (leftCount !== rightCount) {
    return -1;
  } else {
    for (let index = 0; index < arr.length - 1; index++) {
      if (arr[index] + arr[index + 1] === "()") {
        arr.splice(index, 2);
        index = -1;
      }
    }
    return arr.length / 2;
  }
}

console.log(myFunc(array));
