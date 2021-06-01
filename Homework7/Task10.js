// Check whether string is palindrome, or not.

let string = "My age is 0, 0 si ega ym";

function isPalindromeFunc(string) {
  let isPalindrome = true;
  let str = string.toLocaleLowerCase().split(" ").join("");

  for (let i = 0; i < str.length / 2; i++) {
    const leftElem = str[i];
    const rightElem = str[str.length - 1 - i];

    if (leftElem !== rightElem) {
      isPalindrome = !isPalindrome;
      break;
    }
  }

  if (isPalindrome) {
    return "Is Palindrome";
  } else return "Is not palindrome";
}

console.log(isPalindromeFunc(string));
