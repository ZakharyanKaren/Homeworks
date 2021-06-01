// Given a word and a list of possible anagrams, select the correct sublist.

let word = "pencil";
let list = ["licnep", "circular", "pupil", "nilcpe", "leppnec"];

function correctSubList(word, list) {
  let correctSub = [];

  for (let i = 0; i < list.length; i++) {
    word = word.split("").sort().join(""); // word sorted and === ceilnp
    word.localeCompare(list[i].split("").sort().join("")) === 0
      ? correctSub.push(list[i])
      : "";
  }

  return correctSub;
}

console.log(correctSubList(word, list));