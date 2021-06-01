let str = '$5000';

function extractCurrencyValue(str) {
    return str.slice(1);
}

const value = extractCurrencyValue(str);
console.log(value);