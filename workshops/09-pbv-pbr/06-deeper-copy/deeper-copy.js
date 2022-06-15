// YOUR CODE BELOW
function deeperCopy(arr) {
  let arr2 = [];
  for (i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let sto = arr[i];
      arr2.push(sto);
    }
  }
  return arr;
}
