// YOUR CODE BELOW
function myUnshift(arr, val) {
  let narr = [];
  narr.push(val);
  for (i = 0; i < arr.length; i++) {
    narr.push(arr[i]);
  }
  return narr;
}
