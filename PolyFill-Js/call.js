"use strict";
function printName() {
  console.log(this.name, arguments);
}

const obj = { name: "Ashutosh" };
const obj2 = { name: "Dhoni" };

Function.prototype.myCall = function (newThis, ...agrs) {
  this.apply(newThis, agrs);
};
Function.prototype.myCall1 = function (newThis, ...agrs) {
  newThis.func = this;
  newThis.func(...agrs);
};

printName.call(obj, [1, 2], 3);
printName.myCall(obj, [1, 2], 3);
printName.myCall1(obj, [1, 2], 3);
