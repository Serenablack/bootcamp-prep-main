// YOUR CODE BELOW
function evenAndOdd(arr) {
  let arr3 = [];
  let arr1 = [];
  let arr2 = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      arr1.push(arr[i]);
    } else {
      arr2.push(arr[i]);
    }
  }
  return (arr3 = [arr1, arr2]);
}
