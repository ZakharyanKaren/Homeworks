class Person {
  constructor(firstName, lastName, gender, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._gender = gender;
    this._age = age;
  }
  get firstName() {
    return this._firstName;
  }
  set firstName(firstName) {
    this._firstName = firstName;
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(lastName) {
    this._lastName = lastName;
  }
  get gender() {
    return this._gender;
  }
  set gender(gender) {
    this._gender = gender;
  }
  get age() {
    return this._age;
  }
  set age(age) {
    this._age = age;
  }
  toString() {
    return `${this._firstName} ${this._lastName}, ${this._age} years old`;
  }
}

class Student extends Person {
  constructor(firstName, lastName, gender, age, year, fee, allPrograms) {
    super(firstName, lastName, gender, age);
    this._year = year;
    this._fee = fee;
    this._programs = allPrograms;
  }
  get year() {
    return this._year;
  }
  set year(year) {
    this._year = year;
  }
  get fee() {
    return this._fee;
  }
  set fee(fee) {
    this._fee = fee;
  }
  get program() {
    return this._programs;
  }
  set program(program) {
    this._programs = program;
  }

  passExam(programName, grade) {
    let checker = true;
    for (const iterator of this._programs) {
      if (Object.values(iterator).indexOf(programName) > -1) {
        checker = !checker;
        iterator.grade = grade;
      }
    }
    if (checker) {
      this._programs.push({ programName, grade });
    }
    if (this.isAllPassed()) {
      this._year += 1;
    }
  }
  isAllPassed() {
    for (const iterator of this._programs) {
      if (iterator.grade < 50) {
        return false;
      }
    }
    return true;
  }
  toString() {
    return this.firstName;
  }
}

const allPrograms = [
  { programName: "math", grade: 10 },
  { programName: "english", grade: undefined },
];

const nameKaren = new Student(
  "Karen",
  "Zakharyan",
  "male",
  26,
  1,
  50000,
  allPrograms
);

console.log(nameKaren.isAllPassed());
nameKaren.passExam("physics", 60);
nameKaren.passExam("math", 60);
nameKaren.passExam("english", 60);
console.log(nameKaren.isAllPassed());
