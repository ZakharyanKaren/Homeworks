function readNumber() {
    let a = +prompt('Enter a number', '0');

    if(isNaN(a)) {
        readNumber();
    } else if (a === '' || a === null) {
        return null;
    } else return a;
}

const value = readNumber();

console.log(value);