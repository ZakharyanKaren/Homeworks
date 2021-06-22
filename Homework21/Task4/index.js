const p = document.querySelector("p");
let wordArr = p.innerText.split(" ");

let newWordArr = wordArr.map((word) => {
  console.log(word);
  let zulalWord = word;
  while (!/[a-zA-Z]/.test(zulalWord[zulalWord.length - 1])) {
    zulalWord = zulalWord.slice(0, -1);
  }
  while (!/[a-zA-Z]/.test(zulalWord[0])) {
    zulalWord = zulalWord.slice(0, -1);
  }

  if (zulalWord.length > 8) {
    return `<span class='background-yellow'>${word}</span>`;
  }
  return word;
});

p.innerHTML = newWordArr.join(" ");
