// Write a program to check the validity of password input by users. Validation :

let pass = "Aaza1234566#";

pass.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,16}$/)
  ? console.log("Valid")
  : console.log("Invalid");
