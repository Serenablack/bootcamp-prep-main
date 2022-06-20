// YOUR CODE BELOW
function reverseArray(arr) {
  debugger;
  if (arr.length === 1) {
    return arr.slice();
  } else {
    let arr2 = arr[arr.length - 1];
    let result = [];
    result.push(arr2);
    arr = arr.slice(0, -1);
    return result.concat(reverseArray(arr));
  }
}
let arr = [1, 2, 3, 4];
reverseArray(arr);
