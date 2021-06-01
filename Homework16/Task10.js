function myCall(myFunc, context, ...args) {
  let url = myFunc.bind(context, ...args);
  url();
}

function fn(...args) {
  console.log(`${this.name}, ${this.age}, ${args.join(" ")}`);
}

let obj = {
  name: "Karen",
  age: 26,
};

myCall(fn, obj, 1, 2, 3);
