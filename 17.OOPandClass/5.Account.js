const getUniqueId = () => Math.floor(Math.random() * 100);

class Account {
  constructor(name, balance) {
    this._id = getUniqueId();
    this._name = name;
    this._balance = balance;
  }
  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }
  get balance() {
    return this._balance;
  }
  set balance(balance) {
    if (typeof balance !== "number") {
      throw new Error("Enter valid number");
    }
    this._balance = balance;
  }

  credit(amount) {
    this._balance += amount;
    return this._balance;
  }

  debit(amount) {
    if (this._balance < amount) {
      throw new Error("Amount exceeded balance.");
    }
    this._balance -= amount;
    return this._balance;
  }

  transferTo(anotherAccount, amount) {
    if (this._balance < amount) {
      throw new Error("Amount exceeded balance.");
    }
    this._balance -= amount;
    anotherAccount.credit(amount);
    return this._balance;
  }

  static identifyAccounts(accountFirst, accountSecond) {
    return accountFirst.id === accountSecond.id;
  }

  toString() {
    return `${this._name}'s account balance is $${this._balance}`;
  }
}

let savingAcc = new Account("Saving account", 2000);
let cardAcc = new Account("Card account", 1000);
console.log(savingAcc); // Account { id: 0, _name: 'Saving account', _balance: 2000 }
console.log(cardAcc); // Account { id: 1, _name: 'Card account', _balance: 1000 }
console.log(savingAcc.balance); // 2000
console.log(savingAcc.credit(400)); // 2400
console.log(savingAcc.balance); // 2400
console.log(savingAcc.debit(1000)); // 1400
console.log(savingAcc.transferTo(cardAcc, 1000)); // 400
console.log(savingAcc.balance); // 400
console.log(cardAcc.balance); // 2000
let anotherAcc = savingAcc;
console.log(Account.identifyAccounts(savingAcc, anotherAcc)); // true
console.log(Account.identifyAccounts(savingAcc, cardAcc)); // false
console.log(savingAcc.toString()); // Saving account's account balance is $1400.
