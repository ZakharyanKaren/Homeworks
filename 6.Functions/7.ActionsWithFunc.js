// Write a function to compute a new string from the given one by moving the first char to come after the
// next two chars, so "abc" yields "bca". Repeat this process for each subsequent group of 3 chars. Ignore
// any group of fewer than 3 chars at the end.

let string = "abcdefghijklmnopqrstuvwxyz";

function moveChar(str) {
  let newStr = "";
  let firstElem = "";
  let arr = [];

  if (str.length < 3) {
    newStr = str;
  }

  for (let i = 2; i < str.length; i += 3) {
    arr.push(str.substr(i - 2, 3));

    if (str.length - i === 3 || str.length - i === 2) {
      arr.push(str.substr(i + 1));
    }
    if (str.length - i === 1) {
      break;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 3) {
      firstElem = arr[i][0];
      arr[i] = arr[i].substring(1) + firstElem;
    }
  }

  newStr = arr.join("");

  return newStr;
}

console.log(moveChar(string));
