let string = "Hello from earth";

function reverseString(s) {
  try {
    if (typeof s !== "string") {
      throw new TypeError("s.split is not a function");
    } else {
      s = s.split("").reverse().join("");
    }
  } catch (err) {
    return err.message;
  }
  return s;
}

console.log(reverseString(string));
