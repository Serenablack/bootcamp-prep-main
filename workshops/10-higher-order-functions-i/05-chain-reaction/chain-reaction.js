// YOUR CODE BELOW
function chainReaction(start, arr) {
  debugger;
  arr.forEach(function (ret) {
    return (start = ret(start));
  });

  return start;
}

chainReaction(0, [addTen, subtractFive, multiplyFive]); // => 25
chainReaction(0, [subtractFive, multiplyFive, addTen]);
