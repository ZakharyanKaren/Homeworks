const fib = (int) => (int > 2 ? fib(int - 2) + fib(int - 1) : 1);

console.log(fib(15));
