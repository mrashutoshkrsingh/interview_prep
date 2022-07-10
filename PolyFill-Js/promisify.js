// Promisification helps in dealing with callback-based APIs while keeping code consistent with promises.

// We could just wrap any function with new Promise() and not worry about it at all. But doing that when we have many functions would be redundant.

// How to make callback-based functions return a promise
// There are two ways to do it:

// Wrap the function in another function which returns a promise. It then resolves or rejects based on callback arguments.
// Promisification — We create a util/helper function promisify which will transform all error first callback-based APIs.

// Ref: https://www.freecodecamp.org/news/write-your-own-promisify-function-from-scratch/

const getSumAsync = (num1, num2, callback) => {
  if (!num1 || !num2) {
    return callback(new Error("Missing arguments"), null);
  }
  return callback(null, num1 + num2);
};
getSumAsync(1, 2, (err, result) => {
  if (err) {
    console.log("199 A", err);
  } else {
    console.log("199 B", result); // 2
  }
});

const { promisify } = require("util");

const getSumPromise = promisify(getSumAsync); // step 1

getSumPromise(1, 2) // step 2
  .then((result) => {
    console.log("199 C", result);
  })
  .catch((err) => {
    console.log("199 D", err);
  });

const myPromisify = function (fn) {
  return function (...args) {
    return new Promise((res, rej) => {
      fn(...args, (err, result) => {
        if (err) rej(err);
        res(result);
      });
    });
  };
};

const getSumPromise1 = myPromisify(getSumAsync);

getSumPromise1(1, 2) // step 2
  .then((result) => {
    console.log("199 E", result);
  })
  .catch((err) => {
    console.log("199 F", err);
  });
