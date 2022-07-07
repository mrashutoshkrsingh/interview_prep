function once(cb, context) {
  let result;
  console.log("once", cb);
  return function () {
    if (cb) {
      result = cb.apply(context, arguments);
      cb = null;
    }
    console.log(8, result);
    return result;
  };
}

let c = 0;
const fired = function () {
  console.log("Fired");
  return ++c;
};

const firedOnce = once(fired);

console.log(firedOnce());
console.log(firedOnce());

// console.log(firedOnce);

// firedOnce();
// firedOnce();
