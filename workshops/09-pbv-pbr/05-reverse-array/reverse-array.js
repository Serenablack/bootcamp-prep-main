// YOUR CODE BELOW
function reverseArray(arr) {
  let arr2 = [];
  let leng = arr.length;
  debugger;
  for (i = 0; i < leng; i++) {
    arr2[i] = arr.shift();
  }
  while (arr2.length) {
    arr.push(arr2.pop());
  }
  return arr;
}
let myArray = [1, 2, 3, 4];
reverseArray(myArray);
console.log(myArray); // [4, 3, 2, 1]
