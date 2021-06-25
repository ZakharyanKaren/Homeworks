// Write function that will group by some rule

function groupBy(arr, rule) {
  let result = arr.reduce((acc, currValue) => {
    let key = rule(currValue);

    if (acc.hasOwnProperty(key)) {
      acc[key].push(currValue);
    } else {
      acc[key] = [currValue];
    }

    return acc;
  }, {});

  return result;
}
console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
console.log(groupBy(["one", "two", "three"], (i) => i.length));
