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

const nameKaren = new Person("Karen", "27");
nameKaren.eat("meat");
nameKaren.eat("apple");
console.log(nameKaren.stomach);
nameKaren.poop();
console.log(nameKaren.stomach);
console.log(nameKaren.toString());
