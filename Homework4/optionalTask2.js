// Convert base-2 number to base-10

let num = "0101011";
let notValid = true;

for (let i = 0; i < num.length; i++) {
  const element = num[i];

  if (element !== "0" && element !== "1") {
    console.log("Enter valid 2-base number");
    notValid = !notValid;
    break;
  }
}
if (notValid) {
  num = parseInt(num, 2);

  console.log(num);
}
