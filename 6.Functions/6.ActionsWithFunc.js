// Write a function which receives two strings and removes appearances of the second string from the first
// one.

let string1 =
    "Yes, London. You know: fish, chips, cup ‘o tea, bad food, worse weather",
  string2 = "o";

function removeAppearances(str1, str2) {
  for (let i = 0; i < str1.length; i++) {
    str1 = str1.replace(str2, "");
  }
  str1 = str1.replace(/\s+/g, " ");

  return str1;
}

console.log(removeAppearances(string1, string2));
