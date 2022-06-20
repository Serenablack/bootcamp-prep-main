// YOUR CODE BELOW
function functionLogger(func, arg) {
  console.log("Function starting");
  function squareNum(x) {
    return x * x;
  }
  console.log("Function complete");
  return func(arg);
}
let squareOfFour = functionLogger(squareNum, 4);
// Function starting
// Function complete

console.log(squareOfFour); // 16
