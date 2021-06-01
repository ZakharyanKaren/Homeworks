// Given a sentence with missing words and an array of words. Replace all ‘_ʼ in a sentence with the words
// from the array.

let str = "If at _ you donʼt _, try, try _.";
let arr = ["first", "succeed", "again"];

for (let i = 0; i < arr.length; i++) {
  str = str.replace("_", arr[i]);
}

console.log(str);
