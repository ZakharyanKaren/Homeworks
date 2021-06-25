class Author {
  constructor(name, email, gender) {
    this._name = name;
    this._email = email;
    this._gender = gender;
  }

  get name() {
    return this._name;
  }
  set name(name) {
    if (typeof name !== "string") {
      throw new Error("Enter valid name");
    }
    return (this._name = name);
  }
  get gender() {
    return this._gender;
  }
  set gender(gender) {
    if (gender === "male" || gender === "female") {
      this._gender = gender;
    } else throw new Error("Enter valid gender!!!");
  }
  get email() {
    return this._email;
  }
  set email(email) {
    let validateEmail = (email) => {
      const emailLower = String(email).toLowerCase();
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(emailLower)) return emailLower;
    };

    if (validateEmail(email) === undefined) {
      throw new Error("Enter valid email");
    } else {
      this._email = validateEmail(email);
    }
  }

  toString() {
    if (this.gender === "male") {
      return `Mr. ${this._name}`;
    }
    return `Ms. ${this._name}`;
  }
}

class Book {
  constructor(title, author, price, quantity) {
    this._title = title;
    this._author = author;
    this._price = price;
    this._quantity = quantity;
  }

  get title() {
    return this._title;
  }
  set title(title) {
    if (typeof title !== "string") {
      throw new Error("Enter valid title");
    }
    return (this._title = title);
  }
  get author() {
    return this._author;
  }
  set author(author) {
    return (this._author = author);
  }
  get price() {
    return this._price;
  }
  set price(price) {
    return (this._price = price);
  }
  get quantity() {
    return this._quantity;
  }
  set quantity(quantity) {
    return (this._quantity = quantity);
  }

  toString() {
    return `The ${
      this._title
    } is written by ${this.author.toString()} and will cost ${this.price}`;
  }

  getProfit() {
    let num = this._price.replace(/\$/g, "");
    return num * this._quantity;
  }
}

let writer = new Author("K. Zakharyan", "Zakharyan.kar@gmail.com", "male");
let book = new Book("Game of Thrones", writer, "50$", "15");
writer.name = "Kaka";
console.log(writer.name);
console.log(writer.email);
book.author = writer;
console.log(book.author);
