// all is true

const arr = [1, 2, 3];
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__ === Object.prototype);
console.log(arr.__proto__.__proto__.__proto__ === null);

const human = {
  isHuman: true,
};
console.log(human.__proto__ === Object.prototype);
console.log(human.__proto__.__proto__ === null);

const str = "";
console.log(str.__proto__ === String.prototype);
console.log(str.__proto__.__proto__ === Object.prototype);
console.log(str.__proto__.__proto__.__proto__ === null);

const user = {
  name: "Vrezh",
  __proto__: human,
};

console.log(user.__proto__ === human);
console.log(user.__proto__.__proto__ === Object.prototype);
console.log(user.__proto__.__proto__.__proto__ === null);

const car = {
  hasEngine: true,
};

console.log(car.__proto__ === Object.prototype);
console.log(car.__proto__.__proto__ === null);

const mercedes = {
  name: "mercedes",
  __proto__: car,
};

console.log(mercedes.__proto__ === car);
console.log(mercedes.__proto__.__proto__ === Object.prototype);
console.log(mercedes.__proto__.__proto__.__proto__ === null);

const bmw = Object.create(null);
console.log(bmw.__proto__ === undefined);

const emptyObj = {};
console.log(emptyObj.__proto__ === Object.prototype);
console.log(emptyObj.__proto__.__proto__ === null);

function fn() {
  console.log("hello, world!");
}
console.log(fn.__proto__ === Function.prototype);
console.log(fn.__proto__.__proto__ === Object.prototype);
console.log(fn.__proto__.__proto__.__proto__ === null);

const emptyWithoutProto = Object.create(null);
console.log(emptyWithoutProto.__proto__ === undefined);

const num = 12;
console.log(num.__proto__ === Number.prototype);
console.log(num.__proto__.__proto__ === Object.prototype);
console.log(num.__proto__.__proto__.__proto__ === null);

const isAuth = false;
console.log(isAuth.__proto__ === Boolean.prototype);
console.log(isAuth.__proto__.__proto__ === Object.prototype);
console.log(isAuth.__proto__.__proto__.__proto__ === null);
