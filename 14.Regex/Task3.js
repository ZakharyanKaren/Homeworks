// Complete the isPositive function below. It has one integer parameter a . If the value of a is positive, it must
// return the string YES. Otherwise, it must throw an Error according to the following rules:
// . If a is 0, throw an Error with message = Zero Error.
// . If a is negative, throw an Error with message = Negative Error.

let a = 0;

function isPositive(a) {
  try {
    if (a > 0) {
      return "YES";
    } else if (a === 0) {
      throw new RangeError("Zero Error");
    } else if (a < 0) {
      throw new RangeError("Negative Error");
    }
  } catch (error) {
    return error.message;
  }
}

console.log(isPositive(a));
