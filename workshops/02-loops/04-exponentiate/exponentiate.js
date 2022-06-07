// YOUR CODE BELOW

function exponentiate(base, power) {
  let num = 1;
  if (base <= power) {
    for (i = 0; i < power; i++) {
      num = num * base;
    }
    return num;
  } else {
    return 1;
  }
}
exponentiate(2, 2); // => 4
exponentiate(3, 4);
