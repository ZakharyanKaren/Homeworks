// Given an array of strings and numbers. Print the number of integers and the number of strings in the
// array.

let arr = [1, 4, "i am a string", "456"];
let num = 0;
let str = 0;

for (let i = 0; i < arr.length; i++) {
  typeof arr[i] === "string" ? num++ : str++;
}

console.log("Numbers: " + num, "Strings: " + str);
