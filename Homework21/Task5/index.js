const p = document.querySelector("p");
let wordArr = p.innerText.split(" ");

let newWordArr = wordArr.map((word) => {
  word = word.replace(/\?/g, "🤔");
  word = word.replace(/\!/g, "😲");
  return word;
});

p.innerHTML = newWordArr.join(" ");
