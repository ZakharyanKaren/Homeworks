// Write function that will zip arrays into object

let keys = ["a", "b", "c"];
let values = [1, 2];

function zipObject(keys, values) {
  return Object.assign(
    {},
    ...keys.map((n, index) => ({ [n]: values[index] ? values[index] : null }))
  );
}

console.log(zipObject(keys, values));
