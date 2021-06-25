function myApply(myFunc, context, arg) {
  myFunc.call(context, ...arg);
}

function fn(...args) {
  console.log(`${this.name}, ${this.age}`, args);
}

let obj = {
  name: "Karen",
  age: 26,
};

myApply(fn, obj, [1, 2, 3, 4, 5, 6]);
