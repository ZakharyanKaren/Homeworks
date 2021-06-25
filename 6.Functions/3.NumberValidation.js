// Given a phone number. Write a function to clean it up, so it is valid. The rules are as follows:

let num = "+5123456789";

function cleanUpFunc(num) {
  if (num[0] === "+") {
    num = num.substring(1);
  }
  if (num.length !== 10 || num.includes("+")) {
    return "Bad number";
  } else return num;
}

console.log(cleanUpFunc(num));
