console.log("Hi Svati");

let answer = 0;

// add

function add(a, b) {
  let result = a + b;

  return result;
}

answer = add(2, 4);
console.log(answer);

//multiply

function multiply(a, b) {
  let result = 0;
  let n = 0;
  while (n < 4) {
    n += 1;
    result = add(result, 6);
  }

  return result;
}
answer = multiply(6, 4);
console.log(answer);

// power/Exponetiation

function power(x, n) {
  let result = 0;
  let k = 0;
  while (x < 2) {
    k += 1;
    result = Math.pow(result, 8);
  }
  return result;
}
answer = Math.pow(2, 8);
console.log(answer);
answer = Math.pow(3, 4);
console.log(answer);

//factorial

function factorialize(num) {
  let result = num;
  if (num === 0) return 1;
  while (num > 1) {
    num--;
    result *= num;
  }
  return result;
}

num = factorialize(5);
console.log(num);
num = factorialize(4);
console.log(num);

// Fibonacci

function fibonacci(Number) {
  let n = 0;
  let nth = 1;
  let sum;
  let i = 2;
  while (i < Number) {
    sum = add(n, nth);
    n = nth;
    nth = sum;
    i += 1;
  }
  return nth;
}
num = fibonacci(8);
console.log(num);
