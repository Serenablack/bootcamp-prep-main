// YOUR CODE BELOW
function veryOdd(arr) {
  let arr2 = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) arr2.push(arr[i]);
  }
  return arr2;
}
