// Write a function, which receives two numbers as arguments and finds all numbers between them such
// that each digit of the number is even. The numbers obtained should be printed in a comma-separated
// sequence on a single line.

let number1 = 0;
let number2 = 300;

function evenDigitsForNum1ToNum2(num1, num2) {
  let str = "";

  for (let i = num1; i <= num2; i++) {
    i = i.toString();

    let numberIsOdd = false;

    for (let j = 0; j < i.length; j++) {
      if (i[j] % 2 !== 0) {
        numberIsOdd = !numberIsOdd;
        break;
      }
    }
    if (numberIsOdd) {
      continue;
    } else {
      str += i + ", ";
    }
  }

  if (str === "") {
    return "Such numbers does not exist.";
  } else {
    str = str.substring(0, str.length - 2);
    return str;
  }
}

console.log(evenDigitsForNum1ToNum2(number1, number2));
