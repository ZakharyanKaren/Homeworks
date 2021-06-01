// Insert a number. Calculate product and sum of the digits of the number. If product is divisible by the sum,
// print the quotient, otherwise print the remainder.

let num = 455;

if (num === 0) {
  console.log("Cannot calculate");
} else if (num < 10) {
  console.log("Quotient is 1");
} else {
  let numToArr = num.toString().split("");
  let sumOfDigits = 0,
    productOfDigits = 1;

  for (let i = 0; i < numToArr.length; i++) {
    sumOfDigits += +numToArr[i];
    productOfDigits *= +numToArr[i];
  }

  if (productOfDigits === 0) {
    console.log("Cannot calculate");
  } else if (productOfDigits % sumOfDigits === 0) {
    console.log("Quotient is " + productOfDigits / sumOfDigits);
  } else {
    console.log("Remainder is " + (productOfDigits % sumOfDigits));
  }
}
