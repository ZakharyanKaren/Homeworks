function myBind(thisFunc, context, ...args) {
  return () => {
    thisFunc.apply(context, args);
  };
}

function fn(...args) {
  console.log(`${this.name}, ${this.age}, ${args.join(" ")}`);
}

let obj = {
  name: "Karen",
  age: 26,
};

let boundedFunc = myBind(fn, obj, "Hello World", 5);
boundedFunc();
