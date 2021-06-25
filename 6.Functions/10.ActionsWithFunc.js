// Write a function to find longest substring in a given a string without repeating characters except space
// character. If there are several,return the last one. Consider that all letters are lowercase.

let string =
  'there are no two words in the english language more harmful than "good job".';

function findLongestSubstring(str) {
  let res = [];

  for (let i = 0; i < str.length; i += 1) {
    const currentActiveLetter = str[i];
    let longestSubstring = currentActiveLetter;
    let maxCountWithoutSpace = 0;

    for (let j = i + 1; j < str.length; j += 1) {
      const nextLetter = str[j];
      const isSpace = nextLetter === " ";
      if (isSpace) {
        longestSubstring += nextLetter;
      } else if (longestSubstring.indexOf(nextLetter) !== -1) {
        j = longestSubstring.indexOf(nextLetter);
        break;
      } else {
        maxCountWithoutSpace += 1;
        longestSubstring += nextLetter;
      }
    }

    res.push(longestSubstring);
  }

  let longest = res.reduce(function (a, b) {
    return a.length > b.length ? a : b;
  });
  return longest;
}

console.log(findLongestSubstring(string));
