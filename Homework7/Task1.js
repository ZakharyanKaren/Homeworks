// Create a function that implements partial sum

const addOne = sum(1);
const addTen = sum(10);

function sum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(addTen(10));
