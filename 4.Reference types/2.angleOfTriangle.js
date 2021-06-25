// Given a number. Print “odd” if the number is odd and “even” if itʼs even.

let num = 101002;

if (num === 0) {
  console.log("even");
} else if (num >= 2) {
  if (num % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
} else {
  console.log("odd");
}
