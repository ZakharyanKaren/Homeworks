// write a parseInt()

let str = "12.633";
let num = "";

if (typeof str === "number") {
  str = str.toString();
}

if (str[0] === "-") {
  num = "-";
  str = str.substring(1);
}

if (typeof str === "string") {
  if (isNaN(str[0])) {
    console.log("NaN");
  } else {
    for (let i = 0; i < str.length; i++) {
      if (!isNaN(+str[i])) {
        num += str[i];
      } else break;
    }
    console.log(num);
  }
} else {
  console.log("NaN");
}
