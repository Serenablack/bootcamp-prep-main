// YOUR CODE BELOW
function callCount() {
  let count = 0;
  function newFunc() {
    return (count = count + 1);
  }
  return newFunc;
}
