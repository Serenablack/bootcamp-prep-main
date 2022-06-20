// YOUR CODE BELOW
function sumNums(num) {
  if (num < 1) {
    return num;
  } else {
    let result = num + sumNums(num - 1);
    return result;
  }
}
