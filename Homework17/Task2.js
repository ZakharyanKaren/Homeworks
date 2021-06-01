// First character of next word must match last character of previous word.
// The word must not have already been said.

class Shiritori {
  constructor() {
    this.words = [];
    this.game_over = false;
  }

  play(word) {
    if (this.words.length === 0) {
      this.words.push(word);
      return this.words;
    }

    let lastWord = this.words[this.words.length - 1];
    if (lastWord[lastWord.length - 1] !== word[0]) {
      this.game_over = true;
      return `game_over
Invalid! - ${word} should start with '${lastWord[lastWord.length - 1]}'`;
    } else if (this.words.includes(word)) {
      this.game_over = true;
      return `game_over
Invalid! - ${word} has already been said`;
    } else {
      this.words.push(word);
      return this.words;
    }
  }
  restart() {
    this.words = [];
    this.game_over = false;
    return `game restarted`;
  }
}

let shiritoriGame = new Shiritori();

console.log(shiritoriGame.play("game"));
console.log(shiritoriGame.play("evelyn"));
console.log(shiritoriGame.play("focusPocus"));
console.log(shiritoriGame.restart());
