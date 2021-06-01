// Insert a number. Print ‘yesʼ if the numberis prime, ‘noʼ otherwise.

let num = 401;
let isPrime = true;

if (num === 1) {
  console.log("1 is not prime or composite number.");
} else if (num > 1) {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log("Yes");
  } else {
    console.log("No");
  }
} else {
  console.log("The number is less than 1");
}
