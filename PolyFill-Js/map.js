const arr = [1, 2, 3, 4, 5];

const newMap = function (cb) {
  const ans = [];
  for (let i = 0; i < this.length; i++) {
    const item = cb(this[i]);
    ans.push(item);
  }
  return ans;
};

Array.prototype.newMap = newMap;

console.log(arr.newMap((item) => item * 2));
console.log(arr.map((item) => item * 2));
