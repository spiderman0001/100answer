function fib(n) {
  if (n === 1) return 1;
  if (n === 2) return 1;
  return fib(n - 1) + fib(n - 2)
}


function fib2(n) {
  let i = 1;
  let j = 1;
  let count = 1;
  while(count < n) {
    [i, j] = [i + j, i];
    count += 1;
  }
  return j;
}

function fib3(n) {
  let i = 1;
  let j = 1;
  let count = 1;
  const result = [i];
  while(count < n) {
    [i, j] = [i + j, i];
    count += 1;
    result.push(j)
  }
  return result;
}

function fib4(n) {
  if (n == 1) return [1];
  if (n == 2) return [1, 1];
  const fibn1 = fib4(n - 1);
  const fibn2 = fib4(n - 2);
  return [...fibn1, fibn1.slice(-1)[0] + fibn2.slice(-1)[0]];
}

console.log(fib4(10));
