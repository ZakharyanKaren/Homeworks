// The input is object, which keys are student's names and values are array of their scores. Find the
// student with the best average score.

let obj = {
  John: [100, 90, 80],
  Bob: [100, 70, 80],
};

function getBestStudent(params) {
  let averageScore = 0;
  let bestStudent = "";

  for (let key in params) {
    let maxScore = params[key].reduce((acc, curr, i) => {
      return acc + curr;
    });

    if (maxScore / params[key].length > averageScore) {
      bestStudent = key;
      averageScore = maxScore / params[key].length;
    }
  }

  return bestStudent;
}

console.log(getBestStudent(obj));
