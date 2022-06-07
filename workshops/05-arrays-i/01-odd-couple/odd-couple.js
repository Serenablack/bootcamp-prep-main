// YOUR CODE BELOW

function oddCouple(ara) {
  let nara = [];
  let count = 0;
  for (i = 0; i < ara.length; i++) {
    if (ara[i] % 2 !== 0 && count < 2) {
      nara.push(ara[i]);
      count += 1;
    } else if (ara[i] % 2 !== 0 && count === 0) {
      return ara[i];
    }
  }
  return nara;
}
oddCouple([10, 15, 20]); // => [15]
oddCouple(2, 4, 6, 8);
