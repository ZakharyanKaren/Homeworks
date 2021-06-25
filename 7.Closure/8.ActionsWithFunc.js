// Determine if a word or phrase is an isogram. An isogram (also known as a "non pattern word") is a word
//or phrase without a repeating letter.

let word = "ab cd efg";

function ifIsogram(word) {
  let string = word.toLowerCase();
  let isIso = true;

  for (let i = 0; i < word.length; i++) {
    const element = word[i];

    string = string.substring(1);

    if (element === " ") {
      continue;
    }

    if (string.includes(element)) {
      console.log(element);
      isIso = !isIso;
    }
  }
  if (isIso) {
    return "Isogram";
  } else return "Is not isogram";
}

console.log(ifIsogram(word));
