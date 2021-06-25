// Create a CustomConsole class with following methods:
// log function that takes user arguments and returns them as a string,
// history function that takes an optional range as an argument,
// clearHistory function to remove the history memory.

// The log function has no limit of arguments.

class CustomConsole {
  constructor(name) {
    this.name = name;
    this.historyList = [];
  }

  log(value, ...args) {
    if (args.length === 0) {
      this.historyList.push(`${this.name}: ${JSON.stringify(value)}`);
      return `${this.name}: ${JSON.stringify(value)}`;
    } else {
      this.historyList.push(`${value} ${JSON.stringify(args)}`);
      return `${value} ${JSON.stringify(args)}`;
    }
  }

  history() {
    return this.historyList;
  }

  clearHistory() {
    return (this.historyList = []);
  }
}

const myConsole = new CustomConsole("Regular");
const fancyConsole = new CustomConsole("Fancy");
console.log(myConsole.log([0, 1, 2, 3])); // "Regular: [0,1,2,3]"
console.log(fancyConsole.log({ a: 1, b: 2 })); // "Fancy: {a:1, b:2}"
console.log(myConsole.log("ok:", 1, 2, 3)); // "ok : 1, 2, 3"
console.log(myConsole.history()); // ""
console.log(myConsole.clearHistory());
console.log(myConsole.history());
