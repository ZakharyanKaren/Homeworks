// Enter a number. Reverse its first and last digits. Print the new number.

let num = 123456;

if (num < 10) {
  console.log(num);
} else if (num < 1000) {
  let numToStr = num.toString();
  let val = numToStr.split("").reverse().join("");
  num = Number(val);
  console.log(num);
} else {
  let lastDigit = num % 10; // last digit
  num = parseInt(num / 10); // remove last digit
  let numToStr = num.toString();
  let firstDigit = numToStr[0]; // first digit
  numToStr = numToStr.substring(1); // remove first digit

  num = lastDigit + "" + numToStr + "" + firstDigit;
  num = Number(num);
  console.log(num);
}
