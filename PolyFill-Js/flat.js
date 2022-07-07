const arr = [1, 2, [3, 4, [5, [7, 8]]], 4];

function newFlat(depth) {
  const ans = [];
  function solve(arr, depth = 0) {
    arr.forEach((item) => {
      if (Array.isArray(item) && depth !== 0) {
        solve(item, depth - 1);
      } else {
        ans.push(item);
      }
    });
  }
  solve(this, depth);
  return ans;
}

Array.prototype.newFlat = newFlat;

console.log(arr.newFlat(2));
console.log(arr.flat(2));
