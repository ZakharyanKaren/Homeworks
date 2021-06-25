// Write a function which remove elements with length <= 3

console.log(filterByLength(["kia", "tesla", "bmw", "mercedes"])); // ['tesla', 'mercedes']

function filterByLength(params) {
  for (let i = 0; i < params.length; i++) {
    const element = params[i];
    if (element.length <= 3) {
      params.splice(i, 1);
    }
  }
  return params;
}
