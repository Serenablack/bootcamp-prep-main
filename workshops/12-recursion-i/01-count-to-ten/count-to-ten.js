// YOUR CODE BELOW
function countToTen(num) {
  debugger;
  if (num === 10) {
    console.log(num);
  } else {
    console.log(num);
    countToTen(num + 1);
  }
}
countToTen(4);
