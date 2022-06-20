// YOUR CODE BELOW
function stringify(callback) {
  function newFunc() {
    let result = callback();
    return String(result);
  }
  function callback() {
    return 232;
  }
  return newFunc;
}
