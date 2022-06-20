// YOUR CODE BELOW
let sum = 0;
function myForEach(arr, call) {
  let arr2 = [];
  debugger;
  for (i = 0; i < arr.length; i++) {
    let y = arr[i];
    call(y, i);
    function addToSum(num) {
      sum += num;
    }
  }
}
let nums = [1, 2, 3];

myForEach(nums, addToSum);

console.log(sum);
