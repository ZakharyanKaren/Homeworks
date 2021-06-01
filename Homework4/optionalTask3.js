// Takes two arrays and insert the second array in the middle of the first array. The first array always has
// two elements.

let firstArr = [
  [1, 2],
  [5, 6],
];
let secondArr = [[3, 4]];

for (let i = 0; i < secondArr.length; i++) {
  firstArr.splice(i + 1, 0, secondArr[i]);
}

console.log(firstArr);
