// YOUR CODE BELOW
function myIncludes(arr, searchValue) {
  for (i = 0; i < arr.length; i++) {
    if (searchValue === arr[i]) return true;
  }
  return false;
}
myIncludes([10, 20, 30], 20); // => true
myIncludes(["apples", "bananas", "citrus"], "pears"); // => false
