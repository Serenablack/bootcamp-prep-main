// YOUR CODE BELOW
function onlyOdds(num) {
  let sum = 0;
  for (i = 0; i < num; i++) {
    if (i % 2 != 0) {
      sum += i;
    }
  }
  return sum;
}
onlyOdds(6); // => 9 (5 + 3 + 1)
