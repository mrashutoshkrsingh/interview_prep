const st = "Ashutosh Kumar Singh ";

String.prototype.mysplit = function (sep, limit) {
  const str = this;
  const ans = [];
  let temp = "";
  if (limit === undefined) {
    limit = str.length;
  }
  if (sep === "") return Array.from(str).slice(0, limit);
  for (let i = 0; i < str.length; i++) {
    if (limit === ans.length) break;
    if (str[i] !== sep) {
      temp += str[i];
    } else {
      ans.push(temp);
      temp = "";
    }
  }
  ans.push(temp);
  return ans;
};

console.log(st.split(" "));
console.log(st.mysplit(" "));
