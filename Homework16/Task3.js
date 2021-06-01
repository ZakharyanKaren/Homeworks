class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(anotherPerson) {
    let text = "";
    if (this.age > anotherPerson.age) {
      text = "younger than";
    } else if (this.age < anotherPerson.age) {
      text = "older than";
    } else text = "the same age as";
    return `${anotherPerson.name} is ${text} me`;
  }
}

const p1 = new Person("Samuel", 24);
const p2 = new Person("Joel", 36);
const p3 = new Person("Lily", 24);

console.log(p1.compareAge(p2)); // ➞ "Joel is older than me."
console.log(p2.compareAge(p1)); // ➞ "Samuel is younger than me."
console.log(p1.compareAge(p3)); // ➞ "Lily is the same age as me."
