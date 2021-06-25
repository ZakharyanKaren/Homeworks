function factors(n, arr = []) {
  for (let i = arr[arr.length - 1] || 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      factors(n / i, [...arr, i]);
    }
  }
  arr.push(n);
  if (arr.length > 1) {
    console.log(arr);
  }
}
factors(16);