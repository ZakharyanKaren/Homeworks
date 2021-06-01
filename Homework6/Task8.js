// Write a function that accepts a string(a sentence) as a parameter and finds the longest word within the
// string. If there are several words which are the longest ones, print the last word(words can be separated
// by space, comma or hyphen).

let string = "Which would be worse - to live as a monster, orto die as a good man?";

function longestWord(str) {
  let arr = str.split(", ").join(" ").split(" ");
  let maxLengthWord = "";
  let maxLength = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= maxLength) {
      maxLengthWord = arr[i];
      maxLength = arr[i].length;
    }
  }
  return maxLengthWord;
}

console.log(longestWord(string));
