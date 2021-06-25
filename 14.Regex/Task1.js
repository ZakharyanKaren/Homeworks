let myRegExp = new RegExp(/^(\d{4}|\d{6})$/);

console.log(myRegExp.test("1234"));
console.log(myRegExp.test("45135"));
console.log(myRegExp.test("89abc1"));
console.log(myRegExp.test("900876"));
console.log(myRegExp.test(" 4983"));

const REGEXP = /<[^<>].*?>/g;
let str = '<> <a href="/"> <input type="radio" checked> <b>';
'<a href="/">', '<input type="radio" checked>', "<b>";
console.log(str.match(REGEXP));
