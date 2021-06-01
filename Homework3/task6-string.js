let str = 'Lorem ipsum dolor sit amet';
let maxLength = 12;

function truncate(str, maxLength) {
    if(str.length < maxLength) {
        return str;
    } else {
        str = str.slice(0, maxLength - 3) + '...';
        return str;
    }
}

const value = truncate(str, maxLength);
console.log(value);