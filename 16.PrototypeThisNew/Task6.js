let Person = function (name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];

  this.toString = () => {
    return `${this.name}, ${this.age}`;
  };

  this.eat = (food) => {
    this.stomach.push(food);
  };

  this.poop = () => {
    this.stomach = [];
  };
};

let Baby = function (name, age, favoriteToy) {
  Person.call(this, name, age);

  this.favoriteToy = favoriteToy;

  this.toPlay = () => {
    return `Playing with ${this.favoriteToy}`;
  };
};

Baby.prototype = Object.create(Person.prototype);

let babyAnnie = new Baby("Annie", 3, "barbie");

console.log(babyAnnie.toPlay());
