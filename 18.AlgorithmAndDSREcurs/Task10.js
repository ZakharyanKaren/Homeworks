const addBrackets = (s, i = 0, newStr = "") => {
  if (s.length % 2 !== 0 && Math.ceil(s.length / 2) === i) {
    newStr += ")";
  }
  return i < s.length
    ? addBrackets(
        s,
        i + 1,
        (newStr += i < s.length / 2 ? "(" + s[i] : s[i] + ")")
      )
    : newStr;
};

console.log(addBrackets("carde"));
