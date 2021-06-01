let studentLabs2 = [
  {
    student: "Blake",
    myCode: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Jessica",
    runLab: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Mya",
    runLab: function (num) {
      return num * num;
    },
  },
];

function gradeLabs(studentLabs) {
  for (let i = 0; i < studentLabs.length; i++) {
    let lab = studentLabs[i];

    try {
      if (lab.runLab === "undefined") {
        throw new TypeError("lab.runLab is not a function");
      }
      let result = lab.runLab(3);
      console.log(`${lab.student} code worked: ${result === 27}`);
    } catch (error) {
      return error.message;
    }
  }
}

console.log(gradeLabs(studentLabs2));
