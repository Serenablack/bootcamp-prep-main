// YOUR CODE BELOW
function arrayFlattener(arr) {
  let arr1 = [];
  for (i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      debugger;
      for (j = 0; j < arr[i].length; j++) {
        arr1.push(arr[i][j]);
      }
    } else {
      arr1.push(arr[i]);
    }
  }
  return arr1;
}
