// Given an array of strings. Find the strings with maximum and minimum lengths in array. Print the sum of
// theirlengths.

let arr = ["wish", "slightly", "understand", "longer", "unexpected", "heart"];
let minLength = 0,
  maxLength = 0;

if (arr[0].length > arr[1].length) {
  maxLength = arr[0].length;
  minLength = arr[1].length;
} else {
  maxLength = arr[1].length;
  minLength = arr[0].length;
}

if (arr.length === 2) {
  console.log(minLength + maxLength);
} else {
  for (let i = 2; i < arr.length; i++) {
    arr[i].length > maxLength ? (maxLength = arr[i].length) : "";
    arr[i].length < minLength ? (minLength = arr[i].length) : "";
  }
}

console.log(minLength + maxLength);
