// Given a positive integer. Bring the last digit of the number to the beginning. Print the new number. If the
// last digit of the inserted number is 0, number remains the same.

let num = 1002;
let lastDigit = num % 10;

if (lastDigit === 0) {
  console.log(num);
} else {
  num = parseInt(num / 10);
  num = lastDigit + "" + num;

  console.log(num);
}
