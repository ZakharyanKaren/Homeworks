// Write a function that implements filtering in array

const values = [null, true, {}, { name: "Elon" }, "", NaN, 0];
console.log(filterFalsyValues(values)); // [true, {}, { name: "Elon" }];
console.log(filterFalsyValues(["hello", 1233, []])); // ['hello', 1233, []];

function filterFalsyValues(val) {
  let newArr = [];

  for (let i = 0; i < val.length; i++) {
    const element = val[i];
    if (element) {
      newArr.push(element);
    }
  }
  return newArr;
}
