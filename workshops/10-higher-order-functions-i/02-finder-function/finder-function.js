// YOUR CODE BELOW
function finderFunction(arr, call) {
  for (i = 0; i < arr.length; i++) {
    debugger;
    let x = arr[i];
    let y = call(x);
    function isEven(num) {
      return !(num % 2);
    }
    if (y) {
      return i;
    }
  }
  return -1;
}
console.log(finderFunction(numbers, isEven)); // 3
console.log(finderFunction(odds, isEven));
