class Calculator {
  add(firstNum, secondNum) {
    if (typeof firstNum === "number" && typeof secondNum === "number") {
      return firstNum + secondNum;
    } else {
      return console.log("Enter valid numbers");
    }
  }
  subtract(firstNum, secondNum) {
    if (typeof firstNum === "number" && typeof secondNum === "number") {
      return firstNum - secondNum;
    } else {
      return console.log("Enter valid numbers");
    }
  }
  multiply(firstNum, secondNum) {
    if (typeof firstNum === "number" && typeof secondNum === "number") {
      return firstNum * secondNum;
    } else {
      return console.log("Enter valid numbers");
    }
  }
  divide(firstNum, secondNum) {
    if (typeof firstNum === "number" && typeof secondNum === "number") {
      return firstNum / secondNum;
    } else {
      return console.log("Enter valid numbers");
    }
  }
}

const calculator = new Calculator();
console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 5));
console.log(calculator.divide(10, 5));
