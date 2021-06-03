const subSum = (numArr, i = 0, sum = 0) => {
  if (i > numArr.length - 1) {
    console.log(sum);
    return;
  }
  subSum(numArr, i + 1, sum);
  subSum(numArr, i + 1, sum + numArr[i]);
};

console.log(subSum([2, 4, 5]));
