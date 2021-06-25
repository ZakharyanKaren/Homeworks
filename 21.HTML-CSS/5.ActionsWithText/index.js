const p = document.querySelector("p");
let wordArr = p.innerText.split(" ");
let checker = true;

let withEmoji = wordArr.map((word) => {
  word = word.replace(/\?/g, "🤔");
  word = word.replace(/\!/g, "😲");
  return word;
});

let withoutEmoji = wordArr.map((word) => {
  word = word.replace("🤔", /\?/g);
  word = word.replace("😲", /\!/g);
  return word;
});

let timerId = setTimeout(function emoji(checker) {
  checker
    ? (p.innerHTML = withEmoji.join(" "))
    : (p.innerHTML = withoutEmoji.join(" "));
  timerId = setTimeout(emoji, 2000, !checker);
}, 2000);
