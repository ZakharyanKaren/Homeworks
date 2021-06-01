// Find the sign of product of three numbers without multiplication operator. Display the specified sign.

let arrOfNum = [98, -98, -1, -5];
let sign = true;

if (arrOfNum.includes(0)) {
  console.log("unsigned");
} else {
  for (let i = 0; i < arrOfNum.length; i++) {
    arrOfNum[i] < 0 ? (sign = !sign) : "";
  }
}

sign ? console.log("+") : console.log("-");
