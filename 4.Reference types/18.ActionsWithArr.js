// Given a sentence as a string. Split it according to space and comma and create an array consisting of the
// words of the array. The last word should not contain the last . or! .

let str = "Keep your friends close, but your enemies closer.";
let arr = str.split(/[ ,]+/);

let lastItem = arr[arr.length - 1];
let lastSymbol = lastItem[lastItem.length - 1];

if (lastSymbol === "." || lastSymbol === "!") {
  arr[arr.length - 1] = lastItem.substring(0, lastItem.length - 1);
}

console.log(arr);
