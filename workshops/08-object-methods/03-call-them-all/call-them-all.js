// YOUR CODE BELOW
function callThemAll(obj, val) {
  let arr = [];

  for (key in obj) {
    let curr = obj[key];

    if (typeof curr === "function") {
      arr.push(curr(val));
    }
  }
  return arr;
}
let addsNums = {
  addTen: function (num) {
    return num + 10;
  },

  addTwenty: function (num) {
    return num + 20;
  },

  someProperty: "value",
};

callThemAll(addNums, 100); // => [110, 120]
