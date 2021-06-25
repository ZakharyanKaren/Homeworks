// Create a function printAfter that calls its argument after printing hello world

const print = () => console.log("Elon Musk");

function printAfter(print) {
  console.log("hello, world");
  return print();
}

console.log(printAfter(print));

// 'hello, world'
// 'Elon Musk'
