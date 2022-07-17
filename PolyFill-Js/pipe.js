// Pipe
// The concept of pipe is simple — it combines n functions. It’s a pipe flowing left-to-right, calling each function with the output of the last one.

const getName = (person) => person.name;

const uppercase = (string) => string.toUpperCase();

const name = uppercase(getName({ name: "Buckethead" }));

function pipe(...fns) {
  return function (x) {
    return fns.reduce((acc, cur) => {
      return cur(acc);
    }, x);
  };
}

pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, f) => f(v), x);

const name1 = pipe(getName, uppercase)({ name: "Buckethead" });

console.log(name, name1);
