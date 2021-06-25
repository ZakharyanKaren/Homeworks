function randomInteger(min, max) {
    let val = min - 0.5 + Math.random() * (max + 1 - min);
    console.log(val)
    return Math.round(val);
}

const integer = randomInteger(1, 3);

console.log(integer);