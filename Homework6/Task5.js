// Write a function, which receives a string, finds possible largest numbers in the string and returns their
// sum.

let string = "FwrtY-45KHL120mn10P";
let sum = 0;

function findAndSumNumbers(str) {
  let arr = [];
  let str2 = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "-") {
      for (let j = i + 1; j < str.length; j++) {
        if (!isNaN(+str[j])) {
          str2 += str[j];
        } else {
          i = j;
          break;
        }
      }
      arr.push("-" + str2);
      str2 = "";
    } else if (!isNaN(+str[i])) {
      while (!isNaN(+str[i])) {
        str2 += str[i];
        i++;
      }
      arr.push(str2);
      console.log(arr);
      str2 = "";
    }
  }

  for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
  }
  return sum;
}

console.log(findAndSumNumbers(string));