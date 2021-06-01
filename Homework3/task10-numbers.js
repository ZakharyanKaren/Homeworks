function random(min, max) {
    return min + Math.random() * (max - min);
}

const value = random(5, 10);

console.log(value);