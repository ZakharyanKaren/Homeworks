// Write function that will do reverse operation for Object.entries

let thisArr = [
  ["a", 1],
  ["b", 2],
];

function fromPairs(thisArr) {
  return Object.fromEntries(thisArr);
}

console.log(fromPairs(thisArr));
