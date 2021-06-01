console.log("" + 1 + 0); // '10' , string + number => string
console.log("" - 1 + 0); // '-1' , string + (math operation) + number => number
console.log(true + false); // 1 , true = 1, false = 0 , 1+0=1
console.log(6 / "3"); // '2' , number + (math operation) + string => number
console.log("2" * "3"); // '6' , string + (math operation) + string => number
console.log(4 + 5 + "px"); // 9px , number + string => string
console.log("$" + 4 + 5); // '$45' , string + number => string
console.log("4" - 2); // 2 , ...
console.log("4px" - 2); // NaN , if string includes not number symbols - cant convert to number. If cant convert to number, result will be NaN
console.log(7 / 0); // Infinity , divideing any number to 0, give result - Infinity
console.log(" -9 " + 5); // ' -9 5' , ...
console.log(" -9 " - 5); // -14 , role numeric convertations - string - Whitespaces from the start and end are removed. If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN.
console.log(null + 1); // 1 , null is 0, 0 + 1 = 1
console.log(undefined + 1); // NaN , undefined convertes to NaN