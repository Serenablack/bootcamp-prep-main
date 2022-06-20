// YOUR CODE BELOW
function partial(callback, a) {
  function newfunc(b) {
    let result = callback(a, b);
    return result;
  }
  return newfunc;
}
