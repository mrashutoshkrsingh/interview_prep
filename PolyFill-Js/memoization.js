function memoize(fn, context) {
  const result = {};
  return function (...args) {
    const str = JSON.stringify(args);
    if (!result[str]) {
      const res = fn.apply(this || context, args);
      result[str] = res;
      return res;
    } else {
      return result[str];
    }
  };
}

function bigFunc(n1, n2) {
  for (let i = 0; i <= 2000000000; i++) {}
  return n1 * n2;
}

const memoBig = memoize(bigFunc);

console.log(bigFunc(5, 6));
console.log(memoBig(5, 6));
console.log(memoBig(5, 6));
console.log(memoBig(7, 6));
console.log(memoBig(7, 7));

console.log(memoBig(7, 6));
