// Check if a numberis a multiple of 3, 5 or 7 and output the appropriate message.

let num = 123456;

if (num % 3 === 0 || num % 5 === 0 || num % 7 === 0) {
  if (num % 3 === 0 && num % 5 === 0 && num % 7 === 0) {
    console.log(num + " is a multiple of 3, 5 and 7");
  } else if (num % 3 === 0 && num % 5 === 0 && num % 7 !== 0) {
    console.log(num + " is a multiple of 3 and 5");
  } else if (num % 3 === 0 && num % 5 !== 0 && num % 7 === 0) {
    console.log(num + " is a multiple of 3 and 7");
  } else if (num % 3 !== 0 && num % 5 === 0 && num % 7 === 0) {
    console.log(num + " is a multiple of 5 and 7");
  } else if (num % 3 === 0 && num % 5 !== 0 && num % 7 !== 0) {
    console.log(num + " is a multiple of 3");
  } else if (num % 3 !== 0 && num % 5 === 0 && num % 7 !== 0) {
    console.log(num + " is a multiple of 5");
  } else if (num % 3 !== 0 && num % 5 !== 0 && num % 7 === 0) {
    console.log(num + " is a multiple of 7");
  }
} else {
  console.log(num + " is not a multiple of 3, 5 or 7");
}
