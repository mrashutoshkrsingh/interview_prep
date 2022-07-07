const arr = [1, 2, 3, 4, 5];

const getSum = (acc, cur) => {
  acc = acc + cur;
  return acc;
};

// Array.prototype.newReduce = function (fn, val) {
//   let res = val;
//   for (let i = 0; i < this.length; i++) {
//     res = fn(res, this[i]);
//   }
//   return res;
// };

Array.prototype.newReduce = function (cb, start) {
  let total = start;
  for (let item of this) {
    total = cb(total, item);
  }
  return total;
};
console.log(arr.newReduce(getSum, 0));
console.log(arr.reduce(getSum, 0));
